/* eslint-disable */
if (typeof htev === "undefined") { var htev = {} }

function isSubElement(parent, item) {
  var it = item;
  while (it.parentNode !== null && it !== parent) {
    it = it.parentNode;
  }
  return (it === parent);
}

htev.__clickOutside = function(elem, fn, option, e) {
  if (elem !== e.target) {
    if (isSubElement(elem, e.target)) {
      e.stopImmediatePropagation();
      return;
    }
    if (window.isDef(fn)) {
      fn(e);
    }
  }
}

htev.registerClickOutside = function(elem, fn, option) {
  if (window.isDef(event)) { event.stopImmediatePropagation(); }
  option.target = elem;
  document.body.on("click", htev.__clickOutside.bind(event, elem, fn, option), option);
}

htev.unregisterClickOutside = function(elem) {
  var events = document.body.getEventListeners("click");
  if (window.isDef(events)) {
    for (let j = 0; j < events.length; j++) {
      let e = events[j];
      if ((!isDef(e.target) || e.target === document.body)) {
        document.body.removeEventListener("click", e.listener);
      }
    }
  }
}