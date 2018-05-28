window.ListenerTracker = {
  isActive: false,
  listeners: [],

  init: function() {
    if (!window.ListenerTrackerisActive) {
      window.ListenerTracker._super = {
        "addEventListener": HTMLElement.prototype.addEventListener,
        "removeEventListener": HTMLElement.prototype.removeEventListener
      };
    }
    window.ListenerTrackerisActive = true;
  }
}

window.ListenerTracker.init();

Element.prototype.addEventListener = function(type, fn, option) {
  window.ListenerTracker._super.addEventListener.apply(this, arguments);
  window.ListenerTracker.listeners.push({
    type: type,
    listener: fn,
    capture: (option && option.capture) || false,
    once: (option && option.once) || false,
    passive: (option && option.passive) || false,
    target: this
  });
}

Element.prototype.removeEventListener = function(type, fn) {
  window.ListenerTracker._super.removeEventListener.apply(this, arguments);
  var index = -1;
  for (let i = 0; i < window.ListenerTracker.listeners.length; i++) {
    let li = window.ListenerTracker.listeners[i];
    if (li.type === type && li.target === this && (!window.isDef(li.fn) || li.fn === fn)) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    window.ListenerTracker.listeners.splice(index, 1);
  }
}

Element.prototype.getEventListeners = function(type) {
  var lis = [];
  for (let i = 0; i < window.ListenerTracker.listeners.length; i++) {
    var li = window.ListenerTracker.listeners[i];
    if (li.target === this && (!window.isDef(type) || li.type === type)) {
      lis.push(li);
    }
  }
  return lis;
};