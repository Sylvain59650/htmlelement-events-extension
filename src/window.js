window.on = window.addEventListener;

window.off = window.removeEventListener;

function onBeforeLeave(fn,delay){
  if (!window.isDef(fn)) {
    throw TypeError("argument exception");
  }
  if (typeof delay == "undefined" || delay<1000) {
    delay=3500;
  }
  let initied=false;
  function checkMove(){
    let x = event.clientX;
    let y = event.clientY;        
    if (initied && (x<10 
        || y <= 10
        || y>window.innerHeight-10
        || x>window.innerWidth-10)){
          window.removeEventListener("mousemove",checkMove);        
            fn();
    }
    else if (!initied) {
      initied=true;
    }
  }

  function detectLeave(){
    window.on("mousemove", checkMove);
  }

  window.setTimeout(detectLeave, delay);  
}



window.isDef = function(obj) {
  return (obj !== null && typeof obj !== "undefined");
}

;
(function() {
  if (typeof window.CustomEvent === "function") { return false; }

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();