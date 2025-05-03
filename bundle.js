/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 56:
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

/***/ 72:
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

/***/ 113:
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

/***/ 276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;QACS,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 284:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/styles/about.css"],"names":[],"mappings":"AAAA;QACS,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
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

/***/ 354:
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

/***/ 540:
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

/***/ 659:
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

/***/ 673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/styles/fonts.css"],"names":[],"mappings":"AAAA;QACS,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 825:
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

/***/ 842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA;QACS,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;QACS,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/styles/style.css
var style = __webpack_require__(276);
;// ./src/styles/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const styles_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css
var styles_reset = __webpack_require__(978);
;// ./src/styles/reset.css

      
      
      
      
      
      
      
      
      

var reset_options = {};

reset_options.styleTagTransform = (styleTagTransform_default());
reset_options.setAttributes = (setAttributesWithoutAttributes_default());
reset_options.insert = insertBySelector_default().bind(null, "head");
reset_options.domAPI = (styleDomAPI_default());
reset_options.insertStyleElement = (insertStyleElement_default());

var reset_update = injectStylesIntoStyleTag_default()(styles_reset/* default */.A, reset_options);




       /* harmony default export */ const src_styles_reset = (styles_reset/* default */.A && styles_reset/* default */.A.locals ? styles_reset/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css
var fonts = __webpack_require__(673);
;// ./src/styles/fonts.css

      
      
      
      
      
      
      
      
      

var fonts_options = {};

fonts_options.styleTagTransform = (styleTagTransform_default());
fonts_options.setAttributes = (setAttributesWithoutAttributes_default());
fonts_options.insert = insertBySelector_default().bind(null, "head");
fonts_options.domAPI = (styleDomAPI_default());
fonts_options.insertStyleElement = (insertStyleElement_default());

var fonts_update = injectStylesIntoStyleTag_default()(fonts/* default */.A, fonts_options);




       /* harmony default export */ const styles_fonts = (fonts/* default */.A && fonts/* default */.A.locals ? fonts/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css
var menu = __webpack_require__(842);
;// ./src/styles/menu.css

      
      
      
      
      
      
      
      
      

var menu_options = {};

menu_options.styleTagTransform = (styleTagTransform_default());
menu_options.setAttributes = (setAttributesWithoutAttributes_default());
menu_options.insert = insertBySelector_default().bind(null, "head");
menu_options.domAPI = (styleDomAPI_default());
menu_options.insertStyleElement = (insertStyleElement_default());

var menu_update = injectStylesIntoStyleTag_default()(menu/* default */.A, menu_options);




       /* harmony default export */ const styles_menu = (menu/* default */.A && menu/* default */.A.locals ? menu/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/styles/about.css
var about = __webpack_require__(284);
;// ./src/styles/about.css

      
      
      
      
      
      
      
      
      

var about_options = {};

about_options.styleTagTransform = (styleTagTransform_default());
about_options.setAttributes = (setAttributesWithoutAttributes_default());
about_options.insert = insertBySelector_default().bind(null, "head");
about_options.domAPI = (styleDomAPI_default());
about_options.insertStyleElement = (insertStyleElement_default());

var about_update = injectStylesIntoStyleTag_default()(about/* default */.A, about_options);




       /* harmony default export */ const styles_about = (about/* default */.A && about/* default */.A.locals ? about/* default */.A.locals : undefined);

;// ./src/images/cookie-hero-low.avif
const cookie_hero_low_namespaceObject = __webpack_require__.p + "images/cookie-hero-low.4f417252736b8dbb056c.avif";
;// ./src/scripts/home.js


function renderHome() {
	const content = document.querySelector("#content");
	const gridContainer = document.querySelector(".grid-container");
	if (!(gridContainer.dataset.status === "home")) {
		while (content.firstChild) {
			content.firstChild.remove();
		}
		
	const url = `url("${cookie_hero_low_namespaceObject}")`;
	
	gridContainer.style.backgroundImage = url;

	// linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),

	const heroAlignContainer = document.createElement("div");

	const heroContainer = document.createElement("div");
	const heroText1 = document.createElement("h6");
	const heroText2 = document.createElement("h1");
	const heroText3 = document.createElement("h6");
	const heroButton = document.createElement("button");
	const heroButtonContainer = document.createElement("div");

	gridContainer.dataset.status = "home";

	heroAlignContainer.classList.add("hero-align-container");
	heroContainer.classList.add("hero-container");
	heroText1.classList.add("hero-text-1");
	heroText2.classList.add("hero-text-2");
	heroText3.classList.add("hero-text-3");
	heroButton.classList.add("reservation")
	heroButtonContainer.classList.add("reservation-container")
	heroText1.textContent = "WELCOME TO";
	heroText2.textContent = "SEZI COOKIES";
	heroText3.textContent = "Cookie. Coffe. Tea. Sweets.";
	heroButton.textContent="RESERVATION"
	content.appendChild(heroAlignContainer);
	heroAlignContainer.appendChild(heroContainer);
	heroContainer.appendChild(heroText1);
	heroContainer.appendChild(heroText2);
	heroContainer.appendChild(heroText3);
	heroButtonContainer.appendChild(heroButton);
	heroContainer.appendChild(heroButtonContainer);
	}

}

;// ./src/images/our-menu.avif
const our_menu_namespaceObject = __webpack_require__.p + "images/our-menu.92c746f4ea39fceee8fb.avif";
;// ./src/images/coffee-1.jpg
const coffee_1_namespaceObject = __webpack_require__.p + "images/coffee-1.3626689fd56eb6fde873.jpg";
;// ./src/images/coffee-2.jpg
const coffee_2_namespaceObject = __webpack_require__.p + "images/coffee-2.f830b734ef910b94f660.jpg";
;// ./src/images/coffee-3.jpg
const coffee_3_namespaceObject = __webpack_require__.p + "images/coffee-3.6ff6f604fac351d037fe.jpg";
;// ./src/images/coffee-4.jpg
const coffee_4_namespaceObject = __webpack_require__.p + "images/coffee-4.b26b20ca9152f7acf468.jpg";
;// ./src/images/coffee-5.jpg
const coffee_5_namespaceObject = __webpack_require__.p + "images/coffee-5.df3737bed36fa5d4b6ab.jpg";
;// ./src/images/food-1.jpg
const food_1_namespaceObject = __webpack_require__.p + "images/food-1.542803a5e7251f5fd59b.jpg";
;// ./src/images/food-2.jpg
const food_2_namespaceObject = __webpack_require__.p + "images/food-2.4c55be1ebe1839d23821.jpg";
;// ./src/images/food-3.jpg
const food_3_namespaceObject = __webpack_require__.p + "images/food-3.269e8fe20e015e029291.jpg";
;// ./src/images/food-4.jpg
const food_4_namespaceObject = __webpack_require__.p + "images/food-4.b0044edce0862a42a3ed.jpg";
;// ./src/images/food-5.jpg
const food_5_namespaceObject = __webpack_require__.p + "images/food-5.f80b94021d5c29382338.jpg";
;// ./src/images/food-6.jpg
const food_6_namespaceObject = __webpack_require__.p + "images/food-6.88881a9917a16051d448.jpg";
;// ./src/images/plate1.avif
const plate1_namespaceObject = __webpack_require__.p + "images/plate1.d43513c112b296b7c41e.avif";
;// ./src/images/plate2.avif
const plate2_namespaceObject = __webpack_require__.p + "images/plate2.43ec60f3aeec9c49ec70.avif";
;// ./src/images/plate3.avif
const plate3_namespaceObject = __webpack_require__.p + "images/plate3.15bcbc16079a63f11c82.avif";
;// ./src/images/plate4.avif
const plate4_namespaceObject = __webpack_require__.p + "images/plate4.7115637cb8601293dbc9.avif";
;// ./src/images/plate5.avif
const plate5_namespaceObject = __webpack_require__.p + "images/plate5.3d4c6a4daf1de56e4850.avif";
;// ./src/images/plate6.avif
const plate6_namespaceObject = __webpack_require__.p + "images/plate6.f66c339ac2f28758e46e.avif";
;// ./src/scripts/menuModel.js





















class Menu {
	static myMenu = [];
	constructor(name, price, info, img, category) {
		this.name = name;
		this.price = price;
		this.info = info;
		this.img = img;
		this.category = category;
		Menu.myMenu.push(this);
	}
}
new Menu(
	"Caramel Vanilla Latte",
	"$4.25",
	"Espresso, steamed milk, vanilla syrup, caramel drizzle",
	coffee_1_namespaceObject,
	"drink"
);
new Menu(
	"Iced Matcha Latte",
	"$3.95",
	"Ceremonial matcha, almond milk, a touch of honey",
	coffee_2_namespaceObject,
	"drink"
);
new Menu(
	"Hazelnut Mocha",
	"$4.50",
	"Espresso, chocolate, hazelnut syrup, whipped cream",
	coffee_3_namespaceObject,
	"drink"
);
new Menu(
	"Strawberry Hibiscus Tea",
	"$3.75",
	"Dried hibiscus petals, fresh strawberry puree, mint",
	coffee_4_namespaceObject,
	"drink"
);
new Menu(
	"Cinnamon Dolce Cappuccino ",
	"$4.10",
	"Espresso, steamed milk, cinnamon dolce sprinkle",
	coffee_5_namespaceObject,
	"drink"
);
new Menu(
	"Coconut Cold Brew",
	"$4.00",
	"Smooth cold brew, coconut milk, agave nectar ",
	coffee_2_namespaceObject,
	"drink"
);
new Menu(
	"Chocolate Croissant",
	"$2.85",
	"Buttery pastry filled with Belgian dark chocolate",
	food_1_namespaceObject,
	"food"
);
new Menu(
	"Avocado Toast",
	"$5.20",
	"Sourdough, smashed avocado, chili flakes, sea salt",
	food_2_namespaceObject,
	"food"
);
new Menu(
	"Spinach & Feta Wrap",
	"$4.75",
	"Spinach tortilla, crumbled feta, sun-dried tomatoes",
	food_3_namespaceObject,
	"food"
);
new Menu("Blueberry Muffin", "$3.30", "Fresh blueberries, vanilla crumb topping", food_4_namespaceObject, "food");
new Menu(
	"Turkey & Swiss Panini",
	"$6.10",
	"Roasted turkey, Swiss cheese, pesto mayo",
	food_5_namespaceObject,
	"food"
);
new Menu(
	"Quiche Lorraine",
	"$5.95",
	"Flaky crust, bacon lardons, creamy egg custard",
	food_6_namespaceObject,
	"food"
);
new Menu(
	"Rustic Mushroom Risotto",
	"$18.50",
	"Creamy arborio rice with porcini mushrooms, white wine, parmesan, and fresh thyme.",
	plate1_namespaceObject,
	"plate"
);
new Menu(
	"Mediterranean Power Salad",
	"$14.80",
	"Grilled lemon-marinated chicken over quinoa and arugula, finished with a zesty herb dressing.",
	plate2_namespaceObject,
	"plate"
);
new Menu(
	"Smoky Chipotle Veggie Tacos",
	"$13.40",
	"Sautéed bell peppers and onions in soft tortillas, topped with chipotle aioli and lime crema. ",
	plate3_namespaceObject,
	"plate"
);
new Menu(
	"Lemon-Herb Chicken Bowl ",
	"$15.90",
	"Grilled lemon-marinated chicken over quinoa and arugula, finished with a zesty herb dressing.",
	plate4_namespaceObject,
	"plate"
);
new Menu(
	"Seared Salmon Teriyaki",
	"$22.00",
	"Norwegian salmon glazed in light teriyaki sauce, served with sesame greens and sprouts.",
	plate5_namespaceObject,
	"plate"
);
new Menu(
	"Truffle Mac and Cheese",
	"$17.25",
	"Aged cheddar and creamy béchamel, infused with black truffle oil and finished with crispy panko.",
	plate6_namespaceObject,
	"plate"
);
const deneme2 = Menu.myMenu
;// ./src/scripts/menu.js



function renderMenu() {
	const content = document.querySelector("#content");
	const gridContainer = document.querySelector(".grid-container");
	

	if(!(gridContainer.dataset.status === "menu")){
		while(content.firstChild){
			content.firstChild.remove()
		}
		gridContainer.style.backgroundImage = "none";
		gridContainer.dataset.status = "menu";
		const url = `url("${our_menu_namespaceObject}")`;
	
		// linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),
	
		const menuHeader = document.createElement("div");
		menuHeader.classList.add("menu-header");
		menuHeader.style.backgroundImage = url;
		const menuHeaderText = document.createElement("h1");
		menuHeaderText.textContent = "OUR MENU";
		content.appendChild(menuHeader);
		menuHeader.appendChild(menuHeaderText);
	
		const menuContainer = document.createElement("div");
		menuContainer.classList.add("menu-container");
		content.appendChild(menuContainer);
	
		const menuFull = document.createElement("div");
		menuFull.classList.add("menu-full");
		content.appendChild(menuFull);
		const menuDrinks = document.createElement("div");
		const menuFoods = document.createElement("div");
		menuDrinks.classList.add("menu-drinks");
		menuFoods.classList.add("menu-foods");
		menuContainer.appendChild(menuDrinks);
		menuContainer.appendChild(menuFoods);
	
		const menuDrinksHeader = document.createElement("div");
		menuDrinksHeader.classList.add("menu-drinks-header");
		const drinkHeader1 = document.createElement("h6");
		const drinkHeader2 = document.createElement("h1");
		drinkHeader1.textContent = "DRINKS";
		drinkHeader2.textContent = "COFFEES & TEAS";
		menuDrinksHeader.appendChild(drinkHeader1);
		menuDrinksHeader.appendChild(drinkHeader2);
		menuDrinks.appendChild(menuDrinksHeader);
		const menuFoodsHeader = document.createElement("div");
		menuFoodsHeader.classList.add("menu-foods-header");
		const foodHeader1 = document.createElement("h6");
		const foodHeader2 = document.createElement("h1");
		foodHeader1.textContent = "FOODS";
		foodHeader2.textContent = "BAKERY & LUNCH";
		menuFoodsHeader.appendChild(foodHeader1);
		menuFoodsHeader.appendChild(foodHeader2);
		menuFoods.appendChild(menuFoodsHeader);
	
	
		
	
		const menuFullHeader = document.createElement("div");
		menuFullHeader.classList.add("full-header");
		
		const fullHeader = document.createElement("h1");
		fullHeader.textContent = "FULL MENU";
		
		menuFullHeader.appendChild(fullHeader);
		
		const fullContainer = document.createElement("div")
		fullContainer.classList.add("full-container");
		
		menuFull.appendChild(menuFullHeader);
		menuFull.appendChild(fullContainer);
		Menu.myMenu.forEach(function (element, index, array) {
			if (element.category == "drink" || element.category == "food") {
				drinkAndFood(element, menuDrinks, menuFoods);
			}else{
				full(element,fullContainer)
			}
		});
	}



	

	
}

function drinkAndFood(element, menuDrinks, menuFoods) {
	const elementContainer = document.createElement("div");
	elementContainer.classList.add(`${element.category}`);
	const categoryContainer = element.category == "drink" ? menuDrinks : menuFoods;
	categoryContainer.appendChild(elementContainer);

	const imgContainer = document.createElement("div");
	imgContainer.classList.add(`${element.category}-img`);
	const img = document.createElement("img");
	img.setAttribute("src", element.img);
	imgContainer.appendChild(img);
	elementContainer.appendChild(imgContainer);

	const textContainer = document.createElement("div");
	textContainer.classList.add(`${element.category}-text-container`);
	elementContainer.appendChild(textContainer);

	const name = document.createElement("div");
	const info = document.createElement("div");
	name.classList.add(`${element.category}-name`);
	name.textContent = element.name;
	info.classList.add(`${element.category}-info`);
	info.textContent = element.info;
	textContainer.appendChild(name);
	textContainer.appendChild(info);

	const price = document.createElement("div");
	price.classList.add(`${element.category}-price`);
	price.textContent = element.price;
	elementContainer.appendChild(price);
}


function full(element, fullContainer) {

	








	

	const elementContainer = document.createElement("div");
	elementContainer.classList.add("full-item");
	
	
	fullContainer.appendChild(elementContainer)

	const imgContainer = document.createElement("div");
	imgContainer.classList.add(`full-img`);
	const img = document.createElement("img");
	img.setAttribute("src", element.img);
	imgContainer.appendChild(img);
	elementContainer.appendChild(imgContainer);

	const textContainer = document.createElement("div");
	textContainer.classList.add(`full-text-container`);
	elementContainer.appendChild(textContainer);

	const name = document.createElement("div");
	const info = document.createElement("div");
	name.classList.add(`full-name`);
	name.textContent = element.name;
	info.classList.add(`full-info`);
	info.textContent = element.info;
	textContainer.appendChild(name);
	elementContainer.appendChild(info);

	const price = document.createElement("div");
	price.classList.add(`full-price`);
	price.textContent = element.price;
	textContainer.appendChild(price);
}

;// ./src/images/about.avif
const images_about_namespaceObject = __webpack_require__.p + "images/about.a951140fb7621e295a09.avif";
;// ./src/images/about1.avif
const about1_namespaceObject = __webpack_require__.p + "images/about1.15e7b46a3c775d79d40a.avif";
;// ./src/scripts/about.js



function renderAbout() {
	const content = document.querySelector("#content");
	const gridContainer = document.querySelector(".grid-container");

	if (!(gridContainer.dataset.status === "about")) {
		while (content.firstChild) {
			content.firstChild.remove();
		}
		gridContainer.style.backgroundImage = "none";
		gridContainer.dataset.status = "about";
		const url = `url("${images_about_namespaceObject}")`;

		// linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),

		const aboutHeader = document.createElement("div");
		aboutHeader.classList.add("about-header");
		aboutHeader.style.backgroundImage = url;
		const aboutHeaderText = document.createElement("h1");
		aboutHeaderText.textContent = "ABOUT US";
		content.appendChild(aboutHeader);
		aboutHeader.appendChild(aboutHeaderText);

		const aboutContainer = document.createElement("div");
		aboutContainer.classList.add("about-container");
		content.appendChild(aboutContainer);
		const about1 = document.createElement("div");
		about1.classList.add("about-1");
		aboutContainer.appendChild(about1);
		const aboutImageContainer = document.createElement("div");
		aboutImageContainer.classList.add("about-img");
		const aboutImage = document.createElement("img");
		aboutImage.setAttribute("src", about1_namespaceObject);
		about1.appendChild(aboutImageContainer);
		aboutImageContainer.appendChild(aboutImage);

		const aboutText = document.createElement("div");
		aboutText.classList.add("about-text");
		about1.appendChild(aboutText);

		const aboutTextHeader1 = document.createElement("h6");
		aboutTextHeader1.textContent = "HEY! WELCOME TO SEZI COOKIE";
		const aboutTextHeader2 = document.createElement("h1");
		aboutTextHeader2.textContent = "OUR STORY";
		const aboutTextP1 = document.createElement("p");
		aboutTextP1.textContent =
			"Food is the foundation of true happiness. Lorem ipsum dolor amet,onsectetuer adipiscing elit aenean commodo.";
		const aboutTextP2 = document.createElement("p");
		aboutTextP2.textContent =
			"We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of customer experience a little bit better. Donec quam felis, nec, pellentesque eu.";
		const aboutTextButton = document.createElement("button");
        aboutTextButton.textContent="OUR MENU"
		aboutTextButton.classList.add("button");
		aboutText.appendChild(aboutTextHeader1);
		aboutText.appendChild(aboutTextHeader2);
		aboutText.appendChild(aboutTextP1);
		aboutText.appendChild(aboutTextP2);
		aboutText.appendChild(aboutTextButton);
	}
}

;// ./src/scripts/index.js









(function navRender() {
	const header = document.querySelector(".header");
	
	header.addEventListener("click", changeDom);
	renderHome();

	function changeDom(event) {
		if (event.target.matches(".home")) {
			renderHome();
		} else if (event.target.matches(".menu")) {
			renderMenu();
		} else if (event.target.matches(".about")) {
			renderAbout();
		}
	}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map