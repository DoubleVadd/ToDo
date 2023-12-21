/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/bg.jpg */ "./src/Images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,600;1,800&family=Roboto+Condensed:ital,wght@0,100;0,200;0,300;0,600;0,700;1,100;1,200;1,300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    
    --premiumBlack:#372f2f;
    --premiumLight:#fdfffcff;
    --dark: #544848;
    --med-dark: rgb(59, 55, 55);
    --bg-color: #afa7a5;
    --light: #f4f3eeff;
    --med-light: #e0afa0ff;

    /* Font Size */
    --header-title: 2.6rem;
    --note-desc: 1.5rem;
    --regular-desc: 1.3rem;

    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
    font-family: 'Open Sans', 'Roboto Condensed', sans-serif;
}


html {
    box-sizing: border-box; 
}
    
*, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    
}

body {
    color: var(--premiumBlack);
    
    background-color: var(--bg-color);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* General */

main{
    display: grid;
    grid-template-columns: 100fr 1fr 100fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'left middle right';
    height: 100vh;
    overflow: hidden;
}

dialog{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 3rem;
    border-radius: 10px;
    background-color: var(--light);
}

input{
    font-size: var(--regular-desc);
}

article{
    padding: 5rem;
    margin: 1rem;
    outline: 4px dotted var(--premiumBlack);
}

article h1{
    font-size: var(--header-title);
}

/* Left Side */

article.project-container{
    /* background-color: var(--bg-color); */
    grid-area: left;
    overflow-y: auto;
}

section.project-header div{
    font-size: var(--regular-desc);
    display: flex;
    /* background-color: blue; */
    justify-content: space-between;
    align-items: start;
    margin-bottom: 0.8rem;
    overflow-x: auto;
    text-wrap:wrap;
}

section.project-header div >div{
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
}

h4.project-description {
    color: var(--dark);
    font-weight: 400;
} 

h2.current-date {
    text-decoration:underline;
    text-decoration: dotted underline;
    text-decoration-color: var(--premiumLight);
    

}

section.project-header select{
    width: 10rem;
    height: 1.4rem;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: var(--bg-color);
    box-shadow: 0px 1px var(--premiumBlack);
    text-align: center;
}

section.project-header select:hover{
    color: var(--premiumLight);
}

section.project-header button{
    width: 10rem;
    height: 1.4rem;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    border: none;
    background-color: var(--bg-color);
    box-shadow: 0px 1px var(--premiumBlack);
}

button:hover{
    cursor: pointer;
    background-color: var(--premiumBlack);
    color: var(--premiumLight);
}

section.list-container{
    display: flex;
    height: 58vh;
    overflow-y: auto;
    border-radius: 10px 10px 0px 0px;
    background-color: var(--med-dark);
    box-shadow: 0px 0px 0px 4px var(--bg-color);
}

ul.task-list{
    padding: 1.5rem;
    list-style-type: none;
    width: 100%;
    
    /* background-color: ; */
}

ul.task-list li{
    width: 100%;
    margin-bottom: 1rem;
    /* background-color: magenta; */
}

ul.task-list li fieldset{
    font-size: var(--regular-desc);
    display: flex;
    justify-content: space-between;
    outline: none;
    border: none;
    align-items: end;
    /* background-color: red; */
    /* padding: 1rem; */
    
}



ul.task-list li fieldset input, select{
    outline: none;
    border: none;
    background: transparent;
    /* box-shadow: 0px 2px  var(--dark), inset -5px 0px 10px var(--premiumLight); */
    
}

ul.task-list li fieldset button{
    outline: none;
    border: none;
    background-color: var(--med-dark);
    color: var(--light);
    font-size: 1rem;
    font-weight: 600;
    
}

ul.task-list li fieldset button:hover{
    color: var(--premiumBlack);
    
}

ul.task-list li fieldset input[type=text]{
    /* background-color: red; */
    
    box-shadow: 0px 2px  var(--dark);
    
}

select{
    box-shadow: none
}

fieldset div.task-left{
    background-color: var(--premiumLight);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    border-radius: 10px;
    
}

fieldset div.task-left:hover{
    background-color: var(--bg-color);
    transition: 0.3s;
    cursor: pointer;
}

fieldset div.task-left.activeTask{
    background-color: var(--bg-color);
    transition: 0.3s;
    cursor: pointer;
}


fieldset div.task-right{
    display: flex;
    /* background-color: blue; */
    width: 10%;
    justify-content: center;
    align-self: center;
}

button.add-task{
    color: var(--premiumLight);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
    width: 100%;
    font-size: 1.3rem;
    border-radius: 0px 0px 10px 10px;
    justify-content: center;
    align-items: center;
    background-color: var(--med-dark);
    border: none;
    border-top: 4px solid var(--bg-color);
    padding: 1rem;
    box-shadow: 0px 0px 0px 4px var(--bg-color);
}

button.add-task:hover{
    color: var(--bg-color);
}


div.divider{
    grid-area: middle; 
    background-color: var(--med-dark);
    width: 0.3rem;
    justify-self: center;
    height: 100%;
    /* outline: 1px solid var(--premiumBlack); */
}

article.note-container{
    grid-area: right;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    max-width: 50vw;
}

section.task-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-end;
    padding: 0rem 4rem;
    
}
.task-header div{
    /* max-width: 50%; */
    /* background-color: red; */
    overflow-x: auto;
}

section.task-note {
    display: flex;
    flex-direction: column;
    /* align-items: flex; */
    margin-top: 2rem;
    padding: 0rem 3rem;
}

section.task-note label{
    font-size: var(--regular-desc);
    padding: 0rem 1rem;
}

textarea.taskdescription{
    margin-top: 1rem;
    height: 65vh;
    resize: none;
    align-self: center;
    border-radius: 20px 20px 0px 0px;
    width: 95%;
    font-size: var(--note-desc);
    padding: 1rem;
    overflow-y: auto;
    outline: none;
    border: none;
    background-color: var(--bg-color);
    color: var(--premiumLight);
    box-shadow: inset 0px -3px 0px 0px var(--premiumLight);
    /* text-decoration:underline;
    text-decoration-color: var(--dark); */
    /* text-decoration: line-through; */
}


section.empty-Note{
    width: 100%;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 5rem;
    font-weight: bold;
    text-decoration: underline dotted;
    text-decoration-color: var(--premiumLight) ;
    /* justify-content: center; */

}

