/* eslint-disable */

function isSubElement(parent, item) {
  var it = item;
  while (it.parentNode !== null && it !== parent) {
    it = it.parentNode;
  }
  return (it === parent);
}

function __clickOutside(e, elem, fn, option) {
  if (elem !== e.target) {
    if (isSubElement(elem, e.target)) {
      e.stopImmediatePropagation();
      return;
    }
    fn(e);
  }
}

function registerClickOutside(elem, fn, option) {
  event.stopImmediatePropagation();
  document.on("click", function(e) {
    __clickOutside(e, elem, fn, option);
  });
}