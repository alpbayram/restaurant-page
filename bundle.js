/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/about.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/about.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/about.avif */ "./src/images/about.avif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.grid-container[data-status="about"] {
	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: minmax(8rem, auto) 1fr;
}
.grid-container[data-status="about"] #content {
	z-index: 1;
	grid-column: 1 / 1;
	grid-row: 1 / 3;
	display: flex;
	flex-direction: column;
	align-items: center;
	container-name: about;
	container-type: inline-size;
}
.grid-container[data-status="about"] .about-header {
	position: relative;

	flex-basis: 30rem;
	color: white;
	z-index: 1;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: flex-end;
	align-self: stretch;
	& h1 {
		z-index: 1;
		height: calc(100% - 4rem);

		text-align: center;
		align-items: center;
		display: flex;
	}
	&::before {
		content: "";
		position: absolute;
		inset: 0;
		backdrop-filter: var(--default-backdrop);
		animation: fadeIn 0.8s;
	}
}

.about-container {
	margin-top: 8rem;
	width: min(100%, 80rem);
	padding: 0 4rem;
	display: flex;
	row-gap: 2rem;
	flex-direction: column;
	margin-bottom: 8rem;
	& > div {
		display: flex;
	}
}
.about-1 {
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 4rem;
	& > div {
		display: flex;

		flex-grow: 1;
		min-width: 20rem;
		justify-content: center;
	}
}
.about-img {
	flex-basis: 35%;
}
.about-img img {
	border-radius: 25vw 25vw 0 0;
	max-width: 100%;
	max-height: 100%;
}
.about-text {
	align-items: flex-start;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	flex-basis: 45%;
	& h6 {
		position: relative;
		font-size: 0.8em;
		color: rgb(197, 151, 100);
		&::before {
			content: "";
			position: absolute;

			background-color: #f0b551;
			right: 0;
			top: 50%;
			width: 40%;
			height: 5%;
			transform: translateX(calc(100% + 12px));
		}
	}
	& p {
		color: rgb(54, 54, 54);
	}
	& .button {
		background-color: #c59764;
		border: none;
		color: white;
		font-weight: normal;
		padding: 0.5rem 1.5rem;
		margin: 0;
		cursor: pointer;
		&:hover {
			transform: translateY(-4px);
			transition: 0.2s;
		}
	}
}

@container about (max-width: 52rem) {
	.about-1 .about-text {
		align-items: center;
	}
	.about-1 .about-img,
	.about-1 .about-text {
		text-align: center;
	}
    .about-text h6::before{
        content: none;
    }
}
@container about ( max-width:30rem) {
	.about-1 .about-img,
	.about-1 .about-text {
		min-width: 12rem;
	}
}
`, "",{"version":3,"sources":["webpack://./src/styles/about.css"],"names":[],"mappings":"AAAA;CACC,aAAa;;CAEb,0BAA0B;CAC1B,0CAA0C;AAC3C;AACA;CACC,UAAU;CACV,kBAAkB;CAClB,eAAe;CACf,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,qBAAqB;CACrB,2BAA2B;AAC5B;AACA;CACC,kBAAkB;;CAElB,iBAAiB;CACjB,YAAY;CACZ,UAAU;CACV,yDAA2C;CAC3C,sBAAsB;CACtB,2BAA2B;;CAE3B,aAAa;CACb,uBAAuB;CACvB,qBAAqB;CACrB,mBAAmB;CACnB;EACC,UAAU;EACV,yBAAyB;;EAEzB,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;CACd;CACA;EACC,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,wCAAwC;EACxC,sBAAsB;CACvB;AACD;;AAEA;CACC,gBAAgB;CAChB,uBAAuB;CACvB,eAAe;CACf,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB;EACC,aAAa;CACd;AACD;AACA;CACC,8BAA8B;CAC9B,mBAAmB;CACnB,eAAe;CACf,SAAS;CACT;EACC,aAAa;;EAEb,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;CACxB;AACD;AACA;CACC,eAAe;AAChB;AACA;CACC,4BAA4B;CAC5B,eAAe;CACf,gBAAgB;AACjB;AACA;CACC,uBAAuB;CACvB,sBAAsB;CACtB,SAAS;CACT,uBAAuB;CACvB,eAAe;CACf;EACC,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB;GACC,WAAW;GACX,kBAAkB;;GAElB,yBAAyB;GACzB,QAAQ;GACR,QAAQ;GACR,UAAU;GACV,UAAU;GACV,wCAAwC;EACzC;CACD;CACA;EACC,sBAAsB;CACvB;CACA;EACC,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf;GACC,2BAA2B;GAC3B,gBAAgB;EACjB;CACD;AACD;;AAEA;CACC;EACC,mBAAmB;CACpB;CACA;;EAEC,kBAAkB;CACnB;IACG;QACI,aAAa;IACjB;AACJ;AACA;CACC;;EAEC,gBAAgB;CACjB;AACD","sourcesContent":[".grid-container[data-status=\"about\"] {\n\tdisplay: grid;\n\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: minmax(8rem, auto) 1fr;\n}\n.grid-container[data-status=\"about\"] #content {\n\tz-index: 1;\n\tgrid-column: 1 / 1;\n\tgrid-row: 1 / 3;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tcontainer-name: about;\n\tcontainer-type: inline-size;\n}\n.grid-container[data-status=\"about\"] .about-header {\n\tposition: relative;\n\n\tflex-basis: 30rem;\n\tcolor: white;\n\tz-index: 1;\n\tbackground-image: url(../images/about.avif);\n\tbackground-size: cover;\n\tbackground-position: center;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-end;\n\talign-self: stretch;\n\t& h1 {\n\t\tz-index: 1;\n\t\theight: calc(100% - 4rem);\n\n\t\ttext-align: center;\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t}\n\t&::before {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tinset: 0;\n\t\tbackdrop-filter: var(--default-backdrop);\n\t\tanimation: fadeIn 0.8s;\n\t}\n}\n\n.about-container {\n\tmargin-top: 8rem;\n\twidth: min(100%, 80rem);\n\tpadding: 0 4rem;\n\tdisplay: flex;\n\trow-gap: 2rem;\n\tflex-direction: column;\n\tmargin-bottom: 8rem;\n\t& > div {\n\t\tdisplay: flex;\n\t}\n}\n.about-1 {\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 4rem;\n\t& > div {\n\t\tdisplay: flex;\n\n\t\tflex-grow: 1;\n\t\tmin-width: 20rem;\n\t\tjustify-content: center;\n\t}\n}\n.about-img {\n\tflex-basis: 35%;\n}\n.about-img img {\n\tborder-radius: 25vw 25vw 0 0;\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n.about-text {\n\talign-items: flex-start;\n\tflex-direction: column;\n\tgap: 1rem;\n\tjustify-content: center;\n\tflex-basis: 45%;\n\t& h6 {\n\t\tposition: relative;\n\t\tfont-size: 0.8em;\n\t\tcolor: rgb(197, 151, 100);\n\t\t&::before {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\n\t\t\tbackground-color: #f0b551;\n\t\t\tright: 0;\n\t\t\ttop: 50%;\n\t\t\twidth: 40%;\n\t\t\theight: 5%;\n\t\t\ttransform: translateX(calc(100% + 12px));\n\t\t}\n\t}\n\t& p {\n\t\tcolor: rgb(54, 54, 54);\n\t}\n\t& .button {\n\t\tbackground-color: #c59764;\n\t\tborder: none;\n\t\tcolor: white;\n\t\tfont-weight: normal;\n\t\tpadding: 0.5rem 1.5rem;\n\t\tmargin: 0;\n\t\tcursor: pointer;\n\t\t&:hover {\n\t\t\ttransform: translateY(-4px);\n\t\t\ttransition: 0.2s;\n\t\t}\n\t}\n}\n\n@container about (max-width: 52rem) {\n\t.about-1 .about-text {\n\t\talign-items: center;\n\t}\n\t.about-1 .about-img,\n\t.about-1 .about-text {\n\t\ttext-align: center;\n\t}\n    .about-text h6::before{\n        content: none;\n    }\n}\n@container about ( max-width:30rem) {\n\t.about-1 .about-img,\n\t.about-1 .about-text {\n\t\tmin-width: 12rem;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Inter-R.woff2 */ "./src/fonts/Inter-R.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Inter-B.woff2 */ "./src/fonts/Inter-B.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Inter-I.woff2 */ "./src/fonts/Inter-I.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Inter-BI.woff2 */ "./src/fonts/Inter-BI.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Norse-R.woff2 */ "./src/fonts/Norse-R.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Norse-B.woff2 */ "./src/fonts/Norse-B.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
	font-family: "Inter";
	src: local("Inter"), local("Inter Regular"), url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
	font-weight: 400;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: "Inter";
	src: local("Inter Bold"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
	font-weight: 700;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: "Inter";
	src: local("Inter Italic"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2");
	font-weight: 400;
	font-style: italic;
	font-display: swap;
}
@font-face {
	font-family: "Inter";
	src: local("Inter Bold Italic"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2");
	font-weight: 700;
	font-style: italic;
	font-display: optional;
}
@font-face {
	font-family: "Inter-fallback-linux";
	src: local("Liberation Sans");
}
@font-face {
	font-family: "Inter-fallback";
	src: local("Arial");
}
@font-face {
	font-family: "Norse";
	src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff2");
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}
@font-face {
	font-family: "Norse";
	src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff2");
	font-weight: bold;
	font-style: normal;
	font-display: swap;
}`, "",{"version":3,"sources":["webpack://./src/styles/fonts.css"],"names":[],"mappings":"AAAA;CACC,oBAAoB;CACpB,oGAA0F;CAC1F,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,oBAAoB;CACpB,iFAAuE;CACvE,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,oBAAoB;CACpB,mFAAyE;CACzE,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,oBAAoB;CACpB,wFAA+E;CAC/E,gBAAgB;CAChB,kBAAkB;CAClB,sBAAsB;AACvB;AACA;CACC,mCAAmC;CACnC,6BAA6B;AAC9B;AACA;CACC,6BAA6B;CAC7B,mBAAmB;AACpB;AACA;CACC,oBAAoB;CACpB,4DAAkD;CAClD,mBAAmB;CACnB,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,oBAAoB;CACpB,4DAAkD;CAClD,iBAAiB;CACjB,kBAAkB;CAClB,kBAAkB;AACnB","sourcesContent":["@font-face {\n\tfont-family: \"Inter\";\n\tsrc: local(\"Inter\"), local(\"Inter Regular\"), url(\"../fonts/Inter-R.woff2\") format(\"woff2\");\n\tfont-weight: 400;\n\tfont-style: normal;\n\tfont-display: swap;\n}\n\n@font-face {\n\tfont-family: \"Inter\";\n\tsrc: local(\"Inter Bold\"), url(\"../fonts/Inter-B.woff2\") format(\"woff2\");\n\tfont-weight: 700;\n\tfont-style: normal;\n\tfont-display: swap;\n}\n\n@font-face {\n\tfont-family: \"Inter\";\n\tsrc: local(\"Inter Italic\"), url(\"../fonts/Inter-I.woff2\") format(\"woff2\");\n\tfont-weight: 400;\n\tfont-style: italic;\n\tfont-display: swap;\n}\n@font-face {\n\tfont-family: \"Inter\";\n\tsrc: local(\"Inter Bold Italic\"), url(\"../fonts/Inter-BI.woff2\") format(\"woff2\");\n\tfont-weight: 700;\n\tfont-style: italic;\n\tfont-display: optional;\n}\n@font-face {\n\tfont-family: \"Inter-fallback-linux\";\n\tsrc: local(\"Liberation Sans\");\n}\n@font-face {\n\tfont-family: \"Inter-fallback\";\n\tsrc: local(\"Arial\");\n}\n@font-face {\n\tfont-family: \"Norse\";\n\tsrc: url(\"../fonts/Norse-R.woff2\") format(\"woff2\");\n\tfont-weight: normal;\n\tfont-style: normal;\n\tfont-display: swap;\n}\n@font-face {\n\tfont-family: \"Norse\";\n\tsrc: url(\"../fonts/Norse-B.woff2\") format(\"woff2\");\n\tfont-weight: bold;\n\tfont-style: normal;\n\tfont-display: swap;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.grid-container[data-status="menu"] {
	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: minmax(8rem, auto) 1fr;
}
.grid-container[data-status="menu"] #content {
	z-index: 1;
	grid-column: 1 / 1;
	grid-row: 1 / 3;
	display: flex;
	flex-direction: column;
	align-items: center;
	container-name: drinks-foods;
	container-type: inline-size;
}
.grid-container[data-status="menu"] .menu-header {
	position: relative;

	flex-basis: 30rem;
	color: white;
	z-index: 1;
	/* background-image: url(../images/our-menu.jpg); */
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: flex-end;
	align-self: stretch;
	& h1 {
		z-index: 1;
		height: calc(100% - 4rem);

		text-align: center;
		align-items: center;
		display: flex;
	}
	&::before {
		content: "";
		position: absolute;
		inset: 0;
		backdrop-filter: var(--default-backdrop);
		animation: fadeIn 0.8s;
	}
}
.menu-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
	grid-template-rows: auto;
	column-gap: 8rem;
	margin-top: 8rem;
	padding: 0 4rem;
	width: min(100%, 80rem);

	& .menu-drinks {
		/* justify-self: flex-start; */
	}
	& .menu-foods {
		/* justify-self: flex-end; */
	}
}

.menu-drinks,
.menu-foods {
	position: relative;
	/* max-width: 30rem; */
	display: flex;
	flex-direction: column;
	min-width: 30rem;
	row-gap: 2rem;
	&::before {
		content: "";
		position: absolute;
		/* width: 1px; */
		height: 100%;

		left: 37rem;

		background-color: #c8c4c5;
	}
	&::after {
		content: "";
		position: absolute;
		/* width: 1px; */
		height: 100%;
		left: -4rem;

		background-color: #c8c4c5;
	}
}

.menu-drinks-header,
.menu-foods-header,
.full-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 0.7rem;
	text-align: center;
	& h6 {
		position: relative;
		font-size: 0.8em;
		color: rgb(197, 151, 100);
		&::before {
			content: "";
			position: absolute;

			background-color: #f0b551;

			width: 100%;
			height: 100%;
			transform: scale(1.5, 0.1) translateX(calc(50% + 24px));
			
		}
		&::after {
			content: "";
			position: absolute;

			background-color: #f0b551;
			right: 0;
			width: 100%;
			height: 100%;
			transform: scale(1.5, 0.1) translateX(calc(-50% + -24px));
		}
	}
	
}
.drink,
.food {
	display: flex;

	max-height: 6rem;

	gap: clamp(0.5rem, 1vw, 2rem);
	font-size: 1.8rem;
}
.drink-text-container,
.food-text-container {
	margin-top: 0.7rem;
	margin-bottom: 0.7rem;
	justify-content: space-between;
	display: flex;
	flex-direction: column;
	min-width: 0;
	flex-basis: 60%;
	flex-grow: 0;
	flex-shrink: 0;
	& .drink-name,
	.food-name {
		font-family: serif;
		font-size: 0.8em;
		text-wrap: nowrap;
		overflow-y: auto;
		flex-shrink: 0;
	}
	& .drink-info,
	.food-info {
		white-space: wrap;
		overflow: auto;
		color: #363636;
		opacity: 0.6;
		font-size: 0.55em;
		max-height: 1.485rem;
	}
}
.drink-img,
.food-img {
	height: 100%;
	display: flex;
	align-items: center;
	min-width: 3rem;

	flex-basis: max-content;
	flex-shrink: 1;
}
.drink-img img,
.food-img img {
	max-height: 100%;
	max-width: 100%;
}
.drink-price,
.food-price {
	margin-top: 0.7rem;
	margin-left: auto;
	font-family: Norse;
	font-weight: bold;
	align-self: flex-start;
	font-size: 0.8em;
}
.full-header {
	color: rgb(197, 151, 100);
	& h1 {
		font-size: 4rem;
	}
}
.menu-full {
	margin-top: 8rem;
	width: min(100%, 80rem);
	padding: 0 4rem;
	display: flex;
	row-gap: 2rem;
	flex-direction: column;
	margin-bottom: 8rem;
}
.full-container {
	display: flex;
	flex-wrap: wrap;
	column-gap: 1.5rem;

	justify-content: space-between;
	row-gap: 3rem;
	& :nth-child(5) {
		filter: brightness(80%);
	}
}
.full-item {
	flex-basis: 30%;
	row-gap: 1rem;

	flex-grow: 1;
	display: flex;
	flex-direction: column;
	font-size: 1.5rem;
	min-width: 20rem;
}
.full-text-container {
	display: flex;
	justify-content: space-between;
	column-gap: 1rem;
	align-items: center;
	& .full-name {
		flex-grow: 1;
		flex-shrink: 1;
		font-family: serif;
		font-size: 0.8em;
		white-space: nowrap;

		overflow-y: auto;
	}
	& .full-price {
		flex-basis: min-content;
		flex-shrink: 0;
		font-size: 0.8em;
		font-family: Norse;
		font-weight: bold;
	}
}
.full-info {
	color: #363636;
	opacity: 0.6;
	font-size: 0.6em;
	height: 4.86rem;
	overflow: auto;
}
.full-img {
	width: 100%;
}
.full-img img {
	width: 100%;
	aspect-ratio: 1.5;
	object-fit: cover;
}
@container drinks-foods (max-width: 72rem) {
	.drink,
	.food {
		font-size: 1.8rem;
		& .drink-info{
			font-size: 0.50em;
			overflow: hidden;
		}
	}
	
	.full-item {
		font-size: 1.6rem;
	}
	.menu-foods {
		margin-top: 8rem;
	}
	
	.menu-full{
		width: min(100%, 80rem);
	}
	.menu-container .menu-foods {
		margin-top: 8rem;
	}
	
	.menu-container {
		
		width: min(100%, 80rem);
	}
}
@container drinks-foods (max-width: 38rem) {
	.drink,
	.food {
		font-size: 1.6rem;
		& .drink-info{
			max-height: 2.64rem;
		}
	}
	.menu-container {
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		padding: 0 1rem;
	}
	.drink-img, .food-img{
		min-width: 2rem;
	}
	.menu-container .menu-drinks,.menu-container .menu-foods{
		min-width: 16rem;
	}
	.full-item{
		min-width: 16rem;
		font-size: 1.3rem;
	}
	.menu-full{
		padding: 0 1rem;
	}
	.full-info{
		height: 2.34rem;
	}
}
@container drinks-foods (max-width: 24rem) {.drink,
	.food {
		font-size: 1.4rem;
		& .drink-info{
			max-height: 2.31rem;
		}
	}}
