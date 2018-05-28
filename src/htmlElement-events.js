/* global getEventListeners registerLongMousedown registerLongKeydown registerClickOutside disableContextMenu registerMulticlick htev*/
if (typeof htev === "undefined") { var htev = {} }

const specialEvents = ["longmousedown", "longkeydown", "nocontextmenu", "clickoutside", "multiclick"];

htev.registerEvent = function(elem, evtName, fn, option) {
  if (evtName === "longmousedown") {
    htev.registerLongMousedown(elem, fn);
  } else if (evtName === "longkeydown") {
    htev.registerLongKeydown(elem, fn);
  } else if (evtName === "nocontextmenu") {
    elem.oncontextmenu = disableContextMenu;
  } else if (evtName === "clickoutside") {
    htev.registerClickOutside(elem, fn, option || false);
  } else if (evtName === "multiclick") {
    htev.registerMulticlick(elem, fn, option || false);
  } else {
    elem.addEventListener(evtName, fn, option || false);
  }
}

htev.unregisterEvent = function(elem, evtName, fn) {
  function unregister(elem, evtName, fn) {
    if (window.isDef(fn)) {
      elem.removeEventListener(evtName, fn, false);
    } else {
      var events = window.getEventListeners(elem);
      if (window.isDef(events) && window.isDef(events[evtName])) {
        for (let j = 0; j < events[evtName].length; j++) {
          let e = events[evtName][j];
          elem.removeEventListener(evtName, e.listener);
        }
      }
    }
  }
  if (evtName === "nocontextmenu") {
    elem.oncontextmenu = null;
  } else if (evtName === "clickoutside" && document.removeEventListener) {
    htev.unregisterClickOutside(elem);
  } else {
    unregister(elem, evtName, fn);
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
      htev.registerEvent(this, evt, cb, option || false);

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
      htev.unregisterEvent(this, evt, fn);
    } else if (this.detachEvent) {
      this.detachEvent("on" + evt, fn);
    }
  }
}