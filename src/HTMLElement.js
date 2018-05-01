HTMLElement.prototype.on = function(evtName, fn, useCapture) {
  if (this.addEventListener) {
    this.addEventListener(evtName, fn, useCapture || false);
  } else if (this.attachEvent) {
    this.attachEvent("on" + evtName, fn);
  }
}


HTMLElement.prototype.off = function(eventName, eventHandler) {
  if (this.removeEventListener) {
    this.removeEventListener(eventName, eventHandler, false)
  } else if (this.detachEvent) {
    this.detachEvent("on" + eventName, eventHandler)
  }
}