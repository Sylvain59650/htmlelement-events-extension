NodeList.prototype.on = function(evtName, fn, option) {
  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    item.on(evtName, fn, option);
  }
}

NodeList.prototype.off = function(evtName, fn) {
  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    item.off(evtName, fn);
  }
}