`, "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA;CACC,aAAa;;CAEb,0BAA0B;CAC1B,0CAA0C;AAC3C;AACA;CACC,UAAU;CACV,kBAAkB;CAClB,eAAe;CACf,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,4BAA4B;CAC5B,2BAA2B;AAC5B;AACA;CACC,kBAAkB;;CAElB,iBAAiB;CACjB,YAAY;CACZ,UAAU;CACV,mDAAmD;CACnD,sBAAsB;CACtB,2BAA2B;;CAE3B,aAAa;CACb,uBAAuB;CACvB,qBAAqB;CACrB,mBAAmB;CACnB;EACC,UAAU;EACV,yBAAyB;;EAEzB,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;CACd;CACA;EACC,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,wCAAwC;EACxC,sBAAsB;CACvB;AACD;AACA;CACC,aAAa;CACb,2DAA2D;CAC3D,wBAAwB;CACxB,gBAAgB;CAChB,gBAAgB;CAChB,eAAe;CACf,uBAAuB;;CAEvB;EACC,8BAA8B;CAC/B;CACA;EACC,4BAA4B;CAC7B;AACD;;AAEA;;CAEC,kBAAkB;CAClB,sBAAsB;CACtB,aAAa;CACb,sBAAsB;CACtB,gBAAgB;CAChB,aAAa;CACb;EACC,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;;EAEZ,WAAW;;EAEX,yBAAyB;CAC1B;CACA;EACC,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,WAAW;;EAEX,yBAAyB;CAC1B;AACD;;AAEA;;;CAGC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,qBAAqB;CACrB,kBAAkB;CAClB;EACC,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB;GACC,WAAW;GACX,kBAAkB;;GAElB,yBAAyB;;GAEzB,WAAW;GACX,YAAY;GACZ,uDAAuD;;EAExD;EACA;GACC,WAAW;GACX,kBAAkB;;GAElB,yBAAyB;GACzB,QAAQ;GACR,WAAW;GACX,YAAY;GACZ,yDAAyD;EAC1D;CACD;;AAED;AACA;;CAEC,aAAa;;CAEb,gBAAgB;;CAEhB,6BAA6B;CAC7B,iBAAiB;AAClB;AACA;;CAEC,kBAAkB;CAClB,qBAAqB;CACrB,8BAA8B;CAC9B,aAAa;CACb,sBAAsB;CACtB,YAAY;CACZ,eAAe;CACf,YAAY;CACZ,cAAc;CACd;;EAEC,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;CACf;CACA;;EAEC,iBAAiB;EACjB,cAAc;EACd,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;CACrB;AACD;AACA;;CAEC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,eAAe;;CAEf,uBAAuB;CACvB,cAAc;AACf;AACA;;CAEC,gBAAgB;CAChB,eAAe;AAChB;AACA;;CAEC,kBAAkB;CAClB,iBAAiB;CACjB,kBAAkB;CAClB,iBAAiB;CACjB,sBAAsB;CACtB,gBAAgB;AACjB;AACA;CACC,yBAAyB;CACzB;EACC,eAAe;CAChB;AACD;AACA;CACC,gBAAgB;CAChB,uBAAuB;CACvB,eAAe;CACf,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,eAAe;CACf,kBAAkB;;CAElB,8BAA8B;CAC9B,aAAa;CACb;EACC,uBAAuB;CACxB;AACD;AACA;CACC,eAAe;CACf,aAAa;;CAEb,YAAY;CACZ,aAAa;CACb,sBAAsB;CACtB,iBAAiB;CACjB,gBAAgB;AACjB;AACA;CACC,aAAa;CACb,8BAA8B;CAC9B,gBAAgB;CAChB,mBAAmB;CACnB;EACC,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;;EAEnB,gBAAgB;CACjB;CACA;EACC,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;CAClB;AACD;AACA;CACC,cAAc;CACd,YAAY;CACZ,gBAAgB;CAChB,eAAe;CACf,cAAc;AACf;AACA;CACC,WAAW;AACZ;AACA;CACC,WAAW;CACX,iBAAiB;CACjB,iBAAiB;AAClB;AACA;CACC;;EAEC,iBAAiB;EACjB;GACC,iBAAiB;GACjB,gBAAgB;EACjB;CACD;;CAEA;EACC,iBAAiB;CAClB;CACA;EACC,gBAAgB;CACjB;;CAEA;EACC,uBAAuB;CACxB;CACA;EACC,gBAAgB;CACjB;;CAEA;;EAEC,uBAAuB;CACxB;AACD;AACA;CACC;;EAEC,iBAAiB;EACjB;GACC,mBAAmB;EACpB;CACD;CACA;EACC,2DAA2D;EAC3D,eAAe;CAChB;CACA;EACC,eAAe;CAChB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,gBAAgB;EAChB,iBAAiB;CAClB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;AACD;AACA,4CAA4C;;EAE1C,iBAAiB;EACjB;GACC,mBAAmB;EACpB;CACD,CAAC","sourcesContent":[".grid-container[data-status=\"menu\"] {\n\tdisplay: grid;\n\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: minmax(8rem, auto) 1fr;\n}\n.grid-container[data-status=\"menu\"] #content {\n\tz-index: 1;\n\tgrid-column: 1 / 1;\n\tgrid-row: 1 / 3;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tcontainer-name: drinks-foods;\n\tcontainer-type: inline-size;\n}\n.grid-container[data-status=\"menu\"] .menu-header {\n\tposition: relative;\n\n\tflex-basis: 30rem;\n\tcolor: white;\n\tz-index: 1;\n\t/* background-image: url(../images/our-menu.jpg); */\n\tbackground-size: cover;\n\tbackground-position: center;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-end;\n\talign-self: stretch;\n\t& h1 {\n\t\tz-index: 1;\n\t\theight: calc(100% - 4rem);\n\n\t\ttext-align: center;\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t}\n\t&::before {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tinset: 0;\n\t\tbackdrop-filter: var(--default-backdrop);\n\t\tanimation: fadeIn 0.8s;\n\t}\n}\n.menu-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));\n\tgrid-template-rows: auto;\n\tcolumn-gap: 8rem;\n\tmargin-top: 8rem;\n\tpadding: 0 4rem;\n\twidth: min(100%, 80rem);\n\n\t& .menu-drinks {\n\t\t/* justify-self: flex-start; */\n\t}\n\t& .menu-foods {\n\t\t/* justify-self: flex-end; */\n\t}\n}\n\n.menu-drinks,\n.menu-foods {\n\tposition: relative;\n\t/* max-width: 30rem; */\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-width: 30rem;\n\trow-gap: 2rem;\n\t&::before {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\t/* width: 1px; */\n\t\theight: 100%;\n\n\t\tleft: 37rem;\n\n\t\tbackground-color: #c8c4c5;\n\t}\n\t&::after {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\t/* width: 1px; */\n\t\theight: 100%;\n\t\tleft: -4rem;\n\n\t\tbackground-color: #c8c4c5;\n\t}\n}\n\n.menu-drinks-header,\n.menu-foods-header,\n.full-header {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-bottom: 0.7rem;\n\ttext-align: center;\n\t& h6 {\n\t\tposition: relative;\n\t\tfont-size: 0.8em;\n\t\tcolor: rgb(197, 151, 100);\n\t\t&::before {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\n\t\t\tbackground-color: #f0b551;\n\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\ttransform: scale(1.5, 0.1) translateX(calc(50% + 24px));\n\t\t\t\n\t\t}\n\t\t&::after {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\n\t\t\tbackground-color: #f0b551;\n\t\t\tright: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\ttransform: scale(1.5, 0.1) translateX(calc(-50% + -24px));\n\t\t}\n\t}\n\t\n}\n.drink,\n.food {\n\tdisplay: flex;\n\n\tmax-height: 6rem;\n\n\tgap: clamp(0.5rem, 1vw, 2rem);\n\tfont-size: 1.8rem;\n}\n.drink-text-container,\n.food-text-container {\n\tmargin-top: 0.7rem;\n\tmargin-bottom: 0.7rem;\n\tjustify-content: space-between;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-width: 0;\n\tflex-basis: 60%;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\t& .drink-name,\n\t.food-name {\n\t\tfont-family: serif;\n\t\tfont-size: 0.8em;\n\t\ttext-wrap: nowrap;\n\t\toverflow-y: auto;\n\t\tflex-shrink: 0;\n\t}\n\t& .drink-info,\n\t.food-info {\n\t\twhite-space: wrap;\n\t\toverflow: auto;\n\t\tcolor: #363636;\n\t\topacity: 0.6;\n\t\tfont-size: 0.55em;\n\t\tmax-height: 1.485rem;\n\t}\n}\n.drink-img,\n.food-img {\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tmin-width: 3rem;\n\n\tflex-basis: max-content;\n\tflex-shrink: 1;\n}\n.drink-img img,\n.food-img img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n.drink-price,\n.food-price {\n\tmargin-top: 0.7rem;\n\tmargin-left: auto;\n\tfont-family: Norse;\n\tfont-weight: bold;\n\talign-self: flex-start;\n\tfont-size: 0.8em;\n}\n.full-header {\n\tcolor: rgb(197, 151, 100);\n\t& h1 {\n\t\tfont-size: 4rem;\n\t}\n}\n.menu-full {\n\tmargin-top: 8rem;\n\twidth: min(100%, 80rem);\n\tpadding: 0 4rem;\n\tdisplay: flex;\n\trow-gap: 2rem;\n\tflex-direction: column;\n\tmargin-bottom: 8rem;\n}\n.full-container {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tcolumn-gap: 1.5rem;\n\n\tjustify-content: space-between;\n\trow-gap: 3rem;\n\t& :nth-child(5) {\n\t\tfilter: brightness(80%);\n\t}\n}\n.full-item {\n\tflex-basis: 30%;\n\trow-gap: 1rem;\n\n\tflex-grow: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 1.5rem;\n\tmin-width: 20rem;\n}\n.full-text-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tcolumn-gap: 1rem;\n\talign-items: center;\n\t& .full-name {\n\t\tflex-grow: 1;\n\t\tflex-shrink: 1;\n\t\tfont-family: serif;\n\t\tfont-size: 0.8em;\n\t\twhite-space: nowrap;\n\n\t\toverflow-y: auto;\n\t}\n\t& .full-price {\n\t\tflex-basis: min-content;\n\t\tflex-shrink: 0;\n\t\tfont-size: 0.8em;\n\t\tfont-family: Norse;\n\t\tfont-weight: bold;\n\t}\n}\n.full-info {\n\tcolor: #363636;\n\topacity: 0.6;\n\tfont-size: 0.6em;\n\theight: 4.86rem;\n\toverflow: auto;\n}\n.full-img {\n\twidth: 100%;\n}\n.full-img img {\n\twidth: 100%;\n\taspect-ratio: 1.5;\n\tobject-fit: cover;\n}\n@container drinks-foods (max-width: 72rem) {\n\t.drink,\n\t.food {\n\t\tfont-size: 1.8rem;\n\t\t& .drink-info{\n\t\t\tfont-size: 0.50em;\n\t\t\toverflow: hidden;\n\t\t}\n\t}\n\t\n\t.full-item {\n\t\tfont-size: 1.6rem;\n\t}\n\t.menu-foods {\n\t\tmargin-top: 8rem;\n\t}\n\t\n\t.menu-full{\n\t\twidth: min(100%, 80rem);\n\t}\n\t.menu-container .menu-foods {\n\t\tmargin-top: 8rem;\n\t}\n\t\n\t.menu-container {\n\t\t\n\t\twidth: min(100%, 80rem);\n\t}\n}\n@container drinks-foods (max-width: 38rem) {\n\t.drink,\n\t.food {\n\t\tfont-size: 1.6rem;\n\t\t& .drink-info{\n\t\t\tmax-height: 2.64rem;\n\t\t}\n\t}\n\t.menu-container {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));\n\t\tpadding: 0 1rem;\n\t}\n\t.drink-img, .food-img{\n\t\tmin-width: 2rem;\n\t}\n\t.menu-container .menu-drinks,.menu-container .menu-foods{\n\t\tmin-width: 16rem;\n\t}\n\t.full-item{\n\t\tmin-width: 16rem;\n\t\tfont-size: 1.3rem;\n\t}\n\t.menu-full{\n\t\tpadding: 0 1rem;\n\t}\n\t.full-info{\n\t\theight: 2.34rem;\n\t}\n}\n@container drinks-foods (max-width: 24rem) {.drink,\n\t.food {\n\t\tfont-size: 1.4rem;\n\t\t& .drink-info{\n\t\t\tmax-height: 2.31rem;\n\t\t}\n\t}}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
	--shadow-color: 0 0% 40%;
	--shadow-elevation-medium: 0px 0.4px 0.3px hsl(var(--shadow-color) / 0.4),
		0px 1.5px 1.1px -2.5px hsl(var(--shadow-color) / 0.97),
		-0.2px 9.2px 6.9px -5px hsl(var(--shadow-color) / 0.49);
	font-size: calc(0.875rem + (1 - 0.875) * ((100vw - 25rem) / (120 - 25)));

	--font-size-xs: 0.6rem;
	--font-size-sm: 0.8rem;
	--font-size-md: 1rem;
	--font-size-lg: 1.1rem;
	--font-size-xl: 1.3rem;
	--font-size-responsive: clamp(0.8rem, 1.6vw, 1.2rem);
	--padding-main: 0.5rem clamp(0.5rem, 1.5vw, 3rem);
	--gap-main: clamp(0.5rem, 1vw, 1.5rem);
	--card-width: 38rem;
	--second-color:#f0b551;
	--default-backdrop:blur(3px) brightness(75%) sepia(3%);
}
hr {
	border: none;
	height: 2px;
	background-color: rgba(0, 0, 0, 0.2);
	margin: 10px 0;
}
*,
*::before,
*::after {
	box-sizing: border-box;
}

* {
	margin: 0;
}

body {
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
	font-family: "Inter", "Inter-fallback-linux", "Inter-fallback", sans-serif;
}
.bold {
	font-weight: 700;
}
.italic {
	font-style: italic;
}
img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

input,
button,
textarea,
select {
	font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
	overflow-wrap: anywhere;
}

p {
	text-wrap: wrap;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	text-wrap: balance;
}

#root,
#__next {
	isolation: isolate;
}

h1 {
	font-size: 2.986rem;
}
h2 {
	font-size: 2.488rem;
}
h3 {
	font-size: 2.074rem;
}
h4 {
	font-size: 1.728rem;
}
h5 {
	font-size: 1.44rem;
}
h6 {
	font-size: 1.2rem;
}
`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;CACC,wBAAwB;CACxB;;yDAEwD;CACxD,wEAAwE;;CAExE,sBAAsB;CACtB,sBAAsB;CACtB,oBAAoB;CACpB,sBAAsB;CACtB,sBAAsB;CACtB,oDAAoD;CACpD,iDAAiD;CACjD,sCAAsC;CACtC,mBAAmB;CACnB,sBAAsB;CACtB,sDAAsD;AACvD;AACA;CACC,YAAY;CACZ,WAAW;CACX,oCAAoC;CACpC,cAAc;AACf;AACA;;;CAGC,sBAAsB;AACvB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,gBAAgB;CAChB,mCAAmC;CACnC,0EAA0E;AAC3E;AACA;CACC,gBAAgB;AACjB;AACA;CACC,kBAAkB;AACnB;AACA;;;;;CAKC,cAAc;CACd,eAAe;AAChB;;AAEA;;;;CAIC,aAAa;AACd;;AAEA;;;;;;;CAOC,yBAAyB;CACzB,uBAAuB;AACxB;;AAEA;CACC,eAAe;AAChB;;AAEA;;;;;;CAMC,kBAAkB;AACnB;;AAEA;;CAEC,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,iBAAiB;AAClB","sourcesContent":[":root {\n\t--shadow-color: 0 0% 40%;\n\t--shadow-elevation-medium: 0px 0.4px 0.3px hsl(var(--shadow-color) / 0.4),\n\t\t0px 1.5px 1.1px -2.5px hsl(var(--shadow-color) / 0.97),\n\t\t-0.2px 9.2px 6.9px -5px hsl(var(--shadow-color) / 0.49);\n\tfont-size: calc(0.875rem + (1 - 0.875) * ((100vw - 25rem) / (120 - 25)));\n\n\t--font-size-xs: 0.6rem;\n\t--font-size-sm: 0.8rem;\n\t--font-size-md: 1rem;\n\t--font-size-lg: 1.1rem;\n\t--font-size-xl: 1.3rem;\n\t--font-size-responsive: clamp(0.8rem, 1.6vw, 1.2rem);\n\t--padding-main: 0.5rem clamp(0.5rem, 1.5vw, 3rem);\n\t--gap-main: clamp(0.5rem, 1vw, 1.5rem);\n\t--card-width: 38rem;\n\t--second-color:#f0b551;\n\t--default-backdrop:blur(3px) brightness(75%) sepia(3%);\n}\nhr {\n\tborder: none;\n\theight: 2px;\n\tbackground-color: rgba(0, 0, 0, 0.2);\n\tmargin: 10px 0;\n}\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n}\n\nbody {\n\tline-height: 1.5;\n\t-webkit-font-smoothing: antialiased;\n\tfont-family: \"Inter\", \"Inter-fallback-linux\", \"Inter-fallback\", sans-serif;\n}\n.bold {\n\tfont-weight: 700;\n}\n.italic {\n\tfont-style: italic;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n\tfont: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\toverflow-wrap: break-word;\n\toverflow-wrap: anywhere;\n}\n\np {\n\ttext-wrap: wrap;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\ttext-wrap: balance;\n}\n\n#root,\n#__next {\n\tisolation: isolate;\n}\n\nh1 {\n\tfont-size: 2.986rem;\n}\nh2 {\n\tfont-size: 2.488rem;\n}\nh3 {\n\tfont-size: 2.074rem;\n}\nh4 {\n\tfont-size: 1.728rem;\n}\nh5 {\n\tfont-size: 1.44rem;\n}\nh6 {\n\tfont-size: 1.2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
	/* outline: 1px solid BLACK; */
}
html {
}
body {
	touch-action: manipulation;
	
}
h1 {
	font-family: serif;
	font-weight: normal;
}

.grid-container[data-status="home"] {
	position: relative;
	min-height: 100svh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: minmax(8rem, auto) 1fr;
	background-size: cover;
	background-position: center;

	/* background-attachment: fixed; */
	&::before {
		content: "";
		position: absolute;
		inset: 0;
		backdrop-filter: brightness(50%) contrast(130%);
		animation: fadeInHero 0.8s;
		padding: 0;
		margin: 0;
	}
}
@keyframes fadeIn {
	0% {
		backdrop-filter: blur(0px) brightness(0%) sepia(0%);
	}
	100% {
		backdrop-filter: blur(3px) brightness(75%) sepia(3%);
	}
}
@keyframes fadeInHero {
	0% {
		backdrop-filter: brightness(0%);
	}
	100% {
		backdrop-filter: brightness(50%) contrast(130%);
	}
}

.header {
	grid-column: 1/1;
	grid-row: 1/ 2;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	/* backdrop-filter: var(--default-backdrop); */
	background-color: rgba(0, 0, 0, 0);
	font-size: 1.2rem;
	padding: 1rem;
	z-index: 2;

	& .nav-menu button {
		background-color: unset;
		border: none;
		color: white;
		font-weight: bold;
		padding: 0;
		margin: 0;
		white-space: nowrap;
	}
}
.reservation {
	background-color: unset;
	border: 2px solid white;
	color: white;
	font-weight: normal;
	padding: 0.5rem 1.5rem;
	margin: 0;
	-ms-user-select: none;
	-webkit-user-select: none;
	user-select: none;
	touch-action: none;
}
.reservation-container {
	font-size: 18px;
	margin-top: 1rem;
	font-weight: bold;
	position: relative;
	backdrop-filter: blur(16px);
	&:hover {
		transform: translateY(-2px);
		transition: translate 0.4s;
	}
	-ms-user-select: none;
	-webkit-user-select: none;
	user-select: none;
}

.reservation::after {
	position: absolute;
	top: 2px;
	right: 2px;
	user-select: none;
	width: calc(100% - 4px);
	height: calc(100% - 4px);
	content: "";

	touch-action: none;
	user-select: none;
	pointer-events: none;
	background-color: white;
	-ms-user-select: none;
	-webkit-user-select: none;
	user-select: none;
	mix-blend-mode: difference;

	opacity: 0;
}
/* .reservation:hover::after {
	opacity: 1;
	transition: opacity 0.4s;
} */
.reservation:active::after {
	opacity: 1;
	touch-action: none;
	transition: opacity 0.2s;
}

.logo-container {
	height: 3rem;
	margin-right: auto;
	display: flex;
	align-items: center;
	flex-shrink: 0;
}
.logo {
	max-width: 100%;
	max-height: 100%;
	width: max-content;
	height: 100%;
}
.nav-menu {
	display: flex;
	gap: clamp(2rem, 8vw, 4rem);
	margin-right: auto;
	padding-right: 6rem;
	flex-wrap: wrap;
	justify-content: center;
}
.grid-container[data-status="home"] #content {
	z-index: 1;
	grid-column: 1 / 1;
	grid-row: 2 / 3;
	display: flex;
	/* backdrop-filter: var(--default-backdrop); */
}

.hero-align-container {
	z-index: 1;
	height: 70%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
}
.hero-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	font-size: 2em;
	min-height: 0;

	background-color: rgba(0, 0, 0, 0);
	padding: 1rem;

	gap: 1vw;
	& .hero-text-1 {
		color: #f0b551;
		position: relative;
		&::before {
			content: "";
			position: absolute;

			background-color: #f0b551;
			right: 0;
			width: 100%;
			height: 100%;

			transform: scale(1, 0.1) translateX(calc(100% + 24px));
		}
		&::after {
			content: "";
			position: absolute;

			background-color: #f0b551;
			left: 0;
			width: 100%;
			height: 100%;
			transform: scale(1, 0.1) translateX(calc(-100% + -24px));
		}
	}
}
footer {
	color: white;
	background-color: #09080e;
	display: flex;
	justify-content: center;
}
.footer-container {
	justify-content: space-between;
	display: flex;
	padding: 6rem 4rem;
	width: min(100%, 100rem);
	flex-wrap: wrap;
	row-gap: 6rem;
	column-gap: 6rem;
	font-size: 0.9rem;
	& > div {
		display: flex;
		flex-direction: column;
		height: 12rem;
		flex-basis: 18rem;
		flex-grow: 1.5;
		min-width: 18rem;

		&:nth-child(2),
		&:nth-child(3) {
			flex-basis: 14rem;
			flex-grow: 1;
			min-width: 14rem;
		}
	}
}
.footer-text-container {
	& .footer-text-header h2 {
		font-family: norse;
	}
	& .footer-text {
	}
	& .footer-icons {
		display: flex;
		height: 2.7rem;
		justify-content: flex-start;
		column-gap: 1rem;
		margin-top: auto;
		align-items: center;
		& img {
			max-height: 100%;
		}
		& img:hover {
			filter: invert(40%) sepia(97%) saturate(3821%) hue-rotate(13deg) brightness(99%)
				contrast(98%);
		}
	}
}
.footer-hours-container {
	& .footer-hours-header h5 {
		height: 3.732rem;
	}
	& .row {
		display: flex;
		justify-content: space-between;
	}
	& .footer-hours-text {
		display: flex;
		flex-direction: column;

		flex-grow: 1;
		gap: 0.5rem;
		& > :last-child {
			margin-top: auto;
		}
	}
}
.footer-adress-container {
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	& > div {
		display: flex;
		gap: 1rem;
	}
	& :nth-child(3),
	:nth-child(4) {
		margin-top: auto;
	}
	& .footer-adress-header h5 {
		height: 3.732rem;
	}
	& img {
		max-height: 1.35rem;
	}
	& .footer-location,
	.footer-tel,
	.footer-mail {
		display: flex;
		align-items: center;
	}
	& .footer-location img {
		margin-top: auto;
		margin-bottom: auto;
	}
}

