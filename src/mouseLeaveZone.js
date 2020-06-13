// /* eslint-disable */
// if (typeof htev === "undefined") { var htev = {} }

// htev.registerOnBeforeLeave = function(fn) {
//   if (!window.isDef(fn)) {
//     throw TypeError("argument exception");
//   }

//   function checkMove(){
//     var x = event.clientX;
//     var y = event.clientY;        
//     if (x<10 
//         || y <= 10
//         || y>window.innerHeight-10
//         || x>window.innerWidth-10){
//             debugger;
//             fn();
//             document.removeEventListener("mousemove",checkMove);        
//     }
//   }

//   window.on("mouvemove", checkMove);
// }

