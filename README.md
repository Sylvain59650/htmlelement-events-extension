# htmlelement-events-extension

<div style="display:inline">
    <a target="_blank" title="build" href="https://travis-ci.org/Sylvain59650/htmlelement-events-extension"><img src="https://travis-ci.org/Sylvain59650/htmlelement-events-extension.png?branch=master" /></a>
    <a target="_blank" title="version" href="https://www.npmjs.com/package/htmlelement-events-extension"><img src="https://img.shields.io/npm/v/htmlelement-events-extension.svg" /></a>
    <a target="_blank" title="package" href="https://github.com/Sylvain59650/htmlelement-events-extension"><img src="https://img.shields.io/github/package-json/v/Sylvain59650/htmlelement-events-extension.svg" /></a>
    <a target="_blank" title="dependencies" href="https://david-dm.org/Sylvain59650/htmlelement-events-extension"><img src="https://img.shields.io/david/Sylvain59650/htmlelement-events-extension.svg" /></a>
    <a target="_blank" title="dependencies graph" href="http://npm.anvaka.com/#/view/2d/htmlelement-events-extension"><img src="https://img.shields.io/badge/dependencies-graph-blue.svg" /></a>
    <img src="https://img.shields.io/bundlephobia/min/htmlelement-events-extension.svg" />
    <img src="https://img.shields.io/badge/eslint-ok-blue.svg" />
    <a target="_blank" title="tests" href="https://sylvain59650.github.io/htmlelement-events-extension/"><img src="https://img.shields.io/badge/tests-passing-brightgreen.svg" /></a>
    <a target="_blank" title="downloads" href="https://www.jsdelivr.com/package/npm/htmlelement-events-extension"><img src="https://data.jsdelivr.com/v1/package/npm/htmlelement-events-extension/badge" /></a>
    <a target="_blank" title="cdn" href="https://cdn.jsdelivr.net/npm/htmlelement-events-extension/distrib/htmlelement-events-extension.min.js"><img src="https://img.shields.io/badge/cdn-jsdeliv-black.svg" /></a>
    <img src="https://img.shields.io/npm/l/htmlelement-events-extension.svg" />
    <img src="https://hits.dwyl.com/Sylvain59650/htmlelement-events-extension.svg" />
  </div>

    easy add/remove event on html elements

 <div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > htmlelement-events-extension](https://github.com/Sylvain59650/htmlelement-events-extension/tree/master/README.md)
</div>


## Installation

    npm install htmlelement-events-extension --save

or

    yarn add htmlelement-events-extension --save


## prerequisites

### for browser

 ```html
    <script src="node_modules/htmlelement-events-extension/distrib/htmlelement-events-extension.min.js"></script>
```


# Availables Operations

## on HTMLElement, window & document
    - on ~ addEventListener
    - off ~ removeEventListener
    - trigger ~dispatchEvent
    - NoContextMenu() disabled contextMenu on HTMLElement

# HTMLElement.on

    HTMLElement.on(eventNames,fn,option)

    string eventNames:  events names know like keydown, mousedown, click ...
                        you can put several events name separed by space
                        don't prefix by word "on"

    function fn: callback to call

    object option : object with
            {
                once: true,
                passive: true,
                capture: true
             }


             once => true, the event can only be called once, polyfill for IE 

# HTMLElement.off

    HTMLElement.on(eventNames,fn)

    string eventNames:  events names know like keydown, mousedown, click ...
                        you can put several events name separed by space
                        don't prefix by word "on"

    function fn: callback to uninstall
                if fn is omit, uninstall all callbacks according to eventNames

# NodeList.on, NodeList.off
   The API can set or unset multiples events on multiples HTMLElements with one instruction

example

        document.querySelectorAll("input").off("keydown keyup",trace);


# document
    - trigger  : fire custom event with details,  this event can also be listened with method document.on

example
```html
        function traceDetail(ev) {
            console.log(ev.detail);
        }
        document.on("custom", traceDetail);

        document.trigger("custom",{a:1,b:2});

        => {a:1,b:2}
```

# Specials EventNames
  special event name can be used with <code>on</code> and <code>off</code> method

    - longmousedown : event fired when the mouse stays pressed for a while
    - longkeydown : event fired when one key stays pressed for a while
    - nocontextmenu : active/deactivate context menu
    - clickoutside : event fired when user clicks outside a element
    - multiclick : event fired when user clicks 3 times quickly on a element

# usage

See [Demo](https://sylvain59650.github.io/htmlelement-events-extension/)
    
**Note: tests passing with Chrome, Firefox, IE11**