@media (max-width: 1500px){main{grid-template-columns: 50fr 0fr 50fr;}}
@media (max-width: 1500px){
    main{
        grid-template-columns: 1fr;
        grid-template-rows: 100fr 0fr 0fr;
        grid-template-areas:
        'left''middle''right';
        height: 100vh;
        overflow: hidden;
    }

    article.project-container{
        height: 60vh;
    }

    /* section.project-header :not(.project-selection-div){
        display: none;
    } */


    section.task-header div{
        display: none;
        overflow: hidden;
        height: 0rem;
    }


    article.note-container{
        padding-top: 0%;
        display: flex;
        height: 40vh;
        /* background-color: red; */
        max-width: 100vw;

    }

    article.note-container textarea{
        height: 15rem;

    }

}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,600;1,800&family=Roboto+Condensed:ital,wght@0,100;0,200;0,300;0,600;0,700;1,100;1,200;1,300&display=swap');\r\n:root{\r\n    \r\n    --premiumBlack:#372f2f;\r\n    --premiumLight:#fdfffcff;\r\n    --dark: #544848;\r\n    --med-dark: rgb(59, 55, 55);\r\n    --bg-color: #afa7a5;\r\n    --light: #f4f3eeff;\r\n    --med-light: #e0afa0ff;\r\n\r\n    /* Font Size */\r\n    --header-title: 2.6rem;\r\n    --note-desc: 1.5rem;\r\n    --regular-desc: 1.3rem;\r\n\r\n    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */\r\n    font-family: 'Open Sans', 'Roboto Condensed', sans-serif;\r\n}\r\n\r\n\r\nhtml {\r\n    box-sizing: border-box; \r\n}\r\n    \r\n*, *:before, *:after {\r\n    box-sizing: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n}\r\n\r\nbody {\r\n    color: var(--premiumBlack);\r\n    \r\n    background-color: var(--bg-color);\r\n    background-image: url('./Images/bg.jpg');\r\n}\r\n\r\n/* General */\r\n\r\nmain{\r\n    display: grid;\r\n    grid-template-columns: 100fr 1fr 100fr;\r\n    grid-template-rows: 1fr;\r\n    grid-template-areas: 'left middle right';\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\ndialog{\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    padding: 3rem;\r\n    border-radius: 10px;\r\n    background-color: var(--light);\r\n}\r\n\r\ninput{\r\n    font-size: var(--regular-desc);\r\n}\r\n\r\narticle{\r\n    padding: 5rem;\r\n    margin: 1rem;\r\n    outline: 4px dotted var(--premiumBlack);\r\n}\r\n\r\narticle h1{\r\n    font-size: var(--header-title);\r\n}\r\n\r\n/* Left Side */\r\n\r\narticle.project-container{\r\n    /* background-color: var(--bg-color); */\r\n    grid-area: left;\r\n    overflow-y: auto;\r\n}\r\n\r\nsection.project-header div{\r\n    font-size: var(--regular-desc);\r\n    display: flex;\r\n    /* background-color: blue; */\r\n    justify-content: space-between;\r\n    align-items: start;\r\n    margin-bottom: 0.8rem;\r\n    overflow-x: auto;\r\n    text-wrap:wrap;\r\n}\r\n\r\nsection.project-header div >div{\r\n    /* background-color: red; */\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\nh4.project-description {\r\n    color: var(--dark);\r\n    font-weight: 400;\r\n} \r\n\r\nh2.current-date {\r\n    text-decoration:underline;\r\n    text-decoration: dotted underline;\r\n    text-decoration-color: var(--premiumLight);\r\n    \r\n\r\n}\r\n\r\nsection.project-header select{\r\n    width: 10rem;\r\n    height: 1.4rem;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    background-color: var(--bg-color);\r\n    box-shadow: 0px 1px var(--premiumBlack);\r\n    text-align: center;\r\n}\r\n\r\nsection.project-header select:hover{\r\n    color: var(--premiumLight);\r\n}\r\n\r\nsection.project-header button{\r\n    width: 10rem;\r\n    height: 1.4rem;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--bg-color);\r\n    box-shadow: 0px 1px var(--premiumBlack);\r\n}\r\n\r\nbutton:hover{\r\n    cursor: pointer;\r\n    background-color: var(--premiumBlack);\r\n    color: var(--premiumLight);\r\n}\r\n\r\nsection.list-container{\r\n    display: flex;\r\n    height: 58vh;\r\n    overflow-y: auto;\r\n    border-radius: 10px 10px 0px 0px;\r\n    background-color: var(--med-dark);\r\n    box-shadow: 0px 0px 0px 4px var(--bg-color);\r\n}\r\n\r\nul.task-list{\r\n    padding: 1.5rem;\r\n    list-style-type: none;\r\n    width: 100%;\r\n    \r\n    /* background-color: ; */\r\n}\r\n\r\nul.task-list li{\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    /* background-color: magenta; */\r\n}\r\n\r\nul.task-list li fieldset{\r\n    font-size: var(--regular-desc);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    outline: none;\r\n    border: none;\r\n    align-items: end;\r\n    /* background-color: red; */\r\n    /* padding: 1rem; */\r\n    \r\n}\r\n\r\n\r\n\r\nul.task-list li fieldset input, select{\r\n    outline: none;\r\n    border: none;\r\n    background: transparent;\r\n    /* box-shadow: 0px 2px  var(--dark), inset -5px 0px 10px var(--premiumLight); */\r\n    \r\n}\r\n\r\nul.task-list li fieldset button{\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--med-dark);\r\n    color: var(--light);\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    \r\n}\r\n\r\nul.task-list li fieldset button:hover{\r\n    color: var(--premiumBlack);\r\n    \r\n}\r\n\r\nul.task-list li fieldset input[type=text]{\r\n    /* background-color: red; */\r\n    \r\n    box-shadow: 0px 2px  var(--dark);\r\n    \r\n}\r\n\r\nselect{\r\n    box-shadow: none\r\n}\r\n\r\nfieldset div.task-left{\r\n    background-color: var(--premiumLight);\r\n    padding: 1rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\nfieldset div.task-left:hover{\r\n    background-color: var(--bg-color);\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\nfieldset div.task-left.activeTask{\r\n    background-color: var(--bg-color);\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\nfieldset div.task-right{\r\n    display: flex;\r\n    /* background-color: blue; */\r\n    width: 10%;\r\n    justify-content: center;\r\n    align-self: center;\r\n}\r\n\r\nbutton.add-task{\r\n    color: var(--premiumLight);\r\n    display: flex;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 0rem;\r\n    width: 100%;\r\n    font-size: 1.3rem;\r\n    border-radius: 0px 0px 10px 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: var(--med-dark);\r\n    border: none;\r\n    border-top: 4px solid var(--bg-color);\r\n    padding: 1rem;\r\n    box-shadow: 0px 0px 0px 4px var(--bg-color);\r\n}\r\n\r\nbutton.add-task:hover{\r\n    color: var(--bg-color);\r\n}\r\n\r\n\r\ndiv.divider{\r\n    grid-area: middle; \r\n    background-color: var(--med-dark);\r\n    width: 0.3rem;\r\n    justify-self: center;\r\n    height: 100%;\r\n    /* outline: 1px solid var(--premiumBlack); */\r\n}\r\n\r\narticle.note-container{\r\n    grid-area: right;\r\n    /* background-color: green; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 50vw;\r\n}\r\n\r\nsection.task-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    align-items: flex-end;\r\n    padding: 0rem 4rem;\r\n    \r\n}\r\n.task-header div{\r\n    /* max-width: 50%; */\r\n    /* background-color: red; */\r\n    overflow-x: auto;\r\n}\r\n\r\nsection.task-note {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* align-items: flex; */\r\n    margin-top: 2rem;\r\n    padding: 0rem 3rem;\r\n}\r\n\r\nsection.task-note label{\r\n    font-size: var(--regular-desc);\r\n    padding: 0rem 1rem;\r\n}\r\n\r\ntextarea.taskdescription{\r\n    margin-top: 1rem;\r\n    height: 65vh;\r\n    resize: none;\r\n    align-self: center;\r\n    border-radius: 20px 20px 0px 0px;\r\n    width: 95%;\r\n    font-size: var(--note-desc);\r\n    padding: 1rem;\r\n    overflow-y: auto;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--bg-color);\r\n    color: var(--premiumLight);\r\n    box-shadow: inset 0px -3px 0px 0px var(--premiumLight);\r\n    /* text-decoration:underline;\r\n    text-decoration-color: var(--dark); */\r\n    /* text-decoration: line-through; */\r\n}\r\n\r\n\r\nsection.empty-Note{\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    font-size: 5rem;\r\n    font-weight: bold;\r\n    text-decoration: underline dotted;\r\n    text-decoration-color: var(--premiumLight) ;\r\n    /* justify-content: center; */\r\n\r\n}\r\n\r\n@media (max-width: 1500px){main{grid-template-columns: 50fr 0fr 50fr;}}\r\n@media (max-width: 1500px){\r\n    main{\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 100fr 0fr 0fr;\r\n        grid-template-areas:\r\n        'left''middle''right';\r\n        height: 100vh;\r\n        overflow: hidden;\r\n    }\r\n\r\n    article.project-container{\r\n        height: 60vh;\r\n    }\r\n\r\n    /* section.project-header :not(.project-selection-div){\r\n        display: none;\r\n    } */\r\n\r\n\r\n    section.task-header div{\r\n        display: none;\r\n        overflow: hidden;\r\n        height: 0rem;\r\n    }\r\n\r\n\r\n    article.note-container{\r\n        padding-top: 0%;\r\n        display: flex;\r\n        height: 40vh;\r\n        /* background-color: red; */\r\n        max-width: 100vw;\r\n\r\n    }\r\n\r\n    article.note-container textarea{\r\n        height: 15rem;\r\n\r\n    }\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Domhandler/displayer.js":
/*!*************************************!*\
  !*** ./src/Domhandler/displayer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const DomDisplay = (() =>{
    
    const dayMonthFormatter = (day, month)=> {
        let thisDay = ''
        let thisMonth = ''
        const allMonth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        switch (day) {
            case 1:
            case 21:
            case 31:
                thisDay = `${day}st`
                break;
            case 2:
            case 22:
                thisDay = `${day}nd`
                break;
            case 3:
            case 23:
                thisDay = `${day}rd`
                break;
            default:
                thisDay = `${day}th`
                break;
        }
        return allMonth[month] +" " + thisDay

    }

    // Clears the current list of tasks, used with project selection
    const clearTask = () => {
        const taskList = document.querySelector('.task-list')
        taskList.innerHTML = '';
    }
    const clearProjectSelection = () => {
        const taskNote = document.querySelector('#ProjectSelection')
        taskNote.innerHTML = '';
    }
    
    // DomDisplay.selectedProjectOption(projectID)
    const selectedProjectOption = (projectID) => {
        // alert(projectID)
        const taskNote = document.querySelector('#ProjectSelection')
        // console.log('current projectIndex', projectID)
        taskNote.value = projectID
        // console.log(projectID)
        // console.log(taskNote)

    }


    // Clears the note of selected task, called when task is selected
    const clearNote = () => {
        const taskNote = document.querySelector('.note-container')
        const activeTask = document.querySelector('.activeTask')
        console.log(activeTask)
        if(activeTask){
            activeTask.classList.remove('activeTask')
        }
        

        taskNote.innerHTML = `<section class="empty-Note"><p>No Task Selected</p></section>`
    }

    const updateHeader = (projectName, projectDescription) => {
        const currentProj = document.querySelector('.project-header .project-name')
        const currentProjDesc = document.querySelector('.project-header .project-description')
        const currentDate = document.querySelector('.project-header .current-date')
        const thisDate = new Date()
        currentProj.textContent = projectName
        currentDate.textContent = `${dayMonthFormatter(thisDate.getDate(),thisDate.getMonth())}` 
        currentProjDesc.textContent = projectDescription
    }

    const createTaskModal = (id) => {
        const modalDialog = document.querySelector('.task-dialog')
        modalDialog.id = `modal-${id}`
        modalDialog.innerHTML = `
            <form action="" class="create-task">
                <legend>Create Task</legend>
                <input type="text" placeholder="Task 1" class="create-title">
                <input type="textarea" placeholder="Description" class="create-desc">
                <select name="taskPriority" id="createTaskPriority">
                    <option value="low" selected>Low</option>
                    <option value="med" >Medium</option>
                    <option value="high" >High</option>
                </select>
                <input type="date" name="dueDate" id="CreateDueDate">
                <button type="button" class="task-create">create</button>

            </form>`
    }

    const createProjectModal = (id) => {
        const modalDialog = document.querySelector('.add-project')
        modalDialog.id = `modalProject-${id}`
        modalDialog.innerHTML = `<form action=""class='create Project'>
        <legend>Create Project</legend>
        <input type="text" placeholder="New Project" class="create-title project-title">
        <input type="text" placeholder="Project Description" class="create-desc project-title">
        <button class="project-create">create</button>
        </form>`

    }

    // Creates the project, best used with iterating through the current exisiting projects.
    const createTask = (task, id) => {
        const taskList = document.querySelector('.task-list')
        const li = document.createElement('li')
        li.id = id
        li.className = 'individualTask'
        li.innerHTML = `
            <div class="task-container">
                <section class="task-item">
                    <form action="" id="task-${id}">
                        <fieldset>
                            <legend class="task-name"></legend>
                                
                                <div class="task-left">
                                    <div>
                                        <input type="text" value="${task.taskName}" class="task-title">
                                    </div>
                                            
                                    <div>
                                        <input type="date" name="dueDate" id="dueDate" value="${task.taskDate.toISOString().split('T')[0]}">
                                        <select name="taskPriority" id="taskPriority">
                                                    <option value="low"  ${task.taskPriority === 'low' ? 'selected>low' : '>low'}</option>
                                                    <option value="med"  ${task.taskPriority === 'med' ? 'selected>med' : '>med'}</option>
                                                    <option value="high" ${task.taskPriority === 'high' ? 'selected>high' : '>high'}</option>
                                                </select>
                                                <input type="checkbox" name="complete" id="complete" ${task.taskComplete == true ? 'Checked' : ''}>
                                            </div>

                                        </div>
                                        <div class="task-right">
                                            
                                            <button type='button' class="deleteTask">Delete</button>
                                        </div>
                                    </fieldset>
                                </form>
                                </section>

                            </div>
        
        `
        taskList.append(li);
    }
    const removeTask = (id) => {
        const li = document.getElementById(`${id}`)
        li.remove()

    }

    const createNote = (task,projectName, id) => {
        const taskNote = document.querySelector('.note-container')
        taskNote.id = "note-"+id
        const taskActive = document.querySelector(`#task-${id} .task-left`)
        taskActive.classList.toggle('activeTask')
        taskNote.innerHTML = `<section class="task-header">
                <div>
                    <h3 class="project-name">
                        ${projectName}
                    </h3>
                    <h1 class="task-name-big">
                    </h1>
                </div>
                <div>
                    <h2 class="due-date">Due <span>${task.taskDate.getDate()}/${task.taskDate.getMonth()+1}/${task.taskDate.getFullYear()}</span></h2>
                    <h2 >Priority <span class="priority">${task.taskPriority}</span></h2>
                </div>
            </section>
            <section class="task-note">
                <label for="taskDesc">Task Details:</label>
                <textarea name="taskDesc" id="taskDesc" cols="30" value='${task.taskDesc}' rows="10" class="taskdescription">${task.taskDesc}</textarea>
            </section>`
    }

    // Displays the Task details on the right side of the screen, should be activated when task is clicked from the task list
    const taskDisplay = (task,projectName, taskID) => {
        clearNote()
        if (task && projectName && taskID){
            createNote(task,projectName, taskID)
            const taskName = document.querySelector('.task-name-big')
            taskName.textContent = task.taskName
            const taskPriority = document.querySelector('.priority')
            taskPriority.textContent = task.taskPriority
            const taskDueDate = document.querySelector('.due-date')
            taskDueDate.value = task.taskDate
            const taskDesc = document.querySelector('#taskDesc')
            taskDesc.value = task.taskDesc
        } else {
            clearNote()
        }

    }
    
    
    return {createTask,removeTask, clearTask, taskDisplay, clearNote, updateHeader, createTaskModal, clearProjectSelection, selectedProjectOption}
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomDisplay);

/***/ }),

/***/ "./src/Domhandler/domInteraction.js":
/*!******************************************!*\
  !*** ./src/Domhandler/domInteraction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Objects_projectHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objects/projectHandler */ "./src/Objects/projectHandler.js");
/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayer */ "./src/Domhandler/displayer.js");
/* harmony import */ var _Objects_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Objects/tasks */ "./src/Objects/tasks.js");
/* harmony import */ var _Objects_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Objects/projects */ "./src/Objects/projects.js");





