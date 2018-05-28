/* eslint-disable */
if (typeof htev === "undefined") { var htev = {} }

function isSubElement(parent, item) {
  var it = item;
  while (it.parentNode !== null && it !== parent) {
    it = it.parentNode;
  }
  return (it === parent);
}

htev.__clickOutside = function(e, elem, fn, option) {
  if (elem !== e.target) {
    if (isSubElement(elem, e.target)) {
      e.stopImmediatePropagation();
      return;
    }
    fn(e);
  }
}

htev.registerClickOutside = function(elem, fn, option) {
  event.stopImmediatePropagation();
  document.on("click", function(e) {
    htev.__clickOutside(e, elem, fn, option);
  });
}