function disableContextMenu(ev) {
  ev.stopImmediatePropagation();
  ev.cancelBubble = true;
  return false;
}

document.NoContextMenu = function() {
  document.oncontextmenu = disableContextMenu;
}

HTMLElement.prototype.NoContextMenu = function() {
  this.addEventListener("contextmenu", disableContextMenu);
}