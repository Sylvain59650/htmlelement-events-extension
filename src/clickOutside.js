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
    fn(e);
  }
}

htev.registerClickOutside = function(elem, fn, option) {
  if (event) { event.stopImmediatePropagation(); }
  // document.on("click", function(e) {
  //   htev.__clickOutside(e, elem, fn, option);
  // });
  option = Object.assign({}, option, { target: elem });
  document.body.on("click", htev.__clickOutside.bind(event, elem, fn, option));
}

htev.unregisterClickOutside = function(elem) {
  var evtName = "click";
  var events = document.body.getEventListeners(document);
  debugger;
  if (window.isDef(events)) {
    for (let j = 0; j < events.length; j++) {
      let e = events[j];
      document.removeEventListener(evtName, e.listener);
    }
  }
}