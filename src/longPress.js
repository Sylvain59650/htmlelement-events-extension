;
(function() {

  function registerLongMousedown(elem, fn) {
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

  function registerLongKeydown(elem, fn) {
    let timer = 0;
    elem.on("keydown", function(e) {
      var cb = function() {
        fn(e);
      }
      timer = window.setTimeout(cb, 500);
    });

    elem.on("keyup", function() {
      window.clearTimeout(timer);
    });
  }






});