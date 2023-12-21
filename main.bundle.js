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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywyR0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5SEFBeUgsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sOENBQThDLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNuUSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxlQUFlLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsY0FBYyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFL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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUM7QUFDTTtBQUNPO0FBQ087QUFDYjtBQUNTO0FBQ3JDO0FBQ3BCO0FBQ0E7QUFDQSxjQUFjLDBEQUFXO0FBQ3pCLGFBQWEsNkRBQWE7QUFDMUIsZ0JBQWdCLG1FQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdFQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrRUFBYztBQUNkLGtFQUFjO0FBQ2Qsa0VBQWM7QUFDZCxrRUFBYztBQUNkO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvRG9taGFuZGxlci9kaXNwbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL0RvbWhhbmRsZXIvZG9tSW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL09iamVjdHMvbG9jYWxTdG9yYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvT2JqZWN0cy9wcm9qZWN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvT2JqZWN0cy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvT2JqZWN0cy90YXNrcy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9JbWFnZXMvYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsNjAwOzEsODAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcclxuICAgIFxyXG4gICAgLS1wcmVtaXVtQmxhY2s6IzM3MmYyZjtcclxuICAgIC0tcHJlbWl1bUxpZ2h0OiNmZGZmZmNmZjtcclxuICAgIC0tZGFyazogIzU0NDg0ODtcclxuICAgIC0tbWVkLWRhcms6IHJnYig1OSwgNTUsIDU1KTtcclxuICAgIC0tYmctY29sb3I6ICNhZmE3YTU7XHJcbiAgICAtLWxpZ2h0OiAjZjRmM2VlZmY7XHJcbiAgICAtLW1lZC1saWdodDogI2UwYWZhMGZmO1xyXG5cclxuICAgIC8qIEZvbnQgU2l6ZSAqL1xyXG4gICAgLS1oZWFkZXItdGl0bGU6IDIuNnJlbTtcclxuICAgIC0tbm90ZS1kZXNjOiAxLjVyZW07XHJcbiAgICAtLXJlZ3VsYXItZGVzYzogMS4zcmVtO1xyXG5cclxuICAgIC8qIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxufVxyXG4gICAgXHJcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgY29sb3I6IHZhcigtLXByZW1pdW1CbGFjayk7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuLyogR2VuZXJhbCAqL1xyXG5cclxubWFpbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMGZyIDFmciAxMDBmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2xlZnQgbWlkZGxlIHJpZ2h0JztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5kaWFsb2d7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1yZWd1bGFyLWRlc2MpO1xyXG59XHJcblxyXG5hcnRpY2xle1xyXG4gICAgcGFkZGluZzogNXJlbTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIG91dGxpbmU6IDRweCBkb3R0ZWQgdmFyKC0tcHJlbWl1bUJsYWNrKTtcclxufVxyXG5cclxuYXJ0aWNsZSBoMXtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLXRpdGxlKTtcclxufVxyXG5cclxuLyogTGVmdCBTaWRlICovXHJcblxyXG5hcnRpY2xlLnByb2plY3QtY29udGFpbmVye1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpOyAqL1xyXG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuc2VjdGlvbi5wcm9qZWN0LWhlYWRlciBkaXZ7XHJcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZGVzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB0ZXh0LXdyYXA6d3JhcDtcclxufVxyXG5cclxuc2VjdGlvbi5wcm9qZWN0LWhlYWRlciBkaXYgPmRpdntcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oNC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn0gXHJcblxyXG5oMi5jdXJyZW50LWRhdGUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogZG90dGVkIHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tcHJlbWl1bUxpZ2h0KTtcclxuICAgIFxyXG5cclxufVxyXG5cclxuc2VjdGlvbi5wcm9qZWN0LWhlYWRlciBzZWxlY3R7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDEuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IHZhcigtLXByZW1pdW1CbGFjayk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb24ucHJvamVjdC1oZWFkZXIgc2VsZWN0OmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLXByZW1pdW1MaWdodCk7XHJcbn1cclxuXHJcbnNlY3Rpb24ucHJvamVjdC1oZWFkZXIgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgaGVpZ2h0OiAxLjRyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IHZhcigtLXByZW1pdW1CbGFjayk7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZW1pdW1CbGFjayk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJlbWl1bUxpZ2h0KTtcclxufVxyXG5cclxuc2VjdGlvbi5saXN0LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDU4dmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWQtZGFyayk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCA0cHggdmFyKC0tYmctY29sb3IpO1xyXG59XHJcblxyXG51bC50YXNrLWxpc3R7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogOyAqL1xyXG59XHJcblxyXG51bC50YXNrLWxpc3QgbGl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhOyAqL1xyXG59XHJcblxyXG51bC50YXNrLWxpc3QgbGkgZmllbGRzZXR7XHJcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZGVzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxudWwudGFzay1saXN0IGxpIGZpZWxkc2V0IGlucHV0LCBzZWxlY3R7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMnB4ICB2YXIoLS1kYXJrKSwgaW5zZXQgLTVweCAwcHggMTBweCB2YXIoLS1wcmVtaXVtTGlnaHQpOyAqL1xyXG4gICAgXHJcbn1cclxuXHJcbnVsLnRhc2stbGlzdCBsaSBmaWVsZHNldCBidXR0b257XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLWRhcmspO1xyXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBcclxufVxyXG5cclxudWwudGFzay1saXN0IGxpIGZpZWxkc2V0IGJ1dHRvbjpob3ZlcntcclxuICAgIGNvbG9yOiB2YXIoLS1wcmVtaXVtQmxhY2spO1xyXG4gICAgXHJcbn1cclxuXHJcbnVsLnRhc2stbGlzdCBsaSBmaWVsZHNldCBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4ICB2YXIoLS1kYXJrKTtcclxuICAgIFxyXG59XHJcblxyXG5zZWxlY3R7XHJcbiAgICBib3gtc2hhZG93OiBub25lXHJcbn1cclxuXHJcbmZpZWxkc2V0IGRpdi50YXNrLWxlZnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmVtaXVtTGlnaHQpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuZmllbGRzZXQgZGl2LnRhc2stbGVmdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmZpZWxkc2V0IGRpdi50YXNrLWxlZnQuYWN0aXZlVGFza3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5maWVsZHNldCBkaXYudGFzay1yaWdodHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24uYWRkLXRhc2t7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJlbWl1bUxpZ2h0KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDByZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWQtZGFyayk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tYmctY29sb3IpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCB2YXIoLS1iZy1jb2xvcik7XHJcbn1cclxuXHJcbmJ1dHRvbi5hZGQtdGFzazpob3ZlcntcclxuICAgIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbn1cclxuXHJcblxyXG5kaXYuZGl2aWRlcntcclxuICAgIGdyaWQtYXJlYTogbWlkZGxlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1kYXJrKTtcclxuICAgIHdpZHRoOiAwLjNyZW07XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1wcmVtaXVtQmxhY2spOyAqL1xyXG59XHJcblxyXG5hcnRpY2xlLm5vdGUtY29udGFpbmVye1xyXG4gICAgZ3JpZC1hcmVhOiByaWdodDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbn1cclxuXHJcbnNlY3Rpb24udGFzay1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDByZW0gNHJlbTtcclxuICAgIFxyXG59XHJcbi50YXNrLWhlYWRlciBkaXZ7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDUwJTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbnNlY3Rpb24udGFzay1ub3RlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGZsZXg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZzogMHJlbSAzcmVtO1xyXG59XHJcblxyXG5zZWN0aW9uLnRhc2stbm90ZSBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1kZXNjKTtcclxuICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcclxufVxyXG5cclxudGV4dGFyZWEudGFza2Rlc2NyaXB0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGhlaWdodDogNjV2aDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbm90ZS1kZXNjKTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmVtaXVtTGlnaHQpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0zcHggMHB4IDBweCB2YXIoLS1wcmVtaXVtTGlnaHQpO1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tZGFyayk7ICovXHJcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgKi9cclxufVxyXG5cclxuXHJcbnNlY3Rpb24uZW1wdHktTm90ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tcHJlbWl1bUxpZ2h0KSA7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpe21haW57Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MGZyIDBmciA1MGZyO319XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpe1xyXG4gICAgbWFpbntcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMGZyIDBmciAwZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAnbGVmdCcnbWlkZGxlJydyaWdodCc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGFydGljbGUucHJvamVjdC1jb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHNlY3Rpb24ucHJvamVjdC1oZWFkZXIgOm5vdCgucHJvamVjdC1zZWxlY3Rpb24tZGl2KXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfSAqL1xyXG5cclxuXHJcbiAgICBzZWN0aW9uLnRhc2staGVhZGVyIGRpdntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiAwcmVtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhcnRpY2xlLm5vdGUtY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogNDB2aDtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXJ0aWNsZS5ub3RlLWNvbnRhaW5lciB0ZXh0YXJlYXtcclxuICAgICAgICBoZWlnaHQ6IDE1cmVtO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBOztJQUVJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjs7SUFFdEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0JBQXNCOztJQUV0Qiw4RUFBOEU7SUFDOUUsd0RBQXdEO0FBQzVEOzs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLDBCQUEwQjs7SUFFMUIsaUNBQWlDO0lBQ2pDLHlEQUF3QztBQUM1Qzs7QUFFQSxZQUFZOztBQUVaO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixnQkFBZ0I7QUFD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QUFhO1FBQ2IsWUFBWTtRQUNaLDJCQUEyQjtRQUMzQixnQkFBZ0I7O0lBRXBCOztJQUVBO1FBQ0ksYUFBYTs7SUFFakI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDYwMDsxLDgwMCZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw2MDA7MCw3MDA7MSwxMDA7MSwyMDA7MSwzMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuOnJvb3R7XFxyXFxuICAgIFxcclxcbiAgICAtLXByZW1pdW1CbGFjazojMzcyZjJmO1xcclxcbiAgICAtLXByZW1pdW1MaWdodDojZmRmZmZjZmY7XFxyXFxuICAgIC0tZGFyazogIzU0NDg0ODtcXHJcXG4gICAgLS1tZWQtZGFyazogcmdiKDU5LCA1NSwgNTUpO1xcclxcbiAgICAtLWJnLWNvbG9yOiAjYWZhN2E1O1xcclxcbiAgICAtLWxpZ2h0OiAjZjRmM2VlZmY7XFxyXFxuICAgIC0tbWVkLWxpZ2h0OiAjZTBhZmEwZmY7XFxyXFxuXFxyXFxuICAgIC8qIEZvbnQgU2l6ZSAqL1xcclxcbiAgICAtLWhlYWRlci10aXRsZTogMi42cmVtO1xcclxcbiAgICAtLW5vdGUtZGVzYzogMS41cmVtO1xcclxcbiAgICAtLXJlZ3VsYXItZGVzYzogMS4zcmVtO1xcclxcblxcclxcbiAgICAvKiBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7ICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxyXFxufVxcclxcbiAgICBcXHJcXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJlbWl1bUJsYWNrKTtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL0ltYWdlcy9iZy5qcGcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2VuZXJhbCAqL1xcclxcblxcclxcbm1haW57XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwZnIgMWZyIDEwMGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2xlZnQgbWlkZGxlIHJpZ2h0JztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9ne1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxyXFxufVxcclxcblxcclxcbmlucHV0e1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZGVzYyk7XFxyXFxufVxcclxcblxcclxcbmFydGljbGV7XFxyXFxuICAgIHBhZGRpbmc6IDVyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgb3V0bGluZTogNHB4IGRvdHRlZCB2YXIoLS1wcmVtaXVtQmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIGgxe1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRlci10aXRsZSk7XFxyXFxufVxcclxcblxcclxcbi8qIExlZnQgU2lkZSAqL1xcclxcblxcclxcbmFydGljbGUucHJvamVjdC1jb250YWluZXJ7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTsgKi9cXHJcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnByb2plY3QtaGVhZGVyIGRpdntcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1yZWd1bGFyLWRlc2MpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICB0ZXh0LXdyYXA6d3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wcm9qZWN0LWhlYWRlciBkaXYgPmRpdntcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDQucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59IFxcclxcblxcclxcbmgyLmN1cnJlbnQtZGF0ZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogZG90dGVkIHVuZGVybGluZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1wcmVtaXVtTGlnaHQpO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wcm9qZWN0LWhlYWRlciBzZWxlY3R7XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IHZhcigtLXByZW1pdW1CbGFjayk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wcm9qZWN0LWhlYWRlciBzZWxlY3Q6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmVtaXVtTGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnByb2plY3QtaGVhZGVyIGJ1dHRvbntcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEuNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggdmFyKC0tcHJlbWl1bUJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZW1pdW1CbGFjayk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmVtaXVtTGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmxpc3QtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBoZWlnaHQ6IDU4dmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWQtZGFyayk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCB2YXIoLS1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbnVsLnRhc2stbGlzdHtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogOyAqL1xcclxcbn1cXHJcXG5cXHJcXG51bC50YXNrLWxpc3QgbGl7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhOyAqL1xcclxcbn1cXHJcXG5cXHJcXG51bC50YXNrLWxpc3QgbGkgZmllbGRzZXR7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1kZXNjKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXHJcXG4gICAgLyogcGFkZGluZzogMXJlbTsgKi9cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbnVsLnRhc2stbGlzdCBsaSBmaWVsZHNldCBpbnB1dCwgc2VsZWN0e1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMnB4ICB2YXIoLS1kYXJrKSwgaW5zZXQgLTVweCAwcHggMTBweCB2YXIoLS1wcmVtaXVtTGlnaHQpOyAqL1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxudWwudGFzay1saXN0IGxpIGZpZWxkc2V0IGJ1dHRvbntcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWQtZGFyayk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbnVsLnRhc2stbGlzdCBsaSBmaWVsZHNldCBidXR0b246aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmVtaXVtQmxhY2spO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxudWwudGFzay1saXN0IGxpIGZpZWxkc2V0IGlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXHJcXG4gICAgXFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggIHZhcigtLWRhcmspO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0e1xcclxcbiAgICBib3gtc2hhZG93OiBub25lXFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IGRpdi50YXNrLWxlZnR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZW1pdW1MaWdodCk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IGRpdi50YXNrLWxlZnQ6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCBkaXYudGFzay1sZWZ0LmFjdGl2ZVRhc2t7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5maWVsZHNldCBkaXYudGFzay1yaWdodHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXHJcXG4gICAgd2lkdGg6IDEwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNre1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJlbWl1bUxpZ2h0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1kYXJrKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tYmctY29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCA0cHggdmFyKC0tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2s6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcblxcclxcbmRpdi5kaXZpZGVye1xcclxcbiAgICBncmlkLWFyZWE6IG1pZGRsZTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1kYXJrKTtcXHJcXG4gICAgd2lkdGg6IDAuM3JlbTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXByZW1pdW1CbGFjayk7ICovXFxyXFxufVxcclxcblxcclxcbmFydGljbGUubm90ZS1jb250YWluZXJ7XFxyXFxuICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwdnc7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24udGFzay1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBwYWRkaW5nOiAwcmVtIDRyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG4udGFzay1oZWFkZXIgZGl2e1xcclxcbiAgICAvKiBtYXgtd2lkdGg6IDUwJTsgKi9cXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnRhc2stbm90ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBmbGV4OyAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwcmVtIDNyZW07XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24udGFzay1ub3RlIGxhYmVse1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZGVzYyk7XFxyXFxuICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEudGFza2Rlc2NyaXB0aW9ue1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDY1dmg7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1ub3RlLWRlc2MpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByZW1pdW1MaWdodCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtM3B4IDBweCAwcHggdmFyKC0tcHJlbWl1bUxpZ2h0KTtcXHJcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1kYXJrKTsgKi9cXHJcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7ICovXFxyXFxufVxcclxcblxcclxcblxcclxcbnNlY3Rpb24uZW1wdHktTm90ZXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLXByZW1pdW1MaWdodCkgO1xcclxcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCl7bWFpbntncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwZnIgMGZyIDUwZnI7fX1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KXtcXHJcXG4gICAgbWFpbntcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBmciAwZnIgMGZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgICdsZWZ0JydtaWRkbGUnJ3JpZ2h0JztcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGFydGljbGUucHJvamVjdC1jb250YWluZXJ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogc2VjdGlvbi5wcm9qZWN0LWhlYWRlciA6bm90KC5wcm9qZWN0LXNlbGVjdGlvbi1kaXYpe1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfSAqL1xcclxcblxcclxcblxcclxcbiAgICBzZWN0aW9uLnRhc2staGVhZGVyIGRpdntcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgaGVpZ2h0OiAwcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGFydGljbGUubm90ZS1jb250YWluZXJ7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhcnRpY2xlLm5vdGUtY29udGFpbmVyIHRleHRhcmVhe1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNXJlbTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5cclxuY29uc3QgRG9tRGlzcGxheSA9ICgoKSA9PntcclxuICAgIFxyXG4gICAgY29uc3QgZGF5TW9udGhGb3JtYXR0ZXIgPSAoZGF5LCBtb250aCk9PiB7XHJcbiAgICAgICAgbGV0IHRoaXNEYXkgPSAnJ1xyXG4gICAgICAgIGxldCB0aGlzTW9udGggPSAnJ1xyXG4gICAgICAgIGNvbnN0IGFsbE1vbnRoID0gWydKYW4nLCdGZWInLCdNYXInLCdBcHInLCdNYXknLCdKdW4nLCdKdWwnLCdBdWcnLCdTZXAnLCdPY3QnLCdOb3YnLCdEZWMnXVxyXG4gICAgICAgIHN3aXRjaCAoZGF5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgY2FzZSAyMTpcclxuICAgICAgICAgICAgY2FzZSAzMTpcclxuICAgICAgICAgICAgICAgIHRoaXNEYXkgPSBgJHtkYXl9c3RgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBjYXNlIDIyOlxyXG4gICAgICAgICAgICAgICAgdGhpc0RheSA9IGAke2RheX1uZGBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGNhc2UgMjM6XHJcbiAgICAgICAgICAgICAgICB0aGlzRGF5ID0gYCR7ZGF5fXJkYFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzRGF5ID0gYCR7ZGF5fXRoYFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxNb250aFttb250aF0gK1wiIFwiICsgdGhpc0RheVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBDbGVhcnMgdGhlIGN1cnJlbnQgbGlzdCBvZiB0YXNrcywgdXNlZCB3aXRoIHByb2plY3Qgc2VsZWN0aW9uXHJcbiAgICBjb25zdCBjbGVhclRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0JylcclxuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyUHJvamVjdFNlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0U2VsZWN0aW9uJylcclxuICAgICAgICB0YXNrTm90ZS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRG9tRGlzcGxheS5zZWxlY3RlZFByb2plY3RPcHRpb24ocHJvamVjdElEKVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0T3B0aW9uID0gKHByb2plY3RJRCkgPT4ge1xyXG4gICAgICAgIC8vIGFsZXJ0KHByb2plY3RJRClcclxuICAgICAgICBjb25zdCB0YXNrTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0U2VsZWN0aW9uJylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY3VycmVudCBwcm9qZWN0SW5kZXgnLCBwcm9qZWN0SUQpXHJcbiAgICAgICAgdGFza05vdGUudmFsdWUgPSBwcm9qZWN0SURcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0SUQpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFza05vdGUpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBDbGVhcnMgdGhlIG5vdGUgb2Ygc2VsZWN0ZWQgdGFzaywgY2FsbGVkIHdoZW4gdGFzayBpcyBzZWxlY3RlZFxyXG4gICAgY29uc3QgY2xlYXJOb3RlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUtY29udGFpbmVyJylcclxuICAgICAgICBjb25zdCBhY3RpdmVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZVRhc2snKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhc2spXHJcbiAgICAgICAgaWYoYWN0aXZlVGFzayl7XHJcbiAgICAgICAgICAgIGFjdGl2ZVRhc2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlVGFzaycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0YXNrTm90ZS5pbm5lckhUTUwgPSBgPHNlY3Rpb24gY2xhc3M9XCJlbXB0eS1Ob3RlXCI+PHA+Tm8gVGFzayBTZWxlY3RlZDwvcD48L3NlY3Rpb24+YFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUhlYWRlciA9IChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkZXIgLnByb2plY3QtbmFtZScpXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2pEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGVyIC5wcm9qZWN0LWRlc2NyaXB0aW9uJylcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRlciAuY3VycmVudC1kYXRlJylcclxuICAgICAgICBjb25zdCB0aGlzRGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICBjdXJyZW50UHJvai50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXHJcbiAgICAgICAgY3VycmVudERhdGUudGV4dENvbnRlbnQgPSBgJHtkYXlNb250aEZvcm1hdHRlcih0aGlzRGF0ZS5nZXREYXRlKCksdGhpc0RhdGUuZ2V0TW9udGgoKSl9YCBcclxuICAgICAgICBjdXJyZW50UHJvakRlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0RGVzY3JpcHRpb25cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVUYXNrTW9kYWwgPSAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCBtb2RhbERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpYWxvZycpXHJcbiAgICAgICAgbW9kYWxEaWFsb2cuaWQgPSBgbW9kYWwtJHtpZH1gXHJcbiAgICAgICAgbW9kYWxEaWFsb2cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cImNyZWF0ZS10YXNrXCI+XHJcbiAgICAgICAgICAgICAgICA8bGVnZW5kPkNyZWF0ZSBUYXNrPC9sZWdlbmQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgMVwiIGNsYXNzPVwiY3JlYXRlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIGNsYXNzPVwiY3JlYXRlLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInRhc2tQcmlvcml0eVwiIGlkPVwiY3JlYXRlVGFza1ByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiIHNlbGVjdGVkPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRcIiA+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiA+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIGlkPVwiQ3JlYXRlRHVlRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0YXNrLWNyZWF0ZVwiPmNyZWF0ZTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9mb3JtPmBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0TW9kYWwgPSAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCBtb2RhbERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpXHJcbiAgICAgICAgbW9kYWxEaWFsb2cuaWQgPSBgbW9kYWxQcm9qZWN0LSR7aWR9YFxyXG4gICAgICAgIG1vZGFsRGlhbG9nLmlubmVySFRNTCA9IGA8Zm9ybSBhY3Rpb249XCJcImNsYXNzPSdjcmVhdGUgUHJvamVjdCc+XHJcbiAgICAgICAgPGxlZ2VuZD5DcmVhdGUgUHJvamVjdDwvbGVnZW5kPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmV3IFByb2plY3RcIiBjbGFzcz1cImNyZWF0ZS10aXRsZSBwcm9qZWN0LXRpdGxlXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IERlc2NyaXB0aW9uXCIgY2xhc3M9XCJjcmVhdGUtZGVzYyBwcm9qZWN0LXRpdGxlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3QtY3JlYXRlXCI+Y3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPmBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlcyB0aGUgcHJvamVjdCwgYmVzdCB1c2VkIHdpdGggaXRlcmF0aW5nIHRocm91Z2ggdGhlIGN1cnJlbnQgZXhpc2l0aW5nIHByb2plY3RzLlxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrLCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpXHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICAgICAgbGkuaWQgPSBpZFxyXG4gICAgICAgIGxpLmNsYXNzTmFtZSA9ICdpbmRpdmlkdWFsVGFzaydcclxuICAgICAgICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0YXNrLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBpZD1cInRhc2stJHtpZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzcz1cInRhc2stbmFtZVwiPjwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0YXNrLnRhc2tOYW1lfVwiIGNsYXNzPVwidGFzay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJkdWVEYXRlXCIgdmFsdWU9XCIke3Rhc2sudGFza0RhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwidGFza1ByaW9yaXR5XCIgaWQ9XCJ0YXNrUHJpb3JpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIiAgJHt0YXNrLnRhc2tQcmlvcml0eSA9PT0gJ2xvdycgPyAnc2VsZWN0ZWQ+bG93JyA6ICc+bG93J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRcIiAgJHt0YXNrLnRhc2tQcmlvcml0eSA9PT0gJ21lZCcgPyAnc2VsZWN0ZWQ+bWVkJyA6ICc+bWVkJ308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCIgJHt0YXNrLnRhc2tQcmlvcml0eSA9PT0gJ2hpZ2gnID8gJ3NlbGVjdGVkPmhpZ2gnIDogJz5oaWdoJ308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tcGxldGVcIiBpZD1cImNvbXBsZXRlXCIgJHt0YXNrLnRhc2tDb21wbGV0ZSA9PSB0cnVlID8gJ0NoZWNrZWQnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9XCJkZWxldGVUYXNrXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIGBcclxuICAgICAgICB0YXNrTGlzdC5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YClcclxuICAgICAgICBsaS5yZW1vdmUoKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVOb3RlID0gKHRhc2sscHJvamVjdE5hbWUsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1jb250YWluZXInKVxyXG4gICAgICAgIHRhc2tOb3RlLmlkID0gXCJub3RlLVwiK2lkXHJcbiAgICAgICAgY29uc3QgdGFza0FjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aWR9IC50YXNrLWxlZnRgKVxyXG4gICAgICAgIHRhc2tBY3RpdmUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlVGFzaycpXHJcbiAgICAgICAgdGFza05vdGUuaW5uZXJIVE1MID0gYDxzZWN0aW9uIGNsYXNzPVwidGFzay1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0YXNrLW5hbWUtYmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJkdWUtZGF0ZVwiPkR1ZSA8c3Bhbj4ke3Rhc2sudGFza0RhdGUuZ2V0RGF0ZSgpfS8ke3Rhc2sudGFza0RhdGUuZ2V0TW9udGgoKSsxfS8ke3Rhc2sudGFza0RhdGUuZ2V0RnVsbFllYXIoKX08L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgPlByaW9yaXR5IDxzcGFuIGNsYXNzPVwicHJpb3JpdHlcIj4ke3Rhc2sudGFza1ByaW9yaXR5fTwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0YXNrLW5vdGVcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrRGVzY1wiPlRhc2sgRGV0YWlsczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ0YXNrRGVzY1wiIGlkPVwidGFza0Rlc2NcIiBjb2xzPVwiMzBcIiB2YWx1ZT0nJHt0YXNrLnRhc2tEZXNjfScgcm93cz1cIjEwXCIgY2xhc3M9XCJ0YXNrZGVzY3JpcHRpb25cIj4ke3Rhc2sudGFza0Rlc2N9PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPmBcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNwbGF5cyB0aGUgVGFzayBkZXRhaWxzIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzY3JlZW4sIHNob3VsZCBiZSBhY3RpdmF0ZWQgd2hlbiB0YXNrIGlzIGNsaWNrZWQgZnJvbSB0aGUgdGFzayBsaXN0XHJcbiAgICBjb25zdCB0YXNrRGlzcGxheSA9ICh0YXNrLHByb2plY3ROYW1lLCB0YXNrSUQpID0+IHtcclxuICAgICAgICBjbGVhck5vdGUoKVxyXG4gICAgICAgIGlmICh0YXNrICYmIHByb2plY3ROYW1lICYmIHRhc2tJRCl7XHJcbiAgICAgICAgICAgIGNyZWF0ZU5vdGUodGFzayxwcm9qZWN0TmFtZSwgdGFza0lEKVxyXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUtYmlnJylcclxuICAgICAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tOYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpXHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sudGFza1ByaW9yaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlJylcclxuICAgICAgICAgICAgdGFza0R1ZURhdGUudmFsdWUgPSB0YXNrLnRhc2tEYXRlXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEZXNjJylcclxuICAgICAgICAgICAgdGFza0Rlc2MudmFsdWUgPSB0YXNrLnRhc2tEZXNjXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xlYXJOb3RlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiB7Y3JlYXRlVGFzayxyZW1vdmVUYXNrLCBjbGVhclRhc2ssIHRhc2tEaXNwbGF5LCBjbGVhck5vdGUsIHVwZGF0ZUhlYWRlciwgY3JlYXRlVGFza01vZGFsLCBjbGVhclByb2plY3RTZWxlY3Rpb24sIHNlbGVjdGVkUHJvamVjdE9wdGlvbn1cclxufSkoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb21EaXNwbGF5IiwiaW1wb3J0IHByb2plY3RIYW5kbGVyIGZyb20gXCIuLi9PYmplY3RzL3Byb2plY3RIYW5kbGVyXCI7XHJcbmltcG9ydCBEb21EaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXllclwiO1xyXG5pbXBvcnQgY3JlYXRlVGFza3MgZnJvbSBcIi4uL09iamVjdHMvdGFza3NcIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4uL09iamVjdHMvcHJvamVjdHNcIjtcclxuXHJcbmNvbnN0IGRvbUludGVyYWN0aW9uID0gKCgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gVGhlIEN1cnJlbnQgUHJvamVjdCBJZGVudGlmaWVyIGdpdmVuIGxpc3Qgb2YgUHJvamVjdHMsIG1hbmFnZWQgdGhyb3VnaCBpbmRleFxyXG4gICAgbGV0IFByb2plY3RJRCA9IDA7XHJcbiAgICBjb25zdCBnZXRQcm9qZWN0SUQgPSAoKSA9PiBQcm9qZWN0SURcclxuICAgIGNvbnN0IHNldFByb2plY3RJRCA9IChuZXdJRCkgPT4gUHJvamVjdElEID0gbmV3SURcclxuXHJcbiAgICAvLyBUaGUgY3VycmVudCBQcm9qZWN0IGhhbmRsZXIsIE5lZWRzIHRvIGJlIGluaXRpYWxpc2VkIHdoZW4gdGhlIGZ1bmN0aW9uIGZpcnN0IHJ1bnMgdG8gZnVuY3Rpb24gcHJvcGVybHlcclxuICAgIGxldCBnbG9iYWxQcm9qZWN0ID0gJydcclxuICAgIGNvbnN0IHNldEFsbFByb2plY3QgPSAoYWxsUHJvaikgPT4gZ2xvYmFsUHJvamVjdCA9IGFsbFByb2pcclxuICAgIGNvbnN0IGdldEFsbFByb2plY3QgPSAoKSA9PiBnbG9iYWxQcm9qZWN0XHJcblxyXG4gICAgLy8gU2F2aW5nIGZ1bmN0aW9uYWxpdHksIFJ1bnMgZXZlcnkgNSBzZWNvbmRzXHJcbiAgICBjb25zdCBzYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0RGF0YScsIGdldEFsbFByb2plY3QoKS5leHBvcnRQcm9qZWN0KCkpIFxyXG4gICAgfVxyXG4gICAgLy8gRGV0ZXJtaW5lcyB0aGUgc2F2aW5nIGR1cmF0aW9uXHJcbiAgICBjb25zdCAgcGVyaW9kaWNTYXZlID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2F2ZSgpXHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIE9uIHRoZSBpbml0aWFsIGxvYWQsIHNldCBpdCB1cCB3aXRoIHRoZSBmaXJzdCBjaG9zZW4gcHJvamVjdCwgc2hvdWxkIGJlIGNoYW5nZWQgdG8gbGFzdCBzYXZlZCBwcm9qZWN0IGRvd24gdGhlIGxpbmVcclxuICAgIGNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJET00gZnVsbHkgbG9hZGVkIGFuZCBwYXJzZWRcIik7XHJcbiAgICAgICAgICAgIERvbURpc3BsYXkuY3JlYXRlVGFza01vZGFsKGAwYClcclxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvblJlbmRlcihnZXRBbGxQcm9qZWN0KCkuc2hvd1Byb2plY3QoKVswXSwgMClcclxuICAgICAgICAgICAgdGFza01vZGFsT3BlbihnZXRBbGxQcm9qZWN0KCkuc2hvd1Byb2plY3QoKVswXSwgYDBgKVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9qZWN0IHNlbGVjdGlvbiBhbmQgdXBkYXRpbmcgdGhlIHRhc2tzIHZpc2libGUgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgcHJvamVjdFxyXG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBwcm9qZWN0IHdpdGggc2V0UHJvamVjdElELlxyXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdGlvbk9wdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0U2VsZWN0aW9uJyk7XHJcbiAgICAgICAgcHJvamVjdE1vZGFsT3BlbigpXHJcbiAgICAgICAgcmVuZGVyUHJvamVjdE9wdGlvbnMoIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3MoIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE9uIGRyb3Bkb3duIGNoYW5nZSwgcmVSZW5kZXIgdGhlIFRhc2sgTGlzdHNcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0VGFza3MgPSAoIGN1cnJlbnRQcm9qZWN0KSA9PntcclxuICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGdldEFsbFByb2plY3QoKS5zaG93UHJvamVjdCgpW2UudGFyZ2V0LnZhbHVlXVxyXG4gICAgICAgICAgICBEb21EaXNwbGF5LmNyZWF0ZVRhc2tNb2RhbChgJHtnZXRQcm9qZWN0SUQoKX1gKVxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyKHNlbGVjdGVkUHJvamVjdCwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIHRhc2tNb2RhbE9wZW4oc2VsZWN0ZWRQcm9qZWN0LCBgJHtnZXRQcm9qZWN0SUQoKX1gKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVuZGVyIHRoZSBkcm9wZG93biBtZW51IGNvbnRhaW5pbmcgYWxsIHByb2plY3RzIHdlIGN1cnJlbnRseSBoYXZlIGFjY2VzcyB0b1xyXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdE9wdGlvbnMgPSAoIGN1cnJlbnRQcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgRG9tRGlzcGxheS5jbGVhclByb2plY3RTZWxlY3Rpb24oKVxyXG4gICAgICAgIGdldEFsbFByb2plY3QoKS5zaG93UHJvamVjdCgpLmZvckVhY2goKHByb2plY3QsIHByb2pJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0aGlzUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXNQcm9qZWN0LnZhbHVlID0gcHJvakluZGV4XHJcbiAgICAgICAgICAgIHRoaXNQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKClcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QuYXBwZW5kKHRoaXNQcm9qZWN0KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbmRlciB0aGUgUGFnZSBmb3IgdGhlIGN1cnJlbnRseSBTZWxlY3RlZCBQcm9qZWN0IGdpdmVuIHRoZSBwcm9qZWN0IE9iamVjdCBhbmQgcHJvamVjdCBJZCwgc2V0IHRoZSBHbG9iYWwgUHJvamVjdCBJRFxyXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdGlvblJlbmRlciA9IChzZWxlY3RlZFByb2plY3QsIHByb2plY3RJRCkgPT4ge1xyXG4gICAgICAgIERvbURpc3BsYXkuY2xlYXJUYXNrKClcclxuICAgICAgICBzZXRQcm9qZWN0SUQocHJvamVjdElEKVxyXG4gICAgICAgIC8vIElmIHRoZSBwcm9qZWN0IGRvZXMgbm90IGdpdmUgTnVsbFxyXG4gICAgICAgIGlmIChzZWxlY3RlZFByb2plY3Qpe1xyXG4gICAgICAgICAgICBEb21EaXNwbGF5LnNlbGVjdGVkUHJvamVjdE9wdGlvbihwcm9qZWN0SUQpXHJcbiAgICAgICAgICAgIERvbURpc3BsYXkudXBkYXRlSGVhZGVyKHNlbGVjdGVkUHJvamVjdC5nZXROYW1lKCksIHNlbGVjdGVkUHJvamVjdC5nZXREZXNjKCkpXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2ssIHRhc2tJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgRG9tRGlzcGxheS5jcmVhdGVUYXNrKHRhc2suZ2V0QWxsKCksIGAke2dldFByb2plY3RJRCgpfXAke3Rhc2tJbmRleH1gKVxyXG4gICAgICAgICAgICAgICAgdGFza1VwZGF0ZShzZWxlY3RlZFByb2plY3QsIHRhc2ssIGAke2dldFByb2plY3RJRCgpfXAke3Rhc2tJbmRleH1gLCB0YXNrSW5kZXgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRhc2tPcGVuKHNlbGVjdGVkUHJvamVjdCkgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBPcGVucyB0aGUgRXhwYW5kZWQgdmlldyBvZiB0aGUgUHJvamVjdCwgc2hvdyBsaXN0IG9mIHRhc2tzXHJcbiAgICBjb25zdCB0YXNrT3BlbiA9IChjdXJyZW50UHJvaikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZGl2aWR1YWxUYXNrJyk7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCggKHRhc2ssIHRhc2tJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrSUQgPSBgJHtnZXRQcm9qZWN0SUQoKX1wJHt0YXNrSW5kZXh9YFxyXG4gICAgICAgICAgICBjb25zdCB0YXNrSW5mbyA9IGN1cnJlbnRQcm9qLmdldFRhc2tzKClbdGFza0luZGV4XVxyXG4gICAgICAgICAgICAvLyBmb3IgZWFjaCBvZiB0aGUgdGFza3MsIGV4cGFuZCBvbiBjbGljaywgc2hvd2luZyB0aGUgdGFzayBpbmZvcm1hdGlvblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICAgICAgICAgICAgICBEb21EaXNwbGF5LnRhc2tEaXNwbGF5KHRhc2tJbmZvLmdldEFsbCgpLGN1cnJlbnRQcm9qLmdldE5hbWUoKSx0YXNrSUQpXHJcbiAgICAgICAgICAgICAgICBub3RlVXBkYXRlKHRhc2tJbmZvLCB0YXNrSUQpXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IGBkZWxldGVUYXNrYCl7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9tRGlzcGxheS5yZW1vdmVUYXNrKHRhc2tJRClcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvai5yZW1vdmVUYXNrKHRhc2tJbmRleClcclxuICAgICAgICAgICAgICAgICAgICBEb21EaXNwbGF5LnRhc2tEaXNwbGF5KClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIENyZWF0ZSBhbiBleHBhbmRlZCBub3RlIGZvciBlYWNoIHRhc2sgYW5kIHNhdmUgdGhlIGNoYW5nZWQgdmFsdWVzXHJcbiAgICBjb25zdCBub3RlVXBkYXRlID0gKGN1cnJlbnRUYXNrLCB0YXNrSUQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNub3RlLSR7dGFza0lEfSAjdGFza0Rlc2NgKVxyXG4gICAgICAgIGlmICh0YXNrRGVzYykge1xyXG4gICAgICAgICAgICB0YXNrRGVzYy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2suY2hhbmdlRGVzYyhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBEb21EaXNwbGF5LmNsZWFyTm90ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIGFueSBjaGFuZ2VzIHRvIHRoZSBpbmRpdmlkdWFsIHRhc2sgaW5wdXRzLCBhbmQgZGVsZXRlIHRhc2tzIHdpdGggYSBidXR0b24gY2xpY2tcclxuICAgIGNvbnN0IHRhc2tVcGRhdGUgPSAoc2VsZWN0ZWRQcm9qZWN0LCBjdXJyZW50VGFzaywgdGFza0lELCB0YXNrSW5kZXgpID0+IHtcclxuICAgICAgICAvLyBjaGFuZ2UgZm9yIGVhY2hcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tJRH0gLnRhc2stdGl0bGVgKVxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza0lEfSAjdGFza1ByaW9yaXR5YClcclxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tJRH0gI2NvbXBsZXRlYClcclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza0lEfSAjZHVlRGF0ZWApXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbm90ZS0ke3Rhc2tJRH0gI3Rhc2tEZXNjYClcclxuICAgICAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IGN1cnJlbnRUYXNrLmNoYW5nZU5hbWUoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgIHRhc2tDb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGU9PiBjdXJyZW50VGFzay5jaGFuZ2VDb21wbGV0aW9uKCkpXHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiBjdXJyZW50VGFzay5jaGFuZ2VQcmlvcml0eShlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgdGFza0RhdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IGN1cnJlbnRUYXNrLmNoYW5nZURhdGUoZS50YXJnZXQudmFsdWUpKVxyXG5cclxuICAgICAgICAvLyBjb25zdCBEZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tJRH0gLmRlbGV0ZVRhc2tgKVxyXG4gICAgICAgIC8vIERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0YXNrSW5kZXgpXHJcbiAgICAgICAgLy8gICAgIERvbURpc3BsYXkucmVtb3ZlVGFzayh0YXNrSUQpXHJcbiAgICAgICAgLy8gICAgIHNlbGVjdGVkUHJvamVjdC5yZW1vdmVUYXNrKHRhc2tJbmRleClcclxuICAgICAgICAvLyAgICAgRG9tRGlzcGxheS50YXNrRGlzcGxheSgpICAgIFxyXG4gICAgICAgIC8vIH0pIFxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTU9EQUxTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuICAgIC8vIEFkZCB0YXNrIE1vZGFsIHRvIGNyZWF0ZSBuZXcgdGFza3MgZm9yIHRoZSBjdXJyZW50IHByb2plY3RcclxuICAgIGNvbnN0IHRhc2tNb2RhbE9wZW4gPSAodGhpc1Byb2osIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlhbG9nJyk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY3JlYXRlJylcclxuICAgICAgICBjb25zdCB0YXNrT3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5jcmVhdGUtdGFzaycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpc1Byb2ogJiYgZ2V0QWxsUHJvamVjdCgpLmdldENvdW50KCkpe1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrTW9kYWwgPSB0YXNrTW9kYWxHZXQodGhpc1Byb2osIGlkLCB0YXNrTW9kYWwsIGNyZWF0ZUJ1dHRvbilcclxuICAgICAgICAgICAgdGFza09wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgICAgIHRhc2tGb3JtLnJlc2V0KClcclxuICAgICAgICAgICAgICAgIHRhc2tNb2RhbC5zaG93TW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIG5ld1Rhc2tNb2RhbFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgcHJvamVjdCBtb2RhbCwgY3JlYXRlIG5ldyBwcm9qZWN0LCBhbmQgc2V0IGl0IGFzIGN1cnJlbnQgcHJvamVjdCwgcmVmcmVzaCB0aGUgcGFnZVxyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kaWFsb2cnKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jcmVhdGUnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RPcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE1vZGFsID0gcHJvamVjdE1vZGFsR2V0KHByb2plY3RNb2RhbCwgY3JlYXRlQnV0dG9uKVxyXG4gICAgICAgIHByb2plY3RPcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgIHByb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdE1vZGFsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gTW9kYWwgRm9yIERlbGV0aW5nIHRoZSBjdXJyZW50IHNlbGVjdGVkIFByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3REZWxldGVNb2RhbCA9ICgoY3VycmVudFByb2plY3QsIHByb2plY3RNb2RhbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlbGV0ZScpXHJcbiAgICAgICAgY29uc3QgaWdub3JlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlnbm9yZS1kZWxldGUnKVxyXG4gICAgICAgIC8vIE9uIERlbGV0ZSwgUmVmcmVzaCB0aGUgcGFnZSBpbnRvIHRoZSBmaXJzdCBQcm9qZWN0IHRoYXQgRXhpc3RzLCBhbmQgcmVzZXQgdGhlIE5vdGVzXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGdldEFsbFByb2plY3QoKS5nZXRDb3VudCgpPjEpe1xyXG4gICAgICAgICAgICAgICAgZ2V0QWxsUHJvamVjdCgpLnJlbW92ZVByb2plY3QoZ2V0UHJvamVjdElEKCkpXHJcbiAgICAgICAgICAgICAgICBzZXRQcm9qZWN0SUQoMClcclxuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RPcHRpb25zKCBjdXJyZW50UHJvamVjdClcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3MoIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgaWYoZ2V0QWxsUHJvamVjdCgpLnNob3dQcm9qZWN0KClbMF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RTZWxlY3Rpb25SZW5kZXIoZ2V0QWxsUHJvamVjdCgpLnNob3dQcm9qZWN0KClbMF0sIDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEb21EaXNwbGF5LmNsZWFyTm90ZSgpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1RoZXJlIE11c3QgYmUgTWluaW11bSBvZiAxIFByb2plY3QnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RNb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIHNhdmUoKSAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZ25vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgLy8gT3BlbmluZyBhIGRlbGV0ZSBtb2RlbCBmb3IgdGhlIHByb2plY3Qgb24gYnV0dG9uIGNsaWNrXHJcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlTW9kYWxPcGVuID0gKCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0U2VsZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kZWxldGUtZGlhbG9nJyk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdE9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXRoaXMtcHJvamVjdCcpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RNb2RhbCA9IHByb2plY3REZWxldGVNb2RhbChjdXJyZW50UHJvamVjdCwgZGVsZXRlTW9kYWwpXHJcbiAgICAgICAgcHJvamVjdE9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgZGVsZXRlTW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RNb2RhbFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSkoKVxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgdGFzayBhbmQgYWRkIGl0IHRvIHRoZSBjdXJyZW50IHByb2plY3QsIHJlcmVuZGVyIHRoZSBwYWdlXHJcbiAgICBjb25zdCB0YXNrTW9kYWxHZXQgPSAoKHRoaXNQcm9qLCBpZCwgdGFza01vZGFsLCBjcmVhdGVCdXR0b24pID0+IHtcclxuICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFza0luZm8gPSB0YXNrTW9kYWxJbmZvKClcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2tzKHRhc2tJbmZvLk5hbWUsIHRhc2tJbmZvLmRlc2MsIG5ldyBEYXRlKHRhc2tJbmZvLmRhdGUpLCB0YXNrSW5mby5wcmlvcml0eSwgdGFza0luZm8uY29tcGxldGUpXHJcbiAgICAgICAgICAgIHRoaXNQcm9qLmFkZFRhc2sobmV3VGFzaylcclxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvblJlbmRlcih0aGlzUHJvaiwgaWQpXHJcblxyXG4gICAgICAgICAgICB0YXNrTW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICBzYXZlKCkgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIE5ldyBwcm9qZWN0IHNldCBpdFxyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsR2V0ID0gKChwcm9qZWN0TW9kYWwsIGNyZWF0ZUJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb2plY3RNb2RhbEluZm8oKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0SW5mby5OYW1lLCBwcm9qZWN0SW5mby5kZXNjKVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGdldEFsbFByb2plY3QoKS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpXHJcbiAgICAgICAgICAgIHNldFByb2plY3RJRChnZXRBbGxQcm9qZWN0KCkuZ2V0Q291bnQoKS0xKVxyXG4gICAgICAgICAgICBEb21EaXNwbGF5LmNyZWF0ZVRhc2tNb2RhbChnZXRBbGxQcm9qZWN0KCkuZ2V0Q291bnQoKS0xKVxyXG4gICAgICAgICAgICB0YXNrTW9kYWxPcGVuKG5ld1Byb2plY3QsIGdldEFsbFByb2plY3QoKS5nZXRDb3VudCgpLTEpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0U2VsZWN0aW9uJyk7XHJcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RPcHRpb25zKCBjdXJyZW50UHJvamVjdClcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcyggY3VycmVudFByb2plY3QpXHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uUmVuZGVyKG5ld1Byb2plY3QsIGdldEFsbFByb2plY3QoKS5nZXRDb3VudCgpLTEpXHJcblxyXG5cclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgc2F2ZSgpICBcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsSW5mbyA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10aXRsZS5wcm9qZWN0LXRpdGxlJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtZGVzYy5wcm9qZWN0LXRpdGxlJylcclxuICAgICAgICByZXR1cm4ge05hbWU6cHJvamVjdE5hbWUudmFsdWUsIGRlc2M6cHJvamVjdERlc2MudmFsdWV9XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXNrTW9kYWxJbmZvID0gKCkgPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRpdGxlJylcclxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtZGVzYycpXHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRhc2tQcmlvcml0eScpXHJcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ3JlYXRlRHVlRGF0ZScpXHJcbiAgICAgICAgLy8gY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlJylcclxuICAgICAgICAvLyBOYW1lPzogc3RyaW5nLCBkZXNjPzogc3RyaW5nLCBkYXRlPzogRGF0ZSwgcHJpb3JpdHk/OiBzdHJpbmcsIGNvbXBsZXRlPzogYm9vbGVhblxyXG4gICAgICAgIC8vIHJldHVybiB0YXNrTmFtZS52YWx1ZSwgdGFza0Rlc2MudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUsIGNvbXBsZXRlOnRhc2tDb21wbGV0ZS5jaGVja2VkXHJcbiAgICAgICAgcmV0dXJuIHtOYW1lOnRhc2tOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICBkZXNjOnRhc2tEZXNjLnZhbHVlLFxyXG4gICAgICAgICAgICBkYXRlOnRhc2tEYXRlLnZhbHVlIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHByaW9yaXR5OnRhc2tQcmlvcml0eS52YWx1ZSwgXHJcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlOnRhc2tDb21wbGV0ZS5jaGVja2VkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7cHJvamVjdFNlbGVjdGlvbk9wdGlvbiwgaW5pdGlhbExvYWQsIHNldEFsbFByb2plY3R9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb21JbnRlcmFjdGlvbjtcclxuIiwiZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XHJcbiAgICBsZXQgc3RvcmFnZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcclxuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcclxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcclxuICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxyXG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcclxuICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxyXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXHJcbiAgICAgICAgc3RvcmFnZSAmJlxyXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZUF2YWlsYWJsZVxyXG4gICIsIi8vIGlmIGluIGxvY2FsIHN0b3JhZ2UgbG9hZCB0aG9zZVxyXG5pbXBvcnQgY3JlYXRlVGFza3MgZnJvbSBcIi4vdGFza3NcIlxyXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuXHJcbmNvbnN0IHByb2plY3RIYW5kbGVyID0gKHByb2plY3Q9W10pID0+IHtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdHMgPSBwcm9qZWN0O1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RIYW5kbGVyID0gKG5ld0RhdGEpID0+IGN1cnJlbnRQcm9qZWN0cyA9IG5ld0RhdGE7XHJcblxyXG4gICAgbGV0IHByb2plY3RDb3VudCA9IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7XHJcbiAgICBjb25zdCBnZXRDb3VudCA9ICgpID0+IHByb2plY3RDb3VudDtcclxuICAgIGNvbnN0IHNldENvdW50ID0gKG5ld0NvdW50KSA9PiAgcHJvamVjdENvdW50ID0gbmV3Q291bnRcclxuXHJcbiAgICBjb25zdCBsb2FkUHJvamVjdCA9IChwcm9qZWN0RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nJywgcHJvamVjdERhdGEpXHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IEpTT04ucGFyc2UocHJvamVjdERhdGEpO1xyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFByb2plY3QgPSBwcm9qZWN0SGFuZGxlcigpXHJcbiAgICAgICAgZm9yKGNvbnN0IHByb2ogaW4gbmV3UHJvamVjdCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCgpXHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmltcG9ydFByb2plY3QobmV3UHJvamVjdFtwcm9qXVswXSlcclxuICAgICAgICAgICAgZm9yKGNvbnN0IHRhc2sgaW4gbmV3UHJvamVjdFtwcm9qXVsxXSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IGNyZWF0ZVRhc2tzKClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrLmltcG9ydFRhc2tzKG5ld1Byb2plY3RbcHJval1bMV1bdGFza10pXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRUYXNrKGN1cnJlbnRUYXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9jZXNzZWRQcm9qZWN0LmFkZFByb2plY3QoY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENvdW50KHByb2Nlc3NlZFByb2plY3Quc2hvd1Byb2plY3QoKS5sZW5ndGgpXHJcbiAgICAgICAgbmV3UHJvamVjdEhhbmRsZXIocHJvY2Vzc2VkUHJvamVjdC5zaG93UHJvamVjdCgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cG9ydFByb2plY3QgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q29sbGVjdGlvbnMgPSB7fVxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBwcm9qSW5kZXgpID0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IFtdXHJcbiAgICAgICAgcHJvamVjdENvbGxlY3Rpb25zW3Byb2pJbmRleF0gPSBbcHJvamVjdC5leHBvcnRQcm9qZWN0KCksIHByb2plY3RUYXNrc11cclxuICAgICAgICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKVxyXG4gICAgICAgIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdENvbGxlY3Rpb25zW3Byb2pJbmRleF1bMV0ucHVzaCh0YXNrLmV4cG9ydFRhc2soKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHByb2plY3RDb2xsZWN0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93UHJvamVjdCA9ICgpID0+IGN1cnJlbnRQcm9qZWN0cztcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcclxuICAgICAgICBjdXJyZW50UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxyXG4gICAgICAgICsrcHJvamVjdENvdW50XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBnZXRDb3VudCgpKVxyXG4gICAgICAgIGlmIChpbmRleCA8IGdldENvdW50KCkpIHtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC0tcHJvamVjdENvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7c2hvd1Byb2plY3QsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGxvYWRQcm9qZWN0LCBleHBvcnRQcm9qZWN0LCBjdXJyZW50UHJvamVjdHMsIGdldENvdW50fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0SGFuZGxlciIsImNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdE5hbWU9JycsIHByb2plY3REZXNjPScnKSA9PiB7XHJcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgbGV0IGRlc2MgPSBwcm9qZWN0RGVzYztcclxuICAgIGxldCB0YXNrTGlzdCA9IFtdO1xyXG4gICAgbGV0IHRhc2tDb3VudCA9IHRhc2tMaXN0Lmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBnZXRDb3VudCA9ICgpID0+IHRhc2tDb3VudDtcclxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xyXG4gICAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IGRlc2M7XHJcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHRhc2tMaXN0O1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZU5hbWUgPSAobmV3TmFtZSkgPT4gbmFtZSA9IG5ld05hbWUgO1xyXG4gICAgY29uc3QgY2hhbmdlRGVzYyA9IChuZXdEZXNjKSA9PiBkZXNjID0gbmV3RGVzYyA7XHJcblxyXG4gICAgY29uc3QgYWRkVGFzayA9IChuZXdUYXNrKSA9PiB7XHJcbiAgICAgICAgKyt0YXNrQ291bnQgXHJcbiAgICAgICAgdGFza0xpc3QucHVzaChuZXdUYXNrKVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPCBnZXRDb3VudCgpKSB7XHJcbiAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC0tdGFza0NvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltcG9ydFByb2plY3QgPSAodGFza1Byb2plY3QpID0+IHtcclxuICAgICAgICB0YXNrUHJvamVjdCA9IEpTT04ucGFyc2UodGFza1Byb2plY3QpO1xyXG4gICAgICAgIG5hbWUgPSB0YXNrUHJvamVjdC5uYW1lO1xyXG4gICAgICAgIGRlc2MgPSB0YXNrUHJvamVjdC5kZXNjO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cG9ydFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFsbCA9IHtuYW1lLGRlc2N9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFsbClcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge2dldENvdW50LGdldE5hbWUsZ2V0RGVzYyxnZXRUYXNrcyxjaGFuZ2VOYW1lLGNoYW5nZURlc2MsYWRkVGFzayxyZW1vdmVUYXNrLGltcG9ydFByb2plY3QsZXhwb3J0UHJvamVjdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3QiLCJjb25zdCBjcmVhdGVUYXNrcyA9IChOYW1lPScnLGRlc2M9JycsZGF0ZT1uZXcgRGF0ZSgpLHByaW9yaXR5PSdsb3cnLGNvbXBsZXRlPWZhbHNlKSA9PiB7XHJcbiAgICBsZXQgdGFza05hbWUgPSBOYW1lO1xyXG4gICAgbGV0IHRhc2tEZXNjID0gZGVzYztcclxuICAgIGxldCB0YXNrRGF0ZSA9IGRhdGU7XHJcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICBsZXQgdGFza0NvbXBsZXRlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHRhc2tEYXRlO1xyXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHRhc2tOYW1lO1xyXG4gICAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IHRhc2tEZXNjO1xyXG4gICAgY29uc3QgZ2V0UHJpb3IgPSAoKSA9PiB0YXNrUHJpb3JpdHk7XHJcbiAgICBjb25zdCBnZXRDb21wbGV0ZSA9ICgpID0+IHRhc2tDb21wbGV0ZTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VEYXRlID0gKG5ld0RhdGUpID0+IHRhc2tEYXRlID0gbmV3IERhdGUobmV3RGF0ZSk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcclxuICAgICAgICBpZiAocHJpb3JpdHkgPT09ICdsb3cnKXtcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5ID0gJ2xvdydcclxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnbWVkJykge1xyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkgPSAnbWVkJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eSA9ICdoaWdoJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlTmFtZSA9IChuZXdOYW1lKSA9PiB0YXNrTmFtZSA9IG5ld05hbWUgO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZURlc2MgPSAobmV3RGVzYykgPT4gdGFza0Rlc2MgPSBuZXdEZXNjIDtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDb21wbGV0aW9uID0gKCkgPT4gdGFza0NvbXBsZXRlID8gdGFza0NvbXBsZXRlID0gZmFsc2UgOiB0YXNrQ29tcGxldGUgPSB0cnVlIDtcclxuXHJcbiAgICBjb25zdCBnZXRBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHt0YXNrTmFtZTogdGFza05hbWUsIHRhc2tEZXNjOiB0YXNrRGVzYywgdGFza0RhdGU6IHRhc2tEYXRlLCB0YXNrUHJpb3JpdHk6IHRhc2tQcmlvcml0eSx0YXNrQ29tcGxldGU6IHRhc2tDb21wbGV0ZX1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1wb3J0VGFza3MgPSAodGFza09iaikgPT4ge1xyXG4gICAgICAgIHRhc2tPYmogPSBKU09OLnBhcnNlKHRhc2tPYmopO1xyXG4gICAgICAgIHRhc2tOYW1lID0gdGFza09iai50YXNrTmFtZTtcclxuICAgICAgICB0YXNrRGVzYyA9IHRhc2tPYmoudGFza0Rlc2M7XHJcbiAgICAgICAgdGFza0RhdGUgPW5ldyBEYXRlKHRhc2tPYmoudGFza0RhdGUpO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eSA9IHRhc2tPYmoudGFza1ByaW9yaXR5O1xyXG4gICAgICAgIHRhc2tDb21wbGV0ZSA9IHRhc2tPYmoudGFza0NvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cG9ydFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFsbCA9IHt0YXNrTmFtZSx0YXNrRGVzYyx0YXNrRGF0ZSx0YXNrUHJpb3JpdHksdGFza0NvbXBsZXRlfVxyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhbGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXREYXRlLCBnZXROYW1lLCBnZXREZXNjLCBnZXRQcmlvciwgZ2V0Q29tcGxldGUsIGNoYW5nZURhdGUsIGNoYW5nZVByaW9yaXR5LCBjaGFuZ2VOYW1lLCBjaGFuZ2VEZXNjLCBjaGFuZ2VDb21wbGV0aW9uLGltcG9ydFRhc2tzLGV4cG9ydFRhc2ssZ2V0QWxsfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tzIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlVGFza3MgZnJvbSBcIi4vT2JqZWN0cy90YXNrc1wiXHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL09iamVjdHMvcHJvamVjdHNcIjtcclxuaW1wb3J0IHByb2plY3RIYW5kbGVyIGZyb20gXCIuL09iamVjdHMvcHJvamVjdEhhbmRsZXJcIjtcclxuaW1wb3J0IHN0b3JhZ2VBdmFpbGFibGUgZnJvbSBcIi4vT2JqZWN0cy9sb2NhbFN0b3JhZ2VIYW5kbGVyXCI7XHJcbmltcG9ydCBEb21EaXNwbGF5IGZyb20gXCIuL0RvbWhhbmRsZXIvZGlzcGxheWVyXCI7XHJcbmltcG9ydCBkb21JbnRlcmFjdGlvbiBmcm9tIFwiLi9Eb21oYW5kbGVyL2RvbUludGVyYWN0aW9uXCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG4vLyBJbml0aWFsaXNlIHRoZSBUZW1wbGF0ZSBQcm9qZWN0XHJcbmNvbnN0IHRhc2sxID0gY3JlYXRlVGFza3MoJ1Rhc2sgMScsJ1RoaXMgaXMgdGhlIEZpcnN0IFRhc2snLG5ldyBEYXRlKCksJ2xvdycpO1xyXG5jb25zdCBwcm9qID0gY3JlYXRlUHJvamVjdCgnUHJvamVjdCAxJywgJ1RoaXMgaXMgdGhlIGRlZmF1bHQgUHJvamVjdCcpO1xyXG5jb25zdCBhbGxQcm9qID0gcHJvamVjdEhhbmRsZXIoKVxyXG5wcm9qLmFkZFRhc2sodGFzazEpO1xyXG5hbGxQcm9qLmFkZFByb2plY3QocHJvaik7XHJcblxyXG4vLyBJZiBQcm9qZWN0IGV4aXN0cywgTG9hZCB0aGF0IFByb2plY3QsIGVsc2UsIHV0aWxpc2UgdGhlIHRlbXBsYXRlIHByb2plY3RcclxuY29uc3Qgc3RvcmFnZVN0YXR1cyA9IHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpO1xyXG5zdG9yYWdlU3RhdHVzICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0RGF0YScpID8gYWxsUHJvai5sb2FkUHJvamVjdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdERhdGEnKSkgOiBhbGxQcm9qXHJcblxyXG5cclxuZG9tSW50ZXJhY3Rpb24uaW5pdGlhbExvYWQoYWxsUHJvailcclxuZG9tSW50ZXJhY3Rpb24uc2V0QWxsUHJvamVjdChhbGxQcm9qKVxyXG5kb21JbnRlcmFjdGlvbi5wcm9qZWN0U2VsZWN0aW9uT3B0aW9uKGFsbFByb2opXHJcbmRvbUludGVyYWN0aW9uXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9