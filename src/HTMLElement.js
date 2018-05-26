/* global getEventListeners registerLongMousedown registerLongKeydown registerClickOutside disableContextMenu*/
const specialEvents = ["longmousedown", "longkeydown", "nocontextmenu", "clickoutside"];

window.registerEvent = function(elem, evtName, fn, option) {
  if (evtName === "longmousedown") {
    registerLongMousedown(elem, fn);
  } else if (evtName === "longkeydown") {
    registerLongKeydown(elem, fn);
  } else if (evtName === "nocontextmenu") {
    elem.oncontextmenu = disableContextMenu;
  } else if (evtName === "clickoutside") {
    registerClickOutside(elem, fn, option || false);
  } else {
    elem.addEventListener(evtName, fn, option || false);
  }
}

window.unregisterEvent = function(elem, evtName, fn) {
  if (evtName === "nocontextmenu") {
    elem.oncontextmenu = null;
  } else if (evtName === "clickoutside" && document.removeEventListener) {
    document.removeEventListener("click", fn);
  } else {
    if (window.isDef(fn)) {
      elem.removeEventListener(evtName, fn, false);
    } else {
      var events = getEventListeners(elem);
      if (window.isDef(events) && window.isDef(events[evtName])) {
        for (let j = 0; j < events[evtName].length; j++) {
          let e = events[evtName][j];
          elem.removeEventListener(evtName, e.listener);
        }
      }
    }
  }
}

HTMLElement.prototype.on = function(evtName, fn, option) {
  let evts = evtName.split(" ");
  let cb = fn;
  for (let i = 0; i < evts.length; i++) {
    let evt = evts[i];
    if (this.addEventListener) {
      if (option && option.once) {
        if (!!document.documentMode || specialEvents.indexOf(evtName) >= 0) {
          var self = this;
          fn.removed = false;
          var oneCall = function() {
            if (!fn.removed) {
              fn(event);
              fn.removed = true;
            }
            self.off(evt, oneCall);
          }
          cb = oneCall;
        }
      }
      window.registerEvent(this, evt, cb, option || false);

    } else if (this.attachEvent) {
      this.attachEvent("on" + evt, fn);
    }
  }
}

HTMLElement.prototype.off = function(evtNames, fn) {
  let evts = evtNames.split(" ");
  for (let i = 0; i < evts.length; i++) {
    let evt = evts[i];
    if (this.removeEventListener) {
      window.unregisterEvent(this, evt, fn);
    } else if (this.detachEvent) {
      this.detachEvent("on" + evt, fn);
    }
  }
}