# htmlelement-events-extension

<div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/htmlelement-events-extension.png?branch=master)](https://travis-ci.org/Sylvain59650/htmlelement-events-extension)
![version](https://img.shields.io/npm/v/htmlelement-events-extension.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/htmlelement-events-extension.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/htmlelement-events-extension.svg)
![minified](https://img.shields.io/bundlephobia/min/htmlelement-events-extension.svg)
![linter](https://img.shields.io/badge/eslint-ok-blue.svg)
![tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![license](https://img.shields.io/npm/l/htmlelement-events-extension.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/htmlelement-events-extension.svg)](http://hits.dwyl.com/Sylvain59650/htmlelement-events-extension)
</div>

    easy add/remove event on html elements

 <div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > htmlelement-events-extension](https://github.com/Sylvain59650/htmlelement-events-extension/tree/master/docs/README.md)
</div>

usage

    <html>

    <body>
    <input id="t1" type="text" />
    <script src="../distrib/htmlElement-events.min.js"></script>
    <script>
        document.querySelector("#t1").on("keydown", function() {
        console.log("pass"), false
        });
    </script>
    </body>

    </html>