@media (max-width: 72rem) {
	.hero-container .hero-text-1 {
		&::before {
			width: 60%;
		}
		&::after {
			width: 60%;
		}
	}
	.hero-text-1,
	.hero-text-3 {
		font-size: 1.56rem;
		text-align: center;
	}
	.hero-text-2 {
		text-align: center;
		font-size: 3.8818rem;
	}
	.header {
		font-size: 1rem;
		row-gap: 1rem;
		column-gap: 2rem;
	}
	.footer-text-container div.footer-icons {
		height: 2.025rem;
	}
	.footer-container {
		padding: 6rem 2rem;
	}
	.nav-menu {
	}
}
@media (max-width: 36rem) {
	.nav-menu {
		padding-right: 0rem;
	}
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;CACC,8BAA8B;AAC/B;AACA;AACA;AACA;CACC,0BAA0B;;AAE3B;AACA;CACC,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,aAAa;CACb,0BAA0B;CAC1B,0CAA0C;CAC1C,sBAAsB;CACtB,2BAA2B;;CAE3B,kCAAkC;CAClC;EACC,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,+CAA+C;EAC/C,0BAA0B;EAC1B,UAAU;EACV,SAAS;CACV;AACD;AACA;CACC;EACC,mDAAmD;CACpD;CACA;EACC,oDAAoD;CACrD;AACD;AACA;CACC;EACC,+BAA+B;CAChC;CACA;EACC,+CAA+C;CAChD;AACD;;AAEA;CACC,gBAAgB;CAChB,cAAc;CACd,aAAa;CACb,eAAe;CACf,uBAAuB;CACvB,mBAAmB;CACnB,8CAA8C;CAC9C,kCAAkC;CAClC,iBAAiB;CACjB,aAAa;CACb,UAAU;;CAEV;EACC,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,mBAAmB;CACpB;AACD;AACA;CACC,uBAAuB;CACvB,uBAAuB;CACvB,YAAY;CACZ,mBAAmB;CACnB,sBAAsB;CACtB,SAAS;CACT,qBAAqB;CACrB,yBAAyB;CACzB,iBAAiB;CACjB,kBAAkB;AACnB;AACA;CACC,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,kBAAkB;CAClB,2BAA2B;CAC3B;EACC,2BAA2B;EAC3B,0BAA0B;CAC3B;CACA,qBAAqB;CACrB,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,UAAU;CACV,iBAAiB;CACjB,uBAAuB;CACvB,wBAAwB;CACxB,WAAW;;CAEX,kBAAkB;CAClB,iBAAiB;CACjB,oBAAoB;CACpB,uBAAuB;CACvB,qBAAqB;CACrB,yBAAyB;CACzB,iBAAiB;CACjB,0BAA0B;;CAE1B,UAAU;AACX;AACA;;;GAGG;AACH;CACC,UAAU;CACV,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,aAAa;CACb,mBAAmB;CACnB,cAAc;AACf;AACA;CACC,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,YAAY;AACb;AACA;CACC,aAAa;CACb,2BAA2B;CAC3B,kBAAkB;CAClB,mBAAmB;CACnB,eAAe;CACf,uBAAuB;AACxB;AACA;CACC,UAAU;CACV,kBAAkB;CAClB,eAAe;CACf,aAAa;CACb,8CAA8C;AAC/C;;AAEA;CACC,UAAU;CACV,WAAW;CACX,aAAa;CACb,sBAAsB;CACtB,YAAY;CACZ,uBAAuB;AACxB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,YAAY;CACZ,cAAc;CACd,aAAa;;CAEb,kCAAkC;CAClC,aAAa;;CAEb,QAAQ;CACR;EACC,cAAc;EACd,kBAAkB;EAClB;GACC,WAAW;GACX,kBAAkB;;GAElB,yBAAyB;GACzB,QAAQ;GACR,WAAW;GACX,YAAY;;GAEZ,sDAAsD;EACvD;EACA;GACC,WAAW;GACX,kBAAkB;;GAElB,yBAAyB;GACzB,OAAO;GACP,WAAW;GACX,YAAY;GACZ,wDAAwD;EACzD;CACD;AACD;AACA;CACC,YAAY;CACZ,yBAAyB;CACzB,aAAa;CACb,uBAAuB;AACxB;AACA;CACC,8BAA8B;CAC9B,aAAa;CACb,kBAAkB;CAClB,wBAAwB;CACxB,eAAe;CACf,aAAa;CACb,gBAAgB;CAChB,iBAAiB;CACjB;EACC,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,gBAAgB;;EAEhB;;GAEC,iBAAiB;GACjB,YAAY;GACZ,gBAAgB;EACjB;CACD;AACD;AACA;CACC;EACC,kBAAkB;CACnB;CACA;CACA;CACA;EACC,aAAa;EACb,cAAc;EACd,2BAA2B;EAC3B,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB;GACC,gBAAgB;EACjB;EACA;GACC;iBACc;EACf;CACD;AACD;AACA;CACC;EACC,gBAAgB;CACjB;CACA;EACC,aAAa;EACb,8BAA8B;CAC/B;CACA;EACC,aAAa;EACb,sBAAsB;;EAEtB,YAAY;EACZ,WAAW;EACX;GACC,gBAAgB;EACjB;CACD;AACD;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,YAAY;;CAEZ;EACC,aAAa;EACb,SAAS;CACV;CACA;;EAEC,gBAAgB;CACjB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,mBAAmB;CACpB;CACA;;;EAGC,aAAa;EACb,mBAAmB;CACpB;CACA;EACC,gBAAgB;EAChB,mBAAmB;CACpB;AACD;;AAEA;CACC;EACC;GACC,UAAU;EACX;EACA;GACC,UAAU;EACX;CACD;CACA;;EAEC,kBAAkB;EAClB,kBAAkB;CACnB;CACA;EACC,kBAAkB;EAClB,oBAAoB;CACrB;CACA;EACC,eAAe;EACf,aAAa;EACb,gBAAgB;CACjB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,kBAAkB;CACnB;CACA;CACA;AACD;AACA;CACC;EACC,mBAAmB;CACpB;AACD","sourcesContent":["* {\n\t/* outline: 1px solid BLACK; */\n}\nhtml {\n}\nbody {\n\ttouch-action: manipulation;\n\t\n}\nh1 {\n\tfont-family: serif;\n\tfont-weight: normal;\n}\n\n.grid-container[data-status=\"home\"] {\n\tposition: relative;\n\tmin-height: 100svh;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: minmax(8rem, auto) 1fr;\n\tbackground-size: cover;\n\tbackground-position: center;\n\n\t/* background-attachment: fixed; */\n\t&::before {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tinset: 0;\n\t\tbackdrop-filter: brightness(50%) contrast(130%);\n\t\tanimation: fadeInHero 0.8s;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n}\n@keyframes fadeIn {\n\t0% {\n\t\tbackdrop-filter: blur(0px) brightness(0%) sepia(0%);\n\t}\n\t100% {\n\t\tbackdrop-filter: blur(3px) brightness(75%) sepia(3%);\n\t}\n}\n@keyframes fadeInHero {\n\t0% {\n\t\tbackdrop-filter: brightness(0%);\n\t}\n\t100% {\n\t\tbackdrop-filter: brightness(50%) contrast(130%);\n\t}\n}\n\n.header {\n\tgrid-column: 1/1;\n\tgrid-row: 1/ 2;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\t/* backdrop-filter: var(--default-backdrop); */\n\tbackground-color: rgba(0, 0, 0, 0);\n\tfont-size: 1.2rem;\n\tpadding: 1rem;\n\tz-index: 2;\n\n\t& .nav-menu button {\n\t\tbackground-color: unset;\n\t\tborder: none;\n\t\tcolor: white;\n\t\tfont-weight: bold;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\twhite-space: nowrap;\n\t}\n}\n.reservation {\n\tbackground-color: unset;\n\tborder: 2px solid white;\n\tcolor: white;\n\tfont-weight: normal;\n\tpadding: 0.5rem 1.5rem;\n\tmargin: 0;\n\t-ms-user-select: none;\n\t-webkit-user-select: none;\n\tuser-select: none;\n\ttouch-action: none;\n}\n.reservation-container {\n\tfont-size: 18px;\n\tmargin-top: 1rem;\n\tfont-weight: bold;\n\tposition: relative;\n\tbackdrop-filter: blur(16px);\n\t&:hover {\n\t\ttransform: translateY(-2px);\n\t\ttransition: translate 0.4s;\n\t}\n\t-ms-user-select: none;\n\t-webkit-user-select: none;\n\tuser-select: none;\n}\n\n.reservation::after {\n\tposition: absolute;\n\ttop: 2px;\n\tright: 2px;\n\tuser-select: none;\n\twidth: calc(100% - 4px);\n\theight: calc(100% - 4px);\n\tcontent: \"\";\n\n\ttouch-action: none;\n\tuser-select: none;\n\tpointer-events: none;\n\tbackground-color: white;\n\t-ms-user-select: none;\n\t-webkit-user-select: none;\n\tuser-select: none;\n\tmix-blend-mode: difference;\n\n\topacity: 0;\n}\n/* .reservation:hover::after {\n\topacity: 1;\n\ttransition: opacity 0.4s;\n} */\n.reservation:active::after {\n\topacity: 1;\n\ttouch-action: none;\n\ttransition: opacity 0.2s;\n}\n\n.logo-container {\n\theight: 3rem;\n\tmargin-right: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-shrink: 0;\n}\n.logo {\n\tmax-width: 100%;\n\tmax-height: 100%;\n\twidth: max-content;\n\theight: 100%;\n}\n.nav-menu {\n\tdisplay: flex;\n\tgap: clamp(2rem, 8vw, 4rem);\n\tmargin-right: auto;\n\tpadding-right: 6rem;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n}\n.grid-container[data-status=\"home\"] #content {\n\tz-index: 1;\n\tgrid-column: 1 / 1;\n\tgrid-row: 2 / 3;\n\tdisplay: flex;\n\t/* backdrop-filter: var(--default-backdrop); */\n}\n\n.hero-align-container {\n\tz-index: 1;\n\theight: 70%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 1;\n\tjustify-content: center;\n}\n.hero-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tcolor: white;\n\tfont-size: 2em;\n\tmin-height: 0;\n\n\tbackground-color: rgba(0, 0, 0, 0);\n\tpadding: 1rem;\n\n\tgap: 1vw;\n\t& .hero-text-1 {\n\t\tcolor: #f0b551;\n\t\tposition: relative;\n\t\t&::before {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\n\t\t\tbackground-color: #f0b551;\n\t\t\tright: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\n\t\t\ttransform: scale(1, 0.1) translateX(calc(100% + 24px));\n\t\t}\n\t\t&::after {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\n\t\t\tbackground-color: #f0b551;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\ttransform: scale(1, 0.1) translateX(calc(-100% + -24px));\n\t\t}\n\t}\n}\nfooter {\n\tcolor: white;\n\tbackground-color: #09080e;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.footer-container {\n\tjustify-content: space-between;\n\tdisplay: flex;\n\tpadding: 6rem 4rem;\n\twidth: min(100%, 100rem);\n\tflex-wrap: wrap;\n\trow-gap: 6rem;\n\tcolumn-gap: 6rem;\n\tfont-size: 0.9rem;\n\t& > div {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\theight: 12rem;\n\t\tflex-basis: 18rem;\n\t\tflex-grow: 1.5;\n\t\tmin-width: 18rem;\n\n\t\t&:nth-child(2),\n\t\t&:nth-child(3) {\n\t\t\tflex-basis: 14rem;\n\t\t\tflex-grow: 1;\n\t\t\tmin-width: 14rem;\n\t\t}\n\t}\n}\n.footer-text-container {\n\t& .footer-text-header h2 {\n\t\tfont-family: norse;\n\t}\n\t& .footer-text {\n\t}\n\t& .footer-icons {\n\t\tdisplay: flex;\n\t\theight: 2.7rem;\n\t\tjustify-content: flex-start;\n\t\tcolumn-gap: 1rem;\n\t\tmargin-top: auto;\n\t\talign-items: center;\n\t\t& img {\n\t\t\tmax-height: 100%;\n\t\t}\n\t\t& img:hover {\n\t\t\tfilter: invert(40%) sepia(97%) saturate(3821%) hue-rotate(13deg) brightness(99%)\n\t\t\t\tcontrast(98%);\n\t\t}\n\t}\n}\n.footer-hours-container {\n\t& .footer-hours-header h5 {\n\t\theight: 3.732rem;\n\t}\n\t& .row {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\t& .footer-hours-text {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tflex-grow: 1;\n\t\tgap: 0.5rem;\n\t\t& > :last-child {\n\t\t\tmargin-top: auto;\n\t\t}\n\t}\n}\n.footer-adress-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 1;\n\n\t& > div {\n\t\tdisplay: flex;\n\t\tgap: 1rem;\n\t}\n\t& :nth-child(3),\n\t:nth-child(4) {\n\t\tmargin-top: auto;\n\t}\n\t& .footer-adress-header h5 {\n\t\theight: 3.732rem;\n\t}\n\t& img {\n\t\tmax-height: 1.35rem;\n\t}\n\t& .footer-location,\n\t.footer-tel,\n\t.footer-mail {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\t& .footer-location img {\n\t\tmargin-top: auto;\n\t\tmargin-bottom: auto;\n\t}\n}\n\n@media (max-width: 72rem) {\n\t.hero-container .hero-text-1 {\n\t\t&::before {\n\t\t\twidth: 60%;\n\t\t}\n\t\t&::after {\n\t\t\twidth: 60%;\n\t\t}\n\t}\n\t.hero-text-1,\n\t.hero-text-3 {\n\t\tfont-size: 1.56rem;\n\t\ttext-align: center;\n\t}\n\t.hero-text-2 {\n\t\ttext-align: center;\n\t\tfont-size: 3.8818rem;\n\t}\n\t.header {\n\t\tfont-size: 1rem;\n\t\trow-gap: 1rem;\n\t\tcolumn-gap: 2rem;\n\t}\n\t.footer-text-container div.footer-icons {\n\t\theight: 2.025rem;\n\t}\n\t.footer-container {\n\t\tpadding: 6rem 2rem;\n\t}\n\t.nav-menu {\n\t}\n}\n@media (max-width: 36rem) {\n\t.nav-menu {\n\t\tpadding-right: 0rem;\n\t}\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/fonts/Inter-B.woff2":
/*!*********************************!*\
  !*** ./src/fonts/Inter-B.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-B.fe9568cc2409ff592f96.woff2";

/***/ }),

/***/ "./src/fonts/Inter-BI.woff2":
/*!**********************************!*\
  !*** ./src/fonts/Inter-BI.woff2 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-BI.545ad8a83be51f3eb25a.woff2";

/***/ }),

/***/ "./src/fonts/Inter-I.woff2":
/*!*********************************!*\
  !*** ./src/fonts/Inter-I.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-I.eab387a2e9865e998457.woff2";

/***/ }),

/***/ "./src/fonts/Inter-R.woff2":
/*!*********************************!*\
  !*** ./src/fonts/Inter-R.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-R.7442351ed1a9573208ef.woff2";

/***/ }),

/***/ "./src/fonts/Norse-B.woff2":
/*!*********************************!*\
  !*** ./src/fonts/Norse-B.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Norse-B.ddc96015b289085b431b.woff2";

/***/ }),

/***/ "./src/fonts/Norse-R.woff2":
/*!*********************************!*\
  !*** ./src/fonts/Norse-R.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Norse-R.462bc5a24c11c866beb8.woff2";

/***/ }),

/***/ "./src/images/about.avif":
/*!*******************************!*\
  !*** ./src/images/about.avif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/about.a951140fb7621e295a09.avif";

/***/ }),

/***/ "./src/images/about1.avif":
/*!********************************!*\
  !*** ./src/images/about1.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/about1.15e7b46a3c775d79d40a.avif";

/***/ }),

/***/ "./src/images/coffee-1.jpg":
/*!*********************************!*\
  !*** ./src/images/coffee-1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/coffee-1.3626689fd56eb6fde873.jpg";

/***/ }),

/***/ "./src/images/coffee-2.jpg":
/*!*********************************!*\
  !*** ./src/images/coffee-2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/coffee-2.f830b734ef910b94f660.jpg";

/***/ }),

/***/ "./src/images/coffee-3.jpg":
/*!*********************************!*\
  !*** ./src/images/coffee-3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/coffee-3.6ff6f604fac351d037fe.jpg";

/***/ }),

/***/ "./src/images/coffee-4.jpg":
/*!*********************************!*\
  !*** ./src/images/coffee-4.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/coffee-4.b26b20ca9152f7acf468.jpg";

/***/ }),

/***/ "./src/images/coffee-5.jpg":
/*!*********************************!*\
  !*** ./src/images/coffee-5.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/coffee-5.df3737bed36fa5d4b6ab.jpg";

/***/ }),

/***/ "./src/images/cookie-hero-low.avif":
/*!*****************************************!*\
  !*** ./src/images/cookie-hero-low.avif ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cookie-hero-low.4f417252736b8dbb056c.avif";

/***/ }),

/***/ "./src/images/food-1.jpg":
/*!*******************************!*\
  !*** ./src/images/food-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/food-1.542803a5e7251f5fd59b.jpg";

/***/ }),

/***/ "./src/images/food-2.jpg":
/*!*******************************!*\
  !*** ./src/images/food-2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/food-2.4c55be1ebe1839d23821.jpg";

/***/ }),

/***/ "./src/images/food-3.jpg":
/*!*******************************!*\
  !*** ./src/images/food-3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/food-3.269e8fe20e015e029291.jpg";

/***/ }),

/***/ "./src/images/food-4.jpg":
/*!*******************************!*\
  !*** ./src/images/food-4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/food-4.b0044edce0862a42a3ed.jpg";

/***/ }),

/***/ "./src/images/food-5.jpg":
/*!*******************************!*\
  !*** ./src/images/food-5.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/food-5.f80b94021d5c29382338.jpg";

/***/ }),

/***/ "./src/images/food-6.jpg":
/*!*******************************!*\
  !*** ./src/images/food-6.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/food-6.88881a9917a16051d448.jpg";

/***/ }),

/***/ "./src/images/our-menu.avif":
/*!**********************************!*\
  !*** ./src/images/our-menu.avif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/our-menu.92c746f4ea39fceee8fb.avif";

/***/ }),

/***/ "./src/images/plate1.avif":
/*!********************************!*\
  !*** ./src/images/plate1.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/plate1.d43513c112b296b7c41e.avif";

/***/ }),

/***/ "./src/images/plate2.avif":
/*!********************************!*\
  !*** ./src/images/plate2.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/plate2.43ec60f3aeec9c49ec70.avif";

/***/ }),

/***/ "./src/images/plate3.avif":
/*!********************************!*\
  !*** ./src/images/plate3.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/plate3.15bcbc16079a63f11c82.avif";

/***/ }),

/***/ "./src/images/plate4.avif":
/*!********************************!*\
  !*** ./src/images/plate4.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/plate4.7115637cb8601293dbc9.avif";

/***/ }),

/***/ "./src/images/plate5.avif":
/*!********************************!*\
  !*** ./src/images/plate5.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/plate5.3d4c6a4daf1de56e4850.avif";

/***/ }),

/***/ "./src/images/plate6.avif":
/*!********************************!*\
  !*** ./src/images/plate6.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/plate6.f66c339ac2f28758e46e.avif";

/***/ }),

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderAbout)
/* harmony export */ });
/* harmony import */ var _images_about_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/about.avif */ "./src/images/about.avif");
/* harmony import */ var _images_about1_avif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/about1.avif */ "./src/images/about1.avif");



