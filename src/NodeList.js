NodeList.prototype.on = function(evtName, fn, option) {
  for (var item of this) {
    item.on(evtName, fn, option);
  }
}

NodeList.prototype.off = function(evtName, fn) {
  for (var item of this) {
    item.off(evtName, fn);
  }
}