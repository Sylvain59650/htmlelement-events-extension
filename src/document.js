document.on = document.addEventListener;
document.off = document.removeEventListener;

if (typeof htev === "undefined") { var htev = {} }

htev.eventFuture = function(eventName, targets, fn, options) {
  var nodes = document.querySelectorAll(targets);
  if (nodes) {
    nodes.on(eventName, fn, options);
  }
}

document.trigger = function(eventNames, targets, fn, options) {
  var evts = eventNames.split(" ");
  for (let i = 0; i < evts.length; i++) {
    let evt = evts[i];
    var fnn = function() { htev.eventFuture(evt, targets, fn, options) };
    document.on(evt, fnn);
  }
}

document.trigger2 = function(eventName, targets, detail) {
  var myEvent = new CustomEvent(eventName, { detail: detail });
  var nodes = document.querySelectorAll(targets);
  for (let i = 0; i < nodes.length; i++) {
    let n = nodes[i];
    n.dispatchEvent(myEvent);
  }
}