function renderAbout() {
	const content = document.querySelector("#content");
	const gridContainer = document.querySelector(".grid-container");

	if (!(gridContainer.dataset.status === "about")) {
		while (content.firstChild) {
			content.firstChild.remove();
		}
		gridContainer.style.backgroundImage = "none";
		gridContainer.dataset.status = "about";
		const url = `url("${_images_about_avif__WEBPACK_IMPORTED_MODULE_0__}")`;

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
		aboutImage.setAttribute("src", _images_about1_avif__WEBPACK_IMPORTED_MODULE_1__);
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


/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _images_cookie_hero_low_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/cookie-hero-low.avif */ "./src/images/cookie-hero-low.avif");


function renderHome() {
	const content = document.querySelector("#content");
	const gridContainer = document.querySelector(".grid-container");
	if (!(gridContainer.dataset.status === "home")) {
		while (content.firstChild) {
			content.firstChild.remove();
		}
		
	const url = `url("${_images_cookie_hero_low_avif__WEBPACK_IMPORTED_MODULE_0__}")`;
	
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


/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _images_our_menu_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/our-menu.avif */ "./src/images/our-menu.avif");
/* harmony import */ var _scripts_menuModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/menuModel */ "./src/scripts/menuModel.js");



function renderMenu() {
	const content = document.querySelector("#content");
	const gridContainer = document.querySelector(".grid-container");
	

	if(!(gridContainer.dataset.status === "menu")){
		while(content.firstChild){
			content.firstChild.remove()
		}
		gridContainer.style.backgroundImage = "none";
		gridContainer.dataset.status = "menu";
		const url = `url("${_images_our_menu_avif__WEBPACK_IMPORTED_MODULE_0__}")`;
	
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
		_scripts_menuModel__WEBPACK_IMPORTED_MODULE_1__.Menu.myMenu.forEach(function (element, index, array) {
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


/***/ }),

/***/ "./src/scripts/menuModel.js":
/*!**********************************!*\
  !*** ./src/scripts/menuModel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu),
/* harmony export */   deneme2: () => (/* binding */ deneme2)
/* harmony export */ });
/* harmony import */ var _images_coffee_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/coffee-1.jpg */ "./src/images/coffee-1.jpg");
/* harmony import */ var _images_coffee_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/coffee-2.jpg */ "./src/images/coffee-2.jpg");
/* harmony import */ var _images_coffee_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/coffee-3.jpg */ "./src/images/coffee-3.jpg");
/* harmony import */ var _images_coffee_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/coffee-4.jpg */ "./src/images/coffee-4.jpg");
/* harmony import */ var _images_coffee_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/coffee-5.jpg */ "./src/images/coffee-5.jpg");
/* harmony import */ var _images_food_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/food-1.jpg */ "./src/images/food-1.jpg");
/* harmony import */ var _images_food_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/food-2.jpg */ "./src/images/food-2.jpg");
/* harmony import */ var _images_food_3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/food-3.jpg */ "./src/images/food-3.jpg");
/* harmony import */ var _images_food_4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/food-4.jpg */ "./src/images/food-4.jpg");
/* harmony import */ var _images_food_5_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/food-5.jpg */ "./src/images/food-5.jpg");
/* harmony import */ var _images_food_6_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/food-6.jpg */ "./src/images/food-6.jpg");
/* harmony import */ var _images_plate1_avif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/plate1.avif */ "./src/images/plate1.avif");
/* harmony import */ var _images_plate2_avif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/plate2.avif */ "./src/images/plate2.avif");
/* harmony import */ var _images_plate3_avif__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/plate3.avif */ "./src/images/plate3.avif");
/* harmony import */ var _images_plate4_avif__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/plate4.avif */ "./src/images/plate4.avif");
/* harmony import */ var _images_plate5_avif__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/plate5.avif */ "./src/images/plate5.avif");
/* harmony import */ var _images_plate6_avif__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/plate6.avif */ "./src/images/plate6.avif");





















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
	_images_coffee_1_jpg__WEBPACK_IMPORTED_MODULE_0__,
	"drink"
);
new Menu(
	"Iced Matcha Latte",
	"$3.95",
	"Ceremonial matcha, almond milk, a touch of honey",
	_images_coffee_2_jpg__WEBPACK_IMPORTED_MODULE_1__,
	"drink"
);
new Menu(
	"Hazelnut Mocha",
	"$4.50",
	"Espresso, chocolate, hazelnut syrup, whipped cream",
	_images_coffee_3_jpg__WEBPACK_IMPORTED_MODULE_2__,
	"drink"
);
new Menu(
	"Strawberry Hibiscus Tea",
	"$3.75",
	"Dried hibiscus petals, fresh strawberry puree, mint",
	_images_coffee_4_jpg__WEBPACK_IMPORTED_MODULE_3__,
	"drink"
);
new Menu(
	"Cinnamon Dolce Cappuccino ",
	"$4.10",
	"Espresso, steamed milk, cinnamon dolce sprinkle",
	_images_coffee_5_jpg__WEBPACK_IMPORTED_MODULE_4__,
	"drink"
);
new Menu(
	"Coconut Cold Brew",
	"$4.00",
	"Smooth cold brew, coconut milk, agave nectar ",
	_images_coffee_2_jpg__WEBPACK_IMPORTED_MODULE_1__,
	"drink"
);
new Menu(
	"Chocolate Croissant",
	"$2.85",
	"Buttery pastry filled with Belgian dark chocolate",
	_images_food_1_jpg__WEBPACK_IMPORTED_MODULE_5__,
	"food"
);
new Menu(
	"Avocado Toast",
	"$5.20",
	"Sourdough, smashed avocado, chili flakes, sea salt",
	_images_food_2_jpg__WEBPACK_IMPORTED_MODULE_6__,
	"food"
);
new Menu(
	"Spinach & Feta Wrap",
	"$4.75",
	"Spinach tortilla, crumbled feta, sun-dried tomatoes",
	_images_food_3_jpg__WEBPACK_IMPORTED_MODULE_7__,
	"food"
);
new Menu("Blueberry Muffin", "$3.30", "Fresh blueberries, vanilla crumb topping", _images_food_4_jpg__WEBPACK_IMPORTED_MODULE_8__, "food");
new Menu(
	"Turkey & Swiss Panini",
	"$6.10",
	"Roasted turkey, Swiss cheese, pesto mayo",
	_images_food_5_jpg__WEBPACK_IMPORTED_MODULE_9__,
	"food"
);
new Menu(
	"Quiche Lorraine",
	"$5.95",
	"Flaky crust, bacon lardons, creamy egg custard",
	_images_food_6_jpg__WEBPACK_IMPORTED_MODULE_10__,
	"food"
);
new Menu(
	"Rustic Mushroom Risotto",
	"$18.50",
	"Creamy arborio rice with porcini mushrooms, white wine, parmesan, and fresh thyme.",
	_images_plate1_avif__WEBPACK_IMPORTED_MODULE_11__,
	"plate"
);
new Menu(
	"Mediterranean Power Salad",
	"$14.80",
	"Grilled lemon-marinated chicken over quinoa and arugula, finished with a zesty herb dressing.",
	_images_plate2_avif__WEBPACK_IMPORTED_MODULE_12__,
	"plate"
);
new Menu(
	"Smoky Chipotle Veggie Tacos",
	"$13.40",
	"Sautéed bell peppers and onions in soft tortillas, topped with chipotle aioli and lime crema. ",
	_images_plate3_avif__WEBPACK_IMPORTED_MODULE_13__,
	"plate"
);
new Menu(
	"Lemon-Herb Chicken Bowl ",
	"$15.90",
	"Grilled lemon-marinated chicken over quinoa and arugula, finished with a zesty herb dressing.",
	_images_plate4_avif__WEBPACK_IMPORTED_MODULE_14__,
	"plate"
);
new Menu(
	"Seared Salmon Teriyaki",
	"$22.00",
	"Norwegian salmon glazed in light teriyaki sauce, served with sesame greens and sprouts.",
	_images_plate5_avif__WEBPACK_IMPORTED_MODULE_15__,
	"plate"
);
new Menu(
	"Truffle Mac and Cheese",
	"$17.25",
	"Aged cheddar and creamy béchamel, infused with black truffle oil and finished with crispy panko.",
	_images_plate6_avif__WEBPACK_IMPORTED_MODULE_16__,
	"plate"
);
const deneme2 = Menu.myMenu

/***/ }),

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/fonts.css":
/*!******************************!*\
  !*** ./src/styles/fonts.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/fonts.css */ "./src/styles/fonts.css");
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/about.css */ "./src/styles/about.css");
/* harmony import */ var _scripts_home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/home.js */ "./src/scripts/home.js");
/* harmony import */ var _scripts_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _scripts_about_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/about.js */ "./src/scripts/about.js");