const domInteraction = (() => {
    
    // The Current Project Identifier given list of Projects, managed through index
    let ProjectID = 0;
    const getProjectID = () => ProjectID
    const setProjectID = (newID) => ProjectID = newID

    // The current Project handler, Needs to be initialised when the function first runs to function properly
    let globalProject = ''
    const setAllProject = (allProj) => globalProject = allProj
    const getAllProject = () => globalProject

    // Saving functionality, Runs every 5 seconds
    const save = () => {
        localStorage.setItem('projectData', getAllProject().exportProject()) 
    }
    // Determines the saving duration
    const  periodicSave = window.setInterval(function(){
        save()
      }, 5000);
    
    
    // On the initial load, set it up with the first chosen project, should be changed to last saved project down the line
    const initialLoad = () => {
        document.addEventListener("DOMContentLoaded", () => {
            console.log("DOM fully loaded and parsed");
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTaskModal(`0`)
            projectSelectionRender(getAllProject().showProject()[0], 0)
            taskModalOpen(getAllProject().showProject()[0], `0`)

        });
    }

    // Project selection and updating the tasks visible based on the current selected project
    // Keep track of the current project with setProjectID.
    const projectSelectionOption = () => {
        const currentProject = document.querySelector('#ProjectSelection');
        projectModalOpen()
        renderProjectOptions( currentProject)
        displayProjectTasks( currentProject)
    }

    // On dropdown change, reRender the Task Lists
    const displayProjectTasks = ( currentProject) =>{
        currentProject.addEventListener("change", e =>{
            const selectedProject = getAllProject().showProject()[e.target.value]
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTaskModal(`${getProjectID()}`)
            projectSelectionRender(selectedProject, e.target.value)
            taskModalOpen(selectedProject, `${getProjectID()}`)
        })
    }

    // Render the dropdown menu containing all projects we currently have access to
    const renderProjectOptions = ( currentProject) => {
        _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].clearProjectSelection()
        getAllProject().showProject().forEach((project, projIndex) => {
            const thisProject = document.createElement('option')
            thisProject.value = projIndex
            thisProject.textContent = project.getName()
            currentProject.append(thisProject)
        });
    }

    // Render the Page for the currently Selected Project given the project Object and project Id, set the Global Project ID
    const projectSelectionRender = (selectedProject, projectID) => {
        _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].clearTask()
        setProjectID(projectID)
        // If the project does not give Null
        if (selectedProject){
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].selectedProjectOption(projectID)
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].updateHeader(selectedProject.getName(), selectedProject.getDesc())
            selectedProject.getTasks().forEach((task, taskIndex) => {
                _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(task.getAll(), `${getProjectID()}p${taskIndex}`)
                taskUpdate(selectedProject, task, `${getProjectID()}p${taskIndex}`, taskIndex)
            })
            taskOpen(selectedProject)    
        }               
        }

    // Opens the Expanded view of the Project, show list of tasks
    const taskOpen = (currentProj) => {
        const tasks = document.querySelectorAll('.individualTask');
        tasks.forEach( (task, taskIndex) => {
            const taskID = `${getProjectID()}p${taskIndex}`
            const taskInfo = currentProj.getTasks()[taskIndex]
            // for each of the tasks, expand on click, showing the task information




            task.addEventListener('click', e =>{
                _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].taskDisplay(taskInfo.getAll(),currentProj.getName(),taskID)
                noteUpdate(taskInfo, taskID)
                if (e.target.className == `deleteTask`){
                    _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].removeTask(taskID)
                    currentProj.removeTask(taskIndex)
                    _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].taskDisplay()
                }

            })

            

        })
    }
    // Create an expanded note for each task and save the changed values
    const noteUpdate = (currentTask, taskID) => {
        const taskDesc = document.querySelector(`#note-${taskID} #taskDesc`)
        if (taskDesc) {
            taskDesc.addEventListener('input', e => {
                currentTask.changeDesc(e.target.value)
            })
        } else {
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].clearNote()
        }

    }

    // Save any changes to the individual task inputs, and delete tasks with a button click
    const taskUpdate = (selectedProject, currentTask, taskID, taskIndex) => {
        // change for each
        const taskTitle = document.querySelector(`#task-${taskID} .task-title`)
        const taskPriority = document.querySelector(`#task-${taskID} #taskPriority`)
        const taskComplete = document.querySelector(`#task-${taskID} #complete`)
        const taskDate = document.querySelector(`#task-${taskID} #dueDate`)
        
        // const taskDesc = document.querySelector(`#note-${taskID} #taskDesc`)
        taskTitle.addEventListener('input', e => currentTask.changeName(e.target.value))
        taskComplete.addEventListener('input', e=> currentTask.changeCompletion())
        taskPriority.addEventListener('input', e => currentTask.changePriority(e.target.value))
        taskDate.addEventListener('input', e => currentTask.changeDate(e.target.value))

        // const DeleteBtn = document.querySelector(`#task-${taskID} .deleteTask`)
        // DeleteBtn.addEventListener('click', e => {
        //     // console.log(taskIndex)
        //     DomDisplay.removeTask(taskID)
        //     selectedProject.removeTask(taskIndex)
        //     DomDisplay.taskDisplay()    
        // }) 

    }


    // MODALS -------------------------------------------------------//

    // Add task Modal to create new tasks for the current project
    const taskModalOpen = (thisProj, id) => {
        const taskModal = document.querySelector('.task-dialog');
        const createButton = document.querySelector('.task-create')
        const taskOpenButton = document.querySelector('.add-task');
        const taskForm = document.querySelector('form.create-task')
        
        if(thisProj && getAllProject().getCount()){
            const newTaskModal = taskModalGet(thisProj, id, taskModal, createButton)
            taskOpenButton.addEventListener('click', () =>{
                taskForm.reset()
                taskModal.showModal();
                newTaskModal
            })
        }
        
        
    }

    // Add project modal, create new project, and set it as current project, refresh the page
    const projectModalOpen = () => {
        const projectModal = document.querySelector('.project-dialog');
        const createButton = document.querySelector('.project-create')
        const projectOpenButton = document.querySelector('.add-project');
        const newProjectModal = projectModalGet(projectModal, createButton)
        projectOpenButton.addEventListener('click', () =>{
            projectModal.showModal();
            newProjectModal
            
        })
        
    }

    

    // Modal For Deleting the current selected Project
    const projectDeleteModal = ((currentProject, projectModal) => {
        const deleteButton = document.querySelector('.project-delete')
        const ignoreButton = document.querySelector('.ignore-delete')
        // On Delete, Refresh the page into the first Project that Exists, and reset the Notes
        deleteButton.addEventListener('click', e => {
            if(getAllProject().getCount()>1){
                getAllProject().removeProject(getProjectID())
                setProjectID(0)
                renderProjectOptions( currentProject)
                displayProjectTasks( currentProject)
                if(getAllProject().showProject()[0]){
                    projectSelectionRender(getAllProject().showProject()[0], 0)
                }
                _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].clearNote()
            }else{
                alert('There Must be Minimum of 1 Project')
            }
            

            
            projectModal.close()
            save()  
        })
        ignoreButton.addEventListener('click', e => {
            projectModal.close()
        })

    })

    // Opening a delete model for the project on button click
    const projectDeleteModalOpen = (() => {
        const currentProject = document.querySelector('#ProjectSelection');
        const deleteModal = document.querySelector('.project-delete-dialog');
        const projectOpenButton = document.querySelector('.delete-this-project');
        const deleteProjectModal = projectDeleteModal(currentProject, deleteModal)
        projectOpenButton.addEventListener('click', () =>{
            deleteModal.showModal();
            deleteProjectModal
            
        })
    })()

    // Create the task and add it to the current project, rerender the page
    const taskModalGet = ((thisProj, id, taskModal, createButton) => {
        createButton.addEventListener('click', e => {
            const taskInfo = taskModalInfo()
            const newTask = (0,_Objects_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(taskInfo.Name, taskInfo.desc, new Date(taskInfo.date), taskInfo.priority, taskInfo.complete)
            thisProj.addTask(newTask)
            projectSelectionRender(thisProj, id)

            taskModal.close()
            save()     
        })
    })

    // Create a New project set it
    const projectModalGet = ((projectModal, createButton) => {
        createButton.addEventListener('click', e => {
            const projectInfo = projectModalInfo()
            const newProject = (0,_Objects_projects__WEBPACK_IMPORTED_MODULE_3__["default"])(projectInfo.Name, projectInfo.desc)
            

            getAllProject().addProject(newProject)
            setProjectID(getAllProject().getCount()-1)
            _displayer__WEBPACK_IMPORTED_MODULE_1__["default"].createTaskModal(getAllProject().getCount()-1)
            taskModalOpen(newProject, getAllProject().getCount()-1)

            const currentProject = document.querySelector('#ProjectSelection');
            renderProjectOptions( currentProject)
            displayProjectTasks( currentProject)

            projectSelectionRender(newProject, getAllProject().getCount()-1)


            projectModal.close()
            save()  
        })
    })
    
    const projectModalInfo = () =>{
        const projectName = document.querySelector('.create-title.project-title')
        const projectDesc = document.querySelector('.create-desc.project-title')
        return {Name:projectName.value, desc:projectDesc.value}
    }
    const taskModalInfo = () =>{
        
        const taskName = document.querySelector('.create-title')
        const taskDesc = document.querySelector('.create-desc')
        const taskPriority = document.querySelector('#createTaskPriority')
        const taskDate = document.querySelector('#CreateDueDate')
        // const taskComplete = document.querySelector('#complete')
        // Name?: string, desc?: string, date?: Date, priority?: string, complete?: boolean
        // return taskName.value, taskDesc.value, taskDate.value, taskPriority.value, complete:taskComplete.checked
        return {Name:taskName.value,
            desc:taskDesc.value,
            date:taskDate.value || new Date(),
            priority:taskPriority.value, 
            // complete:taskComplete.checked
        }
    }
        
        return {projectSelectionOption, initialLoad, setAllProject}
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domInteraction);


/***/ }),

/***/ "./src/Objects/localStorageHandler.js":
/*!********************************************!*\
  !*** ./src/Objects/localStorageHandler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageAvailable);
  

/***/ }),

/***/ "./src/Objects/projectHandler.js":
/*!***************************************!*\
  !*** ./src/Objects/projectHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/Objects/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/Objects/projects.js");
// if in local storage load those




const projectHandler = (project=[]) => {
    let currentProjects = project;

    const newProjectHandler = (newData) => currentProjects = newData;

    let projectCount = currentProjects.length;
    const getCount = () => projectCount;
    const setCount = (newCount) =>  projectCount = newCount

    const loadProject = (projectData) => {
        console.log('loading', projectData)
        const newProject = JSON.parse(projectData);
        const processedProject = projectHandler()
        for(const proj in newProject){
            const currentProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__["default"])()
            currentProject.importProject(newProject[proj][0])
            for(const task in newProject[proj][1]){
                const currentTask = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])()
                currentTask.importTasks(newProject[proj][1][task])
                currentProject.addTask(currentTask);
            }
            processedProject.addProject(currentProject)
        }
        setCount(processedProject.showProject().length)
        newProjectHandler(processedProject.showProject())
    }

    const exportProject = () =>{
        const projectCollections = {}
        currentProjects.forEach((project, projIndex) =>{
        const projectTasks = []
        projectCollections[projIndex] = [project.exportProject(), projectTasks]
        const allTasks = project.getTasks()
        allTasks.forEach((task) => {
            projectCollections[projIndex][1].push(task.exportTask())
        })
        
        })
     return JSON.stringify(projectCollections)
    }

    const showProject = () => currentProjects;

    const addProject = (newProject) => {
        currentProjects.push(newProject)
        ++projectCount
    }
    
    
    const removeProject = (index) => {
        // console.log(index)
        // console.log( getCount())
        if (index < getCount()) {
            currentProjects.splice(index, 1);
            --projectCount
        }
    }

    return {showProject, addProject, removeProject, loadProject, exportProject, currentProjects, getCount}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectHandler);

/***/ }),

/***/ "./src/Objects/projects.js":
/*!*********************************!*\
  !*** ./src/Objects/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createProject = (projectName='', projectDesc='') => {
    let name = projectName;
    let desc = projectDesc;
    let taskList = [];
    let taskCount = taskList.length;

    const getCount = () => taskCount;
    const getName = () => name;
    const getDesc = () => desc;
    const getTasks = () => taskList;

    const changeName = (newName) => name = newName ;
    const changeDesc = (newDesc) => desc = newDesc ;

    const addTask = (newTask) => {
        ++taskCount 
        taskList.push(newTask)
    };
    const removeTask = (index) => {
        if (index < getCount()) {
            taskList.splice(index, 1);
            --taskCount
        }
    }

    const importProject = (taskProject) => {
        taskProject = JSON.parse(taskProject);
        name = taskProject.name;
        desc = taskProject.desc;
    }

    const exportProject = () => {
        let all = {name,desc}
        return JSON.stringify(all)
    }




    return {getCount,getName,getDesc,getTasks,changeName,changeDesc,addTask,removeTask,importProject,exportProject}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

/***/ }),

/***/ "./src/Objects/tasks.js":
/*!******************************!*\
  !*** ./src/Objects/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTasks = (Name='',desc='',date=new Date(),priority='low',complete=false) => {
    let taskName = Name;
    let taskDesc = desc;
    let taskDate = date;
    let taskPriority = priority;
    let taskComplete = false;

    const getDate = () => taskDate;
    const getName = () => taskName;
    const getDesc = () => taskDesc;
    const getPrior = () => taskPriority;
    const getComplete = () => taskComplete;

    const changeDate = (newDate) => taskDate = new Date(newDate);

    const changePriority = (priority) => {
        if (priority === 'low'){
            taskPriority = 'low'
        } else if (priority === 'med') {
            taskPriority = 'med'
        } else {
            taskPriority = 'high'
        }
        return;
    }

    const changeName = (newName) => taskName = newName ;

    const changeDesc = (newDesc) => taskDesc = newDesc ;

    const changeCompletion = () => taskComplete ? taskComplete = false : taskComplete = true ;

    const getAll = () => {
        return {taskName: taskName, taskDesc: taskDesc, taskDate: taskDate, taskPriority: taskPriority,taskComplete: taskComplete}
    };

    const importTasks = (taskObj) => {
        taskObj = JSON.parse(taskObj);
        taskName = taskObj.taskName;
        taskDesc = taskObj.taskDesc;
        taskDate =new Date(taskObj.taskDate);
        taskPriority = taskObj.taskPriority;
        taskComplete = taskObj.taskComplete;
    }

    const exportTask = () => {
        let all = {taskName,taskDesc,taskDate,taskPriority,taskComplete}
        return JSON.stringify(all)
    }

    return {getDate, getName, getDesc, getPrior, getComplete, changeDate, changePriority, changeName, changeDesc, changeCompletion,importTasks,exportTask,getAll}
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTasks);

/***/ }),

