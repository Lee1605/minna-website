/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/MoonTime-Regular.ttf */ \"./fonts/MoonTime-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/linux-biolinum.regular.ttf */ \"./fonts/linux-biolinum.regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/minna-middle.jpg */ \"./images/minna-middle.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/minna-footer.jpg */ \"./images/minna-footer.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'moon-time';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    font-weight: 200;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'linux-biolinum';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    font-weight: 200;\\n    font-style: normal;\\n}\\n\\nbody {\\n    background-color: #e3f1f1;\\n    margin: 0;\\n    font-family:linux-biolinum ;\\n}\\n\\ndiv#desktop {\\n    max-width: 1366px;\\n    height: 150px;\\n    margin: 0 auto;\\n    justify-content: space-between;\\n    display: flex;\\n    flex-direction: row;\\n}\\n\\nul.events {\\n    transition-property: all;\\n    transition-duration: 0.3s;\\n    transition-timing-function: ease-in;\\n    text-align: start;\\n    list-style-type: none;\\n    padding: 0;\\n    height: 0;\\n    overflow: hidden;\\n    background-color:#e3f1f1;\\n    margin: 0;\\n    position: relative;\\n    z-index: 3;\\n    \\n}\\n\\ndiv#mobile {\\n    display: none;\\n}\\n\\nnav#nav-bar {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    width: 65vw;\\n    justify-content: space-evenly;\\n}\\n\\n.nav-link {\\n    text-decoration: none;\\n    color: black;\\n    font-size: 1.1rem;\\n}\\n\\n.link {\\n    text-decoration: none;\\n    color: black;\\n}\\n\\na.current-page {\\n    color: #DBCFBE ;\\n}\\n\\nimg.logo {\\n    margin-left: 6vw;\\n}\\n\\ndiv#hero {\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    height: 45vw;\\n}\\n\\ndiv.img-text {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-evenly;\\n    max-width: 1366px;\\n    margin: 150px auto 200px auto;\\n}\\n\\nimg.about-img {\\n    border-radius: 45%;\\n    width: 34%;\\n    height: 600px;\\n}\\n\\ndiv.textbtn {\\n    width: 40%;\\n    text-align: center;\\n    padding-top: 30px;\\n}\\n\\np.text {\\n    font-family: linux-biolinum;\\n    font-weight: 200;\\n    font-size: 1.8rem;\\n    line-height: 3rem;\\n    margin-top: 0;\\n}\\n\\nbutton.readmore {\\n    background-color: #DBCFBE;\\n    width: 200px;\\n    height: 65px;\\n    font-size: 1.3rem;\\n    font-family: linux-biolinum;\\n    border: 1px solid #707070;\\n}\\n\\nbutton.readmore:hover, .fab:hover {\\n    opacity: 0.8;\\n    cursor: pointer;\\n}\\n\\ndiv#sentence {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    height: 50vw;\\n    text-align: center;\\n    position: relative;\\n}\\n\\ndiv.shecan {\\n    color: white;\\n    font-size: 60px;\\n    letter-spacing: 6px;\\n    position: absolute;\\n    top: 15vh;\\n    right: 11vw;\\n    font-family: moon-time;\\n}\\n\\np.she {\\n    margin-top: 10px;\\n    margin-bottom: 0;\\n}\\n\\nh1.title {\\n    text-align: center;\\n    font-family: moon-time;\\n    margin-top: 100px;\\n    font-size: 60px;\\n}\\n\\ndiv#retreats {\\n    margin-top: 80px;\\n}\\n\\ndiv#testimonials {\\n    max-width: 1366px;\\n    border: none;\\n    margin: 0 auto;\\n}\\n\\n.swiper {\\n    max-width: 1366px;\\n}\\n\\n.swiper-button-prev {\\n    left: 50px;\\n    color: black;\\n}\\n\\n.swiper-button-next {\\n    right: 50px;\\n    color: black;\\n}\\n\\ndiv.testimonial {\\n    width: 80%;\\n    height: 350px;\\n    background-color: #DBCFBE;\\n    margin: 0 auto;\\n    border-radius: 150px;\\n    border: none;\\n    text-align: center;\\n    color: white;\\n}\\n\\ndiv.testi-wrap {\\n    padding-top: calc(175px - 130px);\\n}\\n\\np.testi-text {\\n    line-height: 2.5rem;\\n    font-size: 1.5rem;\\n    width: 80%;\\n    margin: 0 auto;\\n}\\n\\nsection#contact {\\n    max-width: 1366px;\\n    margin: 0 auto;\\n}\\n\\ndiv.contact-wrap {\\n    width: 70%;\\n    margin: 0 auto;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\ndiv.name {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n}\\n\\nfieldset, input, textarea {\\n    display: block;\\n    margin: 12px 0;\\n    padding: 0;\\n    border: 0;\\n}\\n\\ninput {\\n    height: 35px;\\n}\\n\\nlabel {\\n    font-size: 1.1rem;\\n}\\n\\n.name-field {\\n    width: 40%;\\n}\\n\\n.name-input {\\n    width: 100%;\\n}\\n\\n.full {\\n    width: 100%;\\n}\\n\\n.send {\\n    margin: 20px auto;\\n}\\n\\nspan {\\n    font-family: linux-biolinum;\\n    font-size: 2rem;\\n    font-weight: 300;\\n}\\n\\nsection#insta {\\n    margin-bottom: 100px;\\n}\\n\\ndiv.container {\\n    max-width: 1366px;\\n    margin: 0 auto;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    flex-grow: 0;\\n}\\n\\nimg.insta {\\n    height: 38vw;\\n    margin: 0 5px;\\n    flex-grow: 0;\\n}\\n\\nfooter {\\n    margin-top: 100px;\\n}\\n\\ndiv.background {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    height: 35vw;\\n}\\n\\ndiv.icons, h5.author {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-around;\\n    color: white;\\n    width: 10%;\\n    font-size: 1.6rem;\\n    height: 150px;\\n    align-items: center;\\n    margin: 0 auto;\\n}\\n\\nh5.author {\\n    width: 25%;\\n    height: auto;\\n}\\n\\ndiv.retreat {\\n    display: flex;\\n    max-width: 1200px;\\n    margin: 0 auto;\\n    flex-direction: row;\\n    justify-content: space-evenly;\\n}\\n\\np.retreat-content {\\n    width: 50vw;\\n}\\n\\n.retreat-img {\\n    width: 55vh;\\n}\\n\\n.about-page-img {\\n    width: 100%;\\n}\\n\\ndiv.about-container {\\n    text-align: center;\\n    max-width: 1100px;\\n    margin: 0 auto;\\n}\\n\\ndiv.payments {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-around;\\n    max-width: 1000px;\\n    margin: 150px auto 0 auto;\\n    text-align: center;\\n}\\n\\ndiv.payment-container {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-evenly;\\n    border: 1px solid black;\\n    width: 300px;\\n}\\n\\ndiv.payment-container:hover {\\n    margin-top: -7px;\\n    transition: all 0.1s ease-in;\\n}\\n\\n@media only screen and (min-width: 1024px) and (max-width: 1365px) {\\n    p.text {\\n        font-size: 2vw;\\n    }\\n\\n    p.testi-text {\\n        font-size: 1.8vw;\\n    }\\n\\n    div.shecan {\\n        font-size: 4vw;\\n        right: 3vw;\\n    }\\n\\n    div.img-text {\\n        justify-content: space-evenly;\\n    }\\n\\n    img.about-img {\\n        height: 45vw;\\n    }\\n}\\n\\n\\n\\n@media only screen and (max-width: 1024px) {\\n    header {\\n        position: relative;\\n    }\\n\\n    div#desktop {\\n        display: none;\\n    }\\n\\n    div#mobile {\\n        display: initial;\\n    }\\n\\n    div#burger {\\n        margin: 20px 20px 0 0;\\n    }\\n\\n    div.nav-bar {\\n        width: 35px;\\n        height: 3px;\\n        background-color: black;\\n        margin: 7px 0;\\n    }\\n\\n    div#container-nav {\\n        justify-content: space-between;\\n        display: flex;\\n        flex-direction: row;\\n        height: 20vh;\\n    }\\n\\n    nav#nav-bar-mobile {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: space-around;\\n        height: 70vh;\\n        width: 0;\\n        overflow: hidden;\\n        position: absolute;\\n        right: 0;\\n        top: 0;\\n        background-color: #e3f1f1;\\n    }\\n\\n    .nav-link {\\n        margin-left: 10px;\\n    }\\n\\n    i#close {\\n        align-self: flex-end;\\n        margin-right: 20px;\\n        font-size: 2.3rem;\\n    }\\n\\n    div#hero {\\n        width: 100vw;\\n        height: 50vh;\\n        background-size: cover;\\n        background-position: right;\\n    }\\n\\n    div.img-text {\\n        flex-direction: column;\\n        width: 90vw;\\n        margin: 70px auto;\\n    }\\n\\n    img.about-img {\\n        width: 80vw;\\n        height: 55vh;\\n        margin: 0 auto;\\n    }\\n\\n    div.textbtn {\\n        width: 100%;\\n    }\\n\\n    p.text {\\n        font-size: 1rem;\\n        line-height: 25px;\\n    }\\n\\n    div#sentence {\\n        height: 50vh;\\n    }\\n\\n    div.shecan {\\n        font-size: 2rem;\\n        letter-spacing: 5px;\\n        width: 100px;\\n        left: 11vw;\\n        top: 2vh;\\n    }\\n\\n    h1.title{\\n        margin: 60px 0;\\n    }\\n\\n    div#retreats {\\n        flex-direction: column-reverse;\\n        margin-top: 50px;\\n    }\\n\\n    div.testimonial {\\n        width: 90%;\\n        height: 124vw;\\n    }\\n\\n    .swiper-button-prev {\\n        left: 10px;\\n    }\\n    \\n    .swiper-button-next {\\n        right: 10px;\\n    }\\n\\n    p.testi-text {\\n        line-height: 6vw;\\n        font-size: 5vw;\\n    }\\n\\n    div.background {\\n        width: 100vw;\\n        height: 40vh;\\n        background-position: center;\\n    }\\n\\n    div.icons {\\n        width: 30%;\\n        height: 100px;\\n    }\\n\\n    h5.author {\\n        font-size: 1.2rem;\\n        width: 100%;\\n    }\\n\\n    span#contain {\\n        cursor: pointer;\\n    }\\n\\n    div.retreat {\\n        flex-direction: column;\\n        text-align: center;\\n        margin: 0 auto;\\n        align-items: center;\\n    }\\n\\n    p.retreat-content {\\n        width: 85vw;\\n    }\\n\\n    img.retreat-img {\\n        width: 45vh;\\n    }\\n\\n    div.payments {\\n        flex-direction: column;\\n        margin-top: 80px;\\n        max-width: 300px;\\n    }\\n\\n    div.payment-container {\\n        margin: 0 auto;\\n    }\\n\\n    div.payment {\\n        margin-bottom: 40px;\\n    }\\n\\n    \\n\\n}\\n\\n@media only screen and (min-width: 700px) and (max-width: 1024px) {\\n    img.about-img {\\n        width: 43vw;\\n        height: 40vh;\\n    }\\n\\n    div.testimonial {\\n        height: 80vw;\\n    }\\n\\n    p.testi-text {\\n        font-size: 1.8rem;\\n    }\\n\\n    nav#nav-bar-mobile {\\n        height: 57vh;\\n    }\\n\\n}\\n\\n@media only screen and (min-width: 1660px) {\\n    div.shecan {\\n        right: 20vw;\\n    }\\n}\\n\\n@media only screen and (min-width: 1025px) {\\n\\n.events-link:hover .events {\\n    height: 3rem;\\n    overflow: auto;\\n}\\n\\n.events-link {\\n    align-self: flex-start;\\n    margin-top: calc(75px - 10px);\\n}\\n\\na.nav-link:hover, span:hover {\\n    color: #DBCFBE;\\n}\\n\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minna-website/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://minna-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://minna-website/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://minna-website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://minna-website/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://minna-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://minna-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://minna-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://minna-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://minna-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://minna-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst burger = document.getElementById('burger');\nconst nav_bar_mobile = document.getElementById('nav-bar-mobile');\nconst close = document.getElementById('close');\nconst events = document.querySelector('.events-contain');\nconst contain = document.getElementById('contain');\n\n\n\n\nburger.addEventListener('click',(event) => {\n    // nav_bar_mobile.style.display = 'flex';\n    nav_bar_mobile.style.width = '60vw';\n    nav_bar_mobile.style.overflow = 'initial';\n    nav_bar_mobile.style.border = '1px solid #e3f1f1';\n    nav_bar_mobile.style.transition = 'all 0.3s ease-in';\n});\n\nclose.addEventListener('click',(event) => {\n    nav_bar_mobile.style.width = '0';\n    nav_bar_mobile.style.overflow = 'hidden';\n    nav_bar_mobile.style.border = 'none';\n});\n\ncontain.addEventListener('click', (event) => {\n  if(events.classList.contains('active')) {\n    events.style.height = '3rem';\n    events.style.overflow = 'auto';\n    events.classList.remove('active');\n    contain.style.color = '#DBCFBE';\n  } else {\n    events.style.height = '0';\n    events.style.overflow = 'hidden';\n    events.classList.add('active');\n    contain.style.color = 'initial';\n  }\n})\n\nconst swiper = new Swiper('.swiper', {\n    // Optional parameters\n    direction: 'horizontal',\n    loop: true,\n  \n    // Navigation arrows\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev',\n    },\n  \n  });\n\n  const imgSwiper = new Swiper('.swiper.img-swiper', {\n    // Optional parameters\n    direction: 'horizontal',\n    loop: true,\n    autoplay: {\n      delay: 4500,\n      disableOnInteraction: false,\n  },\n    slidesPerView: 1,\n    spaceBetween: 30,\n    freeMode: true,\n  \n  });\n\n\n\n\n//# sourceURL=webpack://minna-website/./src/index.js?");

/***/ }),

/***/ "./fonts/MoonTime-Regular.ttf":
/*!************************************!*\
  !*** ./fonts/MoonTime-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b83db42eb10b3fc7bd0f.ttf\";\n\n//# sourceURL=webpack://minna-website/./fonts/MoonTime-Regular.ttf?");

/***/ }),

/***/ "./fonts/linux-biolinum.regular.ttf":
/*!******************************************!*\
  !*** ./fonts/linux-biolinum.regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f62e09dea408b976ea48.ttf\";\n\n//# sourceURL=webpack://minna-website/./fonts/linux-biolinum.regular.ttf?");

/***/ }),

/***/ "./images/minna-footer.jpg":
/*!*********************************!*\
  !*** ./images/minna-footer.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fb53af2c90ad12fe44f0.jpg\";\n\n//# sourceURL=webpack://minna-website/./images/minna-footer.jpg?");

/***/ }),

/***/ "./images/minna-middle.jpg":
/*!*********************************!*\
  !*** ./images/minna-middle.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"847bd23823919c1cc43d.jpg\";\n\n//# sourceURL=webpack://minna-website/./images/minna-middle.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;