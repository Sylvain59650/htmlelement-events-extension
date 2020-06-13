/* eslint-disable */
if (typeof htev === "undefined") { var htev = {} }

function isSubElement(parent, item) {
  var it = item;
  while (it != null && it.parentNode !== null && it !== parent) {
    it = it.parentNode;
  }
  return (it === parent);
}

htev.__clickOutside = function(event, elem, fn, option) {
  if (elem !== event.target) {
    if (isSubElement(elem, event.target)) {
      event.stopImmediatePropagation();
      return;
    }
    if (window.isDef(fn)) {
      fn(event);
    }
  }
}

htev.registerClickOutside = function(elem, fn, option) {
  event = event || Event;
  // if (window.isDef(event)) { event.stopImmediatePropagation(); } else {
  //   event = {};
  // }
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