/***/ "./src/Images/bg.jpg":
/*!***************************!*\
  !*** ./src/Images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2aaa8466cf0b7ad545a.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Objects_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Objects/tasks */ "./src/Objects/tasks.js");
/* harmony import */ var _Objects_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objects/projects */ "./src/Objects/projects.js");
/* harmony import */ var _Objects_projectHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Objects/projectHandler */ "./src/Objects/projectHandler.js");
/* harmony import */ var _Objects_localStorageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Objects/localStorageHandler */ "./src/Objects/localStorageHandler.js");
/* harmony import */ var _Domhandler_displayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Domhandler/displayer */ "./src/Domhandler/displayer.js");
/* harmony import */ var _Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Domhandler/domInteraction */ "./src/Domhandler/domInteraction.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







// import './Images/logo32x32.ico'

// Initialise the Template Project
const task1 = (0,_Objects_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])('Task 1','This is the First Task',new Date(),'low');
const proj = (0,_Objects_projects__WEBPACK_IMPORTED_MODULE_1__["default"])('Project 1', 'This is the default Project');
const allProj = (0,_Objects_projectHandler__WEBPACK_IMPORTED_MODULE_2__["default"])()
proj.addTask(task1);
allProj.addProject(proj);

// If Project exists, Load that Project, else, utilise the template project
const storageStatus = (0,_Objects_localStorageHandler__WEBPACK_IMPORTED_MODULE_3__["default"])('localStorage');
storageStatus && localStorage.getItem('projectData') ? allProj.loadProject(localStorage.getItem('projectData')) : allProj