// homeRender();
(function navRender() {
	const header = document.querySelector(".header");
	const gridContainer = document.querySelector(".grid-container");
	header.addEventListener("click", changeDom);
	const content = document.querySelector("#content");
	
	(0,_scripts_home_js__WEBPACK_IMPORTED_MODULE_5__["default"])();



	function changeDom(event) {
		if (event.target.matches(".home")) {

			(0,_scripts_home_js__WEBPACK_IMPORTED_MODULE_5__["default"])();




			
		}else if(event.target.matches(".menu")){
			(0,_scripts_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
		}else if(event.target.matches(".about")){
			(0,_scripts_about_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
		}
	}
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsb0hBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxNQUFNLFlBQVksTUFBTSxpRUFBaUUsa0JBQWtCLGlDQUFpQywrQ0FBK0MsR0FBRyxtREFBbUQsZUFBZSx1QkFBdUIsb0JBQW9CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDBCQUEwQixnQ0FBZ0MsR0FBRyx3REFBd0QsdUJBQXVCLHdCQUF3QixpQkFBaUIsZUFBZSxnREFBZ0QsMkJBQTJCLGdDQUFnQyxvQkFBb0IsNEJBQTRCLDBCQUEwQix3QkFBd0IsVUFBVSxpQkFBaUIsZ0NBQWdDLDJCQUEyQiwwQkFBMEIsb0JBQW9CLEtBQUssZUFBZSxvQkFBb0IseUJBQXlCLGVBQWUsK0NBQStDLDZCQUE2QixLQUFLLEdBQUcsc0JBQXNCLHFCQUFxQiw0QkFBNEIsb0JBQW9CLGtCQUFrQixrQkFBa0IsMkJBQTJCLHdCQUF3QixhQUFhLG9CQUFvQixLQUFLLEdBQUcsWUFBWSxtQ0FBbUMsd0JBQXdCLG9CQUFvQixjQUFjLGFBQWEsb0JBQW9CLHFCQUFxQix1QkFBdUIsOEJBQThCLEtBQUssR0FBRyxjQUFjLG9CQUFvQixHQUFHLGtCQUFrQixpQ0FBaUMsb0JBQW9CLHFCQUFxQixHQUFHLGVBQWUsNEJBQTRCLDJCQUEyQixjQUFjLDRCQUE0QixvQkFBb0IsVUFBVSx5QkFBeUIsdUJBQXVCLGdDQUFnQyxpQkFBaUIsc0JBQXNCLDJCQUEyQixvQ0FBb0MsaUJBQWlCLGlCQUFpQixtQkFBbUIsbUJBQW1CLGlEQUFpRCxPQUFPLEtBQUssU0FBUyw2QkFBNkIsS0FBSyxlQUFlLGdDQUFnQyxtQkFBbUIsbUJBQW1CLDBCQUEwQiw2QkFBNkIsZ0JBQWdCLHNCQUFzQixlQUFlLG9DQUFvQyx5QkFBeUIsT0FBTyxLQUFLLEdBQUcseUNBQXlDLDBCQUEwQiwwQkFBMEIsS0FBSyxrREFBa0QseUJBQXlCLEtBQUssNkJBQTZCLHdCQUF3QixPQUFPLEdBQUcsdUNBQXVDLGtEQUFrRCx1QkFBdUIsS0FBSyxHQUFHLHFCQUFxQjtBQUN4OUg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEp2QztBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx3SEFBeUM7QUFDckYsNENBQTRDLHdIQUF5QztBQUNyRiw0Q0FBNEMsd0hBQXlDO0FBQ3JGLDRDQUE0QywwSEFBMEM7QUFDdEYsNENBQTRDLHdIQUF5QztBQUNyRiw0Q0FBNEMsd0hBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG1DQUFtQztBQUN2RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLG1DQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLG1DQUFtQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUNBQW1DO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLHNDQUFzQywyQkFBMkIsdUdBQXVHLHFCQUFxQix1QkFBdUIsdUJBQXVCLEdBQUcsZ0JBQWdCLDJCQUEyQixrRkFBa0YscUJBQXFCLHVCQUF1Qix1QkFBdUIsR0FBRyxnQkFBZ0IsMkJBQTJCLG9GQUFvRixxQkFBcUIsdUJBQXVCLHVCQUF1QixHQUFHLGNBQWMsMkJBQTJCLDBGQUEwRixxQkFBcUIsdUJBQXVCLDJCQUEyQixHQUFHLGNBQWMsMENBQTBDLG9DQUFvQyxHQUFHLGNBQWMsb0NBQW9DLDBCQUEwQixHQUFHLGNBQWMsMkJBQTJCLDJEQUEyRCx3QkFBd0IsdUJBQXVCLHVCQUF1QixHQUFHLGNBQWMsMkJBQTJCLDJEQUEyRCxzQkFBc0IsdUJBQXVCLHVCQUF1QixHQUFHLG1CQUFtQjtBQUM1N0Q7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLFVBQVUsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sVUFBVSxhQUFhLGNBQWMsV0FBVyxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxXQUFXLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxZQUFZLFdBQVcsS0FBSyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsV0FBVyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxN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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsS0FBSyxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsS0FBSyxVQUFVLFlBQVksTUFBTSxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsT0FBTyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsYUFBYSxXQUFXLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLFlBQVksS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUs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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0E7QUFDQTtBQUNEO0FBQ0M7QUFDZTtBQUNBO0FBQ0U7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDREQUFVOzs7O0FBSVg7QUFDQTs7QUFFQSxHQUFHLDREQUFVOzs7OztBQUtiO0FBQ0EsR0FBRztBQUNILEdBQUcsNERBQVU7QUFDYixHQUFHO0FBQ0gsR0FBRyw2REFBVztBQUNkO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9mb250cy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvbWVudU1vZGVsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzP2QxMTciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9mb250cy5jc3M/NTAyNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21lbnUuY3NzPzcwMGEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9hYm91dC5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XCJhYm91dFwiXSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDhyZW0sIGF1dG8pIDFmcjtcbn1cbi5ncmlkLWNvbnRhaW5lcltkYXRhLXN0YXR1cz1cImFib3V0XCJdICNjb250ZW50IHtcblx0ei1pbmRleDogMTtcblx0Z3JpZC1jb2x1bW46IDEgLyAxO1xuXHRncmlkLXJvdzogMSAvIDM7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGNvbnRhaW5lci1uYW1lOiBhYm91dDtcblx0Y29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xufVxuLmdyaWQtY29udGFpbmVyW2RhdGEtc3RhdHVzPVwiYWJvdXRcIl0gLmFib3V0LWhlYWRlciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRmbGV4LWJhc2lzOiAzMHJlbTtcblx0Y29sb3I6IHdoaXRlO1xuXHR6LWluZGV4OiAxO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHQmIGgxIHtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gNHJlbSk7XG5cblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cdCY6OmJlZm9yZSB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0aW5zZXQ6IDA7XG5cdFx0YmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1kZWZhdWx0LWJhY2tkcm9wKTtcblx0XHRhbmltYXRpb246IGZhZGVJbiAwLjhzO1xuXHR9XG59XG5cbi5hYm91dC1jb250YWluZXIge1xuXHRtYXJnaW4tdG9wOiA4cmVtO1xuXHR3aWR0aDogbWluKDEwMCUsIDgwcmVtKTtcblx0cGFkZGluZzogMCA0cmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRyb3ctZ2FwOiAycmVtO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tYm90dG9tOiA4cmVtO1xuXHQmID4gZGl2IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG59XG4uYWJvdXQtMSB7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDRyZW07XG5cdCYgPiBkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cblx0XHRmbGV4LWdyb3c6IDE7XG5cdFx0bWluLXdpZHRoOiAyMHJlbTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxufVxuLmFib3V0LWltZyB7XG5cdGZsZXgtYmFzaXM6IDM1JTtcbn1cbi5hYm91dC1pbWcgaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogMjV2dyAyNXZ3IDAgMDtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLmFib3V0LXRleHQge1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxcmVtO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1iYXNpczogNDUlO1xuXHQmIGg2IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRjb2xvcjogcmdiKDE5NywgMTUxLCAxMDApO1xuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBiNTUxO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR0b3A6IDUwJTtcblx0XHRcdHdpZHRoOiA0MCU7XG5cdFx0XHRoZWlnaHQ6IDUlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDEycHgpKTtcblx0XHR9XG5cdH1cblx0JiBwIHtcblx0XHRjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xuXHR9XG5cdCYgLmJ1dHRvbiB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2M1OTc2NDtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0cGFkZGluZzogMC41cmVtIDEuNXJlbTtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXHRcdFx0dHJhbnNpdGlvbjogMC4ycztcblx0XHR9XG5cdH1cbn1cblxuQGNvbnRhaW5lciBhYm91dCAobWF4LXdpZHRoOiA1MnJlbSkge1xuXHQuYWJvdXQtMSAuYWJvdXQtdGV4dCB7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQuYWJvdXQtMSAuYWJvdXQtaW1nLFxuXHQuYWJvdXQtMSAuYWJvdXQtdGV4dCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG4gICAgLmFib3V0LXRleHQgaDY6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogbm9uZTtcbiAgICB9XG59XG5AY29udGFpbmVyIGFib3V0ICggbWF4LXdpZHRoOjMwcmVtKSB7XG5cdC5hYm91dC0xIC5hYm91dC1pbWcsXG5cdC5hYm91dC0xIC5hYm91dC10ZXh0IHtcblx0XHRtaW4td2lkdGg6IDEycmVtO1xuXHR9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTs7Q0FFYiwwQkFBMEI7Q0FDMUIsMENBQTBDO0FBQzNDO0FBQ0E7Q0FDQyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyxrQkFBa0I7O0NBRWxCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osVUFBVTtDQUNWLHlEQUEyQztDQUMzQyxzQkFBc0I7Q0FDdEIsMkJBQTJCOztDQUUzQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkI7RUFDQyxVQUFVO0VBQ1YseUJBQXlCOztFQUV6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLHNCQUFzQjtDQUN2QjtBQUNEOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsYUFBYTtDQUNiLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7QUFDQTtDQUNDLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLFNBQVM7Q0FDVDtFQUNDLGFBQWE7O0VBRWIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7Q0FDeEI7QUFDRDtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsNEJBQTRCO0NBQzVCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULHVCQUF1QjtDQUN2QixlQUFlO0NBQ2Y7RUFDQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QjtHQUNDLFdBQVc7R0FDWCxrQkFBa0I7O0dBRWxCLHlCQUF5QjtHQUN6QixRQUFRO0dBQ1IsUUFBUTtHQUNSLFVBQVU7R0FDVixVQUFVO0dBQ1Ysd0NBQXdDO0VBQ3pDO0NBQ0Q7Q0FDQTtFQUNDLHNCQUFzQjtDQUN2QjtDQUNBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZUFBZTtFQUNmO0dBQ0MsMkJBQTJCO0dBQzNCLGdCQUFnQjtFQUNqQjtDQUNEO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjtDQUNBOztFQUVDLGtCQUFrQjtDQUNuQjtJQUNHO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBQ0E7Q0FDQzs7RUFFQyxnQkFBZ0I7Q0FDakI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XFxcImFib3V0XFxcIl0ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoOHJlbSwgYXV0bykgMWZyO1xcbn1cXG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XFxcImFib3V0XFxcIl0gI2NvbnRlbnQge1xcblxcdHotaW5kZXg6IDE7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAxO1xcblxcdGdyaWQtcm93OiAxIC8gMztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRjb250YWluZXItbmFtZTogYWJvdXQ7XFxuXFx0Y29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xcbn1cXG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XFxcImFib3V0XFxcIl0gLmFib3V0LWhlYWRlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcdGZsZXgtYmFzaXM6IDMwcmVtO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvYWJvdXQuYXZpZik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcXG5cXHQmIGgxIHtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdGhlaWdodDogY2FsYygxMDAlIC0gNHJlbSk7XFxuXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFx0Jjo6YmVmb3JlIHtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0aW5zZXQ6IDA7XFxuXFx0XFx0YmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1kZWZhdWx0LWJhY2tkcm9wKTtcXG5cXHRcXHRhbmltYXRpb246IGZhZGVJbiAwLjhzO1xcblxcdH1cXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luLXRvcDogOHJlbTtcXG5cXHR3aWR0aDogbWluKDEwMCUsIDgwcmVtKTtcXG5cXHRwYWRkaW5nOiAwIDRyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRyb3ctZ2FwOiAycmVtO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWFyZ2luLWJvdHRvbTogOHJlbTtcXG5cXHQmID4gZGl2IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG59XFxuLmFib3V0LTEge1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDRyZW07XFxuXFx0JiA+IGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHRcXHRmbGV4LWdyb3c6IDE7XFxuXFx0XFx0bWluLXdpZHRoOiAyMHJlbTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxufVxcbi5hYm91dC1pbWcge1xcblxcdGZsZXgtYmFzaXM6IDM1JTtcXG59XFxuLmFib3V0LWltZyBpbWcge1xcblxcdGJvcmRlci1yYWRpdXM6IDI1dncgMjV2dyAwIDA7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcbi5hYm91dC10ZXh0IHtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRmbGV4LWJhc2lzOiA0NSU7XFxuXFx0JiBoNiB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0XFx0Y29sb3I6IHJnYigxOTcsIDE1MSwgMTAwKTtcXG5cXHRcXHQmOjpiZWZvcmUge1xcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBiNTUxO1xcblxcdFxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdFxcdHRvcDogNTAlO1xcblxcdFxcdFxcdHdpZHRoOiA0MCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiA1JTtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgMTJweCkpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0JiBwIHtcXG5cXHRcXHRjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xcblxcdH1cXG5cXHQmIC5idXR0b24ge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNjNTk3NjQ7XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRmb250LXdlaWdodDogbm9ybWFsO1xcblxcdFxcdHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogMC4ycztcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AY29udGFpbmVyIGFib3V0IChtYXgtd2lkdGg6IDUycmVtKSB7XFxuXFx0LmFib3V0LTEgLmFib3V0LXRleHQge1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5hYm91dC0xIC5hYm91dC1pbWcsXFxuXFx0LmFib3V0LTEgLmFib3V0LXRleHQge1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuICAgIC5hYm91dC10ZXh0IGg2OjpiZWZvcmV7XFxuICAgICAgICBjb250ZW50OiBub25lO1xcbiAgICB9XFxufVxcbkBjb250YWluZXIgYWJvdXQgKCBtYXgtd2lkdGg6MzByZW0pIHtcXG5cXHQuYWJvdXQtMSAuYWJvdXQtaW1nLFxcblxcdC5hYm91dC0xIC5hYm91dC10ZXh0IHtcXG5cXHRcXHRtaW4td2lkdGg6IDEycmVtO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9JbnRlci1SLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvSW50ZXItQi53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0ludGVyLUkud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9JbnRlci1CSS53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL05vcnNlLVIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Ob3JzZS1CLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJJbnRlclwiO1xuXHRzcmM6IGxvY2FsKFwiSW50ZXJcIiksIGxvY2FsKFwiSW50ZXIgUmVndWxhclwiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG5cdHNyYzogbG9jYWwoXCJJbnRlciBCb2xkXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZjJcIik7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcblx0c3JjOiBsb2NhbChcIkludGVyIEl0YWxpY1wiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJJbnRlclwiO1xuXHRzcmM6IGxvY2FsKFwiSW50ZXIgQm9sZCBJdGFsaWNcIiksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LWRpc3BsYXk6IG9wdGlvbmFsO1xufVxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcIkludGVyLWZhbGxiYWNrLWxpbnV4XCI7XG5cdHNyYzogbG9jYWwoXCJMaWJlcmF0aW9uIFNhbnNcIik7XG59XG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiSW50ZXItZmFsbGJhY2tcIjtcblx0c3JjOiBsb2NhbChcIkFyaWFsXCIpO1xufVxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcIk5vcnNlXCI7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJOb3JzZVwiO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC1kaXNwbGF5OiBzd2FwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb250cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxvQkFBb0I7Q0FDcEIsb0dBQTBGO0NBQzFGLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGlGQUF1RTtDQUN2RSxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixtRkFBeUU7Q0FDekUsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQix3RkFBK0U7Q0FDL0UsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLG1DQUFtQztDQUNuQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLDZCQUE2QjtDQUM3QixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQiw0REFBa0Q7Q0FDbEQsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQiw0REFBa0Q7Q0FDbEQsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuXFx0c3JjOiBsb2NhbChcXFwiSW50ZXJcXFwiKSwgbG9jYWwoXFxcIkludGVyIFJlZ3VsYXJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9JbnRlci1SLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcblxcdGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuXFx0c3JjOiBsb2NhbChcXFwiSW50ZXIgQm9sZFxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL0ludGVyLUIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG5cXHRzcmM6IGxvY2FsKFxcXCJJbnRlciBJdGFsaWNcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9JbnRlci1JLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuXFx0c3JjOiBsb2NhbChcXFwiSW50ZXIgQm9sZCBJdGFsaWNcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9JbnRlci1CSS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRmb250LWRpc3BsYXk6IG9wdGlvbmFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkludGVyLWZhbGxiYWNrLWxpbnV4XFxcIjtcXG5cXHRzcmM6IGxvY2FsKFxcXCJMaWJlcmF0aW9uIFNhbnNcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJJbnRlci1mYWxsYmFja1xcXCI7XFxuXFx0c3JjOiBsb2NhbChcXFwiQXJpYWxcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJOb3JzZVxcXCI7XFxuXFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzL05vcnNlLVIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIk5vcnNlXFxcIjtcXG5cXHRzcmM6IHVybChcXFwiLi4vZm9udHMvTm9yc2UtQi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ncmlkLWNvbnRhaW5lcltkYXRhLXN0YXR1cz1cIm1lbnVcIl0ge1xuXHRkaXNwbGF5OiBncmlkO1xuXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCg4cmVtLCBhdXRvKSAxZnI7XG59XG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XCJtZW51XCJdICNjb250ZW50IHtcblx0ei1pbmRleDogMTtcblx0Z3JpZC1jb2x1bW46IDEgLyAxO1xuXHRncmlkLXJvdzogMSAvIDM7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGNvbnRhaW5lci1uYW1lOiBkcmlua3MtZm9vZHM7XG5cdGNvbnRhaW5lci10eXBlOiBpbmxpbmUtc2l6ZTtcbn1cbi5ncmlkLWNvbnRhaW5lcltkYXRhLXN0YXR1cz1cIm1lbnVcIl0gLm1lbnUtaGVhZGVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdGZsZXgtYmFzaXM6IDMwcmVtO1xuXHRjb2xvcjogd2hpdGU7XG5cdHotaW5kZXg6IDE7XG5cdC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvb3VyLW1lbnUuanBnKTsgKi9cblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdGFsaWduLXNlbGY6IHN0cmV0Y2g7XG5cdCYgaDEge1xuXHRcdHotaW5kZXg6IDE7XG5cdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA0cmVtKTtcblxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblx0Jjo6YmVmb3JlIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRpbnNldDogMDtcblx0XHRiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWRlZmF1bHQtYmFja2Ryb3ApO1xuXHRcdGFuaW1hdGlvbjogZmFkZUluIDAuOHM7XG5cdH1cbn1cbi5tZW51LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjhyZW0sIDFmcikpO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG5cdGNvbHVtbi1nYXA6IDhyZW07XG5cdG1hcmdpbi10b3A6IDhyZW07XG5cdHBhZGRpbmc6IDAgNHJlbTtcblx0d2lkdGg6IG1pbigxMDAlLCA4MHJlbSk7XG5cblx0JiAubWVudS1kcmlua3Mge1xuXHRcdC8qIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDsgKi9cblx0fVxuXHQmIC5tZW51LWZvb2RzIHtcblx0XHQvKiBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kOyAqL1xuXHR9XG59XG5cbi5tZW51LWRyaW5rcyxcbi5tZW51LWZvb2RzIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHQvKiBtYXgtd2lkdGg6IDMwcmVtOyAqL1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtaW4td2lkdGg6IDMwcmVtO1xuXHRyb3ctZ2FwOiAycmVtO1xuXHQmOjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdC8qIHdpZHRoOiAxcHg7ICovXG5cdFx0aGVpZ2h0OiAxMDAlO1xuXG5cdFx0bGVmdDogMzdyZW07XG5cblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjNGM1O1xuXHR9XG5cdCY6OmFmdGVyIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHQvKiB3aWR0aDogMXB4OyAqL1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRsZWZ0OiAtNHJlbTtcblxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjOGM0YzU7XG5cdH1cbn1cblxuLm1lbnUtZHJpbmtzLWhlYWRlcixcbi5tZW51LWZvb2RzLWhlYWRlcixcbi5mdWxsLWhlYWRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDAuN3JlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQmIGg2IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRjb2xvcjogcmdiKDE5NywgMTUxLCAxMDApO1xuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBiNTUxO1xuXG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS41LCAwLjEpIHRyYW5zbGF0ZVgoY2FsYyg1MCUgKyAyNHB4KSk7XG5cdFx0XHRcblx0XHR9XG5cdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwYjU1MTtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMC4xKSB0cmFuc2xhdGVYKGNhbGMoLTUwJSArIC0yNHB4KSk7XG5cdFx0fVxuXHR9XG5cdFxufVxuLmRyaW5rLFxuLmZvb2Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXG5cdG1heC1oZWlnaHQ6IDZyZW07XG5cblx0Z2FwOiBjbGFtcCgwLjVyZW0sIDF2dywgMnJlbSk7XG5cdGZvbnQtc2l6ZTogMS44cmVtO1xufVxuLmRyaW5rLXRleHQtY29udGFpbmVyLFxuLmZvb2QtdGV4dC1jb250YWluZXIge1xuXHRtYXJnaW4tdG9wOiAwLjdyZW07XG5cdG1hcmdpbi1ib3R0b206IDAuN3JlbTtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtaW4td2lkdGg6IDA7XG5cdGZsZXgtYmFzaXM6IDYwJTtcblx0ZmxleC1ncm93OiAwO1xuXHRmbGV4LXNocmluazogMDtcblx0JiAuZHJpbmstbmFtZSxcblx0LmZvb2QtbmFtZSB7XG5cdFx0Zm9udC1mYW1pbHk6IHNlcmlmO1xuXHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0dGV4dC13cmFwOiBub3dyYXA7XG5cdFx0b3ZlcmZsb3cteTogYXV0bztcblx0XHRmbGV4LXNocmluazogMDtcblx0fVxuXHQmIC5kcmluay1pbmZvLFxuXHQuZm9vZC1pbmZvIHtcblx0XHR3aGl0ZS1zcGFjZTogd3JhcDtcblx0XHRvdmVyZmxvdzogYXV0bztcblx0XHRjb2xvcjogIzM2MzYzNjtcblx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0Zm9udC1zaXplOiAwLjU1ZW07XG5cdFx0bWF4LWhlaWdodDogMS40ODVyZW07XG5cdH1cbn1cbi5kcmluay1pbWcsXG4uZm9vZC1pbWcge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG1pbi13aWR0aDogM3JlbTtcblxuXHRmbGV4LWJhc2lzOiBtYXgtY29udGVudDtcblx0ZmxleC1zaHJpbms6IDE7XG59XG4uZHJpbmstaW1nIGltZyxcbi5mb29kLWltZyBpbWcge1xuXHRtYXgtaGVpZ2h0OiAxMDAlO1xuXHRtYXgtd2lkdGg6IDEwMCU7XG59XG4uZHJpbmstcHJpY2UsXG4uZm9vZC1wcmljZSB7XG5cdG1hcmdpbi10b3A6IDAuN3JlbTtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdGZvbnQtZmFtaWx5OiBOb3JzZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cdGZvbnQtc2l6ZTogMC44ZW07XG59XG4uZnVsbC1oZWFkZXIge1xuXHRjb2xvcjogcmdiKDE5NywgMTUxLCAxMDApO1xuXHQmIGgxIHtcblx0XHRmb250LXNpemU6IDRyZW07XG5cdH1cbn1cbi5tZW51LWZ1bGwge1xuXHRtYXJnaW4tdG9wOiA4cmVtO1xuXHR3aWR0aDogbWluKDEwMCUsIDgwcmVtKTtcblx0cGFkZGluZzogMCA0cmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRyb3ctZ2FwOiAycmVtO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tYm90dG9tOiA4cmVtO1xufVxuLmZ1bGwtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRjb2x1bW4tZ2FwOiAxLjVyZW07XG5cblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRyb3ctZ2FwOiAzcmVtO1xuXHQmIDpudGgtY2hpbGQoNSkge1xuXHRcdGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xuXHR9XG59XG4uZnVsbC1pdGVtIHtcblx0ZmxleC1iYXNpczogMzAlO1xuXHRyb3ctZ2FwOiAxcmVtO1xuXG5cdGZsZXgtZ3JvdzogMTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdG1pbi13aWR0aDogMjByZW07XG59XG4uZnVsbC10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Y29sdW1uLWdhcDogMXJlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0JiAuZnVsbC1uYW1lIHtcblx0XHRmbGV4LWdyb3c6IDE7XG5cdFx0ZmxleC1zaHJpbms6IDE7XG5cdFx0Zm9udC1mYW1pbHk6IHNlcmlmO1xuXHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuXHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdH1cblx0JiAuZnVsbC1wcmljZSB7XG5cdFx0ZmxleC1iYXNpczogbWluLWNvbnRlbnQ7XG5cdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRmb250LWZhbWlseTogTm9yc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cbn1cbi5mdWxsLWluZm8ge1xuXHRjb2xvcjogIzM2MzYzNjtcblx0b3BhY2l0eTogMC42O1xuXHRmb250LXNpemU6IDAuNmVtO1xuXHRoZWlnaHQ6IDQuODZyZW07XG5cdG92ZXJmbG93OiBhdXRvO1xufVxuLmZ1bGwtaW1nIHtcblx0d2lkdGg6IDEwMCU7XG59XG4uZnVsbC1pbWcgaW1nIHtcblx0d2lkdGg6IDEwMCU7XG5cdGFzcGVjdC1yYXRpbzogMS41O1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcbn1cbkBjb250YWluZXIgZHJpbmtzLWZvb2RzIChtYXgtd2lkdGg6IDcycmVtKSB7XG5cdC5kcmluayxcblx0LmZvb2Qge1xuXHRcdGZvbnQtc2l6ZTogMS44cmVtO1xuXHRcdCYgLmRyaW5rLWluZm97XG5cdFx0XHRmb250LXNpemU6IDAuNTBlbTtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0fVxuXHR9XG5cdFxuXHQuZnVsbC1pdGVtIHtcblx0XHRmb250LXNpemU6IDEuNnJlbTtcblx0fVxuXHQubWVudS1mb29kcyB7XG5cdFx0bWFyZ2luLXRvcDogOHJlbTtcblx0fVxuXHRcblx0Lm1lbnUtZnVsbHtcblx0XHR3aWR0aDogbWluKDEwMCUsIDgwcmVtKTtcblx0fVxuXHQubWVudS1jb250YWluZXIgLm1lbnUtZm9vZHMge1xuXHRcdG1hcmdpbi10b3A6IDhyZW07XG5cdH1cblx0XG5cdC5tZW51LWNvbnRhaW5lciB7XG5cdFx0XG5cdFx0d2lkdGg6IG1pbigxMDAlLCA4MHJlbSk7XG5cdH1cbn1cbkBjb250YWluZXIgZHJpbmtzLWZvb2RzIChtYXgtd2lkdGg6IDM4cmVtKSB7XG5cdC5kcmluayxcblx0LmZvb2Qge1xuXHRcdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRcdCYgLmRyaW5rLWluZm97XG5cdFx0XHRtYXgtaGVpZ2h0OiAyLjY0cmVtO1xuXHRcdH1cblx0fVxuXHQubWVudS1jb250YWluZXIge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTZyZW0sIDFmcikpO1xuXHRcdHBhZGRpbmc6IDAgMXJlbTtcblx0fVxuXHQuZHJpbmstaW1nLCAuZm9vZC1pbWd7XG5cdFx0bWluLXdpZHRoOiAycmVtO1xuXHR9XG5cdC5tZW51LWNvbnRhaW5lciAubWVudS1kcmlua3MsLm1lbnUtY29udGFpbmVyIC5tZW51LWZvb2Rze1xuXHRcdG1pbi13aWR0aDogMTZyZW07XG5cdH1cblx0LmZ1bGwtaXRlbXtcblx0XHRtaW4td2lkdGg6IDE2cmVtO1xuXHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHR9XG5cdC5tZW51LWZ1bGx7XG5cdFx0cGFkZGluZzogMCAxcmVtO1xuXHR9XG5cdC5mdWxsLWluZm97XG5cdFx0aGVpZ2h0OiAyLjM0cmVtO1xuXHR9XG59XG5AY29udGFpbmVyIGRyaW5rcy1mb29kcyAobWF4LXdpZHRoOiAyNHJlbSkgey5kcmluayxcblx0LmZvb2Qge1xuXHRcdGZvbnQtc2l6ZTogMS40cmVtO1xuXHRcdCYgLmRyaW5rLWluZm97XG5cdFx0XHRtYXgtaGVpZ2h0OiAyLjMxcmVtO1xuXHRcdH1cblx0fX1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGFBQWE7O0NBRWIsMEJBQTBCO0NBQzFCLDBDQUEwQztBQUMzQztBQUNBO0NBQ0MsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsNEJBQTRCO0NBQzVCLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0Msa0JBQWtCOztDQUVsQixpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLFVBQVU7Q0FDVixtREFBbUQ7Q0FDbkQsc0JBQXNCO0NBQ3RCLDJCQUEyQjs7Q0FFM0IsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CO0VBQ0MsVUFBVTtFQUNWLHlCQUF5Qjs7RUFFekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2Q7Q0FDQTtFQUNDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHdDQUF3QztFQUN4QyxzQkFBc0I7Q0FDdkI7QUFDRDtBQUNBO0NBQ0MsYUFBYTtDQUNiLDJEQUEyRDtDQUMzRCx3QkFBd0I7Q0FDeEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsdUJBQXVCOztDQUV2QjtFQUNDLDhCQUE4QjtDQUMvQjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0FBQ0Q7O0FBRUE7O0NBRUMsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2I7RUFDQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZOztFQUVaLFdBQVc7O0VBRVgseUJBQXlCO0NBQzFCO0NBQ0E7RUFDQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVzs7RUFFWCx5QkFBeUI7Q0FDMUI7QUFDRDs7QUFFQTs7O0NBR0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQjtFQUNDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCO0dBQ0MsV0FBVztHQUNYLGtCQUFrQjs7R0FFbEIseUJBQXlCOztHQUV6QixXQUFXO0dBQ1gsWUFBWTtHQUNaLHVEQUF1RDs7RUFFeEQ7RUFDQTtHQUNDLFdBQVc7R0FDWCxrQkFBa0I7O0dBRWxCLHlCQUF5QjtHQUN6QixRQUFRO0dBQ1IsV0FBVztHQUNYLFlBQVk7R0FDWix5REFBeUQ7RUFDMUQ7Q0FDRDs7QUFFRDtBQUNBOztDQUVDLGFBQWE7O0NBRWIsZ0JBQWdCOztDQUVoQiw2QkFBNkI7Q0FDN0IsaUJBQWlCO0FBQ2xCO0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQiw4QkFBOEI7Q0FDOUIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osZUFBZTtDQUNmLFlBQVk7Q0FDWixjQUFjO0NBQ2Q7O0VBRUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7Q0FDZjtDQUNBOztFQUVDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCO0FBQ0Q7QUFDQTs7Q0FFQyxZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixlQUFlOztDQUVmLHVCQUF1QjtDQUN2QixjQUFjO0FBQ2Y7QUFDQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjtBQUNBOztDQUVDLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekI7RUFDQyxlQUFlO0NBQ2hCO0FBQ0Q7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLGFBQWE7Q0FDYixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixrQkFBa0I7O0NBRWxCLDhCQUE4QjtDQUM5QixhQUFhO0NBQ2I7RUFDQyx1QkFBdUI7Q0FDeEI7QUFDRDtBQUNBO0NBQ0MsZUFBZTtDQUNmLGFBQWE7O0NBRWIsWUFBWTtDQUNaLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CO0VBQ0MsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7QUFDQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDOztFQUVDLGlCQUFpQjtFQUNqQjtHQUNDLGlCQUFpQjtHQUNqQixnQkFBZ0I7RUFDakI7Q0FDRDs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7O0VBRUMsdUJBQXVCO0NBQ3hCO0FBQ0Q7QUFDQTtDQUNDOztFQUVDLGlCQUFpQjtFQUNqQjtHQUNDLG1CQUFtQjtFQUNwQjtDQUNEO0NBQ0E7RUFDQywyREFBMkQ7RUFDM0QsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0FBQ0Q7QUFDQSw0Q0FBNEM7O0VBRTFDLGlCQUFpQjtFQUNqQjtHQUNDLG1CQUFtQjtFQUNwQjtDQUNELENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdyaWQtY29udGFpbmVyW2RhdGEtc3RhdHVzPVxcXCJtZW51XFxcIl0ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoOHJlbSwgYXV0bykgMWZyO1xcbn1cXG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XFxcIm1lbnVcXFwiXSAjY29udGVudCB7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRncmlkLWNvbHVtbjogMSAvIDE7XFxuXFx0Z3JpZC1yb3c6IDEgLyAzO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGNvbnRhaW5lci1uYW1lOiBkcmlua3MtZm9vZHM7XFxuXFx0Y29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xcbn1cXG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XFxcIm1lbnVcXFwiXSAubWVudS1oZWFkZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG5cXHRmbGV4LWJhc2lzOiAzMHJlbTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0ei1pbmRleDogMTtcXG5cXHQvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL291ci1tZW51LmpwZyk7ICovXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcXG5cXHQmIGgxIHtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdGhlaWdodDogY2FsYygxMDAlIC0gNHJlbSk7XFxuXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFx0Jjo6YmVmb3JlIHtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0aW5zZXQ6IDA7XFxuXFx0XFx0YmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1kZWZhdWx0LWJhY2tkcm9wKTtcXG5cXHRcXHRhbmltYXRpb246IGZhZGVJbiAwLjhzO1xcblxcdH1cXG59XFxuLm1lbnUtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjhyZW0sIDFmcikpO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG5cXHRjb2x1bW4tZ2FwOiA4cmVtO1xcblxcdG1hcmdpbi10b3A6IDhyZW07XFxuXFx0cGFkZGluZzogMCA0cmVtO1xcblxcdHdpZHRoOiBtaW4oMTAwJSwgODByZW0pO1xcblxcblxcdCYgLm1lbnUtZHJpbmtzIHtcXG5cXHRcXHQvKiBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7ICovXFxuXFx0fVxcblxcdCYgLm1lbnUtZm9vZHMge1xcblxcdFxcdC8qIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7ICovXFxuXFx0fVxcbn1cXG5cXG4ubWVudS1kcmlua3MsXFxuLm1lbnUtZm9vZHMge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHQvKiBtYXgtd2lkdGg6IDMwcmVtOyAqL1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtaW4td2lkdGg6IDMwcmVtO1xcblxcdHJvdy1nYXA6IDJyZW07XFxuXFx0Jjo6YmVmb3JlIHtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0Lyogd2lkdGg6IDFweDsgKi9cXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFxuXFx0XFx0bGVmdDogMzdyZW07XFxuXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2M4YzRjNTtcXG5cXHR9XFxuXFx0Jjo6YWZ0ZXIge1xcblxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHQvKiB3aWR0aDogMXB4OyAqL1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRsZWZ0OiAtNHJlbTtcXG5cXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjNGM1O1xcblxcdH1cXG59XFxuXFxuLm1lbnUtZHJpbmtzLWhlYWRlcixcXG4ubWVudS1mb29kcy1oZWFkZXIsXFxuLmZ1bGwtaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdCYgaDYge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRmb250LXNpemU6IDAuOGVtO1xcblxcdFxcdGNvbG9yOiByZ2IoMTk3LCAxNTEsIDEwMCk7XFxuXFx0XFx0Jjo6YmVmb3JlIHtcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2YwYjU1MTtcXG5cXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjUsIDAuMSkgdHJhbnNsYXRlWChjYWxjKDUwJSArIDI0cHgpKTtcXG5cXHRcXHRcXHRcXG5cXHRcXHR9XFxuXFx0XFx0Jjo6YWZ0ZXIge1xcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBiNTUxO1xcblxcdFxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMC4xKSB0cmFuc2xhdGVYKGNhbGMoLTUwJSArIC0yNHB4KSk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRcXG59XFxuLmRyaW5rLFxcbi5mb29kIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdG1heC1oZWlnaHQ6IDZyZW07XFxuXFxuXFx0Z2FwOiBjbGFtcCgwLjVyZW0sIDF2dywgMnJlbSk7XFxuXFx0Zm9udC1zaXplOiAxLjhyZW07XFxufVxcbi5kcmluay10ZXh0LWNvbnRhaW5lcixcXG4uZm9vZC10ZXh0LWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luLXRvcDogMC43cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1pbi13aWR0aDogMDtcXG5cXHRmbGV4LWJhc2lzOiA2MCU7XFxuXFx0ZmxleC1ncm93OiAwO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdCYgLmRyaW5rLW5hbWUsXFxuXFx0LmZvb2QtbmFtZSB7XFxuXFx0XFx0Zm9udC1mYW1pbHk6IHNlcmlmO1xcblxcdFxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0XFx0dGV4dC13cmFwOiBub3dyYXA7XFxuXFx0XFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRcXHRmbGV4LXNocmluazogMDtcXG5cXHR9XFxuXFx0JiAuZHJpbmstaW5mbyxcXG5cXHQuZm9vZC1pbmZvIHtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogd3JhcDtcXG5cXHRcXHRvdmVyZmxvdzogYXV0bztcXG5cXHRcXHRjb2xvcjogIzM2MzYzNjtcXG5cXHRcXHRvcGFjaXR5OiAwLjY7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjU1ZW07XFxuXFx0XFx0bWF4LWhlaWdodDogMS40ODVyZW07XFxuXFx0fVxcbn1cXG4uZHJpbmstaW1nLFxcbi5mb29kLWltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtaW4td2lkdGg6IDNyZW07XFxuXFxuXFx0ZmxleC1iYXNpczogbWF4LWNvbnRlbnQ7XFxuXFx0ZmxleC1zaHJpbms6IDE7XFxufVxcbi5kcmluay1pbWcgaW1nLFxcbi5mb29kLWltZyBpbWcge1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4uZHJpbmstcHJpY2UsXFxuLmZvb2QtcHJpY2Uge1xcblxcdG1hcmdpbi10b3A6IDAuN3JlbTtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRmb250LWZhbWlseTogTm9yc2U7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcbn1cXG4uZnVsbC1oZWFkZXIge1xcblxcdGNvbG9yOiByZ2IoMTk3LCAxNTEsIDEwMCk7XFxuXFx0JiBoMSB7XFxuXFx0XFx0Zm9udC1zaXplOiA0cmVtO1xcblxcdH1cXG59XFxuLm1lbnUtZnVsbCB7XFxuXFx0bWFyZ2luLXRvcDogOHJlbTtcXG5cXHR3aWR0aDogbWluKDEwMCUsIDgwcmVtKTtcXG5cXHRwYWRkaW5nOiAwIDRyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRyb3ctZ2FwOiAycmVtO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWFyZ2luLWJvdHRvbTogOHJlbTtcXG59XFxuLmZ1bGwtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRjb2x1bW4tZ2FwOiAxLjVyZW07XFxuXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHJvdy1nYXA6IDNyZW07XFxuXFx0JiA6bnRoLWNoaWxkKDUpIHtcXG5cXHRcXHRmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG5cXHR9XFxufVxcbi5mdWxsLWl0ZW0ge1xcblxcdGZsZXgtYmFzaXM6IDMwJTtcXG5cXHRyb3ctZ2FwOiAxcmVtO1xcblxcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWluLXdpZHRoOiAyMHJlbTtcXG59XFxuLmZ1bGwtdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGNvbHVtbi1nYXA6IDFyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHQmIC5mdWxsLW5hbWUge1xcblxcdFxcdGZsZXgtZ3JvdzogMTtcXG5cXHRcXHRmbGV4LXNocmluazogMTtcXG5cXHRcXHRmb250LWZhbWlseTogc2VyaWY7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcblxcdFxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0fVxcblxcdCYgLmZ1bGwtcHJpY2Uge1xcblxcdFxcdGZsZXgtYmFzaXM6IG1pbi1jb250ZW50O1xcblxcdFxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdFxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0XFx0Zm9udC1mYW1pbHk6IE5vcnNlO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdH1cXG59XFxuLmZ1bGwtaW5mbyB7XFxuXFx0Y29sb3I6ICMzNjM2MzY7XFxuXFx0b3BhY2l0eTogMC42O1xcblxcdGZvbnQtc2l6ZTogMC42ZW07XFxuXFx0aGVpZ2h0OiA0Ljg2cmVtO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uZnVsbC1pbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4uZnVsbC1pbWcgaW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRhc3BlY3QtcmF0aW86IDEuNTtcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuQGNvbnRhaW5lciBkcmlua3MtZm9vZHMgKG1heC13aWR0aDogNzJyZW0pIHtcXG5cXHQuZHJpbmssXFxuXFx0LmZvb2Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMS44cmVtO1xcblxcdFxcdCYgLmRyaW5rLWluZm97XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAwLjUwZW07XFxuXFx0XFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdFxcblxcdC5mdWxsLWl0ZW0ge1xcblxcdFxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdH1cXG5cXHQubWVudS1mb29kcyB7XFxuXFx0XFx0bWFyZ2luLXRvcDogOHJlbTtcXG5cXHR9XFxuXFx0XFxuXFx0Lm1lbnUtZnVsbHtcXG5cXHRcXHR3aWR0aDogbWluKDEwMCUsIDgwcmVtKTtcXG5cXHR9XFxuXFx0Lm1lbnUtY29udGFpbmVyIC5tZW51LWZvb2RzIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiA4cmVtO1xcblxcdH1cXG5cXHRcXG5cXHQubWVudS1jb250YWluZXIge1xcblxcdFxcdFxcblxcdFxcdHdpZHRoOiBtaW4oMTAwJSwgODByZW0pO1xcblxcdH1cXG59XFxuQGNvbnRhaW5lciBkcmlua3MtZm9vZHMgKG1heC13aWR0aDogMzhyZW0pIHtcXG5cXHQuZHJpbmssXFxuXFx0LmZvb2Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdFxcdCYgLmRyaW5rLWluZm97XFxuXFx0XFx0XFx0bWF4LWhlaWdodDogMi42NHJlbTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdC5tZW51LWNvbnRhaW5lciB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNnJlbSwgMWZyKSk7XFxuXFx0XFx0cGFkZGluZzogMCAxcmVtO1xcblxcdH1cXG5cXHQuZHJpbmstaW1nLCAuZm9vZC1pbWd7XFxuXFx0XFx0bWluLXdpZHRoOiAycmVtO1xcblxcdH1cXG5cXHQubWVudS1jb250YWluZXIgLm1lbnUtZHJpbmtzLC5tZW51LWNvbnRhaW5lciAubWVudS1mb29kc3tcXG5cXHRcXHRtaW4td2lkdGg6IDE2cmVtO1xcblxcdH1cXG5cXHQuZnVsbC1pdGVte1xcblxcdFxcdG1pbi13aWR0aDogMTZyZW07XFxuXFx0XFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0fVxcblxcdC5tZW51LWZ1bGx7XFxuXFx0XFx0cGFkZGluZzogMCAxcmVtO1xcblxcdH1cXG5cXHQuZnVsbC1pbmZve1xcblxcdFxcdGhlaWdodDogMi4zNHJlbTtcXG5cXHR9XFxufVxcbkBjb250YWluZXIgZHJpbmtzLWZvb2RzIChtYXgtd2lkdGg6IDI0cmVtKSB7LmRyaW5rLFxcblxcdC5mb29kIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNHJlbTtcXG5cXHRcXHQmIC5kcmluay1pbmZve1xcblxcdFxcdFxcdG1heC1oZWlnaHQ6IDIuMzFyZW07XFxuXFx0XFx0fVxcblxcdH19XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG5cdC0tc2hhZG93LWNvbG9yOiAwIDAlIDQwJTtcblx0LS1zaGFkb3ctZWxldmF0aW9uLW1lZGl1bTogMHB4IDAuNHB4IDAuM3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40KSxcblx0XHQwcHggMS41cHggMS4xcHggLTIuNXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC45NyksXG5cdFx0LTAuMnB4IDkuMnB4IDYuOXB4IC01cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQ5KTtcblx0Zm9udC1zaXplOiBjYWxjKDAuODc1cmVtICsgKDEgLSAwLjg3NSkgKiAoKDEwMHZ3IC0gMjVyZW0pIC8gKDEyMCAtIDI1KSkpO1xuXG5cdC0tZm9udC1zaXplLXhzOiAwLjZyZW07XG5cdC0tZm9udC1zaXplLXNtOiAwLjhyZW07XG5cdC0tZm9udC1zaXplLW1kOiAxcmVtO1xuXHQtLWZvbnQtc2l6ZS1sZzogMS4xcmVtO1xuXHQtLWZvbnQtc2l6ZS14bDogMS4zcmVtO1xuXHQtLWZvbnQtc2l6ZS1yZXNwb25zaXZlOiBjbGFtcCgwLjhyZW0sIDEuNnZ3LCAxLjJyZW0pO1xuXHQtLXBhZGRpbmctbWFpbjogMC41cmVtIGNsYW1wKDAuNXJlbSwgMS41dncsIDNyZW0pO1xuXHQtLWdhcC1tYWluOiBjbGFtcCgwLjVyZW0sIDF2dywgMS41cmVtKTtcblx0LS1jYXJkLXdpZHRoOiAzOHJlbTtcblx0LS1zZWNvbmQtY29sb3I6I2YwYjU1MTtcblx0LS1kZWZhdWx0LWJhY2tkcm9wOmJsdXIoM3B4KSBicmlnaHRuZXNzKDc1JSkgc2VwaWEoMyUpO1xufVxuaHIge1xuXHRib3JkZXI6IG5vbmU7XG5cdGhlaWdodDogMnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdG1hcmdpbjogMTBweCAwO1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG5cdG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHRmb250LWZhbWlseTogXCJJbnRlclwiLCBcIkludGVyLWZhbGxiYWNrLWxpbnV4XCIsIFwiSW50ZXItZmFsbGJhY2tcIiwgc2Fucy1zZXJpZjtcbn1cbi5ib2xkIHtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5pdGFsaWMge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5pbWcsXG5waWN0dXJlLFxudmlkZW8sXG5jYW52YXMsXG5zdmcge1xuXHRkaXNwbGF5OiBibG9jaztcblx0bWF4LXdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcblx0Zm9udDogaW5oZXJpdDtcbn1cblxucCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG5wIHtcblx0dGV4dC13cmFwOiB3cmFwO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuXHR0ZXh0LXdyYXA6IGJhbGFuY2U7XG59XG5cbiNyb290LFxuI19fbmV4dCB7XG5cdGlzb2xhdGlvbjogaXNvbGF0ZTtcbn1cblxuaDEge1xuXHRmb250LXNpemU6IDIuOTg2cmVtO1xufVxuaDIge1xuXHRmb250LXNpemU6IDIuNDg4cmVtO1xufVxuaDMge1xuXHRmb250LXNpemU6IDIuMDc0cmVtO1xufVxuaDQge1xuXHRmb250LXNpemU6IDEuNzI4cmVtO1xufVxuaDUge1xuXHRmb250LXNpemU6IDEuNDRyZW07XG59XG5oNiB7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHdCQUF3QjtDQUN4Qjs7eURBRXdEO0NBQ3hELHdFQUF3RTs7Q0FFeEUsc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIsc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixvREFBb0Q7Q0FDcEQsaURBQWlEO0NBQ2pELHNDQUFzQztDQUN0QyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHNEQUFzRDtBQUN2RDtBQUNBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxvQ0FBb0M7Q0FDcEMsY0FBYztBQUNmO0FBQ0E7OztDQUdDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQ0FBbUM7Q0FDbkMsMEVBQTBFO0FBQzNFO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBOzs7OztDQUtDLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCOztBQUVBOzs7O0NBSUMsYUFBYTtBQUNkOztBQUVBOzs7Ozs7O0NBT0MseUJBQXlCO0NBQ3pCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Ozs7OztDQU1DLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG5cXHQtLXNoYWRvdy1jb2xvcjogMCAwJSA0MCU7XFxuXFx0LS1zaGFkb3ctZWxldmF0aW9uLW1lZGl1bTogMHB4IDAuNHB4IDAuM3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40KSxcXG5cXHRcXHQwcHggMS41cHggMS4xcHggLTIuNXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC45NyksXFxuXFx0XFx0LTAuMnB4IDkuMnB4IDYuOXB4IC01cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQ5KTtcXG5cXHRmb250LXNpemU6IGNhbGMoMC44NzVyZW0gKyAoMSAtIDAuODc1KSAqICgoMTAwdncgLSAyNXJlbSkgLyAoMTIwIC0gMjUpKSk7XFxuXFxuXFx0LS1mb250LXNpemUteHM6IDAuNnJlbTtcXG5cXHQtLWZvbnQtc2l6ZS1zbTogMC44cmVtO1xcblxcdC0tZm9udC1zaXplLW1kOiAxcmVtO1xcblxcdC0tZm9udC1zaXplLWxnOiAxLjFyZW07XFxuXFx0LS1mb250LXNpemUteGw6IDEuM3JlbTtcXG5cXHQtLWZvbnQtc2l6ZS1yZXNwb25zaXZlOiBjbGFtcCgwLjhyZW0sIDEuNnZ3LCAxLjJyZW0pO1xcblxcdC0tcGFkZGluZy1tYWluOiAwLjVyZW0gY2xhbXAoMC41cmVtLCAxLjV2dywgM3JlbSk7XFxuXFx0LS1nYXAtbWFpbjogY2xhbXAoMC41cmVtLCAxdncsIDEuNXJlbSk7XFxuXFx0LS1jYXJkLXdpZHRoOiAzOHJlbTtcXG5cXHQtLXNlY29uZC1jb2xvcjojZjBiNTUxO1xcblxcdC0tZGVmYXVsdC1iYWNrZHJvcDpibHVyKDNweCkgYnJpZ2h0bmVzcyg3NSUpIHNlcGlhKDMlKTtcXG59XFxuaHIge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRoZWlnaHQ6IDJweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFx0bWFyZ2luOiAxMHB4IDA7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIFxcXCJJbnRlci1mYWxsYmFjay1saW51eFxcXCIsIFxcXCJJbnRlci1mYWxsYmFja1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5ib2xkIHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG4uaXRhbGljIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG59XFxuXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuXFx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG5cXHRvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxucCB7XFxuXFx0dGV4dC13cmFwOiB3cmFwO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuXFx0dGV4dC13cmFwOiBiYWxhbmNlO1xcbn1cXG5cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG5cXHRpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbmgxIHtcXG5cXHRmb250LXNpemU6IDIuOTg2cmVtO1xcbn1cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiAyLjQ4OHJlbTtcXG59XFxuaDMge1xcblxcdGZvbnQtc2l6ZTogMi4wNzRyZW07XFxufVxcbmg0IHtcXG5cXHRmb250LXNpemU6IDEuNzI4cmVtO1xcbn1cXG5oNSB7XFxuXFx0Zm9udC1zaXplOiAxLjQ0cmVtO1xcbn1cXG5oNiB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG5cdC8qIG91dGxpbmU6IDFweCBzb2xpZCBCTEFDSzsgKi9cbn1cbmh0bWwge1xufVxuYm9keSB7XG5cdHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuXHRcbn1cbmgxIHtcblx0Zm9udC1mYW1pbHk6IHNlcmlmO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XCJob21lXCJdIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtaW4taGVpZ2h0OiAxMDBzdmg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCg4cmVtLCBhdXRvKSAxZnI7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuXHQvKiBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyAqL1xuXHQmOjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGluc2V0OiAwO1xuXHRcdGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpIGNvbnRyYXN0KDEzMCUpO1xuXHRcdGFuaW1hdGlvbjogZmFkZUluSGVybyAwLjhzO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG5cdDAlIHtcblx0XHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDAlKSBzZXBpYSgwJSk7XG5cdH1cblx0MTAwJSB7XG5cdFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCkgYnJpZ2h0bmVzcyg3NSUpIHNlcGlhKDMlKTtcblx0fVxufVxuQGtleWZyYW1lcyBmYWRlSW5IZXJvIHtcblx0MCUge1xuXHRcdGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG5cdH1cblx0MTAwJSB7XG5cdFx0YmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDUwJSkgY29udHJhc3QoMTMwJSk7XG5cdH1cbn1cblxuLmhlYWRlciB7XG5cdGdyaWQtY29sdW1uOiAxLzE7XG5cdGdyaWQtcm93OiAxLyAyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQvKiBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWRlZmF1bHQtYmFja2Ryb3ApOyAqL1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuXHRmb250LXNpemU6IDEuMnJlbTtcblx0cGFkZGluZzogMXJlbTtcblx0ei1pbmRleDogMjtcblxuXHQmIC5uYXYtbWVudSBidXR0b24ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0cGFkZGluZzogMDtcblx0XHRtYXJnaW46IDA7XG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0fVxufVxuLnJlc2VydmF0aW9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG5cdG1hcmdpbjogMDtcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0dG91Y2gtYWN0aW9uOiBub25lO1xufVxuLnJlc2VydmF0aW9uLWNvbnRhaW5lciB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bWFyZ2luLXRvcDogMXJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuXHQmOmhvdmVyIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0dHJhbnNpdGlvbjogdHJhbnNsYXRlIDAuNHM7XG5cdH1cblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnJlc2VydmF0aW9uOjphZnRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAycHg7XG5cdHJpZ2h0OiAycHg7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHR3aWR0aDogY2FsYygxMDAlIC0gNHB4KTtcblx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpO1xuXHRjb250ZW50OiBcIlwiO1xuXG5cdHRvdWNoLWFjdGlvbjogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0bWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG5cblx0b3BhY2l0eTogMDtcbn1cbi8qIC5yZXNlcnZhdGlvbjpob3Zlcjo6YWZ0ZXIge1xuXHRvcGFjaXR5OiAxO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG59ICovXG4ucmVzZXJ2YXRpb246YWN0aXZlOjphZnRlciB7XG5cdG9wYWNpdHk6IDE7XG5cdHRvdWNoLWFjdGlvbjogbm9uZTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuXHRoZWlnaHQ6IDNyZW07XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZmxleC1zaHJpbms6IDA7XG59XG4ubG9nbyB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWF4LWhlaWdodDogMTAwJTtcblx0d2lkdGg6IG1heC1jb250ZW50O1xuXHRoZWlnaHQ6IDEwMCU7XG59XG4ubmF2LW1lbnUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IGNsYW1wKDJyZW0sIDh2dywgNHJlbSk7XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0cGFkZGluZy1yaWdodDogNnJlbTtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5ncmlkLWNvbnRhaW5lcltkYXRhLXN0YXR1cz1cImhvbWVcIl0gI2NvbnRlbnQge1xuXHR6LWluZGV4OiAxO1xuXHRncmlkLWNvbHVtbjogMSAvIDE7XG5cdGdyaWQtcm93OiAyIC8gMztcblx0ZGlzcGxheTogZmxleDtcblx0LyogYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1kZWZhdWx0LWJhY2tkcm9wKTsgKi9cbn1cblxuLmhlcm8tYWxpZ24tY29udGFpbmVyIHtcblx0ei1pbmRleDogMTtcblx0aGVpZ2h0OiA3MCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXgtZ3JvdzogMTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVyby1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMmVtO1xuXHRtaW4taGVpZ2h0OiAwO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG5cdHBhZGRpbmc6IDFyZW07XG5cblx0Z2FwOiAxdnc7XG5cdCYgLmhlcm8tdGV4dC0xIHtcblx0XHRjb2xvcjogI2YwYjU1MTtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Jjo6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGI1NTE7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEsIDAuMSkgdHJhbnNsYXRlWChjYWxjKDEwMCUgKyAyNHB4KSk7XG5cdFx0fVxuXHRcdCY6OmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGI1NTE7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEsIDAuMSkgdHJhbnNsYXRlWChjYWxjKC0xMDAlICsgLTI0cHgpKTtcblx0XHR9XG5cdH1cbn1cbmZvb3RlciB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA5MDgwZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9vdGVyLWNvbnRhaW5lciB7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZGlzcGxheTogZmxleDtcblx0cGFkZGluZzogNnJlbSA0cmVtO1xuXHR3aWR0aDogbWluKDEwMCUsIDEwMHJlbSk7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0cm93LWdhcDogNnJlbTtcblx0Y29sdW1uLWdhcDogNnJlbTtcblx0Zm9udC1zaXplOiAwLjlyZW07XG5cdCYgPiBkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRoZWlnaHQ6IDEycmVtO1xuXHRcdGZsZXgtYmFzaXM6IDE4cmVtO1xuXHRcdGZsZXgtZ3JvdzogMS41O1xuXHRcdG1pbi13aWR0aDogMThyZW07XG5cblx0XHQmOm50aC1jaGlsZCgyKSxcblx0XHQmOm50aC1jaGlsZCgzKSB7XG5cdFx0XHRmbGV4LWJhc2lzOiAxNHJlbTtcblx0XHRcdGZsZXgtZ3JvdzogMTtcblx0XHRcdG1pbi13aWR0aDogMTRyZW07XG5cdFx0fVxuXHR9XG59XG4uZm9vdGVyLXRleHQtY29udGFpbmVyIHtcblx0JiAuZm9vdGVyLXRleHQtaGVhZGVyIGgyIHtcblx0XHRmb250LWZhbWlseTogbm9yc2U7XG5cdH1cblx0JiAuZm9vdGVyLXRleHQge1xuXHR9XG5cdCYgLmZvb3Rlci1pY29ucyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRoZWlnaHQ6IDIuN3JlbTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0Y29sdW1uLWdhcDogMXJlbTtcblx0XHRtYXJnaW4tdG9wOiBhdXRvO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0JiBpbWcge1xuXHRcdFx0bWF4LWhlaWdodDogMTAwJTtcblx0XHR9XG5cdFx0JiBpbWc6aG92ZXIge1xuXHRcdFx0ZmlsdGVyOiBpbnZlcnQoNDAlKSBzZXBpYSg5NyUpIHNhdHVyYXRlKDM4MjElKSBodWUtcm90YXRlKDEzZGVnKSBicmlnaHRuZXNzKDk5JSlcblx0XHRcdFx0Y29udHJhc3QoOTglKTtcblx0XHR9XG5cdH1cbn1cbi5mb290ZXItaG91cnMtY29udGFpbmVyIHtcblx0JiAuZm9vdGVyLWhvdXJzLWhlYWRlciBoNSB7XG5cdFx0aGVpZ2h0OiAzLjczMnJlbTtcblx0fVxuXHQmIC5yb3cge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdCYgLmZvb3Rlci1ob3Vycy10ZXh0IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0XHRmbGV4LWdyb3c6IDE7XG5cdFx0Z2FwOiAwLjVyZW07XG5cdFx0JiA+IDpsYXN0LWNoaWxkIHtcblx0XHRcdG1hcmdpbi10b3A6IGF1dG87XG5cdFx0fVxuXHR9XG59XG4uZm9vdGVyLWFkcmVzcy1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4LWdyb3c6IDE7XG5cblx0JiA+IGRpdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRnYXA6IDFyZW07XG5cdH1cblx0JiA6bnRoLWNoaWxkKDMpLFxuXHQ6bnRoLWNoaWxkKDQpIHtcblx0XHRtYXJnaW4tdG9wOiBhdXRvO1xuXHR9XG5cdCYgLmZvb3Rlci1hZHJlc3MtaGVhZGVyIGg1IHtcblx0XHRoZWlnaHQ6IDMuNzMycmVtO1xuXHR9XG5cdCYgaW1nIHtcblx0XHRtYXgtaGVpZ2h0OiAxLjM1cmVtO1xuXHR9XG5cdCYgLmZvb3Rlci1sb2NhdGlvbixcblx0LmZvb3Rlci10ZWwsXG5cdC5mb290ZXItbWFpbCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdCYgLmZvb3Rlci1sb2NhdGlvbiBpbWcge1xuXHRcdG1hcmdpbi10b3A6IGF1dG87XG5cdFx0bWFyZ2luLWJvdHRvbTogYXV0bztcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzJyZW0pIHtcblx0Lmhlcm8tY29udGFpbmVyIC5oZXJvLXRleHQtMSB7XG5cdFx0Jjo6YmVmb3JlIHtcblx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0fVxuXHRcdCY6OmFmdGVyIHtcblx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0fVxuXHR9XG5cdC5oZXJvLXRleHQtMSxcblx0Lmhlcm8tdGV4dC0zIHtcblx0XHRmb250LXNpemU6IDEuNTZyZW07XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5oZXJvLXRleHQtMiB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMy44ODE4cmVtO1xuXHR9XG5cdC5oZWFkZXIge1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRyb3ctZ2FwOiAxcmVtO1xuXHRcdGNvbHVtbi1nYXA6IDJyZW07XG5cdH1cblx0LmZvb3Rlci10ZXh0LWNvbnRhaW5lciBkaXYuZm9vdGVyLWljb25zIHtcblx0XHRoZWlnaHQ6IDIuMDI1cmVtO1xuXHR9XG5cdC5mb290ZXItY29udGFpbmVyIHtcblx0XHRwYWRkaW5nOiA2cmVtIDJyZW07XG5cdH1cblx0Lm5hdi1tZW51IHtcblx0fVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM2cmVtKSB7XG5cdC5uYXYtbWVudSB7XG5cdFx0cGFkZGluZy1yaWdodDogMHJlbTtcblx0fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtDQUNDLDBCQUEwQjs7QUFFM0I7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FD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Q0FDakI7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CO0NBQ0E7Q0FDQTtBQUNEO0FBQ0E7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcblxcdC8qIG91dGxpbmU6IDFweCBzb2xpZCBCTEFDSzsgKi9cXG59XFxuaHRtbCB7XFxufVxcbmJvZHkge1xcblxcdHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcblxcdFxcbn1cXG5oMSB7XFxuXFx0Zm9udC1mYW1pbHk6IHNlcmlmO1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lcltkYXRhLXN0YXR1cz1cXFwiaG9tZVxcXCJdIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWluLWhlaWdodDogMTAwc3ZoO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoOHJlbSwgYXV0bykgMWZyO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcblxcdC8qIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICovXFxuXFx0Jjo6YmVmb3JlIHtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0aW5zZXQ6IDA7XFxuXFx0XFx0YmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDUwJSkgY29udHJhc3QoMTMwJSk7XFxuXFx0XFx0YW5pbWF0aW9uOiBmYWRlSW5IZXJvIDAuOHM7XFxuXFx0XFx0cGFkZGluZzogMDtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0fVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuXFx0MCUge1xcblxcdFxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMCUpIHNlcGlhKDAlKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCkgYnJpZ2h0bmVzcyg3NSUpIHNlcGlhKDMlKTtcXG5cXHR9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluSGVybyB7XFxuXFx0MCUge1xcblxcdFxcdGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpIGNvbnRyYXN0KDEzMCUpO1xcblxcdH1cXG59XFxuXFxuLmhlYWRlciB7XFxuXFx0Z3JpZC1jb2x1bW46IDEvMTtcXG5cXHRncmlkLXJvdzogMS8gMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdC8qIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tZGVmYXVsdC1iYWNrZHJvcCk7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdHotaW5kZXg6IDI7XFxuXFxuXFx0JiAubmF2LW1lbnUgYnV0dG9uIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxuXFx0XFx0Y29sb3I6IHdoaXRlO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdFxcdHBhZGRpbmc6IDA7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0fVxcbn1cXG4ucmVzZXJ2YXRpb24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuXFx0bWFyZ2luOiAwO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuLnJlc2VydmF0aW9uLWNvbnRhaW5lciB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuXFx0XFx0dHJhbnNpdGlvbjogdHJhbnNsYXRlIDAuNHM7XFxuXFx0fVxcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb246OmFmdGVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAycHg7XFxuXFx0cmlnaHQ6IDJweDtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gNHB4KTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFxuXFx0dG91Y2gtYWN0aW9uOiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcblxcblxcdG9wYWNpdHk6IDA7XFxufVxcbi8qIC5yZXNlcnZhdGlvbjpob3Zlcjo6YWZ0ZXIge1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xcbn0gKi9cXG4ucmVzZXJ2YXRpb246YWN0aXZlOjphZnRlciB7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHR0b3VjaC1hY3Rpb246IG5vbmU7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcblxcdGhlaWdodDogM3JlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4ubG9nbyB7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuLm5hdi1tZW51IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogY2xhbXAoMnJlbSwgOHZ3LCA0cmVtKTtcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFx0cGFkZGluZy1yaWdodDogNnJlbTtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5ncmlkLWNvbnRhaW5lcltkYXRhLXN0YXR1cz1cXFwiaG9tZVxcXCJdICNjb250ZW50IHtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGdyaWQtY29sdW1uOiAxIC8gMTtcXG5cXHRncmlkLXJvdzogMiAvIDM7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWRlZmF1bHQtYmFja2Ryb3ApOyAqL1xcbn1cXG5cXG4uaGVyby1hbGlnbi1jb250YWluZXIge1xcblxcdHotaW5kZXg6IDE7XFxuXFx0aGVpZ2h0OiA3MCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhlcm8tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0bWluLWhlaWdodDogMDtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFxuXFx0Z2FwOiAxdnc7XFxuXFx0JiAuaGVyby10ZXh0LTEge1xcblxcdFxcdGNvbG9yOiAjZjBiNTUxO1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHQmOjpiZWZvcmUge1xcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBiNTUxO1xcblxcdFxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGhlaWdodDogMTAwJTtcXG5cXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEsIDAuMSkgdHJhbnNsYXRlWChjYWxjKDEwMCUgKyAyNHB4KSk7XFxuXFx0XFx0fVxcblxcdFxcdCY6OmFmdGVyIHtcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2YwYjU1MTtcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEsIDAuMSkgdHJhbnNsYXRlWChjYWxjKC0xMDAlICsgLTI0cHgpKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5mb290ZXIge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwODBlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXItY29udGFpbmVyIHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiA2cmVtIDRyZW07XFxuXFx0d2lkdGg6IG1pbigxMDAlLCAxMDByZW0pO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRyb3ctZ2FwOiA2cmVtO1xcblxcdGNvbHVtbi1nYXA6IDZyZW07XFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxuXFx0JiA+IGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGhlaWdodDogMTJyZW07XFxuXFx0XFx0ZmxleC1iYXNpczogMThyZW07XFxuXFx0XFx0ZmxleC1ncm93OiAxLjU7XFxuXFx0XFx0bWluLXdpZHRoOiAxOHJlbTtcXG5cXG5cXHRcXHQmOm50aC1jaGlsZCgyKSxcXG5cXHRcXHQmOm50aC1jaGlsZCgzKSB7XFxuXFx0XFx0XFx0ZmxleC1iYXNpczogMTRyZW07XFxuXFx0XFx0XFx0ZmxleC1ncm93OiAxO1xcblxcdFxcdFxcdG1pbi13aWR0aDogMTRyZW07XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuLmZvb3Rlci10ZXh0LWNvbnRhaW5lciB7XFxuXFx0JiAuZm9vdGVyLXRleHQtaGVhZGVyIGgyIHtcXG5cXHRcXHRmb250LWZhbWlseTogbm9yc2U7XFxuXFx0fVxcblxcdCYgLmZvb3Rlci10ZXh0IHtcXG5cXHR9XFxuXFx0JiAuZm9vdGVyLWljb25zIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGhlaWdodDogMi43cmVtO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRcXHRjb2x1bW4tZ2FwOiAxcmVtO1xcblxcdFxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHQmIGltZyB7XFxuXFx0XFx0XFx0bWF4LWhlaWdodDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0XFx0JiBpbWc6aG92ZXIge1xcblxcdFxcdFxcdGZpbHRlcjogaW52ZXJ0KDQwJSkgc2VwaWEoOTclKSBzYXR1cmF0ZSgzODIxJSkgaHVlLXJvdGF0ZSgxM2RlZykgYnJpZ2h0bmVzcyg5OSUpXFxuXFx0XFx0XFx0XFx0Y29udHJhc3QoOTglKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG4uZm9vdGVyLWhvdXJzLWNvbnRhaW5lciB7XFxuXFx0JiAuZm9vdGVyLWhvdXJzLWhlYWRlciBoNSB7XFxuXFx0XFx0aGVpZ2h0OiAzLjczMnJlbTtcXG5cXHR9XFxuXFx0JiAucm93IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHR9XFxuXFx0JiAuZm9vdGVyLWhvdXJzLXRleHQge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXHRcXHRmbGV4LWdyb3c6IDE7XFxuXFx0XFx0Z2FwOiAwLjVyZW07XFxuXFx0XFx0JiA+IDpsYXN0LWNoaWxkIHtcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcbi5mb290ZXItYWRyZXNzLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXG5cXHQmID4gZGl2IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFx0JiA6bnRoLWNoaWxkKDMpLFxcblxcdDpudGgtY2hpbGQoNCkge1xcblxcdFxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0fVxcblxcdCYgLmZvb3Rlci1hZHJlc3MtaGVhZGVyIGg1IHtcXG5cXHRcXHRoZWlnaHQ6IDMuNzMycmVtO1xcblxcdH1cXG5cXHQmIGltZyB7XFxuXFx0XFx0bWF4LWhlaWdodDogMS4zNXJlbTtcXG5cXHR9XFxuXFx0JiAuZm9vdGVyLWxvY2F0aW9uLFxcblxcdC5mb290ZXItdGVsLFxcblxcdC5mb290ZXItbWFpbCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdH1cXG5cXHQmIC5mb290ZXItbG9jYXRpb24gaW1nIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IGF1dG87XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzJyZW0pIHtcXG5cXHQuaGVyby1jb250YWluZXIgLmhlcm8tdGV4dC0xIHtcXG5cXHRcXHQmOjpiZWZvcmUge1xcblxcdFxcdFxcdHdpZHRoOiA2MCU7XFxuXFx0XFx0fVxcblxcdFxcdCY6OmFmdGVyIHtcXG5cXHRcXHRcXHR3aWR0aDogNjAlO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0Lmhlcm8tdGV4dC0xLFxcblxcdC5oZXJvLXRleHQtMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjU2cmVtO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0Lmhlcm8tdGV4dC0yIHtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0Zm9udC1zaXplOiAzLjg4MThyZW07XFxuXFx0fVxcblxcdC5oZWFkZXIge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRcXHRyb3ctZ2FwOiAxcmVtO1xcblxcdFxcdGNvbHVtbi1nYXA6IDJyZW07XFxuXFx0fVxcblxcdC5mb290ZXItdGV4dC1jb250YWluZXIgZGl2LmZvb3Rlci1pY29ucyB7XFxuXFx0XFx0aGVpZ2h0OiAyLjAyNXJlbTtcXG5cXHR9XFxuXFx0LmZvb3Rlci1jb250YWluZXIge1xcblxcdFxcdHBhZGRpbmc6IDZyZW0gMnJlbTtcXG5cXHR9XFxuXFx0Lm5hdi1tZW51IHtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNnJlbSkge1xcblxcdC5uYXYtbWVudSB7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMHJlbTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGhlcm9JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2Fib3V0LmF2aWZcIjtcblxuaW1wb3J0IGFib3V0MUltYWdlIGZyb20gXCIuLi9pbWFnZXMvYWJvdXQxLmF2aWZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFib3V0KCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXHRjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWNvbnRhaW5lclwiKTtcblxuXHRpZiAoIShncmlkQ29udGFpbmVyLmRhdGFzZXQuc3RhdHVzID09PSBcImFib3V0XCIpKSB7XG5cdFx0d2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0Y29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdH1cblx0XHRncmlkQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibm9uZVwiO1xuXHRcdGdyaWRDb250YWluZXIuZGF0YXNldC5zdGF0dXMgPSBcImFib3V0XCI7XG5cdFx0Y29uc3QgdXJsID0gYHVybChcIiR7aGVyb0ltYWdlfVwiKWA7XG5cblx0XHQvLyBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjApLCByZ2JhKDAsMCwwLDAuMCkpLFxuXG5cdFx0Y29uc3QgYWJvdXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGFib3V0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1oZWFkZXJcIik7XG5cdFx0YWJvdXRIZWFkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdXJsO1xuXHRcdGNvbnN0IGFib3V0SGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRhYm91dEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkFCT1VUIFVTXCI7XG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChhYm91dEhlYWRlcik7XG5cdFx0YWJvdXRIZWFkZXIuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXJUZXh0KTtcblxuXHRcdGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtY29udGFpbmVyXCIpO1xuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuXHRcdGNvbnN0IGFib3V0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0YWJvdXQxLmNsYXNzTGlzdC5hZGQoXCJhYm91dC0xXCIpO1xuXHRcdGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0MSk7XG5cdFx0Y29uc3QgYWJvdXRJbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0YWJvdXRJbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtaW1nXCIpO1xuXHRcdGNvbnN0IGFib3V0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdGFib3V0SW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGFib3V0MUltYWdlKTtcblx0XHRhYm91dDEuYXBwZW5kQ2hpbGQoYWJvdXRJbWFnZUNvbnRhaW5lcik7XG5cdFx0YWJvdXRJbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEltYWdlKTtcblxuXHRcdGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0YWJvdXRUZXh0LmNsYXNzTGlzdC5hZGQoXCJhYm91dC10ZXh0XCIpO1xuXHRcdGFib3V0MS5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xuXG5cdFx0Y29uc3QgYWJvdXRUZXh0SGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcblx0XHRhYm91dFRleHRIZWFkZXIxLnRleHRDb250ZW50ID0gXCJIRVkhIFdFTENPTUUgVE8gU0VaSSBDT09LSUVcIjtcblx0XHRjb25zdCBhYm91dFRleHRIZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdGFib3V0VGV4dEhlYWRlcjIudGV4dENvbnRlbnQgPSBcIk9VUiBTVE9SWVwiO1xuXHRcdGNvbnN0IGFib3V0VGV4dFAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdFx0YWJvdXRUZXh0UDEudGV4dENvbnRlbnQgPVxuXHRcdFx0XCJGb29kIGlzIHRoZSBmb3VuZGF0aW9uIG9mIHRydWUgaGFwcGluZXNzLiBMb3JlbSBpcHN1bSBkb2xvciBhbWV0LG9uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdCBhZW5lYW4gY29tbW9kby5cIjtcblx0XHRjb25zdCBhYm91dFRleHRQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdGFib3V0VGV4dFAyLnRleHRDb250ZW50ID1cblx0XHRcdFwiV2Ugc2VlIG91ciBjdXN0b21lcnMgYXMgaW52aXRlZCBndWVzdHMgdG8gYSBwYXJ0eSwgYW5kIHdlIGFyZSB0aGUgaG9zdHMuIEl04oCZcyBvdXIgam9iIGV2ZXJ5IGRheSB0byBtYWtlIGV2ZXJ5IGltcG9ydGFudCBhc3BlY3Qgb2YgY3VzdG9tZXIgZXhwZXJpZW5jZSBhIGxpdHRsZSBiaXQgYmV0dGVyLiBEb25lYyBxdWFtIGZlbGlzLCBuZWMsIHBlbGxlbnRlc3F1ZSBldS5cIjtcblx0XHRjb25zdCBhYm91dFRleHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBhYm91dFRleHRCdXR0b24udGV4dENvbnRlbnQ9XCJPVVIgTUVOVVwiXG5cdFx0YWJvdXRUZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG5cdFx0YWJvdXRUZXh0LmFwcGVuZENoaWxkKGFib3V0VGV4dEhlYWRlcjEpO1xuXHRcdGFib3V0VGV4dC5hcHBlbmRDaGlsZChhYm91dFRleHRIZWFkZXIyKTtcblx0XHRhYm91dFRleHQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0UDEpO1xuXHRcdGFib3V0VGV4dC5hcHBlbmRDaGlsZChhYm91dFRleHRQMik7XG5cdFx0YWJvdXRUZXh0LmFwcGVuZENoaWxkKGFib3V0VGV4dEJ1dHRvbik7XG5cdH1cbn1cbiIsImltcG9ydCBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2Nvb2tpZS1oZXJvLWxvdy5hdmlmXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cdGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWQtY29udGFpbmVyXCIpO1xuXHRpZiAoIShncmlkQ29udGFpbmVyLmRhdGFzZXQuc3RhdHVzID09PSBcImhvbWVcIikpIHtcblx0XHR3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRjb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0fVxuXHRcdFxuXHRjb25zdCB1cmwgPSBgdXJsKFwiJHtJbWFnZX1cIilgO1xuXHRcblx0Z3JpZENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB1cmw7XG5cblx0Ly8gbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC4wKSwgcmdiYSgwLDAsMCwwLjApKSxcblxuXHRjb25zdCBoZXJvQWxpZ25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdGNvbnN0IGhlcm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBoZXJvVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG5cdGNvbnN0IGhlcm9UZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0Y29uc3QgaGVyb1RleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuXHRjb25zdCBoZXJvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgaGVyb0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0Z3JpZENvbnRhaW5lci5kYXRhc2V0LnN0YXR1cyA9IFwiaG9tZVwiO1xuXG5cdGhlcm9BbGlnbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVyby1hbGlnbi1jb250YWluZXJcIik7XG5cdGhlcm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlcm8tY29udGFpbmVyXCIpO1xuXHRoZXJvVGV4dDEuY2xhc3NMaXN0LmFkZChcImhlcm8tdGV4dC0xXCIpO1xuXHRoZXJvVGV4dDIuY2xhc3NMaXN0LmFkZChcImhlcm8tdGV4dC0yXCIpO1xuXHRoZXJvVGV4dDMuY2xhc3NMaXN0LmFkZChcImhlcm8tdGV4dC0zXCIpO1xuXHRoZXJvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvblwiKVxuXHRoZXJvQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvbi1jb250YWluZXJcIilcblx0aGVyb1RleHQxLnRleHRDb250ZW50ID0gXCJXRUxDT01FIFRPXCI7XG5cdGhlcm9UZXh0Mi50ZXh0Q29udGVudCA9IFwiU0VaSSBDT09LSUVTXCI7XG5cdGhlcm9UZXh0My50ZXh0Q29udGVudCA9IFwiQ29va2llLiBDb2ZmZS4gVGVhLiBTd2VldHMuXCI7XG5cdGhlcm9CdXR0b24udGV4dENvbnRlbnQ9XCJSRVNFUlZBVElPTlwiXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb0FsaWduQ29udGFpbmVyKTtcblx0aGVyb0FsaWduQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9Db250YWluZXIpO1xuXHRoZXJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9UZXh0MSk7XG5cdGhlcm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb1RleHQyKTtcblx0aGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvVGV4dDMpO1xuXHRoZXJvQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9CdXR0b24pO1xuXHRoZXJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9CdXR0b25Db250YWluZXIpO1xuXHR9XG5cbn1cbiIsImltcG9ydCBoZXJvSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9vdXItbWVudS5hdmlmXCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4uL3NjcmlwdHMvbWVudU1vZGVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cdGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWQtY29udGFpbmVyXCIpO1xuXHRcblxuXHRpZighKGdyaWRDb250YWluZXIuZGF0YXNldC5zdGF0dXMgPT09IFwibWVudVwiKSl7XG5cdFx0d2hpbGUoY29udGVudC5maXJzdENoaWxkKXtcblx0XHRcdGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKVxuXHRcdH1cblx0XHRncmlkQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibm9uZVwiO1xuXHRcdGdyaWRDb250YWluZXIuZGF0YXNldC5zdGF0dXMgPSBcIm1lbnVcIjtcblx0XHRjb25zdCB1cmwgPSBgdXJsKFwiJHtoZXJvSW1hZ2V9XCIpYDtcblx0XG5cdFx0Ly8gbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC4wKSwgcmdiYSgwLDAsMCwwLjApKSxcblx0XG5cdFx0Y29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bWVudUhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWVudS1oZWFkZXJcIik7XG5cdFx0bWVudUhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB1cmw7XG5cdFx0Y29uc3QgbWVudUhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdFx0bWVudUhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIk9VUiBNRU5VXCI7XG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcblx0XHRtZW51SGVhZGVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXJUZXh0KTtcblx0XG5cdFx0Y29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblx0XG5cdFx0Y29uc3QgbWVudUZ1bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1lbnVGdWxsLmNsYXNzTGlzdC5hZGQoXCJtZW51LWZ1bGxcIik7XG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChtZW51RnVsbCk7XG5cdFx0Y29uc3QgbWVudURyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Y29uc3QgbWVudUZvb2RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtZW51RHJpbmtzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWRyaW5rc1wiKTtcblx0XHRtZW51Rm9vZHMuY2xhc3NMaXN0LmFkZChcIm1lbnUtZm9vZHNcIik7XG5cdFx0bWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51RHJpbmtzKTtcblx0XHRtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVGb29kcyk7XG5cdFxuXHRcdGNvbnN0IG1lbnVEcmlua3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1lbnVEcmlua3NIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtZHJpbmtzLWhlYWRlclwiKTtcblx0XHRjb25zdCBkcmlua0hlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG5cdFx0Y29uc3QgZHJpbmtIZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdGRyaW5rSGVhZGVyMS50ZXh0Q29udGVudCA9IFwiRFJJTktTXCI7XG5cdFx0ZHJpbmtIZWFkZXIyLnRleHRDb250ZW50ID0gXCJDT0ZGRUVTICYgVEVBU1wiO1xuXHRcdG1lbnVEcmlua3NIZWFkZXIuYXBwZW5kQ2hpbGQoZHJpbmtIZWFkZXIxKTtcblx0XHRtZW51RHJpbmtzSGVhZGVyLmFwcGVuZENoaWxkKGRyaW5rSGVhZGVyMik7XG5cdFx0bWVudURyaW5rcy5hcHBlbmRDaGlsZChtZW51RHJpbmtzSGVhZGVyKTtcblx0XHRjb25zdCBtZW51Rm9vZHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1lbnVGb29kc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwibWVudS1mb29kcy1oZWFkZXJcIik7XG5cdFx0Y29uc3QgZm9vZEhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG5cdFx0Y29uc3QgZm9vZEhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdFx0Zm9vZEhlYWRlcjEudGV4dENvbnRlbnQgPSBcIkZPT0RTXCI7XG5cdFx0Zm9vZEhlYWRlcjIudGV4dENvbnRlbnQgPSBcIkJBS0VSWSAmIExVTkNIXCI7XG5cdFx0bWVudUZvb2RzSGVhZGVyLmFwcGVuZENoaWxkKGZvb2RIZWFkZXIxKTtcblx0XHRtZW51Rm9vZHNIZWFkZXIuYXBwZW5kQ2hpbGQoZm9vZEhlYWRlcjIpO1xuXHRcdG1lbnVGb29kcy5hcHBlbmRDaGlsZChtZW51Rm9vZHNIZWFkZXIpO1xuXHRcblx0XG5cdFx0XG5cdFxuXHRcdGNvbnN0IG1lbnVGdWxsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtZW51RnVsbEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZnVsbC1oZWFkZXJcIik7XG5cdFx0XG5cdFx0Y29uc3QgZnVsbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRmdWxsSGVhZGVyLnRleHRDb250ZW50ID0gXCJGVUxMIE1FTlVcIjtcblx0XHRcblx0XHRtZW51RnVsbEhlYWRlci5hcHBlbmRDaGlsZChmdWxsSGVhZGVyKTtcblx0XHRcblx0XHRjb25zdCBmdWxsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXHRcdGZ1bGxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZ1bGwtY29udGFpbmVyXCIpO1xuXHRcdFxuXHRcdG1lbnVGdWxsLmFwcGVuZENoaWxkKG1lbnVGdWxsSGVhZGVyKTtcblx0XHRtZW51RnVsbC5hcHBlbmRDaGlsZChmdWxsQ29udGFpbmVyKTtcblx0XHRNZW51Lm15TWVudS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcblx0XHRcdGlmIChlbGVtZW50LmNhdGVnb3J5ID09IFwiZHJpbmtcIiB8fCBlbGVtZW50LmNhdGVnb3J5ID09IFwiZm9vZFwiKSB7XG5cdFx0XHRcdGRyaW5rQW5kRm9vZChlbGVtZW50LCBtZW51RHJpbmtzLCBtZW51Rm9vZHMpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGZ1bGwoZWxlbWVudCxmdWxsQ29udGFpbmVyKVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblxuXG5cdFxuXG5cdFxufVxuXG5mdW5jdGlvbiBkcmlua0FuZEZvb2QoZWxlbWVudCwgbWVudURyaW5rcywgbWVudUZvb2RzKSB7XG5cdGNvbnN0IGVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRlbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7ZWxlbWVudC5jYXRlZ29yeX1gKTtcblx0Y29uc3QgY2F0ZWdvcnlDb250YWluZXIgPSBlbGVtZW50LmNhdGVnb3J5ID09IFwiZHJpbmtcIiA/IG1lbnVEcmlua3MgOiBtZW51Rm9vZHM7XG5cdGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRDb250YWluZXIpO1xuXG5cdGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2VsZW1lbnQuY2F0ZWdvcnl9LWltZ2ApO1xuXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGVsZW1lbnQuaW1nKTtcblx0aW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cdGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcblxuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2VsZW1lbnQuY2F0ZWdvcnl9LXRleHQtY29udGFpbmVyYCk7XG5cdGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRuYW1lLmNsYXNzTGlzdC5hZGQoYCR7ZWxlbWVudC5jYXRlZ29yeX0tbmFtZWApO1xuXHRuYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuXHRpbmZvLmNsYXNzTGlzdC5hZGQoYCR7ZWxlbWVudC5jYXRlZ29yeX0taW5mb2ApO1xuXHRpbmZvLnRleHRDb250ZW50ID0gZWxlbWVudC5pbmZvO1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG5cdGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJpY2UuY2xhc3NMaXN0LmFkZChgJHtlbGVtZW50LmNhdGVnb3J5fS1wcmljZWApO1xuXHRwcmljZS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpY2U7XG5cdGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2UpO1xufVxuXG5cbmZ1bmN0aW9uIGZ1bGwoZWxlbWVudCwgZnVsbENvbnRhaW5lcikge1xuXG5cdFxuXG5cblxuXG5cblxuXG5cblx0XG5cblx0Y29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZ1bGwtaXRlbVwiKTtcblx0XG5cdFxuXHRmdWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRDb250YWluZXIpXG5cblx0Y29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYGZ1bGwtaW1nYCk7XG5cdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZWxlbWVudC5pbWcpO1xuXHRpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblx0ZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xuXG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYGZ1bGwtdGV4dC1jb250YWluZXJgKTtcblx0ZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG5hbWUuY2xhc3NMaXN0LmFkZChgZnVsbC1uYW1lYCk7XG5cdG5hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG5cdGluZm8uY2xhc3NMaXN0LmFkZChgZnVsbC1pbmZvYCk7XG5cdGluZm8udGV4dENvbnRlbnQgPSBlbGVtZW50LmluZm87XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG5cdGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cblx0Y29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcmljZS5jbGFzc0xpc3QuYWRkKGBmdWxsLXByaWNlYCk7XG5cdHByaWNlLnRleHRDb250ZW50ID0gZWxlbWVudC5wcmljZTtcblx0dGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZSk7XG59XG4iLCJpbXBvcnQgZHJpbmsxIGZyb20gXCIuLi9pbWFnZXMvY29mZmVlLTEuanBnXCI7XG5pbXBvcnQgZHJpbmsyIGZyb20gXCIuLi9pbWFnZXMvY29mZmVlLTIuanBnXCI7XG5pbXBvcnQgZHJpbmszIGZyb20gXCIuLi9pbWFnZXMvY29mZmVlLTMuanBnXCI7XG5pbXBvcnQgZHJpbms0IGZyb20gXCIuLi9pbWFnZXMvY29mZmVlLTQuanBnXCI7XG5pbXBvcnQgZHJpbms1IGZyb20gXCIuLi9pbWFnZXMvY29mZmVlLTUuanBnXCI7XG5pbXBvcnQgZHJpbms2IGZyb20gXCIuLi9pbWFnZXMvY29mZmVlLTIuanBnXCI7XG5cbmltcG9ydCBmb29kMSBmcm9tIFwiLi4vaW1hZ2VzL2Zvb2QtMS5qcGdcIjtcbmltcG9ydCBmb29kMiBmcm9tIFwiLi4vaW1hZ2VzL2Zvb2QtMi5qcGdcIjtcbmltcG9ydCBmb29kMyBmcm9tIFwiLi4vaW1hZ2VzL2Zvb2QtMy5qcGdcIjtcbmltcG9ydCBmb29kNCBmcm9tIFwiLi4vaW1hZ2VzL2Zvb2QtNC5qcGdcIjtcbmltcG9ydCBmb29kNSBmcm9tIFwiLi4vaW1hZ2VzL2Zvb2QtNS5qcGdcIjtcbmltcG9ydCBmb29kNiBmcm9tIFwiLi4vaW1hZ2VzL2Zvb2QtNi5qcGdcIjtcblxuaW1wb3J0IHBsYXRlMSBmcm9tIFwiLi4vaW1hZ2VzL3BsYXRlMS5hdmlmXCI7XG5pbXBvcnQgcGxhdGUyIGZyb20gXCIuLi9pbWFnZXMvcGxhdGUyLmF2aWZcIjtcbmltcG9ydCBwbGF0ZTMgZnJvbSBcIi4uL2ltYWdlcy9wbGF0ZTMuYXZpZlwiO1xuaW1wb3J0IHBsYXRlNCBmcm9tIFwiLi4vaW1hZ2VzL3BsYXRlNC5hdmlmXCI7XG5pbXBvcnQgcGxhdGU1IGZyb20gXCIuLi9pbWFnZXMvcGxhdGU1LmF2aWZcIjtcbmltcG9ydCBwbGF0ZTYgZnJvbSBcIi4uL2ltYWdlcy9wbGF0ZTYuYXZpZlwiO1xuXG5leHBvcnQgY2xhc3MgTWVudSB7XG5cdHN0YXRpYyBteU1lbnUgPSBbXTtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGluZm8sIGltZywgY2F0ZWdvcnkpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucHJpY2UgPSBwcmljZTtcblx0XHR0aGlzLmluZm8gPSBpbmZvO1xuXHRcdHRoaXMuaW1nID0gaW1nO1xuXHRcdHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcblx0XHRNZW51Lm15TWVudS5wdXNoKHRoaXMpO1xuXHR9XG59XG5uZXcgTWVudShcblx0XCJDYXJhbWVsIFZhbmlsbGEgTGF0dGVcIixcblx0XCIkNC4yNVwiLFxuXHRcIkVzcHJlc3NvLCBzdGVhbWVkIG1pbGssIHZhbmlsbGEgc3lydXAsIGNhcmFtZWwgZHJpenpsZVwiLFxuXHRkcmluazEsXG5cdFwiZHJpbmtcIlxuKTtcbm5ldyBNZW51KFxuXHRcIkljZWQgTWF0Y2hhIExhdHRlXCIsXG5cdFwiJDMuOTVcIixcblx0XCJDZXJlbW9uaWFsIG1hdGNoYSwgYWxtb25kIG1pbGssIGEgdG91Y2ggb2YgaG9uZXlcIixcblx0ZHJpbmsyLFxuXHRcImRyaW5rXCJcbik7XG5uZXcgTWVudShcblx0XCJIYXplbG51dCBNb2NoYVwiLFxuXHRcIiQ0LjUwXCIsXG5cdFwiRXNwcmVzc28sIGNob2NvbGF0ZSwgaGF6ZWxudXQgc3lydXAsIHdoaXBwZWQgY3JlYW1cIixcblx0ZHJpbmszLFxuXHRcImRyaW5rXCJcbik7XG5uZXcgTWVudShcblx0XCJTdHJhd2JlcnJ5IEhpYmlzY3VzIFRlYVwiLFxuXHRcIiQzLjc1XCIsXG5cdFwiRHJpZWQgaGliaXNjdXMgcGV0YWxzLCBmcmVzaCBzdHJhd2JlcnJ5IHB1cmVlLCBtaW50XCIsXG5cdGRyaW5rNCxcblx0XCJkcmlua1wiXG4pO1xubmV3IE1lbnUoXG5cdFwiQ2lubmFtb24gRG9sY2UgQ2FwcHVjY2lubyBcIixcblx0XCIkNC4xMFwiLFxuXHRcIkVzcHJlc3NvLCBzdGVhbWVkIG1pbGssIGNpbm5hbW9uIGRvbGNlIHNwcmlua2xlXCIsXG5cdGRyaW5rNSxcblx0XCJkcmlua1wiXG4pO1xubmV3IE1lbnUoXG5cdFwiQ29jb251dCBDb2xkIEJyZXdcIixcblx0XCIkNC4wMFwiLFxuXHRcIlNtb290aCBjb2xkIGJyZXcsIGNvY29udXQgbWlsaywgYWdhdmUgbmVjdGFyIFwiLFxuXHRkcmluazYsXG5cdFwiZHJpbmtcIlxuKTtcbm5ldyBNZW51KFxuXHRcIkNob2NvbGF0ZSBDcm9pc3NhbnRcIixcblx0XCIkMi44NVwiLFxuXHRcIkJ1dHRlcnkgcGFzdHJ5IGZpbGxlZCB3aXRoIEJlbGdpYW4gZGFyayBjaG9jb2xhdGVcIixcblx0Zm9vZDEsXG5cdFwiZm9vZFwiXG4pO1xubmV3IE1lbnUoXG5cdFwiQXZvY2FkbyBUb2FzdFwiLFxuXHRcIiQ1LjIwXCIsXG5cdFwiU291cmRvdWdoLCBzbWFzaGVkIGF2b2NhZG8sIGNoaWxpIGZsYWtlcywgc2VhIHNhbHRcIixcblx0Zm9vZDIsXG5cdFwiZm9vZFwiXG4pO1xubmV3IE1lbnUoXG5cdFwiU3BpbmFjaCAmIEZldGEgV3JhcFwiLFxuXHRcIiQ0Ljc1XCIsXG5cdFwiU3BpbmFjaCB0b3J0aWxsYSwgY3J1bWJsZWQgZmV0YSwgc3VuLWRyaWVkIHRvbWF0b2VzXCIsXG5cdGZvb2QzLFxuXHRcImZvb2RcIlxuKTtcbm5ldyBNZW51KFwiQmx1ZWJlcnJ5IE11ZmZpblwiLCBcIiQzLjMwXCIsIFwiRnJlc2ggYmx1ZWJlcnJpZXMsIHZhbmlsbGEgY3J1bWIgdG9wcGluZ1wiLCBmb29kNCwgXCJmb29kXCIpO1xubmV3IE1lbnUoXG5cdFwiVHVya2V5ICYgU3dpc3MgUGFuaW5pXCIsXG5cdFwiJDYuMTBcIixcblx0XCJSb2FzdGVkIHR1cmtleSwgU3dpc3MgY2hlZXNlLCBwZXN0byBtYXlvXCIsXG5cdGZvb2Q1LFxuXHRcImZvb2RcIlxuKTtcbm5ldyBNZW51KFxuXHRcIlF1aWNoZSBMb3JyYWluZVwiLFxuXHRcIiQ1Ljk1XCIsXG5cdFwiRmxha3kgY3J1c3QsIGJhY29uIGxhcmRvbnMsIGNyZWFteSBlZ2cgY3VzdGFyZFwiLFxuXHRmb29kNixcblx0XCJmb29kXCJcbik7XG5uZXcgTWVudShcblx0XCJSdXN0aWMgTXVzaHJvb20gUmlzb3R0b1wiLFxuXHRcIiQxOC41MFwiLFxuXHRcIkNyZWFteSBhcmJvcmlvIHJpY2Ugd2l0aCBwb3JjaW5pIG11c2hyb29tcywgd2hpdGUgd2luZSwgcGFybWVzYW4sIGFuZCBmcmVzaCB0aHltZS5cIixcblx0cGxhdGUxLFxuXHRcInBsYXRlXCJcbik7XG5uZXcgTWVudShcblx0XCJNZWRpdGVycmFuZWFuIFBvd2VyIFNhbGFkXCIsXG5cdFwiJDE0LjgwXCIsXG5cdFwiR3JpbGxlZCBsZW1vbi1tYXJpbmF0ZWQgY2hpY2tlbiBvdmVyIHF1aW5vYSBhbmQgYXJ1Z3VsYSwgZmluaXNoZWQgd2l0aCBhIHplc3R5IGhlcmIgZHJlc3NpbmcuXCIsXG5cdHBsYXRlMixcblx0XCJwbGF0ZVwiXG4pO1xubmV3IE1lbnUoXG5cdFwiU21va3kgQ2hpcG90bGUgVmVnZ2llIFRhY29zXCIsXG5cdFwiJDEzLjQwXCIsXG5cdFwiU2F1dMOpZWQgYmVsbCBwZXBwZXJzIGFuZCBvbmlvbnMgaW4gc29mdCB0b3J0aWxsYXMsIHRvcHBlZCB3aXRoIGNoaXBvdGxlIGFpb2xpIGFuZCBsaW1lIGNyZW1hLiBcIixcblx0cGxhdGUzLFxuXHRcInBsYXRlXCJcbik7XG5uZXcgTWVudShcblx0XCJMZW1vbi1IZXJiIENoaWNrZW4gQm93bCBcIixcblx0XCIkMTUuOTBcIixcblx0XCJHcmlsbGVkIGxlbW9uLW1hcmluYXRlZCBjaGlja2VuIG92ZXIgcXVpbm9hIGFuZCBhcnVndWxhLCBmaW5pc2hlZCB3aXRoIGEgemVzdHkgaGVyYiBkcmVzc2luZy5cIixcblx0cGxhdGU0LFxuXHRcInBsYXRlXCJcbik7XG5uZXcgTWVudShcblx0XCJTZWFyZWQgU2FsbW9uIFRlcml5YWtpXCIsXG5cdFwiJDIyLjAwXCIsXG5cdFwiTm9yd2VnaWFuIHNhbG1vbiBnbGF6ZWQgaW4gbGlnaHQgdGVyaXlha2kgc2F1Y2UsIHNlcnZlZCB3aXRoIHNlc2FtZSBncmVlbnMgYW5kIHNwcm91dHMuXCIsXG5cdHBsYXRlNSxcblx0XCJwbGF0ZVwiXG4pO1xubmV3IE1lbnUoXG5cdFwiVHJ1ZmZsZSBNYWMgYW5kIENoZWVzZVwiLFxuXHRcIiQxNy4yNVwiLFxuXHRcIkFnZWQgY2hlZGRhciBhbmQgY3JlYW15IGLDqWNoYW1lbCwgaW5mdXNlZCB3aXRoIGJsYWNrIHRydWZmbGUgb2lsIGFuZCBmaW5pc2hlZCB3aXRoIGNyaXNweSBwYW5rby5cIixcblx0cGxhdGU2LFxuXHRcInBsYXRlXCJcbik7XG5leHBvcnQgY29uc3QgZGVuZW1lMiA9IE1lbnUubXlNZW51IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb250cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb250cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZm9udHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvbWVudS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9hYm91dC5jc3NcIjtcbmltcG9ydCBob21lUmVuZGVyIGZyb20gXCIuLi9zY3JpcHRzL2hvbWUuanNcIjtcbmltcG9ydCBtZW51UmVuZGVyIGZyb20gXCIuLi9zY3JpcHRzL21lbnUuanNcIjtcbmltcG9ydCBhYm91dFJlbmRlciBmcm9tIFwiLi4vc2NyaXB0cy9hYm91dC5qc1wiO1xuLy8gaG9tZVJlbmRlcigpO1xuKGZ1bmN0aW9uIG5hdlJlbmRlcigpIHtcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG5cdGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWQtY29udGFpbmVyXCIpO1xuXHRoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZURvbSk7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cdFxuXHRob21lUmVuZGVyKCk7XG5cblxuXG5cdGZ1bmN0aW9uIGNoYW5nZURvbShldmVudCkge1xuXHRcdGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIi5ob21lXCIpKSB7XG5cblx0XHRcdGhvbWVSZW5kZXIoKTtcblxuXG5cblxuXHRcdFx0XG5cdFx0fWVsc2UgaWYoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIubWVudVwiKSl7XG5cdFx0XHRtZW51UmVuZGVyKCk7XG5cdFx0fWVsc2UgaWYoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIuYWJvdXRcIikpe1xuXHRcdFx0YWJvdXRSZW5kZXIoKTtcblx0XHR9XG5cdH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=