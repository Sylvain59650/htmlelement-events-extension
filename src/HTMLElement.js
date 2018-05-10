HTMLElement.prototype.on = function(evtName, fn, option) {
  let evts = evtName.split(" ");
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
        this.addEventListener(evt, oneCall, option || false);
      } else {
        this.addEventListener(evt, fn, option || false);
      }
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
      this.removeEventListener(evt, fn, false);
    } else if (this.detachEvent) {
      this.detachEvent("on" + evt, fn);
    }
  }
}