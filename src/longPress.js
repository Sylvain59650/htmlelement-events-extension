if (typeof htev === "undefined") { var htev = {} }


htev.registerLongMousedown = function(elem, fn, option) {
  if (!window.isDef(fn)) {
    throw TypeError("argument exception");
  }
  let timer = 0;
  elem.on("mousedown", function(e) {
    var cb = function() {
      fn(e);
    }
    timer = window.setTimeout(cb, 500);
  });

  elem.on("mouseup", function() {
    window.clearTimeout(timer);
  });
}

htev.registerLongKeydown = function(elem, fn, option) {
  if (!window.isDef(fn)) {
    throw TypeError("argument exception");
  }
  let timer = 0;
  let fired = false;
  elem.on("keydown", function(e) {
    var cb = function() {
      if (!fired) {
        fn(e);
        fired = true;
      }
    }
    timer = window.setTimeout(cb, 500);
  });

  elem.on("keyup", function() {
    window.clearTimeout(timer);
    timer = 0;
    fired = false;
  });
}