_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"].initialLoad(allProj)
_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"].setAllProject(allProj)
_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"].projectSelectionOption(allProj)
_Domhandler_domInteraction__WEBPACK_IMPORTED_MODULE_5__["default"]



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywyR0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5SEFBeUgsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sOENBQThDLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNuUSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxlQUFlLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsY0FBYyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFL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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUM7QUFDTTtBQUNPO0FBQ087QUFDYjtBQUNTO0FBQ3JDO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMERBQVc7QUFDekIsYUFBYSw2REFBYTtBQUMxQixnQkFBZ0IsbUVBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0VBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtFQUFjO0FBQ2Qsa0VBQWM7QUFDZCxrRUFBYztBQUNkLGtFQUFjO0FBQ2Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9Eb21oYW5kbGVyL2Rpc3BsYXllci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvRG9taGFuZGxlci9kb21JbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvT2JqZWN0cy9sb2NhbFN0b3JhZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9PYmplY3RzL3Byb2plY3RIYW5kbGVyLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9PYmplY3RzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9PYmplY3RzL3Rhc2tzLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0ltYWdlcy9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSw2MDA7MSw4MDAmZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xyXG4gICAgXHJcbiAgICAtLXByZW1pdW1CbGFjazojMzcyZjJmO1xyXG4gICAgLS1wcmVtaXVtTGlnaHQ6I2ZkZmZmY2ZmO1xyXG4gICAgLS1kYXJrOiAjNTQ0ODQ4O1xyXG4gICAgLS1tZWQtZGFyazogcmdiKDU5LCA1NSwgNTUpO1xyXG4gICAgLS1iZy1jb2xvcjogI2FmYTdhNTtcclxuICAgIC0tbGlnaHQ6ICNmNGYzZWVmZjtcclxuICAgIC0tbWVkLWxpZ2h0OiAjZTBhZmEwZmY7XHJcblxyXG4gICAgLyogRm9udCBTaXplICovXHJcbiAgICAtLWhlYWRlci10aXRsZTogMi42cmVtO1xyXG4gICAgLS1ub3RlLWRlc2M6IDEuNXJlbTtcclxuICAgIC0tcmVndWxhci1kZXNjOiAxLjNyZW07XHJcblxyXG4gICAgLyogZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5odG1sIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG59XHJcbiAgICBcclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJlbWl1bUJsYWNrKTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG4vKiBHZW5lcmFsICovXHJcblxyXG5tYWlue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwZnIgMWZyIDEwMGZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnbGVmdCBtaWRkbGUgcmlnaHQnO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmRpYWxvZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZGVzYyk7XHJcbn1cclxuXHJcbmFydGljbGV7XHJcbiAgICBwYWRkaW5nOiA1cmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgb3V0bGluZTogNHB4IGRvdHRlZCB2YXIoLS1wcmVtaXVtQmxhY2spO1xyXG59XHJcblxyXG5hcnRpY2xlIGgxe1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXItdGl0bGUpO1xyXG59XHJcblxyXG4vKiBMZWZ0IFNpZGUgKi9cclxuXHJcbmFydGljbGUucHJvamVjdC1jb250YWluZXJ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7ICovXHJcbiAgICBncmlkLWFyZWE6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5zZWN0aW9uLnByb2plY3QtaGVhZGVyIGRpdntcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1kZXNjKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHRleHQtd3JhcDp3cmFwO1xyXG59XHJcblxyXG5zZWN0aW9uLnByb2plY3QtaGVhZGVyIGRpdiA+ZGl2e1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmg0LnByb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufSBcclxuXHJcbmgyLmN1cnJlbnQtZGF0ZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBkb3R0ZWQgdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1wcmVtaXVtTGlnaHQpO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5zZWN0aW9uLnByb2plY3QtaGVhZGVyIHNlbGVjdHtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGhlaWdodDogMS40cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggdmFyKC0tcHJlbWl1bUJsYWNrKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuc2VjdGlvbi5wcm9qZWN0LWhlYWRlciBzZWxlY3Q6aG92ZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJlbWl1bUxpZ2h0KTtcclxufVxyXG5cclxuc2VjdGlvbi5wcm9qZWN0LWhlYWRlciBidXR0b257XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDEuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggdmFyKC0tcHJlbWl1bUJsYWNrKTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJlbWl1bUJsYWNrKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmVtaXVtTGlnaHQpO1xyXG59XHJcblxyXG5zZWN0aW9uLmxpc3QtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNTh2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1kYXJrKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCB2YXIoLS1iZy1jb2xvcik7XHJcbn1cclxuXHJcbnVsLnRhc2stbGlzdHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiA7ICovXHJcbn1cclxuXHJcbnVsLnRhc2stbGlzdCBsaXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7ICovXHJcbn1cclxuXHJcbnVsLnRhc2stbGlzdCBsaSBmaWVsZHNldHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1kZXNjKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICAgIC8qIHBhZGRpbmc6IDFyZW07ICovXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG51bC50YXNrLWxpc3QgbGkgZmllbGRzZXQgaW5wdXQsIHNlbGVjdHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAycHggIHZhcigtLWRhcmspLCBpbnNldCAtNXB4IDBweCAxMHB4IHZhcigtLXByZW1pdW1MaWdodCk7ICovXHJcbiAgICBcclxufVxyXG5cclxudWwudGFzay1saXN0IGxpIGZpZWxkc2V0IGJ1dHRvbntcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWQtZGFyayk7XHJcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIFxyXG59XHJcblxyXG51bC50YXNrLWxpc3QgbGkgZmllbGRzZXQgYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLXByZW1pdW1CbGFjayk7XHJcbiAgICBcclxufVxyXG5cclxudWwudGFzay1saXN0IGxpIGZpZWxkc2V0IGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggIHZhcigtLWRhcmspO1xyXG4gICAgXHJcbn1cclxuXHJcbnNlbGVjdHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmVcclxufVxyXG5cclxuZmllbGRzZXQgZGl2LnRhc2stbGVmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZW1pdW1MaWdodCk7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG5maWVsZHNldCBkaXYudGFzay1sZWZ0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZmllbGRzZXQgZGl2LnRhc2stbGVmdC5hY3RpdmVUYXNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbmZpZWxkc2V0IGRpdi50YXNrLXJpZ2h0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbi5hZGQtdGFza3tcclxuICAgIGNvbG9yOiB2YXIoLS1wcmVtaXVtTGlnaHQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1kYXJrKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNHB4IHZhcigtLWJnLWNvbG9yKTtcclxufVxyXG5cclxuYnV0dG9uLmFkZC10YXNrOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxufVxyXG5cclxuXHJcbmRpdi5kaXZpZGVye1xyXG4gICAgZ3JpZC1hcmVhOiBtaWRkbGU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLWRhcmspO1xyXG4gICAgd2lkdGg6IDAuM3JlbTtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXByZW1pdW1CbGFjayk7ICovXHJcbn1cclxuXHJcbmFydGljbGUubm90ZS1jb250YWluZXJ7XHJcbiAgICBncmlkLWFyZWE6IHJpZ2h0O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC13aWR0aDogNTB2dztcclxufVxyXG5cclxuc2VjdGlvbi50YXNrLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzogMHJlbSA0cmVtO1xyXG4gICAgXHJcbn1cclxuLnRhc2staGVhZGVyIGRpdntcclxuICAgIC8qIG1heC13aWR0aDogNTAlOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuc2VjdGlvbi50YXNrLW5vdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvKiBhbGlnbi1pdGVtczogZmxleDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwcmVtIDNyZW07XHJcbn1cclxuXHJcbnNlY3Rpb24udGFzay1ub3RlIGxhYmVse1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1yZWd1bGFyLWRlc2MpO1xyXG4gICAgcGFkZGluZzogMHJlbSAxcmVtO1xyXG59XHJcblxyXG50ZXh0YXJlYS50YXNrZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiA2NXZoO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1ub3RlLWRlc2MpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLXByZW1pdW1MaWdodCk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTNweCAwcHggMHB4IHZhcigtLXByZW1pdW1MaWdodCk7XHJcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1kYXJrKTsgKi9cclxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyAqL1xyXG59XHJcblxyXG5cclxuc2VjdGlvbi5lbXB0eS1Ob3Rle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1wcmVtaXVtTGlnaHQpIDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCl7bWFpbntncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwZnIgMGZyIDUwZnI7fX1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCl7XHJcbiAgICBtYWlue1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwZnIgMGZyIDBmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICdsZWZ0JydtaWRkbGUnJ3JpZ2h0JztcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgYXJ0aWNsZS5wcm9qZWN0LWNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogc2VjdGlvbi5wcm9qZWN0LWhlYWRlciA6bm90KC5wcm9qZWN0LXNlbGVjdGlvbi1kaXYpe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9ICovXHJcblxyXG5cclxuICAgIHNlY3Rpb24udGFzay1oZWFkZXIgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBoZWlnaHQ6IDByZW07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFydGljbGUubm90ZS1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhcnRpY2xlLm5vdGUtY29udGFpbmVyIHRleHRhcmVhe1xyXG4gICAgICAgIGhlaWdodDogMTVyZW07XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7O0lBRUksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCOztJQUV0QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7O0lBRXRCLDhFQUE4RTtJQUM5RSx3REFBd0Q7QUFDNUQ7OztBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVOztBQUVkOztBQUVBO0lBQ0ksMEJBQTBCOztJQUUxQixpQ0FBaUM7SUFDakMseURBQXdDO0FBQzVDOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2Qix3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLGdCQUFn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QUNmLGFBQWE7UUFDYixZQUFZO1FBQ1osMkJBQTJCO1FBQzNCLGdCQUFnQjs7SUFFcEI7O0lBRUE7UUFDSSxhQUFhOztJQUVqQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsNjAwOzEsODAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG46cm9vdHtcXHJcXG4gICAgXFxyXFxuICAgIC0tcHJlbWl1bUJsYWNrOiMzNzJmMmY7XFxyXFxuICAgIC0tcHJlbWl1bUxpZ2h0OiNmZGZmZmNmZjtcXHJcXG4gICAgLS1kYXJrOiAjNTQ0ODQ4O1xcclxcbiAgICAtLW1lZC1kYXJrOiByZ2IoNTksIDU1LCA1NSk7XFxyXFxuICAgIC0tYmctY29sb3I6ICNhZmE3YTU7XFxyXFxuICAgIC0tbGlnaHQ6ICNmNGYzZWVmZjtcXHJcXG4gICAgLS1tZWQtbGlnaHQ6ICNlMGFmYTBmZjtcXHJcXG5cXHJcXG4gICAgLyogRm9udCBTaXplICovXFxyXFxuICAgIC0taGVhZGVyLXRpdGxlOiAyLjZyZW07XFxyXFxuICAgIC0tbm90ZS1kZXNjOiAxLjVyZW07XFxyXFxuICAgIC0tcmVndWxhci1kZXNjOiAxLjNyZW07XFxyXFxuXFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjsgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXHJcXG59XFxyXFxuICAgIFxcclxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmVtaXVtQmxhY2spO1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vSW1hZ2VzL2JnLmpwZycpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZW5lcmFsICovXFxyXFxuXFxyXFxubWFpbntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBmciAxZnIgMTAwZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnbGVmdCBtaWRkbGUgcmlnaHQnO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2d7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXR7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1kZXNjKTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZXtcXHJcXG4gICAgcGFkZGluZzogNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBvdXRsaW5lOiA0cHggZG90dGVkIHZhcigtLXByZW1pdW1CbGFjayk7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLXRpdGxlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTGVmdCBTaWRlICovXFxyXFxuXFxyXFxuYXJ0aWNsZS5wcm9qZWN0LWNvbnRhaW5lcntcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpOyAqL1xcclxcbiAgICBncmlkLWFyZWE6IGxlZnQ7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ucHJvamVjdC1oZWFkZXIgZGl2e1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZGVzYyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIHRleHQtd3JhcDp3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnByb2plY3QtaGVhZGVyIGRpdiA+ZGl2e1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oNC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbn0gXFxyXFxuXFxyXFxuaDIuY3VycmVudC1kYXRlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBkb3R0ZWQgdW5kZXJsaW5lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLXByZW1pdW1MaWdodCk7XFxyXFxuICAgIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnByb2plY3QtaGVhZGVyIHNlbGVjdHtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEuNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggdmFyKC0tcHJlbWl1bUJsYWNrKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnByb2plY3QtaGVhZGVyIHNlbGVjdDpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLXByZW1pdW1MaWdodCk7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ucHJvamVjdC1oZWFkZXIgYnV0dG9ue1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogMS40cmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCB2YXIoLS1wcmVtaXVtQmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJlbWl1bUJsYWNrKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByZW1pdW1MaWdodCk7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ubGlzdC1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogNTh2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1kYXJrKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNHB4IHZhcigtLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxudWwudGFzay1saXN0e1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIFxcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiA7ICovXFxyXFxufVxcclxcblxcclxcbnVsLnRhc2stbGlzdCBsaXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7ICovXFxyXFxufVxcclxcblxcclxcbnVsLnRhc2stbGlzdCBsaSBmaWVsZHNldHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1yZWd1bGFyLWRlc2MpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcclxcbiAgICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxudWwudGFzay1saXN0IGxpIGZpZWxkc2V0IGlucHV0LCBzZWxlY3R7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAycHggIHZhcigtLWRhcmspLCBpbnNldCAtNXB4IDBweCAxMHB4IHZhcigtLXByZW1pdW1MaWdodCk7ICovXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG51bC50YXNrLWxpc3QgbGkgZmllbGRzZXQgYnV0dG9ue1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1kYXJrKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxudWwudGFzay1saXN0IGxpIGZpZWxkc2V0IGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLXByZW1pdW1CbGFjayk7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG51bC50YXNrLWxpc3QgbGkgZmllbGRzZXQgaW5wdXRbdHlwZT10ZXh0XXtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcclxcbiAgICBcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAgdmFyKC0tZGFyayk7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3R7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmVcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgZGl2LnRhc2stbGVmdHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJlbWl1bUxpZ2h0KTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgZGl2LnRhc2stbGVmdDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IGRpdi50YXNrLWxlZnQuYWN0aXZlVGFza3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbmZpZWxkc2V0IGRpdi50YXNrLXJpZ2h0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcclxcbiAgICB3aWR0aDogMTAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2t7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmVtaXVtTGlnaHQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLWRhcmspO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCB2YXIoLS1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtdGFzazpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGl2LmRpdmlkZXJ7XFxyXFxuICAgIGdyaWQtYXJlYTogbWlkZGxlOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLWRhcmspO1xcclxcbiAgICB3aWR0aDogMC4zcmVtO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tcHJlbWl1bUJsYWNrKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5ub3RlLWNvbnRhaW5lcntcXHJcXG4gICAgZ3JpZC1hcmVhOiByaWdodDtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogNTB2dztcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi50YXNrLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDByZW0gNHJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi50YXNrLWhlYWRlciBkaXZ7XFxyXFxuICAgIC8qIG1heC13aWR0aDogNTAlOyAqL1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24udGFzay1ub3RlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyogYWxpZ24taXRlbXM6IGZsZXg7ICovXFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDByZW0gM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi50YXNrLW5vdGUgbGFiZWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1kZXNjKTtcXHJcXG4gICAgcGFkZGluZzogMHJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYS50YXNrZGVzY3JpcHRpb257XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGhlaWdodDogNjV2aDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLW5vdGUtZGVzYyk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJlbWl1bUxpZ2h0KTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0zcHggMHB4IDBweCB2YXIoLS1wcmVtaXVtTGlnaHQpO1xcclxcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWRhcmspOyAqL1xcclxcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuc2VjdGlvbi5lbXB0eS1Ob3Rle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tcHJlbWl1bUxpZ2h0KSA7XFxyXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KXttYWlue2dyaWQtdGVtcGxhdGUtY29sdW1uczogNTBmciAwZnIgNTBmcjt9fVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpe1xcclxcbiAgICBtYWlue1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMGZyIDBmciAwZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICAgJ2xlZnQnJ21pZGRsZScncmlnaHQnO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYXJ0aWNsZS5wcm9qZWN0LWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBzZWN0aW9uLnByb2plY3QtaGVhZGVyIDpub3QoLnByb2plY3Qtc2VsZWN0aW9uLWRpdil7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9ICovXFxyXFxuXFxyXFxuXFxyXFxuICAgIHNlY3Rpb24udGFzay1oZWFkZXIgZGl2e1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBoZWlnaHQ6IDByZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgYXJ0aWNsZS5ub3RlLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwdmg7XFxyXFxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGFydGljbGUubm90ZS1jb250YWluZXIgdGV4dGFyZWF7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1cmVtO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcblxyXG5jb25zdCBEb21EaXNwbGF5ID0gKCgpID0+e1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXlNb250aEZvcm1hdHRlciA9IChkYXksIG1vbnRoKT0+IHtcclxuICAgICAgICBsZXQgdGhpc0RheSA9ICcnXHJcbiAgICAgICAgbGV0IHRoaXNNb250aCA9ICcnXHJcbiAgICAgICAgY29uc3QgYWxsTW9udGggPSBbJ0phbicsJ0ZlYicsJ01hcicsJ0FwcicsJ01heScsJ0p1bicsJ0p1bCcsJ0F1ZycsJ1NlcCcsJ09jdCcsJ05vdicsJ0RlYyddXHJcbiAgICAgICAgc3dpdGNoIChkYXkpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjYXNlIDIxOlxyXG4gICAgICAgICAgICBjYXNlIDMxOlxyXG4gICAgICAgICAgICAgICAgdGhpc0RheSA9IGAke2RheX1zdGBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGNhc2UgMjI6XHJcbiAgICAgICAgICAgICAgICB0aGlzRGF5ID0gYCR7ZGF5fW5kYFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgY2FzZSAyMzpcclxuICAgICAgICAgICAgICAgIHRoaXNEYXkgPSBgJHtkYXl9cmRgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXNEYXkgPSBgJHtkYXl9dGhgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbE1vbnRoW21vbnRoXSArXCIgXCIgKyB0aGlzRGF5XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFycyB0aGUgY3VycmVudCBsaXN0IG9mIHRhc2tzLCB1c2VkIHdpdGggcHJvamVjdCBzZWxlY3Rpb25cclxuICAgIGNvbnN0IGNsZWFyVGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKVxyXG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJQcm9qZWN0U2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKVxyXG4gICAgICAgIHRhc2tOb3RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBEb21EaXNwbGF5LnNlbGVjdGVkUHJvamVjdE9wdGlvbihwcm9qZWN0SUQpXHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RPcHRpb24gPSAocHJvamVjdElEKSA9PiB7XHJcbiAgICAgICAgLy8gYWxlcnQocHJvamVjdElEKVxyXG4gICAgICAgIGNvbnN0IHRhc2tOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50IHByb2plY3RJbmRleCcsIHByb2plY3RJRClcclxuICAgICAgICB0YXNrTm90ZS52YWx1ZSA9IHByb2plY3RJRFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RJRClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrTm90ZSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIENsZWFycyB0aGUgbm90ZSBvZiBzZWxlY3RlZCB0YXNrLCBjYWxsZWQgd2hlbiB0YXNrIGlzIHNlbGVjdGVkXHJcbiAgICBjb25zdCBjbGVhck5vdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1jb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlVGFzaycpXHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFzaylcclxuICAgICAgICBpZihhY3RpdmVUYXNrKXtcclxuICAgICAgICAgICAgYWN0aXZlVGFzay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVUYXNrJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRhc2tOb3RlLmlubmVySFRNTCA9IGA8c2VjdGlvbiBjbGFzcz1cImVtcHR5LU5vdGVcIj48cD5ObyBUYXNrIFNlbGVjdGVkPC9wPjwvc2VjdGlvbj5gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlSGVhZGVyID0gKHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRlciAucHJvamVjdC1uYW1lJylcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvakRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkZXIgLnByb2plY3QtZGVzY3JpcHRpb24nKVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGVyIC5jdXJyZW50LWRhdGUnKVxyXG4gICAgICAgIGNvbnN0IHRoaXNEYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGN1cnJlbnRQcm9qLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcclxuICAgICAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGAke2RheU1vbnRoRm9ybWF0dGVyKHRoaXNEYXRlLmdldERhdGUoKSx0aGlzRGF0ZS5nZXRNb250aCgpKX1gIFxyXG4gICAgICAgIGN1cnJlbnRQcm9qRGVzYy50ZXh0Q29udGVudCA9IHByb2plY3REZXNjcmlwdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVRhc2tNb2RhbCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlhbG9nJylcclxuICAgICAgICBtb2RhbERpYWxvZy5pZCA9IGBtb2RhbC0ke2lkfWBcclxuICAgICAgICBtb2RhbERpYWxvZy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwiY3JlYXRlLXRhc2tcIj5cclxuICAgICAgICAgICAgICAgIDxsZWdlbmQ+Q3JlYXRlIFRhc2s8L2xlZ2VuZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFzayAxXCIgY2xhc3M9XCJjcmVhdGUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgY2xhc3M9XCJjcmVhdGUtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwidGFza1ByaW9yaXR5XCIgaWQ9XCJjcmVhdGVUYXNrUHJpb3JpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgc2VsZWN0ZWQ+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZFwiID5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiID5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJDcmVhdGVEdWVEYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRhc2stY3JlYXRlXCI+Y3JlYXRlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+YFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RNb2RhbCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0JylcclxuICAgICAgICBtb2RhbERpYWxvZy5pZCA9IGBtb2RhbFByb2plY3QtJHtpZH1gXHJcbiAgICAgICAgbW9kYWxEaWFsb2cuaW5uZXJIVE1MID0gYDxmb3JtIGFjdGlvbj1cIlwiY2xhc3M9J2NyZWF0ZSBQcm9qZWN0Jz5cclxuICAgICAgICA8bGVnZW5kPkNyZWF0ZSBQcm9qZWN0PC9sZWdlbmQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOZXcgUHJvamVjdFwiIGNsYXNzPVwiY3JlYXRlLXRpdGxlIHByb2plY3QtdGl0bGVcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgRGVzY3JpcHRpb25cIiBjbGFzcz1cImNyZWF0ZS1kZXNjIHByb2plY3QtdGl0bGVcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdC1jcmVhdGVcIj5jcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+YFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGVzIHRoZSBwcm9qZWN0LCBiZXN0IHVzZWQgd2l0aCBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgY3VycmVudCBleGlzaXRpbmcgcHJvamVjdHMuXHJcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKHRhc2ssIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0JylcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICBsaS5pZCA9IGlkXHJcbiAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2luZGl2aWR1YWxUYXNrJ1xyXG4gICAgICAgIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRhc2staXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGlkPVwidGFzay0ke2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzPVwidGFzay1uYW1lXCI+PC9sZWdlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3Rhc2sudGFza05hbWV9XCIgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cImR1ZURhdGVcIiB2YWx1ZT1cIiR7dGFzay50YXNrRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0YXNrUHJpb3JpdHlcIiBpZD1cInRhc2tQcmlvcml0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiICAke3Rhc2sudGFza1ByaW9yaXR5ID09PSAnbG93JyA/ICdzZWxlY3RlZD5sb3cnIDogJz5sb3cnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZFwiICAke3Rhc2sudGFza1ByaW9yaXR5ID09PSAnbWVkJyA/ICdzZWxlY3RlZD5tZWQnIDogJz5tZWQnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiAke3Rhc2sudGFza1ByaW9yaXR5ID09PSAnaGlnaCcgPyAnc2VsZWN0ZWQ+aGlnaCcgOiAnPmhpZ2gnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb21wbGV0ZVwiIGlkPVwiY29tcGxldGVcIiAke3Rhc2sudGFza0NvbXBsZXRlID09IHRydWUgPyAnQ2hlY2tlZCcgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz1cImRlbGV0ZVRhc2tcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgYFxyXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZChsaSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKVxyXG4gICAgICAgIGxpLnJlbW92ZSgpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU5vdGUgPSAodGFzayxwcm9qZWN0TmFtZSwgaWQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLWNvbnRhaW5lcicpXHJcbiAgICAgICAgdGFza05vdGUuaWQgPSBcIm5vdGUtXCIraWRcclxuICAgICAgICBjb25zdCB0YXNrQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpZH0gLnRhc2stbGVmdGApXHJcbiAgICAgICAgdGFza0FjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmVUYXNrJylcclxuICAgICAgICB0YXNrTm90ZS5pbm5lckhUTUwgPSBgPHNlY3Rpb24gY2xhc3M9XCJ0YXNrLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRhc2stbmFtZS1iaWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImR1ZS1kYXRlXCI+RHVlIDxzcGFuPiR7dGFzay50YXNrRGF0ZS5nZXREYXRlKCl9LyR7dGFzay50YXNrRGF0ZS5nZXRNb250aCgpKzF9LyR7dGFzay50YXNrRGF0ZS5nZXRGdWxsWWVhcigpfTwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiA+UHJpb3JpdHkgPHNwYW4gY2xhc3M9XCJwcmlvcml0eVwiPiR7dGFzay50YXNrUHJpb3JpdHl9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRhc2stbm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tEZXNjXCI+VGFzayBEZXRhaWxzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInRhc2tEZXNjXCIgaWQ9XCJ0YXNrRGVzY1wiIGNvbHM9XCIzMFwiIHZhbHVlPScke3Rhc2sudGFza0Rlc2N9JyByb3dzPVwiMTBcIiBjbGFzcz1cInRhc2tkZXNjcmlwdGlvblwiPiR7dGFzay50YXNrRGVzY308L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+YFxyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc3BsYXlzIHRoZSBUYXNrIGRldGFpbHMgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNjcmVlbiwgc2hvdWxkIGJlIGFjdGl2YXRlZCB3aGVuIHRhc2sgaXMgY2xpY2tlZCBmcm9tIHRoZSB0YXNrIGxpc3RcclxuICAgIGNvbnN0IHRhc2tEaXNwbGF5ID0gKHRhc2sscHJvamVjdE5hbWUsIHRhc2tJRCkgPT4ge1xyXG4gICAgICAgIGNsZWFyTm90ZSgpXHJcbiAgICAgICAgaWYgKHRhc2sgJiYgcHJvamVjdE5hbWUgJiYgdGFza0lEKXtcclxuICAgICAgICAgICAgY3JlYXRlTm90ZSh0YXNrLHByb2plY3ROYW1lLCB0YXNrSUQpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZS1iaWcnKVxyXG4gICAgICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2sudGFza05hbWVcclxuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JylcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay50YXNrUHJpb3JpdHlcclxuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKVxyXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHRhc2sudGFza0RhdGVcclxuICAgICAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2MnKVxyXG4gICAgICAgICAgICB0YXNrRGVzYy52YWx1ZSA9IHRhc2sudGFza0Rlc2NcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhck5vdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIHtjcmVhdGVUYXNrLHJlbW92ZVRhc2ssIGNsZWFyVGFzaywgdGFza0Rpc3BsYXksIGNsZWFyTm90ZSwgdXBkYXRlSGVhZGVyLCBjcmVhdGVUYXNrTW9kYWwsIGNsZWFyUHJvamVjdFNlbGVjdGlvbiwgc2VsZWN0ZWRQcm9qZWN0T3B0aW9ufVxyXG59KSgpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbURpc3BsYXkiLCJpbXBvcnQgcHJvamVjdEhhbmRsZXIgZnJvbSBcIi4uL09iamVjdHMvcHJvamVjdEhhbmRsZXJcIjtcclxuaW1wb3J0IERvbURpc3BsYXkgZnJvbSBcIi4vZGlzcGxheWVyXCI7XHJcbmltcG9ydCBjcmVhdGVUYXNrcyBmcm9tIFwiLi4vT2JqZWN0cy90YXNrc1wiO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi4vT2JqZWN0cy9wcm9qZWN0c1wiO1xyXG5cclxuY29uc3QgZG9tSW50ZXJhY3Rpb24gPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICAvLyBUaGUgQ3VycmVudCBQcm9qZWN0IElkZW50aWZpZXIgZ2l2ZW4gbGlzdCBvZiBQcm9qZWN0cywgbWFuYWdlZCB0aHJvdWdoIGluZGV4XHJcbiAgICBsZXQgUHJvamVjdElEID0gMDtcclxuICAgIGNvbnN0IGdldFByb2plY3RJRCA9ICgpID0+IFByb2plY3RJRFxyXG4gICAgY29uc3Qgc2V0UHJvamVjdElEID0gKG5ld0lEKSA9PiBQcm9qZWN0SUQgPSBuZXdJRFxyXG5cclxuICAgIC8vIFRoZSBjdXJyZW50IFByb2plY3QgaGFuZGxlciwgTmVlZHMgdG8gYmUgaW5pdGlhbGlzZWQgd2hlbiB0aGUgZnVuY3Rpb24gZmlyc3QgcnVucyB0byBmdW5jdGlvbiBwcm9wZXJseVxyXG4gICAgbGV0IGdsb2JhbFByb2plY3QgPSAnJ1xyXG4gICAgY29uc3Qgc2V0QWxsUHJvamVjdCA9IChhbGxQcm9qKSA9PiBnbG9iYWxQcm9qZWN0ID0gYWxsUHJvalxyXG4gICAgY29uc3QgZ2V0QWxsUHJvamVjdCA9ICgpID0+IGdsb2JhbFByb2plY3RcclxuXHJcbiAgICAvLyBTYXZpbmcgZnVuY3Rpb25hbGl0eSwgUnVucyBldmVyeSA1IHNlY29uZHNcclxuICAgIGNvbnN0IHNhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3REYXRhJywgZ2V0QWxsUHJvamVjdCgpLmV4cG9ydFByb2plY3QoKSkgXHJcbiAgICB9XHJcbiAgICAvLyBEZXRlcm1pbmVzIHRoZSBzYXZpbmcgZHVyYXRpb25cclxuICAgIGNvbnN0ICBwZXJpb2RpY1NhdmUgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICBzYXZlKClcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gT24gdGhlIGluaXRpYWwgbG9hZCwgc2V0IGl0IHVwIHdpdGggdGhlIGZpcnN0IGNob3NlbiBwcm9qZWN0LCBzaG91bGQgYmUgY2hhbmdlZCB0byBsYXN0IHNhdmVkIHByb2plY3QgZG93biB0aGUgbGluZVxyXG4gICAgY29uc3QgaW5pdGlhbExvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRPTSBmdWxseSBsb2FkZWQgYW5kIHBhcnNlZFwiKTtcclxuICAgICAgICAgICAgRG9tRGlzcGxheS5jcmVhdGVUYXNrTW9kYWwoYDBgKVxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyKGdldEFsbFByb2plY3QoKS5zaG93UHJvamVjdCgpWzBdLCAwKVxyXG4gICAgICAgICAgICB0YXNrTW9kYWxPcGVuKGdldEFsbFByb2plY3QoKS5zaG93UHJvamVjdCgpWzBdLCBgMGApXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2plY3Qgc2VsZWN0aW9uIGFuZCB1cGRhdGluZyB0aGUgdGFza3MgdmlzaWJsZSBiYXNlZCBvbiB0aGUgY3VycmVudCBzZWxlY3RlZCBwcm9qZWN0XHJcbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHByb2plY3Qgd2l0aCBzZXRQcm9qZWN0SUQuXHJcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uT3B0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKTtcclxuICAgICAgICBwcm9qZWN0TW9kYWxPcGVuKClcclxuICAgICAgICByZW5kZXJQcm9qZWN0T3B0aW9ucyggY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcyggY3VycmVudFByb2plY3QpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gT24gZHJvcGRvd24gY2hhbmdlLCByZVJlbmRlciB0aGUgVGFzayBMaXN0c1xyXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RUYXNrcyA9ICggY3VycmVudFByb2plY3QpID0+e1xyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PntcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZ2V0QWxsUHJvamVjdCgpLnNob3dQcm9qZWN0KClbZS50YXJnZXQudmFsdWVdXHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuY3JlYXRlVGFza01vZGFsKGAke2dldFByb2plY3RJRCgpfWApXHJcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Rpb25SZW5kZXIoc2VsZWN0ZWRQcm9qZWN0LCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgdGFza01vZGFsT3BlbihzZWxlY3RlZFByb2plY3QsIGAke2dldFByb2plY3RJRCgpfWApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW5kZXIgdGhlIGRyb3Bkb3duIG1lbnUgY29udGFpbmluZyBhbGwgcHJvamVjdHMgd2UgY3VycmVudGx5IGhhdmUgYWNjZXNzIHRvXHJcbiAgICBjb25zdCByZW5kZXJQcm9qZWN0T3B0aW9ucyA9ICggY3VycmVudFByb2plY3QpID0+IHtcclxuICAgICAgICBEb21EaXNwbGF5LmNsZWFyUHJvamVjdFNlbGVjdGlvbigpXHJcbiAgICAgICAgZ2V0QWxsUHJvamVjdCgpLnNob3dQcm9qZWN0KCkuZm9yRWFjaCgocHJvamVjdCwgcHJvakluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXNQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgICAgICAgICAgdGhpc1Byb2plY3QudmFsdWUgPSBwcm9qSW5kZXhcclxuICAgICAgICAgICAgdGhpc1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKVxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hcHBlbmQodGhpc1Byb2plY3QpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVuZGVyIHRoZSBQYWdlIGZvciB0aGUgY3VycmVudGx5IFNlbGVjdGVkIFByb2plY3QgZ2l2ZW4gdGhlIHByb2plY3QgT2JqZWN0IGFuZCBwcm9qZWN0IElkLCBzZXQgdGhlIEdsb2JhbCBQcm9qZWN0IElEXHJcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyID0gKHNlbGVjdGVkUHJvamVjdCwgcHJvamVjdElEKSA9PiB7XHJcbiAgICAgICAgRG9tRGlzcGxheS5jbGVhclRhc2soKVxyXG4gICAgICAgIHNldFByb2plY3RJRChwcm9qZWN0SUQpXHJcbiAgICAgICAgLy8gSWYgdGhlIHByb2plY3QgZG9lcyBub3QgZ2l2ZSBOdWxsXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkUHJvamVjdCl7XHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuc2VsZWN0ZWRQcm9qZWN0T3B0aW9uKHByb2plY3RJRClcclxuICAgICAgICAgICAgRG9tRGlzcGxheS51cGRhdGVIZWFkZXIoc2VsZWN0ZWRQcm9qZWN0LmdldE5hbWUoKSwgc2VsZWN0ZWRQcm9qZWN0LmdldERlc2MoKSlcclxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaywgdGFza0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBEb21EaXNwbGF5LmNyZWF0ZVRhc2sodGFzay5nZXRBbGwoKSwgYCR7Z2V0UHJvamVjdElEKCl9cCR7dGFza0luZGV4fWApXHJcbiAgICAgICAgICAgICAgICB0YXNrVXBkYXRlKHNlbGVjdGVkUHJvamVjdCwgdGFzaywgYCR7Z2V0UHJvamVjdElEKCl9cCR7dGFza0luZGV4fWAsIHRhc2tJbmRleClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGFza09wZW4oc2VsZWN0ZWRQcm9qZWN0KSAgICBcclxuICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIE9wZW5zIHRoZSBFeHBhbmRlZCB2aWV3IG9mIHRoZSBQcm9qZWN0LCBzaG93IGxpc3Qgb2YgdGFza3NcclxuICAgIGNvbnN0IHRhc2tPcGVuID0gKGN1cnJlbnRQcm9qKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5kaXZpZHVhbFRhc2snKTtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKCAodGFzaywgdGFza0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJRCA9IGAke2dldFByb2plY3RJRCgpfXAke3Rhc2tJbmRleH1gXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbmZvID0gY3VycmVudFByb2ouZ2V0VGFza3MoKVt0YXNrSW5kZXhdXHJcbiAgICAgICAgICAgIC8vIGZvciBlYWNoIG9mIHRoZSB0YXNrcywgZXhwYW5kIG9uIGNsaWNrLCBzaG93aW5nIHRoZSB0YXNrIGluZm9ybWF0aW9uXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgICAgIERvbURpc3BsYXkudGFza0Rpc3BsYXkodGFza0luZm8uZ2V0QWxsKCksY3VycmVudFByb2ouZ2V0TmFtZSgpLHRhc2tJRClcclxuICAgICAgICAgICAgICAgIG5vdGVVcGRhdGUodGFza0luZm8sIHRhc2tJRClcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gYGRlbGV0ZVRhc2tgKXtcclxuICAgICAgICAgICAgICAgICAgICBEb21EaXNwbGF5LnJlbW92ZVRhc2sodGFza0lEKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qLnJlbW92ZVRhc2sodGFza0luZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIERvbURpc3BsYXkudGFza0Rpc3BsYXkoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gQ3JlYXRlIGFuIGV4cGFuZGVkIG5vdGUgZm9yIGVhY2ggdGFzayBhbmQgc2F2ZSB0aGUgY2hhbmdlZCB2YWx1ZXNcclxuICAgIGNvbnN0IG5vdGVVcGRhdGUgPSAoY3VycmVudFRhc2ssIHRhc2tJRCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25vdGUtJHt0YXNrSUR9ICN0YXNrRGVzY2ApXHJcbiAgICAgICAgaWYgKHRhc2tEZXNjKSB7XHJcbiAgICAgICAgICAgIHRhc2tEZXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFzay5jaGFuZ2VEZXNjKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuY2xlYXJOb3RlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmUgYW55IGNoYW5nZXMgdG8gdGhlIGluZGl2aWR1YWwgdGFzayBpbnB1dHMsIGFuZCBkZWxldGUgdGFza3Mgd2l0aCBhIGJ1dHRvbiBjbGlja1xyXG4gICAgY29uc3QgdGFza1VwZGF0ZSA9IChzZWxlY3RlZFByb2plY3QsIGN1cnJlbnRUYXNrLCB0YXNrSUQsIHRhc2tJbmRleCkgPT4ge1xyXG4gICAgICAgIC8vIGNoYW5nZSBmb3IgZWFjaFxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza0lEfSAudGFzay10aXRsZWApXHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHt0YXNrSUR9ICN0YXNrUHJpb3JpdHlgKVxyXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza0lEfSAjY29tcGxldGVgKVxyXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHt0YXNrSUR9ICNkdWVEYXRlYClcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNub3RlLSR7dGFza0lEfSAjdGFza0Rlc2NgKVxyXG4gICAgICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gY3VycmVudFRhc2suY2hhbmdlTmFtZShlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgdGFza0NvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZT0+IGN1cnJlbnRUYXNrLmNoYW5nZUNvbXBsZXRpb24oKSlcclxuICAgICAgICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IGN1cnJlbnRUYXNrLmNoYW5nZVByaW9yaXR5KGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICB0YXNrRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gY3VycmVudFRhc2suY2hhbmdlRGF0ZShlLnRhcmdldC52YWx1ZSkpXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IERlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza0lEfSAuZGVsZXRlVGFza2ApXHJcbiAgICAgICAgLy8gRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRhc2tJbmRleClcclxuICAgICAgICAvLyAgICAgRG9tRGlzcGxheS5yZW1vdmVUYXNrKHRhc2tJRClcclxuICAgICAgICAvLyAgICAgc2VsZWN0ZWRQcm9qZWN0LnJlbW92ZVRhc2sodGFza0luZGV4KVxyXG4gICAgICAgIC8vICAgICBEb21EaXNwbGF5LnRhc2tEaXNwbGF5KCkgICAgXHJcbiAgICAgICAgLy8gfSkgXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBNT0RBTFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gICAgLy8gQWRkIHRhc2sgTW9kYWwgdG8gY3JlYXRlIG5ldyB0YXNrcyBmb3IgdGhlIGN1cnJlbnQgcHJvamVjdFxyXG4gICAgY29uc3QgdGFza01vZGFsT3BlbiA9ICh0aGlzUHJvaiwgaWQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaWFsb2cnKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jcmVhdGUnKVxyXG4gICAgICAgIGNvbnN0IHRhc2tPcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XHJcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLmNyZWF0ZS10YXNrJylcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzUHJvaiAmJiBnZXRBbGxQcm9qZWN0KCkuZ2V0Q291bnQoKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tNb2RhbCA9IHRhc2tNb2RhbEdldCh0aGlzUHJvaiwgaWQsIHRhc2tNb2RhbCwgY3JlYXRlQnV0dG9uKVxyXG4gICAgICAgICAgICB0YXNrT3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgdGFza0Zvcm0ucmVzZXQoKVxyXG4gICAgICAgICAgICAgICAgdGFza01vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3VGFza01vZGFsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBwcm9qZWN0IG1vZGFsLCBjcmVhdGUgbmV3IHByb2plY3QsIGFuZCBzZXQgaXQgYXMgY3VycmVudCBwcm9qZWN0LCByZWZyZXNoIHRoZSBwYWdlXHJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWxPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRpYWxvZycpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNyZWF0ZScpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBwcm9qZWN0TW9kYWxHZXQocHJvamVjdE1vZGFsLCBjcmVhdGVCdXR0b24pXHJcbiAgICAgICAgcHJvamVjdE9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0TW9kYWxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBNb2RhbCBGb3IgRGVsZXRpbmcgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgUHJvamVjdFxyXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZU1vZGFsID0gKChjdXJyZW50UHJvamVjdCwgcHJvamVjdE1vZGFsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVsZXRlJylcclxuICAgICAgICBjb25zdCBpZ25vcmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWdub3JlLWRlbGV0ZScpXHJcbiAgICAgICAgLy8gT24gRGVsZXRlLCBSZWZyZXNoIHRoZSBwYWdlIGludG8gdGhlIGZpcnN0IFByb2plY3QgdGhhdCBFeGlzdHMsIGFuZCByZXNldCB0aGUgTm90ZXNcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgaWYoZ2V0QWxsUHJvamVjdCgpLmdldENvdW50KCk+MSl7XHJcbiAgICAgICAgICAgICAgICBnZXRBbGxQcm9qZWN0KCkucmVtb3ZlUHJvamVjdChnZXRQcm9qZWN0SUQoKSlcclxuICAgICAgICAgICAgICAgIHNldFByb2plY3RJRCgwKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdE9wdGlvbnMoIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcyggY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgICAgICAgICBpZihnZXRBbGxQcm9qZWN0KCkuc2hvd1Byb2plY3QoKVswXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvblJlbmRlcihnZXRBbGxQcm9qZWN0KCkuc2hvd1Byb2plY3QoKVswXSwgMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIERvbURpc3BsYXkuY2xlYXJOb3RlKClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnVGhlcmUgTXVzdCBiZSBNaW5pbXVtIG9mIDEgUHJvamVjdCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgc2F2ZSgpICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlnbm9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBPcGVuaW5nIGEgZGVsZXRlIG1vZGVsIGZvciB0aGUgcHJvamVjdCBvbiBidXR0b24gY2xpY2tcclxuICAgIGNvbnN0IHByb2plY3REZWxldGVNb2RhbE9wZW4gPSAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBkZWxldGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlbGV0ZS1kaWFsb2cnKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0T3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtdGhpcy1wcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdE1vZGFsID0gcHJvamVjdERlbGV0ZU1vZGFsKGN1cnJlbnRQcm9qZWN0LCBkZWxldGVNb2RhbClcclxuICAgICAgICBwcm9qZWN0T3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgICAgICBkZWxldGVNb2RhbC5zaG93TW9kYWwoKTtcclxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdE1vZGFsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KSgpXHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSB0YXNrIGFuZCBhZGQgaXQgdG8gdGhlIGN1cnJlbnQgcHJvamVjdCwgcmVyZW5kZXIgdGhlIHBhZ2VcclxuICAgIGNvbnN0IHRhc2tNb2RhbEdldCA9ICgodGhpc1Byb2osIGlkLCB0YXNrTW9kYWwsIGNyZWF0ZUJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrSW5mbyA9IHRhc2tNb2RhbEluZm8oKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFza3ModGFza0luZm8uTmFtZSwgdGFza0luZm8uZGVzYywgbmV3IERhdGUodGFza0luZm8uZGF0ZSksIHRhc2tJbmZvLnByaW9yaXR5LCB0YXNrSW5mby5jb21wbGV0ZSlcclxuICAgICAgICAgICAgdGhpc1Byb2ouYWRkVGFzayhuZXdUYXNrKVxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyKHRoaXNQcm9qLCBpZClcclxuXHJcbiAgICAgICAgICAgIHRhc2tNb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIHNhdmUoKSAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgTmV3IHByb2plY3Qgc2V0IGl0XHJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWxHZXQgPSAoKHByb2plY3RNb2RhbCwgY3JlYXRlQnV0dG9uKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gcHJvamVjdE1vZGFsSW5mbygpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RJbmZvLk5hbWUsIHByb2plY3RJbmZvLmRlc2MpXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgZ2V0QWxsUHJvamVjdCgpLmFkZFByb2plY3QobmV3UHJvamVjdClcclxuICAgICAgICAgICAgc2V0UHJvamVjdElEKGdldEFsbFByb2plY3QoKS5nZXRDb3VudCgpLTEpXHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuY3JlYXRlVGFza01vZGFsKGdldEFsbFByb2plY3QoKS5nZXRDb3VudCgpLTEpXHJcbiAgICAgICAgICAgIHRhc2tNb2RhbE9wZW4obmV3UHJvamVjdCwgZ2V0QWxsUHJvamVjdCgpLmdldENvdW50KCktMSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3RTZWxlY3Rpb24nKTtcclxuICAgICAgICAgICAgcmVuZGVyUHJvamVjdE9wdGlvbnMoIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdFRhc2tzKCBjdXJyZW50UHJvamVjdClcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Rpb25SZW5kZXIobmV3UHJvamVjdCwgZ2V0QWxsUHJvamVjdCgpLmdldENvdW50KCktMSlcclxuXHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICBzYXZlKCkgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWxJbmZvID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRpdGxlLnByb2plY3QtdGl0bGUnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1kZXNjLnByb2plY3QtdGl0bGUnKVxyXG4gICAgICAgIHJldHVybiB7TmFtZTpwcm9qZWN0TmFtZS52YWx1ZSwgZGVzYzpwcm9qZWN0RGVzYy52YWx1ZX1cclxuICAgIH1cclxuICAgIGNvbnN0IHRhc2tNb2RhbEluZm8gPSAoKSA9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdGl0bGUnKVxyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1kZXNjJylcclxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlVGFza1ByaW9yaXR5JylcclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDcmVhdGVEdWVEYXRlJylcclxuICAgICAgICAvLyBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGUnKVxyXG4gICAgICAgIC8vIE5hbWU/OiBzdHJpbmcsIGRlc2M/OiBzdHJpbmcsIGRhdGU/OiBEYXRlLCBwcmlvcml0eT86IHN0cmluZywgY29tcGxldGU/OiBib29sZWFuXHJcbiAgICAgICAgLy8gcmV0dXJuIHRhc2tOYW1lLnZhbHVlLCB0YXNrRGVzYy52YWx1ZSwgdGFza0RhdGUudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgY29tcGxldGU6dGFza0NvbXBsZXRlLmNoZWNrZWRcclxuICAgICAgICByZXR1cm4ge05hbWU6dGFza05hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIGRlc2M6dGFza0Rlc2MudmFsdWUsXHJcbiAgICAgICAgICAgIGRhdGU6dGFza0RhdGUudmFsdWUgfHwgbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgcHJpb3JpdHk6dGFza1ByaW9yaXR5LnZhbHVlLCBcclxuICAgICAgICAgICAgLy8gY29tcGxldGU6dGFza0NvbXBsZXRlLmNoZWNrZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0U2VsZWN0aW9uT3B0aW9uLCBpbml0aWFsTG9hZCwgc2V0QWxsUHJvamVjdH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbUludGVyYWN0aW9uO1xyXG4iLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuICAgIGxldCBzdG9yYWdlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xyXG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxyXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxyXG4gICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxyXG4gICAgICAgICAgLy8gRmlyZWZveFxyXG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXHJcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgICBzdG9yYWdlICYmXHJcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlQXZhaWxhYmxlXHJcbiAgIiwiLy8gaWYgaW4gbG9jYWwgc3RvcmFnZSBsb2FkIHRob3NlXHJcbmltcG9ydCBjcmVhdGVUYXNrcyBmcm9tIFwiLi90YXNrc1wiXHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5cclxuY29uc3QgcHJvamVjdEhhbmRsZXIgPSAocHJvamVjdD1bXSkgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IHByb2plY3Q7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdEhhbmRsZXIgPSAobmV3RGF0YSkgPT4gY3VycmVudFByb2plY3RzID0gbmV3RGF0YTtcclxuXHJcbiAgICBsZXQgcHJvamVjdENvdW50ID0gY3VycmVudFByb2plY3RzLmxlbmd0aDtcclxuICAgIGNvbnN0IGdldENvdW50ID0gKCkgPT4gcHJvamVjdENvdW50O1xyXG4gICAgY29uc3Qgc2V0Q291bnQgPSAobmV3Q291bnQpID0+ICBwcm9qZWN0Q291bnQgPSBuZXdDb3VudFxyXG5cclxuICAgIGNvbnN0IGxvYWRQcm9qZWN0ID0gKHByb2plY3REYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcnLCBwcm9qZWN0RGF0YSlcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gSlNPTi5wYXJzZShwcm9qZWN0RGF0YSk7XHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RIYW5kbGVyKClcclxuICAgICAgICBmb3IoY29uc3QgcHJvaiBpbiBuZXdQcm9qZWN0KXtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KClcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QuaW1wb3J0UHJvamVjdChuZXdQcm9qZWN0W3Byb2pdWzBdKVxyXG4gICAgICAgICAgICBmb3IoY29uc3QgdGFzayBpbiBuZXdQcm9qZWN0W3Byb2pdWzFdKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gY3JlYXRlVGFza3MoKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2suaW1wb3J0VGFza3MobmV3UHJvamVjdFtwcm9qXVsxXVt0YXNrXSlcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2soY3VycmVudFRhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb2Nlc3NlZFByb2plY3QuYWRkUHJvamVjdChjdXJyZW50UHJvamVjdClcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q291bnQocHJvY2Vzc2VkUHJvamVjdC5zaG93UHJvamVjdCgpLmxlbmd0aClcclxuICAgICAgICBuZXdQcm9qZWN0SGFuZGxlcihwcm9jZXNzZWRQcm9qZWN0LnNob3dQcm9qZWN0KCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwb3J0UHJvamVjdCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb2xsZWN0aW9ucyA9IHt9XHJcbiAgICAgICAgY3VycmVudFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIHByb2pJbmRleCkgPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gW11cclxuICAgICAgICBwcm9qZWN0Q29sbGVjdGlvbnNbcHJvakluZGV4XSA9IFtwcm9qZWN0LmV4cG9ydFByb2plY3QoKSwgcHJvamVjdFRhc2tzXVxyXG4gICAgICAgIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpXHJcbiAgICAgICAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0Q29sbGVjdGlvbnNbcHJvakluZGV4XVsxXS5wdXNoKHRhc2suZXhwb3J0VGFzaygpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocHJvamVjdENvbGxlY3Rpb25zKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dQcm9qZWN0ID0gKCkgPT4gY3VycmVudFByb2plY3RzO1xyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXHJcbiAgICAgICAgKytwcm9qZWN0Q291bnRcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIGdldENvdW50KCkpXHJcbiAgICAgICAgaWYgKGluZGV4IDwgZ2V0Q291bnQoKSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS1wcm9qZWN0Q291bnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtzaG93UHJvamVjdCwgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgbG9hZFByb2plY3QsIGV4cG9ydFByb2plY3QsIGN1cnJlbnRQcm9qZWN0cywgZ2V0Q291bnR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RIYW5kbGVyIiwiY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZT0nJywgcHJvamVjdERlc2M9JycpID0+IHtcclxuICAgIGxldCBuYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICBsZXQgZGVzYyA9IHByb2plY3REZXNjO1xyXG4gICAgbGV0IHRhc2tMaXN0ID0gW107XHJcbiAgICBsZXQgdGFza0NvdW50ID0gdGFza0xpc3QubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGdldENvdW50ID0gKCkgPT4gdGFza0NvdW50O1xyXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcbiAgICBjb25zdCBnZXREZXNjID0gKCkgPT4gZGVzYztcclxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza0xpc3Q7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlTmFtZSA9IChuZXdOYW1lKSA9PiBuYW1lID0gbmV3TmFtZSA7XHJcbiAgICBjb25zdCBjaGFuZ2VEZXNjID0gKG5ld0Rlc2MpID0+IGRlc2MgPSBuZXdEZXNjIDtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKG5ld1Rhc2spID0+IHtcclxuICAgICAgICArK3Rhc2tDb3VudCBcclxuICAgICAgICB0YXNrTGlzdC5wdXNoKG5ld1Rhc2spXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA8IGdldENvdW50KCkpIHtcclxuICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS10YXNrQ291bnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1wb3J0UHJvamVjdCA9ICh0YXNrUHJvamVjdCkgPT4ge1xyXG4gICAgICAgIHRhc2tQcm9qZWN0ID0gSlNPTi5wYXJzZSh0YXNrUHJvamVjdCk7XHJcbiAgICAgICAgbmFtZSA9IHRhc2tQcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgZGVzYyA9IHRhc2tQcm9qZWN0LmRlc2M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwb3J0UHJvamVjdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYWxsID0ge25hbWUsZGVzY31cclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYWxsKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7Z2V0Q291bnQsZ2V0TmFtZSxnZXREZXNjLGdldFRhc2tzLGNoYW5nZU5hbWUsY2hhbmdlRGVzYyxhZGRUYXNrLHJlbW92ZVRhc2ssaW1wb3J0UHJvamVjdCxleHBvcnRQcm9qZWN0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdCIsImNvbnN0IGNyZWF0ZVRhc2tzID0gKE5hbWU9JycsZGVzYz0nJyxkYXRlPW5ldyBEYXRlKCkscHJpb3JpdHk9J2xvdycsY29tcGxldGU9ZmFsc2UpID0+IHtcclxuICAgIGxldCB0YXNrTmFtZSA9IE5hbWU7XHJcbiAgICBsZXQgdGFza0Rlc2MgPSBkZXNjO1xyXG4gICAgbGV0IHRhc2tEYXRlID0gZGF0ZTtcclxuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIGxldCB0YXNrQ29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4gdGFza0RhdGU7XHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gdGFza05hbWU7XHJcbiAgICBjb25zdCBnZXREZXNjID0gKCkgPT4gdGFza0Rlc2M7XHJcbiAgICBjb25zdCBnZXRQcmlvciA9ICgpID0+IHRhc2tQcmlvcml0eTtcclxuICAgIGNvbnN0IGdldENvbXBsZXRlID0gKCkgPT4gdGFza0NvbXBsZXRlO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZURhdGUgPSAobmV3RGF0ZSkgPT4gdGFza0RhdGUgPSBuZXcgRGF0ZShuZXdEYXRlKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IChwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gJ2xvdycpe1xyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkgPSAnbG93J1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICdtZWQnKSB7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eSA9ICdtZWQnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5ID0gJ2hpZ2gnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VOYW1lID0gKG5ld05hbWUpID0+IHRhc2tOYW1lID0gbmV3TmFtZSA7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGVzYyA9IChuZXdEZXNjKSA9PiB0YXNrRGVzYyA9IG5ld0Rlc2MgO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNvbXBsZXRpb24gPSAoKSA9PiB0YXNrQ29tcGxldGUgPyB0YXNrQ29tcGxldGUgPSBmYWxzZSA6IHRhc2tDb21wbGV0ZSA9IHRydWUgO1xyXG5cclxuICAgIGNvbnN0IGdldEFsbCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4ge3Rhc2tOYW1lOiB0YXNrTmFtZSwgdGFza0Rlc2M6IHRhc2tEZXNjLCB0YXNrRGF0ZTogdGFza0RhdGUsIHRhc2tQcmlvcml0eTogdGFza1ByaW9yaXR5LHRhc2tDb21wbGV0ZTogdGFza0NvbXBsZXRlfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbXBvcnRUYXNrcyA9ICh0YXNrT2JqKSA9PiB7XHJcbiAgICAgICAgdGFza09iaiA9IEpTT04ucGFyc2UodGFza09iaik7XHJcbiAgICAgICAgdGFza05hbWUgPSB0YXNrT2JqLnRhc2tOYW1lO1xyXG4gICAgICAgIHRhc2tEZXNjID0gdGFza09iai50YXNrRGVzYztcclxuICAgICAgICB0YXNrRGF0ZSA9bmV3IERhdGUodGFza09iai50YXNrRGF0ZSk7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5ID0gdGFza09iai50YXNrUHJpb3JpdHk7XHJcbiAgICAgICAgdGFza0NvbXBsZXRlID0gdGFza09iai50YXNrQ29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhwb3J0VGFzayA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYWxsID0ge3Rhc2tOYW1lLHRhc2tEZXNjLHRhc2tEYXRlLHRhc2tQcmlvcml0eSx0YXNrQ29tcGxldGV9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFsbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldERhdGUsIGdldE5hbWUsIGdldERlc2MsIGdldFByaW9yLCBnZXRDb21wbGV0ZSwgY2hhbmdlRGF0ZSwgY2hhbmdlUHJpb3JpdHksIGNoYW5nZU5hbWUsIGNoYW5nZURlc2MsIGNoYW5nZUNvbXBsZXRpb24saW1wb3J0VGFza3MsZXhwb3J0VGFzayxnZXRBbGx9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFza3MiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVUYXNrcyBmcm9tIFwiLi9PYmplY3RzL3Rhc2tzXCJcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vT2JqZWN0cy9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgcHJvamVjdEhhbmRsZXIgZnJvbSBcIi4vT2JqZWN0cy9wcm9qZWN0SGFuZGxlclwiO1xyXG5pbXBvcnQgc3RvcmFnZUF2YWlsYWJsZSBmcm9tIFwiLi9PYmplY3RzL2xvY2FsU3RvcmFnZUhhbmRsZXJcIjtcclxuaW1wb3J0IERvbURpc3BsYXkgZnJvbSBcIi4vRG9taGFuZGxlci9kaXNwbGF5ZXJcIjtcclxuaW1wb3J0IGRvbUludGVyYWN0aW9uIGZyb20gXCIuL0RvbWhhbmRsZXIvZG9tSW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuLy8gaW1wb3J0ICcuL0ltYWdlcy9sb2dvMzJ4MzIuaWNvJ1xyXG5cclxuLy8gSW5pdGlhbGlzZSB0aGUgVGVtcGxhdGUgUHJvamVjdFxyXG5jb25zdCB0YXNrMSA9IGNyZWF0ZVRhc2tzKCdUYXNrIDEnLCdUaGlzIGlzIHRoZSBGaXJzdCBUYXNrJyxuZXcgRGF0ZSgpLCdsb3cnKTtcclxuY29uc3QgcHJvaiA9IGNyZWF0ZVByb2plY3QoJ1Byb2plY3QgMScsICdUaGlzIGlzIHRoZSBkZWZhdWx0IFByb2plY3QnKTtcclxuY29uc3QgYWxsUHJvaiA9IHByb2plY3RIYW5kbGVyKClcclxucHJvai5hZGRUYXNrKHRhc2sxKTtcclxuYWxsUHJvai5hZGRQcm9qZWN0KHByb2opO1xyXG5cclxuLy8gSWYgUHJvamVjdCBleGlzdHMsIExvYWQgdGhhdCBQcm9qZWN0LCBlbHNlLCB1dGlsaXNlIHRoZSB0ZW1wbGF0ZSBwcm9qZWN0XHJcbmNvbnN0IHN0b3JhZ2VTdGF0dXMgPSBzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKTtcclxuc3RvcmFnZVN0YXR1cyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdERhdGEnKSA/IGFsbFByb2oubG9hZFByb2plY3QobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3REYXRhJykpIDogYWxsUHJvalxyXG5cclxuXHJcbmRvbUludGVyYWN0aW9uLmluaXRpYWxMb2FkKGFsbFByb2opXHJcbmRvbUludGVyYWN0aW9uLnNldEFsbFByb2plY3QoYWxsUHJvailcclxuZG9tSW50ZXJhY3Rpb24ucHJvamVjdFNlbGVjdGlvbk9wdGlvbihhbGxQcm9qKVxyXG5kb21JbnRlcmFjdGlvblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==