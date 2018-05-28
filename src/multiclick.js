/* eslint-disable */
if (typeof htev === "undefined") { var htev = {} }

htev.registerMulticlick = function(elem, fn, option) {
  let timer = 0;
  let counter = 0;

  function reset() {
    counter = 0;
  }
  elem.on("click", function(e) {
    if (counter >= 2) {
      fn(e);
      counter = 0;
    }
    counter++;
    timer = window.setTimeout(reset, 3000);
  });
}