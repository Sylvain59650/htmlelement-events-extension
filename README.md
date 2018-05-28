# htmlelement-events-extension

<div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/htmlelement-events-extension.png?branch=master)](https://travis-ci.org/Sylvain59650/htmlelement-events-extension)
[![version](https://img.shields.io/npm/v/htmlelement-events-extension.svg)](https://www.npmjs.com/package/htmlelement-events-extension)
[![package](https://img.shields.io/github/package-json/v/Sylvain59650/htmlelement-events-extension.svg)](https://github.com/Sylvain59650/htmlelement-events-extension)
![dependencies](https://img.shields.io/david/Sylvain59650/htmlelement-events-extension.svg)
![minified](https://img.shields.io/bundlephobia/min/htmlelement-events-extension.svg)
![linter](https://img.shields.io/badge/eslint-ok-blue.svg)
[![tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)](https://sylvain59650.github.io/htmlelement-events-extension/)
![license](https://img.shields.io/npm/l/htmlelement-events-extension.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/htmlelement-events-extension.svg)](http://hits.dwyl.com/Sylvain59650/htmlelement-events-extension)
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

 
    <script src="node_modules/htmlelement-events-extension/distrib/htmlelement-events-extension.min.js"></script>



# Availables Operations

## on HTMLElement, window & document
    - on ~ addEventListener
    - off ~ removeEventListener
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
    - fireEvent  : fire custom event with details,  this event can also be listened with method document.on

example

        function traceDetail(ev) {
            console.log(ev.detail);
        }
        document.on("custom", traceDetail);

        document.fireEvent("custom",{a:1,b:2});

        => {a:1,b:2}

# Specials EventNames
  special event name can be used with <code>on</code> and <code>off</code> method

    - longmousedown : call when the mouse stays pressed for a while
    - longkeydown : call when one key stays pressed for a while
    - nocontextmenu : active/deactivate context menu
    - clickoutside : click outside a element

# usage

    <body>
    <style>
        input {
        width: 350px
        }
    </style>
    <input id="t1" type="text" placeholder="register keydown multiple times" />
    <input id="t3" type="text" placeholder="register keydown only once" />
    <input id="t4" type="text" placeholder="register keydown keyup" />
    <input id="t5" type="text" placeholder="register keydown keyup puis unregister only keydown" />
    <button type="button" id="btn">Clear</button>

    <div id="debug"></div>
    <script src="../distrib/htmlElement-events.min.js"></script>
    <script>
        function trace() {
        console.log(new Date());
        document.querySelector("#debug").innerHTML += new Date() + "<br/>";
        }

        document.querySelector("#btn").on("click", function() {
        document.querySelector("#debug").innerHTML = "";
        });

        document.querySelector("#t1").on("keydown", trace, {
        once: false
        });


        document.querySelector("#t3").on("keydown", trace, {
        once: true
        });

        document.querySelector("#t4").on("keydown keyup", trace);

        document.querySelector("#t5").on("keydown keyup", trace);

        document.querySelector("#t5").off("keydown", trace);
    </script>
    </body>

**Note: tests passing with Chrome, Firefox, IE11**