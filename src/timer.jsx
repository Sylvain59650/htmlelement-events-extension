// var _timersOne = [];
// var _timers = [];

// var _setUnload = false;

// function destroyTimers() {
//   alert("clear " + _timers.length + " " + _timersOne.length);
//   for (let i = 0; i < _timers.length; i++) {
//     clearTimeout(_timers[i]);
//   }
//   for (let i = 0; i < _timersOne.length; i++) {
//     clearTimeout(_timersOne[i]);
//   }
// }



// window.timerOne = function(fn, ms) {
//   if (!_setUnload) {
//     _setUnload = true;
//     window.addEventListener("unload", () => { destroyTimers(); });
//   }
//   _timersOne.push(window.setTimeout(fn, ms));
// }

// window.timer = function(fn, ms) {
//   if (!_setUnload) {
//     _setUnload = true;
//     window.addEventListener("unload", () => { destroyTimers(); });
//   }
//   _timers.push(window.setInterval(fn, ms));
// }