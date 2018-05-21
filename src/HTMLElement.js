/* global getEventListeners registerLongMousedown registerLongKeydown disableContextMenu*/

window.registerEvent = function(elem, evtName, fn, option) {
  if (evtName === "longmousedown") {
    registerLongMousedown(elem, fn);
  } else if (evtName === "longkeydown") {
    registerLongKeydown(elem, fn);
  } else if (evtName === "nocontextmenu") {
    elem.oncontextmenu = disableContextMenu;
  } else {
    elem.addEventListener(evtName, fn, option || false);
  }
}

window.unregisterEvent = function(elem, evtName, fn) {
  if (evtName === "nocontextmenu") {
    elem.oncontextmenu = null;
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
      if (!!document.documentMode && option && option.once) {
        var self = this;
        fn.removed = false;
        var oneCall = function() {
          if (!fn.removed) {
            fn();
            fn.removed = true;
            self.off(evt, oneCall);
          }
        }
        cb = oneCall;
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