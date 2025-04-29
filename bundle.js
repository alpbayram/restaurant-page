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
	font-display: optional;
}
@font-face {
	font-family: "Norse";
	src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff2");
	font-weight: bold;
	font-style: normal;
	font-display: optional;
}`, "",{"version":3,"sources":["webpack://./src/styles/fonts.css"],"names":[],"mappings":"AAAA;CACC,oBAAoB;CACpB,oGAA0F;CAC1F,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,oBAAoB;CACpB,iFAAuE;CACvE,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,oBAAoB;CACpB,mFAAyE;CACzE,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,oBAAoB;CACpB,wFAA+E;CAC/E,gBAAgB;CAChB,kBAAkB;CAClB,sBAAsB;AACvB;AACA;CACC,mCAAmC;CACnC,6BAA6B;AAC9B;AACA;CACC,6BAA6B;CAC7B,mBAAmB;AACpB;AACA;CACC,oBAAoB;CACpB,4DAAkD;CAClD,mBAAmB;CACnB,kBAAkB;CAClB,sBAAsB;AACvB;AACA;CACC,oBAAoB;CACpB,4DAAkD;CAClD,iBAAiB;CACjB,kBAAkB;CAClB,sBAAsB;AACvB","sourcesContent":["@font-face {\n\tfont-family: \"Inter\";\n\tsrc: local(\"Inter\"), local(\"Inter Regular\"), url(\"../fonts/Inter-R.woff2\") format(\"woff2\");\n\tfont-weight: 400;\n\tfont-style: normal;\n\tfont-display: swap;\n}\n\n@font-face {\n\tfont-family: \"Inter\";\n\tsrc: local(\"Inter Bold\"), url(\"../fonts/Inter-B.woff2\") format(\"woff2\");\n\tfont-weight: 700;\n\tfont-style: normal;\n\tfont-display: swap;\n}\n\n@font-face {\n\tfont-family: \"Inter\";\n\tsrc: local(\"Inter Italic\"), url(\"../fonts/Inter-I.woff2\") format(\"woff2\");\n\tfont-weight: 400;\n\tfont-style: italic;\n\tfont-display: swap;\n}\n@font-face {\n\tfont-family: \"Inter\";\n\tsrc: local(\"Inter Bold Italic\"), url(\"../fonts/Inter-BI.woff2\") format(\"woff2\");\n\tfont-weight: 700;\n\tfont-style: italic;\n\tfont-display: optional;\n}\n@font-face {\n\tfont-family: \"Inter-fallback-linux\";\n\tsrc: local(\"Liberation Sans\");\n}\n@font-face {\n\tfont-family: \"Inter-fallback\";\n\tsrc: local(\"Arial\");\n}\n@font-face {\n\tfont-family: \"Norse\";\n\tsrc: url(\"../fonts/Norse-R.woff2\") format(\"woff2\");\n\tfont-weight: normal;\n\tfont-style: normal;\n\tfont-display: optional;\n}\n@font-face {\n\tfont-family: \"Norse\";\n\tsrc: url(\"../fonts/Norse-B.woff2\") format(\"woff2\");\n\tfont-weight: bold;\n\tfont-style: normal;\n\tfont-display: optional;\n}"],"sourceRoot":""}]);
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
	"$$4.50",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLFVBQVUsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sVUFBVSxhQUFhLGNBQWMsV0FBVyxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxXQUFXLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxZQUFZLFdBQVcsS0FBSyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsV0FBVyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxN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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsS0FBSyxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsS0FBSyxVQUFVLFlBQVksTUFBTSxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsT0FBTyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsYUFBYSxXQUFXLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLFlBQVksS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUs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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0E7QUFDQTtBQUNEO0FBQ0M7QUFDZTtBQUNBO0FBQ0U7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDREQUFVOzs7O0FBSVg7QUFDQTs7QUFFQSxHQUFHLDREQUFVOzs7OztBQUtiO0FBQ0EsR0FBRztBQUNILEdBQUcsNERBQVU7QUFDYixHQUFHO0FBQ0gsR0FBRyw2REFBVztBQUNkO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9mb250cy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvbWVudU1vZGVsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzP2QxMTciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9mb250cy5jc3M/NTAyNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21lbnUuY3NzPzcwMGEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9hYm91dC5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XCJhYm91dFwiXSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDhyZW0sIGF1dG8pIDFmcjtcbn1cbi5ncmlkLWNvbnRhaW5lcltkYXRhLXN0YXR1cz1cImFib3V0XCJdICNjb250ZW50IHtcblx0ei1pbmRleDogMTtcblx0Z3JpZC1jb2x1bW46IDEgLyAxO1xuXHRncmlkLXJvdzogMSAvIDM7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGNvbnRhaW5lci1uYW1lOiBhYm91dDtcblx0Y29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xufVxuLmdyaWQtY29udGFpbmVyW2RhdGEtc3RhdHVzPVwiYWJvdXRcIl0gLmFib3V0LWhlYWRlciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRmbGV4LWJhc2lzOiAzMHJlbTtcblx0Y29sb3I6IHdoaXRlO1xuXHR6LWluZGV4OiAxO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHQmIGgxIHtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gNHJlbSk7XG5cblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cdCY6OmJlZm9yZSB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0aW5zZXQ6IDA7XG5cdFx0YmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1kZWZhdWx0LWJhY2tkcm9wKTtcblx0XHRhbmltYXRpb246IGZhZGVJbiAwLjhzO1xuXHR9XG59XG5cbi5hYm91dC1jb250YWluZXIge1xuXHRtYXJnaW4tdG9wOiA4cmVtO1xuXHR3aWR0aDogbWluKDEwMCUsIDgwcmVtKTtcblx0cGFkZGluZzogMCA0cmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRyb3ctZ2FwOiAycmVtO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tYm90dG9tOiA4cmVtO1xuXHQmID4gZGl2IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG59XG4uYWJvdXQtMSB7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDRyZW07XG5cdCYgPiBkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cblx0XHRmbGV4LWdyb3c6IDE7XG5cdFx0bWluLXdpZHRoOiAyMHJlbTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxufVxuLmFib3V0LWltZyB7XG5cdGZsZXgtYmFzaXM6IDM1JTtcbn1cbi5hYm91dC1pbWcgaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogMjV2dyAyNXZ3IDAgMDtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLmFib3V0LXRleHQge1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxcmVtO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1iYXNpczogNDUlO1xuXHQmIGg2IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRjb2xvcjogcmdiKDE5NywgMTUxLCAxMDApO1xuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBiNTUxO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR0b3A6IDUwJTtcblx0XHRcdHdpZHRoOiA0MCU7XG5cdFx0XHRoZWlnaHQ6IDUlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDEycHgpKTtcblx0XHR9XG5cdH1cblx0JiBwIHtcblx0XHRjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xuXHR9XG5cdCYgLmJ1dHRvbiB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2M1OTc2NDtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0cGFkZGluZzogMC41cmVtIDEuNXJlbTtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXHRcdFx0dHJhbnNpdGlvbjogMC4ycztcblx0XHR9XG5cdH1cbn1cblxuQGNvbnRhaW5lciBhYm91dCAobWF4LXdpZHRoOiA1MnJlbSkge1xuXHQuYWJvdXQtMSAuYWJvdXQtdGV4dCB7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQuYWJvdXQtMSAuYWJvdXQtaW1nLFxuXHQuYWJvdXQtMSAuYWJvdXQtdGV4dCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG4gICAgLmFib3V0LXRleHQgaDY6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogbm9uZTtcbiAgICB9XG59XG5AY29udGFpbmVyIGFib3V0ICggbWF4LXdpZHRoOjMwcmVtKSB7XG5cdC5hYm91dC0xIC5hYm91dC1pbWcsXG5cdC5hYm91dC0xIC5hYm91dC10ZXh0IHtcblx0XHRtaW4td2lkdGg6IDEycmVtO1xuXHR9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTs7Q0FFYiwwQkFBMEI7Q0FDMUIsMENBQTBDO0FBQzNDO0FBQ0E7Q0FDQyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyxrQkFBa0I7O0NBRWxCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osVUFBVTtDQUNWLHlEQUEyQztDQUMzQyxzQkFBc0I7Q0FDdEIsMkJBQTJCOztDQUUzQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkI7RUFDQyxVQUFVO0VBQ1YseUJBQXlCOztFQUV6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLHNCQUFzQjtDQUN2QjtBQUNEOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsYUFBYTtDQUNiLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7QUFDQTtDQUNDLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLFNBQVM7Q0FDVDtFQUNDLGFBQWE7O0VBRWIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7Q0FDeEI7QUFDRDtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsNEJBQTRCO0NBQzVCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULHVCQUF1QjtDQUN2QixlQUFlO0NBQ2Y7RUFDQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QjtHQUNDLFdBQVc7R0FDWCxrQkFBa0I7O0dBRWxCLHlCQUF5QjtHQUN6QixRQUFRO0dBQ1IsUUFBUTtHQUNSLFVBQVU7R0FDVixVQUFVO0dBQ1Ysd0NBQXdDO0VBQ3pDO0NBQ0Q7Q0FDQTtFQUNDLHNCQUFzQjtDQUN2QjtDQUNBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZUFBZTtFQUNmO0dBQ0MsMkJBQTJCO0dBQzNCLGdCQUFnQjtFQUNqQjtDQUNEO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjtDQUNBOztFQUVDLGtCQUFrQjtDQUNuQjtJQUNHO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBQ0E7Q0FDQzs7RUFFQyxnQkFBZ0I7Q0FDakI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XFxcImFib3V0XFxcIl0ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoOHJlbSwgYXV0bykgMWZyO1xcbn1cXG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XFxcImFib3V0XFxcIl0gI2NvbnRlbnQge1xcblxcdHotaW5kZXg6IDE7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAxO1xcblxcdGdyaWQtcm93OiAxIC8gMztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRjb250YWluZXItbmFtZTogYWJvdXQ7XFxuXFx0Y29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xcbn1cXG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XFxcImFib3V0XFxcIl0gLmFib3V0LWhlYWRlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcdGZsZXgtYmFzaXM6IDMwcmVtO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvYWJvdXQuYXZpZik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcXG5cXHQmIGgxIHtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdGhlaWdodDogY2FsYygxMDAlIC0gNHJlbSk7XFxuXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFx0Jjo6YmVmb3JlIHtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0aW5zZXQ6IDA7XFxuXFx0XFx0YmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1kZWZhdWx0LWJhY2tkcm9wKTtcXG5cXHRcXHRhbmltYXRpb246IGZhZGVJbiAwLjhzO1xcblxcdH1cXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luLXRvcDogOHJlbTtcXG5cXHR3aWR0aDogbWluKDEwMCUsIDgwcmVtKTtcXG5cXHRwYWRkaW5nOiAwIDRyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRyb3ctZ2FwOiAycmVtO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWFyZ2luLWJvdHRvbTogOHJlbTtcXG5cXHQmID4gZGl2IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG59XFxuLmFib3V0LTEge1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDRyZW07XFxuXFx0JiA+IGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHRcXHRmbGV4LWdyb3c6IDE7XFxuXFx0XFx0bWluLXdpZHRoOiAyMHJlbTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxufVxcbi5hYm91dC1pbWcge1xcblxcdGZsZXgtYmFzaXM6IDM1JTtcXG59XFxuLmFib3V0LWltZyBpbWcge1xcblxcdGJvcmRlci1yYWRpdXM6IDI1dncgMjV2dyAwIDA7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcbi5hYm91dC10ZXh0IHtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRmbGV4LWJhc2lzOiA0NSU7XFxuXFx0JiBoNiB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0XFx0Y29sb3I6IHJnYigxOTcsIDE1MSwgMTAwKTtcXG5cXHRcXHQmOjpiZWZvcmUge1xcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBiNTUxO1xcblxcdFxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdFxcdHRvcDogNTAlO1xcblxcdFxcdFxcdHdpZHRoOiA0MCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiA1JTtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgMTJweCkpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0JiBwIHtcXG5cXHRcXHRjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xcblxcdH1cXG5cXHQmIC5idXR0b24ge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNjNTk3NjQ7XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRmb250LXdlaWdodDogbm9ybWFsO1xcblxcdFxcdHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogMC4ycztcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AY29udGFpbmVyIGFib3V0IChtYXgtd2lkdGg6IDUycmVtKSB7XFxuXFx0LmFib3V0LTEgLmFib3V0LXRleHQge1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5hYm91dC0xIC5hYm91dC1pbWcsXFxuXFx0LmFib3V0LTEgLmFib3V0LXRleHQge1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuICAgIC5hYm91dC10ZXh0IGg2OjpiZWZvcmV7XFxuICAgICAgICBjb250ZW50OiBub25lO1xcbiAgICB9XFxufVxcbkBjb250YWluZXIgYWJvdXQgKCBtYXgtd2lkdGg6MzByZW0pIHtcXG5cXHQuYWJvdXQtMSAuYWJvdXQtaW1nLFxcblxcdC5hYm91dC0xIC5hYm91dC10ZXh0IHtcXG5cXHRcXHRtaW4td2lkdGg6IDEycmVtO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9JbnRlci1SLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvSW50ZXItQi53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0ludGVyLUkud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9JbnRlci1CSS53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL05vcnNlLVIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Ob3JzZS1CLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJJbnRlclwiO1xuXHRzcmM6IGxvY2FsKFwiSW50ZXJcIiksIGxvY2FsKFwiSW50ZXIgUmVndWxhclwiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG5cdHNyYzogbG9jYWwoXCJJbnRlciBCb2xkXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZjJcIik7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcblx0c3JjOiBsb2NhbChcIkludGVyIEl0YWxpY1wiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJJbnRlclwiO1xuXHRzcmM6IGxvY2FsKFwiSW50ZXIgQm9sZCBJdGFsaWNcIiksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LWRpc3BsYXk6IG9wdGlvbmFsO1xufVxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcIkludGVyLWZhbGxiYWNrLWxpbnV4XCI7XG5cdHNyYzogbG9jYWwoXCJMaWJlcmF0aW9uIFNhbnNcIik7XG59XG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiSW50ZXItZmFsbGJhY2tcIjtcblx0c3JjOiBsb2NhbChcIkFyaWFsXCIpO1xufVxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcIk5vcnNlXCI7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtZGlzcGxheTogb3B0aW9uYWw7XG59XG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiTm9yc2VcIjtcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSkgZm9ybWF0KFwid29mZjJcIik7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtZGlzcGxheTogb3B0aW9uYWw7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2ZvbnRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG9CQUFvQjtDQUNwQixvR0FBMEY7Q0FDMUYsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsaUZBQXVFO0NBQ3ZFLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLG1GQUF5RTtDQUN6RSxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLHdGQUErRTtDQUMvRSxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsbUNBQW1DO0NBQ25DLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsNkJBQTZCO0NBQzdCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLDREQUFrRDtDQUNsRCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLDREQUFrRDtDQUNsRCxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG5cXHRzcmM6IGxvY2FsKFxcXCJJbnRlclxcXCIpLCBsb2NhbChcXFwiSW50ZXIgUmVndWxhclxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL0ludGVyLVIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG5cXHRzcmM6IGxvY2FsKFxcXCJJbnRlciBCb2xkXFxcIiksIHVybChcXFwiLi4vZm9udHMvSW50ZXItQi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXHRmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcblxcdHNyYzogbG9jYWwoXFxcIkludGVyIEl0YWxpY1xcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL0ludGVyLUkud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG5cXHRzcmM6IGxvY2FsKFxcXCJJbnRlciBCb2xkIEl0YWxpY1xcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL0ludGVyLUJJLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtZGlzcGxheTogb3B0aW9uYWw7XFxufVxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiSW50ZXItZmFsbGJhY2stbGludXhcXFwiO1xcblxcdHNyYzogbG9jYWwoXFxcIkxpYmVyYXRpb24gU2Fuc1xcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkludGVyLWZhbGxiYWNrXFxcIjtcXG5cXHRzcmM6IGxvY2FsKFxcXCJBcmlhbFxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIk5vcnNlXFxcIjtcXG5cXHRzcmM6IHVybChcXFwiLi4vZm9udHMvTm9yc2UtUi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXHRmb250LWRpc3BsYXk6IG9wdGlvbmFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIk5vcnNlXFxcIjtcXG5cXHRzcmM6IHVybChcXFwiLi4vZm9udHMvTm9yc2UtQi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC1kaXNwbGF5OiBvcHRpb25hbDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XCJtZW51XCJdIHtcblx0ZGlzcGxheTogZ3JpZDtcblxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoOHJlbSwgYXV0bykgMWZyO1xufVxuLmdyaWQtY29udGFpbmVyW2RhdGEtc3RhdHVzPVwibWVudVwiXSAjY29udGVudCB7XG5cdHotaW5kZXg6IDE7XG5cdGdyaWQtY29sdW1uOiAxIC8gMTtcblx0Z3JpZC1yb3c6IDEgLyAzO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRjb250YWluZXItbmFtZTogZHJpbmtzLWZvb2RzO1xuXHRjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XG59XG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XCJtZW51XCJdIC5tZW51LWhlYWRlciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRmbGV4LWJhc2lzOiAzMHJlbTtcblx0Y29sb3I6IHdoaXRlO1xuXHR6LWluZGV4OiAxO1xuXHQvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL291ci1tZW51LmpwZyk7ICovXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHQmIGgxIHtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gNHJlbSk7XG5cblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cdCY6OmJlZm9yZSB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0aW5zZXQ6IDA7XG5cdFx0YmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1kZWZhdWx0LWJhY2tkcm9wKTtcblx0XHRhbmltYXRpb246IGZhZGVJbiAwLjhzO1xuXHR9XG59XG4ubWVudS1jb250YWluZXIge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4cmVtLCAxZnIpKTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuXHRjb2x1bW4tZ2FwOiA4cmVtO1xuXHRtYXJnaW4tdG9wOiA4cmVtO1xuXHRwYWRkaW5nOiAwIDRyZW07XG5cdHdpZHRoOiBtaW4oMTAwJSwgODByZW0pO1xuXG5cdCYgLm1lbnUtZHJpbmtzIHtcblx0XHQvKiBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7ICovXG5cdH1cblx0JiAubWVudS1mb29kcyB7XG5cdFx0LyoganVzdGlmeS1zZWxmOiBmbGV4LWVuZDsgKi9cblx0fVxufVxuXG4ubWVudS1kcmlua3MsXG4ubWVudS1mb29kcyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0LyogbWF4LXdpZHRoOiAzMHJlbTsgKi9cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWluLXdpZHRoOiAzMHJlbTtcblx0cm93LWdhcDogMnJlbTtcblx0Jjo6YmVmb3JlIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHQvKiB3aWR0aDogMXB4OyAqL1xuXHRcdGhlaWdodDogMTAwJTtcblxuXHRcdGxlZnQ6IDM3cmVtO1xuXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2M4YzRjNTtcblx0fVxuXHQmOjphZnRlciB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Lyogd2lkdGg6IDFweDsgKi9cblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bGVmdDogLTRyZW07XG5cblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjNGM1O1xuXHR9XG59XG5cbi5tZW51LWRyaW5rcy1oZWFkZXIsXG4ubWVudS1mb29kcy1oZWFkZXIsXG4uZnVsbC1oZWFkZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAwLjdyZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0JiBoNiB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0Y29sb3I6IHJnYigxOTcsIDE1MSwgMTAwKTtcblx0XHQmOjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwYjU1MTtcblxuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMC4xKSB0cmFuc2xhdGVYKGNhbGMoNTAlICsgMjRweCkpO1xuXHRcdFx0XG5cdFx0fVxuXHRcdCY6OmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGI1NTE7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjUsIDAuMSkgdHJhbnNsYXRlWChjYWxjKC01MCUgKyAtMjRweCkpO1xuXHRcdH1cblx0fVxuXHRcbn1cbi5kcmluayxcbi5mb29kIHtcblx0ZGlzcGxheTogZmxleDtcblxuXHRtYXgtaGVpZ2h0OiA2cmVtO1xuXG5cdGdhcDogY2xhbXAoMC41cmVtLCAxdncsIDJyZW0pO1xuXHRmb250LXNpemU6IDEuOHJlbTtcbn1cbi5kcmluay10ZXh0LWNvbnRhaW5lcixcbi5mb29kLXRleHQtY29udGFpbmVyIHtcblx0bWFyZ2luLXRvcDogMC43cmVtO1xuXHRtYXJnaW4tYm90dG9tOiAwLjdyZW07XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWluLXdpZHRoOiAwO1xuXHRmbGV4LWJhc2lzOiA2MCU7XG5cdGZsZXgtZ3JvdzogMDtcblx0ZmxleC1zaHJpbms6IDA7XG5cdCYgLmRyaW5rLW5hbWUsXG5cdC5mb29kLW5hbWUge1xuXHRcdGZvbnQtZmFtaWx5OiBzZXJpZjtcblx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdHRleHQtd3JhcDogbm93cmFwO1xuXHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdFx0ZmxleC1zaHJpbms6IDA7XG5cdH1cblx0JiAuZHJpbmstaW5mbyxcblx0LmZvb2QtaW5mbyB7XG5cdFx0d2hpdGUtc3BhY2U6IHdyYXA7XG5cdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0Y29sb3I6ICMzNjM2MzY7XG5cdFx0b3BhY2l0eTogMC42O1xuXHRcdGZvbnQtc2l6ZTogMC41NWVtO1xuXHRcdG1heC1oZWlnaHQ6IDEuNDg1cmVtO1xuXHR9XG59XG4uZHJpbmstaW1nLFxuLmZvb2QtaW1nIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtaW4td2lkdGg6IDNyZW07XG5cblx0ZmxleC1iYXNpczogbWF4LWNvbnRlbnQ7XG5cdGZsZXgtc2hyaW5rOiAxO1xufVxuLmRyaW5rLWltZyBpbWcsXG4uZm9vZC1pbWcgaW1nIHtcblx0bWF4LWhlaWdodDogMTAwJTtcblx0bWF4LXdpZHRoOiAxMDAlO1xufVxuLmRyaW5rLXByaWNlLFxuLmZvb2QtcHJpY2Uge1xuXHRtYXJnaW4tdG9wOiAwLjdyZW07XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRmb250LWZhbWlseTogTm9yc2U7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXHRmb250LXNpemU6IDAuOGVtO1xufVxuLmZ1bGwtaGVhZGVyIHtcblx0Y29sb3I6IHJnYigxOTcsIDE1MSwgMTAwKTtcblx0JiBoMSB7XG5cdFx0Zm9udC1zaXplOiA0cmVtO1xuXHR9XG59XG4ubWVudS1mdWxsIHtcblx0bWFyZ2luLXRvcDogOHJlbTtcblx0d2lkdGg6IG1pbigxMDAlLCA4MHJlbSk7XG5cdHBhZGRpbmc6IDAgNHJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0cm93LWdhcDogMnJlbTtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogOHJlbTtcbn1cbi5mdWxsLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Y29sdW1uLWdhcDogMS41cmVtO1xuXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0cm93LWdhcDogM3JlbTtcblx0JiA6bnRoLWNoaWxkKDUpIHtcblx0XHRmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcblx0fVxufVxuLmZ1bGwtaXRlbSB7XG5cdGZsZXgtYmFzaXM6IDMwJTtcblx0cm93LWdhcDogMXJlbTtcblxuXHRmbGV4LWdyb3c6IDE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRtaW4td2lkdGg6IDIwcmVtO1xufVxuLmZ1bGwtdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGNvbHVtbi1nYXA6IDFyZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCYgLmZ1bGwtbmFtZSB7XG5cdFx0ZmxleC1ncm93OiAxO1xuXHRcdGZsZXgtc2hyaW5rOiAxO1xuXHRcdGZvbnQtZmFtaWx5OiBzZXJpZjtcblx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cblx0XHRvdmVyZmxvdy15OiBhdXRvO1xuXHR9XG5cdCYgLmZ1bGwtcHJpY2Uge1xuXHRcdGZsZXgtYmFzaXM6IG1pbi1jb250ZW50O1xuXHRcdGZsZXgtc2hyaW5rOiAwO1xuXHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0Zm9udC1mYW1pbHk6IE5vcnNlO1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR9XG59XG4uZnVsbC1pbmZvIHtcblx0Y29sb3I6ICMzNjM2MzY7XG5cdG9wYWNpdHk6IDAuNjtcblx0Zm9udC1zaXplOiAwLjZlbTtcblx0aGVpZ2h0OiA0Ljg2cmVtO1xuXHRvdmVyZmxvdzogYXV0bztcbn1cbi5mdWxsLWltZyB7XG5cdHdpZHRoOiAxMDAlO1xufVxuLmZ1bGwtaW1nIGltZyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRhc3BlY3QtcmF0aW86IDEuNTtcblx0b2JqZWN0LWZpdDogY292ZXI7XG59XG5AY29udGFpbmVyIGRyaW5rcy1mb29kcyAobWF4LXdpZHRoOiA3MnJlbSkge1xuXHQuZHJpbmssXG5cdC5mb29kIHtcblx0XHRmb250LXNpemU6IDEuOHJlbTtcblx0XHQmIC5kcmluay1pbmZve1xuXHRcdFx0Zm9udC1zaXplOiAwLjUwZW07XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdH1cblx0fVxuXHRcblx0LmZ1bGwtaXRlbSB7XG5cdFx0Zm9udC1zaXplOiAxLjZyZW07XG5cdH1cblx0Lm1lbnUtZm9vZHMge1xuXHRcdG1hcmdpbi10b3A6IDhyZW07XG5cdH1cblx0XG5cdC5tZW51LWZ1bGx7XG5cdFx0d2lkdGg6IG1pbigxMDAlLCA4MHJlbSk7XG5cdH1cblx0Lm1lbnUtY29udGFpbmVyIC5tZW51LWZvb2RzIHtcblx0XHRtYXJnaW4tdG9wOiA4cmVtO1xuXHR9XG5cdFxuXHQubWVudS1jb250YWluZXIge1xuXHRcdFxuXHRcdHdpZHRoOiBtaW4oMTAwJSwgODByZW0pO1xuXHR9XG59XG5AY29udGFpbmVyIGRyaW5rcy1mb29kcyAobWF4LXdpZHRoOiAzOHJlbSkge1xuXHQuZHJpbmssXG5cdC5mb29kIHtcblx0XHRmb250LXNpemU6IDEuNnJlbTtcblx0XHQmIC5kcmluay1pbmZve1xuXHRcdFx0bWF4LWhlaWdodDogMi42NHJlbTtcblx0XHR9XG5cdH1cblx0Lm1lbnUtY29udGFpbmVyIHtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE2cmVtLCAxZnIpKTtcblx0XHRwYWRkaW5nOiAwIDFyZW07XG5cdH1cblx0LmRyaW5rLWltZywgLmZvb2QtaW1ne1xuXHRcdG1pbi13aWR0aDogMnJlbTtcblx0fVxuXHQubWVudS1jb250YWluZXIgLm1lbnUtZHJpbmtzLC5tZW51LWNvbnRhaW5lciAubWVudS1mb29kc3tcblx0XHRtaW4td2lkdGg6IDE2cmVtO1xuXHR9XG5cdC5mdWxsLWl0ZW17XG5cdFx0bWluLXdpZHRoOiAxNnJlbTtcblx0XHRmb250LXNpemU6IDEuM3JlbTtcblx0fVxuXHQubWVudS1mdWxse1xuXHRcdHBhZGRpbmc6IDAgMXJlbTtcblx0fVxuXHQuZnVsbC1pbmZve1xuXHRcdGhlaWdodDogMi4zNHJlbTtcblx0fVxufVxuQGNvbnRhaW5lciBkcmlua3MtZm9vZHMgKG1heC13aWR0aDogMjRyZW0pIHsuZHJpbmssXG5cdC5mb29kIHtcblx0XHRmb250LXNpemU6IDEuNHJlbTtcblx0XHQmIC5kcmluay1pbmZve1xuXHRcdFx0bWF4LWhlaWdodDogMi4zMXJlbTtcblx0XHR9XG5cdH19XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxhQUFhOztDQUViLDBCQUEwQjtDQUMxQiwwQ0FBMEM7QUFDM0M7QUFDQTtDQUNDLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLDRCQUE0QjtDQUM1QiwyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLGtCQUFrQjs7Q0FFbEIsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixVQUFVO0NBQ1Ys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Q2hCLG1CQUFtQjtDQUNuQjtFQUNDLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7O0VBRW5CLGdCQUFnQjtDQUNqQjtDQUNBO0VBQ0MsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtDQUNsQjtBQUNEO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsY0FBYztBQUNmO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQzs7RUFFQyxpQkFBaUI7RUFDakI7R0FDQyxpQkFBaUI7R0FDakIsZ0JBQWdCO0VBQ2pCO0NBQ0Q7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0MsZ0JBQWdCO0NBQ2pCOztDQUVBOztFQUVDLHVCQUF1QjtDQUN4QjtBQUNEO0FBQ0E7Q0FDQzs7RUFFQyxpQkFBaUI7RUFDakI7R0FDQyxtQkFBbUI7RUFDcEI7Q0FDRDtDQUNBO0VBQ0MsMkRBQTJEO0VBQzNELGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjtDQUNBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtBQUNEO0FBQ0EsNENBQTRDOztFQUUxQyxpQkFBaUI7RUFDakI7R0FDQyxtQkFBbUI7RUFDcEI7Q0FDRCxDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ncmlkLWNvbnRhaW5lcltkYXRhLXN0YXR1cz1cXFwibWVudVxcXCJdIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDhyZW0sIGF1dG8pIDFmcjtcXG59XFxuLmdyaWQtY29udGFpbmVyW2RhdGEtc3RhdHVzPVxcXCJtZW51XFxcIl0gI2NvbnRlbnQge1xcblxcdHotaW5kZXg6IDE7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAxO1xcblxcdGdyaWQtcm93OiAxIC8gMztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRjb250YWluZXItbmFtZTogZHJpbmtzLWZvb2RzO1xcblxcdGNvbnRhaW5lci10eXBlOiBpbmxpbmUtc2l6ZTtcXG59XFxuLmdyaWQtY29udGFpbmVyW2RhdGEtc3RhdHVzPVxcXCJtZW51XFxcIl0gLm1lbnUtaGVhZGVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuXFx0ZmxleC1iYXNpczogMzByZW07XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0LyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9vdXItbWVudS5qcGcpOyAqL1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblxcdGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuXFx0JiBoMSB7XFxuXFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDRyZW0pO1xcblxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcblxcdCY6OmJlZm9yZSB7XFxuXFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGluc2V0OiAwO1xcblxcdFxcdGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tZGVmYXVsdC1iYWNrZHJvcCk7XFxuXFx0XFx0YW5pbWF0aW9uOiBmYWRlSW4gMC44cztcXG5cXHR9XFxufVxcbi5tZW51LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4cmVtLCAxZnIpKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuXFx0Y29sdW1uLWdhcDogOHJlbTtcXG5cXHRtYXJnaW4tdG9wOiA4cmVtO1xcblxcdHBhZGRpbmc6IDAgNHJlbTtcXG5cXHR3aWR0aDogbWluKDEwMCUsIDgwcmVtKTtcXG5cXG5cXHQmIC5tZW51LWRyaW5rcyB7XFxuXFx0XFx0LyoganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0OyAqL1xcblxcdH1cXG5cXHQmIC5tZW51LWZvb2RzIHtcXG5cXHRcXHQvKiBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kOyAqL1xcblxcdH1cXG59XFxuXFxuLm1lbnUtZHJpbmtzLFxcbi5tZW51LWZvb2RzIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0LyogbWF4LXdpZHRoOiAzMHJlbTsgKi9cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWluLXdpZHRoOiAzMHJlbTtcXG5cXHRyb3ctZ2FwOiAycmVtO1xcblxcdCY6OmJlZm9yZSB7XFxuXFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdC8qIHdpZHRoOiAxcHg7ICovXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcblxcdFxcdGxlZnQ6IDM3cmVtO1xcblxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNjOGM0YzU7XFxuXFx0fVxcblxcdCY6OmFmdGVyIHtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0Lyogd2lkdGg6IDFweDsgKi9cXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0bGVmdDogLTRyZW07XFxuXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2M4YzRjNTtcXG5cXHR9XFxufVxcblxcbi5tZW51LWRyaW5rcy1oZWFkZXIsXFxuLm1lbnUtZm9vZHMtaGVhZGVyLFxcbi5mdWxsLWhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC43cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHQmIGg2IHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRcXHRjb2xvcjogcmdiKDE5NywgMTUxLCAxMDApO1xcblxcdFxcdCY6OmJlZm9yZSB7XFxuXFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmMGI1NTE7XFxuXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS41LCAwLjEpIHRyYW5zbGF0ZVgoY2FsYyg1MCUgKyAyNHB4KSk7XFxuXFx0XFx0XFx0XFxuXFx0XFx0fVxcblxcdFxcdCY6OmFmdGVyIHtcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2YwYjU1MTtcXG5cXHRcXHRcXHRyaWdodDogMDtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjUsIDAuMSkgdHJhbnNsYXRlWChjYWxjKC01MCUgKyAtMjRweCkpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0XFxufVxcbi5kcmluayxcXG4uZm9vZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHRtYXgtaGVpZ2h0OiA2cmVtO1xcblxcblxcdGdhcDogY2xhbXAoMC41cmVtLCAxdncsIDJyZW0pO1xcblxcdGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG4uZHJpbmstdGV4dC1jb250YWluZXIsXFxuLmZvb2QtdGV4dC1jb250YWluZXIge1xcblxcdG1hcmdpbi10b3A6IDAuN3JlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtaW4td2lkdGg6IDA7XFxuXFx0ZmxleC1iYXNpczogNjAlO1xcblxcdGZsZXgtZ3JvdzogMDtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHQmIC5kcmluay1uYW1lLFxcblxcdC5mb29kLW5hbWUge1xcblxcdFxcdGZvbnQtZmFtaWx5OiBzZXJpZjtcXG5cXHRcXHRmb250LXNpemU6IDAuOGVtO1xcblxcdFxcdHRleHQtd3JhcDogbm93cmFwO1xcblxcdFxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0XFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0fVxcblxcdCYgLmRyaW5rLWluZm8sXFxuXFx0LmZvb2QtaW5mbyB7XFxuXFx0XFx0d2hpdGUtc3BhY2U6IHdyYXA7XFxuXFx0XFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0XFx0Y29sb3I6ICMzNjM2MzY7XFxuXFx0XFx0b3BhY2l0eTogMC42O1xcblxcdFxcdGZvbnQtc2l6ZTogMC41NWVtO1xcblxcdFxcdG1heC1oZWlnaHQ6IDEuNDg1cmVtO1xcblxcdH1cXG59XFxuLmRyaW5rLWltZyxcXG4uZm9vZC1pbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWluLXdpZHRoOiAzcmVtO1xcblxcblxcdGZsZXgtYmFzaXM6IG1heC1jb250ZW50O1xcblxcdGZsZXgtc2hyaW5rOiAxO1xcbn1cXG4uZHJpbmstaW1nIGltZyxcXG4uZm9vZC1pbWcgaW1nIHtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG59XFxuLmRyaW5rLXByaWNlLFxcbi5mb29kLXByaWNlIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjdyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0Zm9udC1mYW1pbHk6IE5vcnNlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG59XFxuLmZ1bGwtaGVhZGVyIHtcXG5cXHRjb2xvcjogcmdiKDE5NywgMTUxLCAxMDApO1xcblxcdCYgaDEge1xcblxcdFxcdGZvbnQtc2l6ZTogNHJlbTtcXG5cXHR9XFxufVxcbi5tZW51LWZ1bGwge1xcblxcdG1hcmdpbi10b3A6IDhyZW07XFxuXFx0d2lkdGg6IG1pbigxMDAlLCA4MHJlbSk7XFxuXFx0cGFkZGluZzogMCA0cmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cm93LWdhcDogMnJlbTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1hcmdpbi1ib3R0b206IDhyZW07XFxufVxcbi5mdWxsLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Y29sdW1uLWdhcDogMS41cmVtO1xcblxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRyb3ctZ2FwOiAzcmVtO1xcblxcdCYgOm50aC1jaGlsZCg1KSB7XFxuXFx0XFx0ZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxuXFx0fVxcbn1cXG4uZnVsbC1pdGVtIHtcXG5cXHRmbGV4LWJhc2lzOiAzMCU7XFxuXFx0cm93LWdhcDogMXJlbTtcXG5cXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1pbi13aWR0aDogMjByZW07XFxufVxcbi5mdWxsLXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRjb2x1bW4tZ2FwOiAxcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0JiAuZnVsbC1uYW1lIHtcXG5cXHRcXHRmbGV4LWdyb3c6IDE7XFxuXFx0XFx0ZmxleC1zaHJpbms6IDE7XFxuXFx0XFx0Zm9udC1mYW1pbHk6IHNlcmlmO1xcblxcdFxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXG5cXHRcXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdH1cXG5cXHQmIC5mdWxsLXByaWNlIHtcXG5cXHRcXHRmbGV4LWJhc2lzOiBtaW4tY29udGVudDtcXG5cXHRcXHRmbGV4LXNocmluazogMDtcXG5cXHRcXHRmb250LXNpemU6IDAuOGVtO1xcblxcdFxcdGZvbnQtZmFtaWx5OiBOb3JzZTtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR9XFxufVxcbi5mdWxsLWluZm8ge1xcblxcdGNvbG9yOiAjMzYzNjM2O1xcblxcdG9wYWNpdHk6IDAuNjtcXG5cXHRmb250LXNpemU6IDAuNmVtO1xcblxcdGhlaWdodDogNC44NnJlbTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuLmZ1bGwtaW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuLmZ1bGwtaW1nIGltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YXNwZWN0LXJhdGlvOiAxLjU7XFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxufVxcbkBjb250YWluZXIgZHJpbmtzLWZvb2RzIChtYXgtd2lkdGg6IDcycmVtKSB7XFxuXFx0LmRyaW5rLFxcblxcdC5mb29kIHtcXG5cXHRcXHRmb250LXNpemU6IDEuOHJlbTtcXG5cXHRcXHQmIC5kcmluay1pbmZve1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMC41MGVtO1xcblxcdFxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRcXG5cXHQuZnVsbC1pdGVtIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHR9XFxuXFx0Lm1lbnUtZm9vZHMge1xcblxcdFxcdG1hcmdpbi10b3A6IDhyZW07XFxuXFx0fVxcblxcdFxcblxcdC5tZW51LWZ1bGx7XFxuXFx0XFx0d2lkdGg6IG1pbigxMDAlLCA4MHJlbSk7XFxuXFx0fVxcblxcdC5tZW51LWNvbnRhaW5lciAubWVudS1mb29kcyB7XFxuXFx0XFx0bWFyZ2luLXRvcDogOHJlbTtcXG5cXHR9XFxuXFx0XFxuXFx0Lm1lbnUtY29udGFpbmVyIHtcXG5cXHRcXHRcXG5cXHRcXHR3aWR0aDogbWluKDEwMCUsIDgwcmVtKTtcXG5cXHR9XFxufVxcbkBjb250YWluZXIgZHJpbmtzLWZvb2RzIChtYXgtd2lkdGg6IDM4cmVtKSB7XFxuXFx0LmRyaW5rLFxcblxcdC5mb29kIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRcXHQmIC5kcmluay1pbmZve1xcblxcdFxcdFxcdG1heC1oZWlnaHQ6IDIuNjRyZW07XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQubWVudS1jb250YWluZXIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTZyZW0sIDFmcikpO1xcblxcdFxcdHBhZGRpbmc6IDAgMXJlbTtcXG5cXHR9XFxuXFx0LmRyaW5rLWltZywgLmZvb2QtaW1ne1xcblxcdFxcdG1pbi13aWR0aDogMnJlbTtcXG5cXHR9XFxuXFx0Lm1lbnUtY29udGFpbmVyIC5tZW51LWRyaW5rcywubWVudS1jb250YWluZXIgLm1lbnUtZm9vZHN7XFxuXFx0XFx0bWluLXdpZHRoOiAxNnJlbTtcXG5cXHR9XFxuXFx0LmZ1bGwtaXRlbXtcXG5cXHRcXHRtaW4td2lkdGg6IDE2cmVtO1xcblxcdFxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdH1cXG5cXHQubWVudS1mdWxse1xcblxcdFxcdHBhZGRpbmc6IDAgMXJlbTtcXG5cXHR9XFxuXFx0LmZ1bGwtaW5mb3tcXG5cXHRcXHRoZWlnaHQ6IDIuMzRyZW07XFxuXFx0fVxcbn1cXG5AY29udGFpbmVyIGRyaW5rcy1mb29kcyAobWF4LXdpZHRoOiAyNHJlbSkgey5kcmluayxcXG5cXHQuZm9vZCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjRyZW07XFxuXFx0XFx0JiAuZHJpbmstaW5mb3tcXG5cXHRcXHRcXHRtYXgtaGVpZ2h0OiAyLjMxcmVtO1xcblxcdFxcdH1cXG5cXHR9fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuXHQtLXNoYWRvdy1jb2xvcjogMCAwJSA0MCU7XG5cdC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW06IDBweCAwLjRweCAwLjNweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNCksXG5cdFx0MHB4IDEuNXB4IDEuMXB4IC0yLjVweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuOTcpLFxuXHRcdC0wLjJweCA5LjJweCA2LjlweCAtNXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40OSk7XG5cdGZvbnQtc2l6ZTogY2FsYygwLjg3NXJlbSArICgxIC0gMC44NzUpICogKCgxMDB2dyAtIDI1cmVtKSAvICgxMjAgLSAyNSkpKTtcblxuXHQtLWZvbnQtc2l6ZS14czogMC42cmVtO1xuXHQtLWZvbnQtc2l6ZS1zbTogMC44cmVtO1xuXHQtLWZvbnQtc2l6ZS1tZDogMXJlbTtcblx0LS1mb250LXNpemUtbGc6IDEuMXJlbTtcblx0LS1mb250LXNpemUteGw6IDEuM3JlbTtcblx0LS1mb250LXNpemUtcmVzcG9uc2l2ZTogY2xhbXAoMC44cmVtLCAxLjZ2dywgMS4ycmVtKTtcblx0LS1wYWRkaW5nLW1haW46IDAuNXJlbSBjbGFtcCgwLjVyZW0sIDEuNXZ3LCAzcmVtKTtcblx0LS1nYXAtbWFpbjogY2xhbXAoMC41cmVtLCAxdncsIDEuNXJlbSk7XG5cdC0tY2FyZC13aWR0aDogMzhyZW07XG5cdC0tc2Vjb25kLWNvbG9yOiNmMGI1NTE7XG5cdC0tZGVmYXVsdC1iYWNrZHJvcDpibHVyKDNweCkgYnJpZ2h0bmVzcyg3NSUpIHNlcGlhKDMlKTtcbn1cbmhyIHtcblx0Ym9yZGVyOiBub25lO1xuXHRoZWlnaHQ6IDJweDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHRtYXJnaW46IDEwcHggMDtcbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuXHRtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMS41O1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0Zm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgXCJJbnRlci1mYWxsYmFjay1saW51eFwiLCBcIkludGVyLWZhbGxiYWNrXCIsIHNhbnMtc2VyaWY7XG59XG4uYm9sZCB7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uaXRhbGljIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuaW1nLFxucGljdHVyZSxcbnZpZGVvLFxuY2FudmFzLFxuc3ZnIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG5cdGZvbnQ6IGluaGVyaXQ7XG59XG5cbnAsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXHRvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxucCB7XG5cdHRleHQtd3JhcDogd3JhcDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcblx0dGV4dC13cmFwOiBiYWxhbmNlO1xufVxuXG4jcm9vdCxcbiNfX25leHQge1xuXHRpc29sYXRpb246IGlzb2xhdGU7XG59XG5cbmgxIHtcblx0Zm9udC1zaXplOiAyLjk4NnJlbTtcbn1cbmgyIHtcblx0Zm9udC1zaXplOiAyLjQ4OHJlbTtcbn1cbmgzIHtcblx0Zm9udC1zaXplOiAyLjA3NHJlbTtcbn1cbmg0IHtcblx0Zm9udC1zaXplOiAxLjcyOHJlbTtcbn1cbmg1IHtcblx0Zm9udC1zaXplOiAxLjQ0cmVtO1xufVxuaDYge1xuXHRmb250LXNpemU6IDEuMnJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyx3QkFBd0I7Q0FDeEI7O3lEQUV3RDtDQUN4RCx3RUFBd0U7O0NBRXhFLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsb0RBQW9EO0NBQ3BELGlEQUFpRDtDQUNqRCxzQ0FBc0M7Q0FDdEMsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixzREFBc0Q7QUFDdkQ7QUFDQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsb0NBQW9DO0NBQ3BDLGNBQWM7QUFDZjtBQUNBOzs7Q0FHQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUNBQW1DO0NBQ25DLDBFQUEwRTtBQUMzRTtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTs7Ozs7Q0FLQyxjQUFjO0NBQ2QsZUFBZTtBQUNoQjs7QUFFQTs7OztDQUlDLGFBQWE7QUFDZDs7QUFFQTs7Ozs7OztDQU9DLHlCQUF5QjtDQUN6Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBOzs7Ozs7Q0FNQyxrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFx0LS1zaGFkb3ctY29sb3I6IDAgMCUgNDAlO1xcblxcdC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW06IDBweCAwLjRweCAwLjNweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNCksXFxuXFx0XFx0MHB4IDEuNXB4IDEuMXB4IC0yLjVweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuOTcpLFxcblxcdFxcdC0wLjJweCA5LjJweCA2LjlweCAtNXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40OSk7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuODc1cmVtICsgKDEgLSAwLjg3NSkgKiAoKDEwMHZ3IC0gMjVyZW0pIC8gKDEyMCAtIDI1KSkpO1xcblxcblxcdC0tZm9udC1zaXplLXhzOiAwLjZyZW07XFxuXFx0LS1mb250LXNpemUtc206IDAuOHJlbTtcXG5cXHQtLWZvbnQtc2l6ZS1tZDogMXJlbTtcXG5cXHQtLWZvbnQtc2l6ZS1sZzogMS4xcmVtO1xcblxcdC0tZm9udC1zaXplLXhsOiAxLjNyZW07XFxuXFx0LS1mb250LXNpemUtcmVzcG9uc2l2ZTogY2xhbXAoMC44cmVtLCAxLjZ2dywgMS4ycmVtKTtcXG5cXHQtLXBhZGRpbmctbWFpbjogMC41cmVtIGNsYW1wKDAuNXJlbSwgMS41dncsIDNyZW0pO1xcblxcdC0tZ2FwLW1haW46IGNsYW1wKDAuNXJlbSwgMXZ3LCAxLjVyZW0pO1xcblxcdC0tY2FyZC13aWR0aDogMzhyZW07XFxuXFx0LS1zZWNvbmQtY29sb3I6I2YwYjU1MTtcXG5cXHQtLWRlZmF1bHQtYmFja2Ryb3A6Ymx1cigzcHgpIGJyaWdodG5lc3MoNzUlKSBzZXBpYSgzJSk7XFxufVxcbmhyIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0aGVpZ2h0OiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcblxcdG1hcmdpbjogMTBweCAwO1xcbn1cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBcXFwiSW50ZXItZmFsbGJhY2stbGludXhcXFwiLCBcXFwiSW50ZXItZmFsbGJhY2tcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4uYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLml0YWxpYyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcblxcdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFx0b3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbnAge1xcblxcdHRleHQtd3JhcDogd3JhcDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcblxcdHRleHQtd3JhcDogYmFsYW5jZTtcXG59XFxuXFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuXFx0aXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjk4NnJlbTtcXG59XFxuaDIge1xcblxcdGZvbnQtc2l6ZTogMi40ODhyZW07XFxufVxcbmgzIHtcXG5cXHRmb250LXNpemU6IDIuMDc0cmVtO1xcbn1cXG5oNCB7XFxuXFx0Zm9udC1zaXplOiAxLjcyOHJlbTtcXG59XFxuaDUge1xcblxcdGZvbnQtc2l6ZTogMS40NHJlbTtcXG59XFxuaDYge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuXHQvKiBvdXRsaW5lOiAxcHggc29saWQgQkxBQ0s7ICovXG59XG5odG1sIHtcbn1cbmJvZHkge1xuXHR0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblx0XG59XG5oMSB7XG5cdGZvbnQtZmFtaWx5OiBzZXJpZjtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmdyaWQtY29udGFpbmVyW2RhdGEtc3RhdHVzPVwiaG9tZVwiXSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWluLWhlaWdodDogMTAwc3ZoO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoOHJlbSwgYXV0bykgMWZyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cblx0LyogYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgKi9cblx0Jjo6YmVmb3JlIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRpbnNldDogMDtcblx0XHRiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoNTAlKSBjb250cmFzdCgxMzAlKTtcblx0XHRhbmltYXRpb246IGZhZGVJbkhlcm8gMC44cztcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG1hcmdpbjogMDtcblx0fVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuXHQwJSB7XG5cdFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygwJSkgc2VwaWEoMCUpO1xuXHR9XG5cdDEwMCUge1xuXHRcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpIGJyaWdodG5lc3MoNzUlKSBzZXBpYSgzJSk7XG5cdH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluSGVybyB7XG5cdDAlIHtcblx0XHRiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xuXHR9XG5cdDEwMCUge1xuXHRcdGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpIGNvbnRyYXN0KDEzMCUpO1xuXHR9XG59XG5cbi5oZWFkZXIge1xuXHRncmlkLWNvbHVtbjogMS8xO1xuXHRncmlkLXJvdzogMS8gMjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0LyogYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1kZWZhdWx0LWJhY2tkcm9wKTsgKi9cblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdHBhZGRpbmc6IDFyZW07XG5cdHotaW5kZXg6IDI7XG5cblx0JiAubmF2LW1lbnUgYnV0dG9uIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdH1cbn1cbi5yZXNlcnZhdGlvbiB7XG5cdGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuXHRib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuXHRtYXJnaW46IDA7XG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cbi5yZXNlcnZhdGlvbi1jb250YWluZXIge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdG1hcmdpbi10b3A6IDFyZW07XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcblx0Jjpob3ZlciB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdHRyYW5zaXRpb246IHRyYW5zbGF0ZSAwLjRzO1xuXHR9XG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5yZXNlcnZhdGlvbjo6YWZ0ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMnB4O1xuXHRyaWdodDogMnB4O1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XG5cdGhlaWdodDogY2FsYygxMDAlIC0gNHB4KTtcblx0Y29udGVudDogXCJcIjtcblxuXHR0b3VjaC1hY3Rpb246IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xuXG5cdG9wYWNpdHk6IDA7XG59XG4vKiAucmVzZXJ2YXRpb246aG92ZXI6OmFmdGVyIHtcblx0b3BhY2l0eTogMTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xufSAqL1xuLnJlc2VydmF0aW9uOmFjdGl2ZTo6YWZ0ZXIge1xuXHRvcGFjaXR5OiAxO1xuXHR0b3VjaC1hY3Rpb246IG5vbmU7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcblx0aGVpZ2h0OiAzcmVtO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtc2hyaW5rOiAwO1xufVxuLmxvZ28ge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1heC1oZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiBtYXgtY29udGVudDtcblx0aGVpZ2h0OiAxMDAlO1xufVxuLm5hdi1tZW51IHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiBjbGFtcCgycmVtLCA4dncsIDRyZW0pO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdHBhZGRpbmctcmlnaHQ6IDZyZW07XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XCJob21lXCJdICNjb250ZW50IHtcblx0ei1pbmRleDogMTtcblx0Z3JpZC1jb2x1bW46IDEgLyAxO1xuXHRncmlkLXJvdzogMiAvIDM7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC8qIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tZGVmYXVsdC1iYWNrZHJvcCk7ICovXG59XG5cbi5oZXJvLWFsaWduLWNvbnRhaW5lciB7XG5cdHotaW5kZXg6IDE7XG5cdGhlaWdodDogNzAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4LWdyb3c6IDE7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlcm8tY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDJlbTtcblx0bWluLWhlaWdodDogMDtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuXHRwYWRkaW5nOiAxcmVtO1xuXG5cdGdhcDogMXZ3O1xuXHQmIC5oZXJvLXRleHQtMSB7XG5cdFx0Y29sb3I6ICNmMGI1NTE7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBiNTUxO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblxuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLCAwLjEpIHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgMjRweCkpO1xuXHRcdH1cblx0XHQmOjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBiNTUxO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLCAwLjEpIHRyYW5zbGF0ZVgoY2FsYygtMTAwJSArIC0yNHB4KSk7XG5cdFx0fVxuXHR9XG59XG5mb290ZXIge1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwOTA4MGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb3Rlci1jb250YWluZXIge1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBhZGRpbmc6IDZyZW0gNHJlbTtcblx0d2lkdGg6IG1pbigxMDAlLCAxMDByZW0pO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdHJvdy1nYXA6IDZyZW07XG5cdGNvbHVtbi1nYXA6IDZyZW07XG5cdGZvbnQtc2l6ZTogMC45cmVtO1xuXHQmID4gZGl2IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0aGVpZ2h0OiAxMnJlbTtcblx0XHRmbGV4LWJhc2lzOiAxOHJlbTtcblx0XHRmbGV4LWdyb3c6IDEuNTtcblx0XHRtaW4td2lkdGg6IDE4cmVtO1xuXG5cdFx0JjpudGgtY2hpbGQoMiksXG5cdFx0JjpudGgtY2hpbGQoMykge1xuXHRcdFx0ZmxleC1iYXNpczogMTRyZW07XG5cdFx0XHRmbGV4LWdyb3c6IDE7XG5cdFx0XHRtaW4td2lkdGg6IDE0cmVtO1xuXHRcdH1cblx0fVxufVxuLmZvb3Rlci10ZXh0LWNvbnRhaW5lciB7XG5cdCYgLmZvb3Rlci10ZXh0LWhlYWRlciBoMiB7XG5cdFx0Zm9udC1mYW1pbHk6IG5vcnNlO1xuXHR9XG5cdCYgLmZvb3Rlci10ZXh0IHtcblx0fVxuXHQmIC5mb290ZXItaWNvbnMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0aGVpZ2h0OiAyLjdyZW07XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGNvbHVtbi1nYXA6IDFyZW07XG5cdFx0bWFyZ2luLXRvcDogYXV0bztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdCYgaW1nIHtcblx0XHRcdG1heC1oZWlnaHQ6IDEwMCU7XG5cdFx0fVxuXHRcdCYgaW1nOmhvdmVyIHtcblx0XHRcdGZpbHRlcjogaW52ZXJ0KDQwJSkgc2VwaWEoOTclKSBzYXR1cmF0ZSgzODIxJSkgaHVlLXJvdGF0ZSgxM2RlZykgYnJpZ2h0bmVzcyg5OSUpXG5cdFx0XHRcdGNvbnRyYXN0KDk4JSk7XG5cdFx0fVxuXHR9XG59XG4uZm9vdGVyLWhvdXJzLWNvbnRhaW5lciB7XG5cdCYgLmZvb3Rlci1ob3Vycy1oZWFkZXIgaDUge1xuXHRcdGhlaWdodDogMy43MzJyZW07XG5cdH1cblx0JiAucm93IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHQmIC5mb290ZXItaG91cnMtdGV4dCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0ZmxleC1ncm93OiAxO1xuXHRcdGdhcDogMC41cmVtO1xuXHRcdCYgPiA6bGFzdC1jaGlsZCB7XG5cdFx0XHRtYXJnaW4tdG9wOiBhdXRvO1xuXHRcdH1cblx0fVxufVxuLmZvb3Rlci1hZHJlc3MtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleC1ncm93OiAxO1xuXG5cdCYgPiBkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0Z2FwOiAxcmVtO1xuXHR9XG5cdCYgOm50aC1jaGlsZCgzKSxcblx0Om50aC1jaGlsZCg0KSB7XG5cdFx0bWFyZ2luLXRvcDogYXV0bztcblx0fVxuXHQmIC5mb290ZXItYWRyZXNzLWhlYWRlciBoNSB7XG5cdFx0aGVpZ2h0OiAzLjczMnJlbTtcblx0fVxuXHQmIGltZyB7XG5cdFx0bWF4LWhlaWdodDogMS4zNXJlbTtcblx0fVxuXHQmIC5mb290ZXItbG9jYXRpb24sXG5cdC5mb290ZXItdGVsLFxuXHQuZm9vdGVyLW1haWwge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQmIC5mb290ZXItbG9jYXRpb24gaW1nIHtcblx0XHRtYXJnaW4tdG9wOiBhdXRvO1xuXHRcdG1hcmdpbi1ib3R0b206IGF1dG87XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcycmVtKSB7XG5cdC5oZXJvLWNvbnRhaW5lciAuaGVyby10ZXh0LTEge1xuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHR3aWR0aDogNjAlO1xuXHRcdH1cblx0XHQmOjphZnRlciB7XG5cdFx0XHR3aWR0aDogNjAlO1xuXHRcdH1cblx0fVxuXHQuaGVyby10ZXh0LTEsXG5cdC5oZXJvLXRleHQtMyB7XG5cdFx0Zm9udC1zaXplOiAxLjU2cmVtO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXHQuaGVyby10ZXh0LTIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRmb250LXNpemU6IDMuODgxOHJlbTtcblx0fVxuXHQuaGVhZGVyIHtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0cm93LWdhcDogMXJlbTtcblx0XHRjb2x1bW4tZ2FwOiAycmVtO1xuXHR9XG5cdC5mb290ZXItdGV4dC1jb250YWluZXIgZGl2LmZvb3Rlci1pY29ucyB7XG5cdFx0aGVpZ2h0OiAyLjAyNXJlbTtcblx0fVxuXHQuZm9vdGVyLWNvbnRhaW5lciB7XG5cdFx0cGFkZGluZzogNnJlbSAycmVtO1xuXHR9XG5cdC5uYXYtbWVudSB7XG5cdH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNnJlbSkge1xuXHQubmF2LW1lbnUge1xuXHRcdHBhZGRpbmctcmlnaHQ6IDByZW07XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7Q0FDQywwQkFBMEI7O0FBRTNCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsMEJBQTBCO0NBQzFCLDBDQUEwQztDQUMxQyxzQkFBc0I7Q0FDdEIsMkJBQTJCOztDQUUzQixrQ0FBa0M7Q0FDbEM7RUFDQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwrQ0FBK0M7RUFDL0MsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixTQUFTO0NBQ1Y7QUFDRDtBQUNBO0NBQ0M7RUFDQyxtREFBbUQ7Q0FDcEQ7Q0FDQTtFQUNDLG9EQUFvRDtDQUNyRDtBQUNEO0FBQ0E7Q0FDQztFQUNDLCtCQUErQjtDQUNoQztDQUNBO0VBQ0MsK0NBQStDO0NBQ2hEO0FBQ0Q7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGFBQWE7Q0FDYixlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQiw4Q0FBOEM7Q0FDOUMsa0NBQWtDO0NBQ2xDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsVUFBVTs7Q0FFVjtFQUNDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQjtDQUNwQjtBQUNEO0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQiwyQkFBMkI7Q0FDM0I7RUFDQywyQkFBMkI7RUFDM0IsMEJBQTBCO0NBQzNCO0NBQ0EscUJBQXFCO0NBQ3JCLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLHdCQUF3QjtDQUN4QixXQUFXOztDQUVYLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQiwwQkFBMEI7O0NBRTFCLFVBQVU7QUFDWDtBQUNBOzs7R0FHRztBQUNIO0NBQ0MsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsY0FBYztBQUNmO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7QUFDQTtDQUNDLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsOENBQThDO0FBQy9DOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixjQUFjO0NBQ2QsYUFBYTs7Q0FFYixrQ0FBa0M7Q0FDbEMsYUFBYTs7Q0FFYixRQUFRO0NBQ1I7RUFDQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCO0dBQ0MsV0FBVztHQUNYLGtCQUFrQjs7R0FFbEIseUJBQXlCO0dBQ3pCLFFBQVE7R0FDUixXQUFXO0dBQ1gsWUFBWTs7R0FFWixzREFBc0Q7RUFDdkQ7RUFDQTtHQUNDLFdBQVc7R0FDWCxrQkFBa0I7O0dBRWxCLHlCQUF5QjtHQUN6QixPQUFPO0dBQ1AsV0FBVztHQUNYLFlBQVk7R0FDWix3REFBd0Q7RUFDekQ7Q0FDRDtBQUNEO0FBQ0E7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLDhCQUE4QjtDQUM5QixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakI7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjs7RUFFaEI7O0dBRUMsaUJBQWlCO0dBQ2pCLFlBQVk7R0FDWixnQkFBZ0I7RUFDakI7Q0FDRDtBQUNEO0FBQ0E7Q0FDQztFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0NBQ0E7Q0FDQTtFQUNDLGFBQWE7RUFDYixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CO0dBQ0MsZ0JBQWdCO0VBQ2pCO0VBQ0E7R0FDQztpQkFDYztFQUNmO0NBQ0Q7QUFDRDtBQUNBO0NBQ0M7RUFDQyxnQkFBZ0I7Q0FDakI7Q0FDQTtFQUNDLGFBQWE7RUFDYiw4QkFBOEI7Q0FDL0I7Q0FDQTtFQUNDLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLFlBQVk7RUFDWixXQUFXO0VBQ1g7R0FDQyxnQkFBZ0I7RUFDakI7Q0FDRDtBQUNEO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFlBQVk7O0NBRVo7RUFDQyxhQUFhO0VBQ2IsU0FBUztDQUNWO0NBQ0E7O0VBRUMsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7Q0FDQTtFQUNDLG1CQUFtQjtDQUNwQjtDQUNBOzs7RUFHQyxhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDO0dBQ0MsVUFBVTtFQUNYO0VBQ0E7R0FDQyxVQUFVO0VBQ1g7Q0FDRDtDQUNBOztFQUVDLGtCQUFrQjtFQUNsQixrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLGtCQUFrQjtFQUNsQixvQkFBb0I7Q0FDckI7Q0FDQTtFQUNDLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0NBQ0E7QUFDRDtBQUNBO0NBQ0M7RUFDQyxtQkFBbUI7Q0FDcEI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHQvKiBvdXRsaW5lOiAxcHggc29saWQgQkxBQ0s7ICovXFxufVxcbmh0bWwge1xcbn1cXG5ib2R5IHtcXG5cXHR0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG5cXHRcXG59XFxuaDEge1xcblxcdGZvbnQtZmFtaWx5OiBzZXJpZjtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XFxcImhvbWVcXFwiXSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDhyZW0sIGF1dG8pIDFmcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG5cXHQvKiBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyAqL1xcblxcdCY6OmJlZm9yZSB7XFxuXFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGluc2V0OiAwO1xcblxcdFxcdGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpIGNvbnRyYXN0KDEzMCUpO1xcblxcdFxcdGFuaW1hdGlvbjogZmFkZUluSGVybyAwLjhzO1xcblxcdFxcdHBhZGRpbmc6IDA7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdH1cXG59XFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDAlKSBzZXBpYSgwJSk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpIGJyaWdodG5lc3MoNzUlKSBzZXBpYSgzJSk7XFxuXFx0fVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbkhlcm8ge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHRiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoNTAlKSBjb250cmFzdCgxMzAlKTtcXG5cXHR9XFxufVxcblxcbi5oZWFkZXIge1xcblxcdGdyaWQtY29sdW1uOiAxLzE7XFxuXFx0Z3JpZC1yb3c6IDEvIDI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHQvKiBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWRlZmF1bHQtYmFja2Ryb3ApOyAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHR6LWluZGV4OiAyO1xcblxcblxcdCYgLm5hdi1tZW51IGJ1dHRvbiB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHRwYWRkaW5nOiAwO1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdH1cXG59XFxuLnJlc2VydmF0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcbi5yZXNlcnZhdGlvbi1jb250YWluZXIge1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcblxcdFxcdHRyYW5zaXRpb246IHRyYW5zbGF0ZSAwLjRzO1xcblxcdH1cXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnJlc2VydmF0aW9uOjphZnRlciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMnB4O1xcblxcdHJpZ2h0OiAycHg7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0d2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpO1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcblxcdHRvdWNoLWFjdGlvbjogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcXG5cXG5cXHRvcGFjaXR5OiAwO1xcbn1cXG4vKiAucmVzZXJ2YXRpb246aG92ZXI6OmFmdGVyIHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcXG59ICovXFxuLnJlc2VydmF0aW9uOmFjdGl2ZTo6YWZ0ZXIge1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0dG91Y2gtYWN0aW9uOiBub25lO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6IDNyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LXNocmluazogMDtcXG59XFxuLmxvZ28ge1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiBtYXgtY29udGVudDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcbi5uYXYtbWVudSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IGNsYW1wKDJyZW0sIDh2dywgNHJlbSk7XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcdHBhZGRpbmctcmlnaHQ6IDZyZW07XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ3JpZC1jb250YWluZXJbZGF0YS1zdGF0dXM9XFxcImhvbWVcXFwiXSAjY29udGVudCB7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRncmlkLWNvbHVtbjogMSAvIDE7XFxuXFx0Z3JpZC1yb3c6IDIgLyAzO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LyogYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1kZWZhdWx0LWJhY2tkcm9wKTsgKi9cXG59XFxuXFxuLmhlcm8tYWxpZ24tY29udGFpbmVyIHtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGhlaWdodDogNzAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oZXJvLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdG1pbi1oZWlnaHQ6IDA7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcblxcdGdhcDogMXZ3O1xcblxcdCYgLmhlcm8tdGV4dC0xIHtcXG5cXHRcXHRjb2xvcjogI2YwYjU1MTtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0Jjo6YmVmb3JlIHtcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2YwYjU1MTtcXG5cXHRcXHRcXHRyaWdodDogMDtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLCAwLjEpIHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgMjRweCkpO1xcblxcdFxcdH1cXG5cXHRcXHQmOjphZnRlciB7XFxuXFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmMGI1NTE7XFxuXFx0XFx0XFx0bGVmdDogMDtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLCAwLjEpIHRyYW5zbGF0ZVgoY2FsYygtMTAwJSArIC0yNHB4KSk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuZm9vdGVyIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzA5MDgwZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogNnJlbSA0cmVtO1xcblxcdHdpZHRoOiBtaW4oMTAwJSwgMTAwcmVtKTtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0cm93LWdhcDogNnJlbTtcXG5cXHRjb2x1bW4tZ2FwOiA2cmVtO1xcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcblxcdCYgPiBkaXYge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRoZWlnaHQ6IDEycmVtO1xcblxcdFxcdGZsZXgtYmFzaXM6IDE4cmVtO1xcblxcdFxcdGZsZXgtZ3JvdzogMS41O1xcblxcdFxcdG1pbi13aWR0aDogMThyZW07XFxuXFxuXFx0XFx0JjpudGgtY2hpbGQoMiksXFxuXFx0XFx0JjpudGgtY2hpbGQoMykge1xcblxcdFxcdFxcdGZsZXgtYmFzaXM6IDE0cmVtO1xcblxcdFxcdFxcdGZsZXgtZ3JvdzogMTtcXG5cXHRcXHRcXHRtaW4td2lkdGg6IDE0cmVtO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcbi5mb290ZXItdGV4dC1jb250YWluZXIge1xcblxcdCYgLmZvb3Rlci10ZXh0LWhlYWRlciBoMiB7XFxuXFx0XFx0Zm9udC1mYW1pbHk6IG5vcnNlO1xcblxcdH1cXG5cXHQmIC5mb290ZXItdGV4dCB7XFxuXFx0fVxcblxcdCYgLmZvb3Rlci1pY29ucyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRoZWlnaHQ6IDIuN3JlbTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0XFx0Y29sdW1uLWdhcDogMXJlbTtcXG5cXHRcXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0JiBpbWcge1xcblxcdFxcdFxcdG1heC1oZWlnaHQ6IDEwMCU7XFxuXFx0XFx0fVxcblxcdFxcdCYgaW1nOmhvdmVyIHtcXG5cXHRcXHRcXHRmaWx0ZXI6IGludmVydCg0MCUpIHNlcGlhKDk3JSkgc2F0dXJhdGUoMzgyMSUpIGh1ZS1yb3RhdGUoMTNkZWcpIGJyaWdodG5lc3MoOTklKVxcblxcdFxcdFxcdFxcdGNvbnRyYXN0KDk4JSk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuLmZvb3Rlci1ob3Vycy1jb250YWluZXIge1xcblxcdCYgLmZvb3Rlci1ob3Vycy1oZWFkZXIgaDUge1xcblxcdFxcdGhlaWdodDogMy43MzJyZW07XFxuXFx0fVxcblxcdCYgLnJvdyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0fVxcblxcdCYgLmZvb3Rlci1ob3Vycy10ZXh0IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0XFx0ZmxleC1ncm93OiAxO1xcblxcdFxcdGdhcDogMC41cmVtO1xcblxcdFxcdCYgPiA6bGFzdC1jaGlsZCB7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG4uZm9vdGVyLWFkcmVzcy1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFxuXFx0JiA+IGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0fVxcblxcdCYgOm50aC1jaGlsZCgzKSxcXG5cXHQ6bnRoLWNoaWxkKDQpIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdH1cXG5cXHQmIC5mb290ZXItYWRyZXNzLWhlYWRlciBoNSB7XFxuXFx0XFx0aGVpZ2h0OiAzLjczMnJlbTtcXG5cXHR9XFxuXFx0JiBpbWcge1xcblxcdFxcdG1heC1oZWlnaHQ6IDEuMzVyZW07XFxuXFx0fVxcblxcdCYgLmZvb3Rlci1sb2NhdGlvbixcXG5cXHQuZm9vdGVyLXRlbCxcXG5cXHQuZm9vdGVyLW1haWwge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR9XFxuXFx0JiAuZm9vdGVyLWxvY2F0aW9uIGltZyB7XFxuXFx0XFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiBhdXRvO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcycmVtKSB7XFxuXFx0Lmhlcm8tY29udGFpbmVyIC5oZXJvLXRleHQtMSB7XFxuXFx0XFx0Jjo6YmVmb3JlIHtcXG5cXHRcXHRcXHR3aWR0aDogNjAlO1xcblxcdFxcdH1cXG5cXHRcXHQmOjphZnRlciB7XFxuXFx0XFx0XFx0d2lkdGg6IDYwJTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdC5oZXJvLXRleHQtMSxcXG5cXHQuaGVyby10ZXh0LTMge1xcblxcdFxcdGZvbnQtc2l6ZTogMS41NnJlbTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5oZXJvLXRleHQtMiB7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogMy44ODE4cmVtO1xcblxcdH1cXG5cXHQuaGVhZGVyIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0XFx0cm93LWdhcDogMXJlbTtcXG5cXHRcXHRjb2x1bW4tZ2FwOiAycmVtO1xcblxcdH1cXG5cXHQuZm9vdGVyLXRleHQtY29udGFpbmVyIGRpdi5mb290ZXItaWNvbnMge1xcblxcdFxcdGhlaWdodDogMi4wMjVyZW07XFxuXFx0fVxcblxcdC5mb290ZXItY29udGFpbmVyIHtcXG5cXHRcXHRwYWRkaW5nOiA2cmVtIDJyZW07XFxuXFx0fVxcblxcdC5uYXYtbWVudSB7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzZyZW0pIHtcXG5cXHQubmF2LW1lbnUge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDByZW07XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBoZXJvSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9hYm91dC5hdmlmXCI7XG5cbmltcG9ydCBhYm91dDFJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2Fib3V0MS5hdmlmXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJBYm91dCgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblx0Y29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1jb250YWluZXJcIik7XG5cblx0aWYgKCEoZ3JpZENvbnRhaW5lci5kYXRhc2V0LnN0YXR1cyA9PT0gXCJhYm91dFwiKSkge1xuXHRcdHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHR9XG5cdFx0Z3JpZENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIm5vbmVcIjtcblx0XHRncmlkQ29udGFpbmVyLmRhdGFzZXQuc3RhdHVzID0gXCJhYm91dFwiO1xuXHRcdGNvbnN0IHVybCA9IGB1cmwoXCIke2hlcm9JbWFnZX1cIilgO1xuXG5cdFx0Ly8gbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC4wKSwgcmdiYSgwLDAsMCwwLjApKSxcblxuXHRcdGNvbnN0IGFib3V0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRhYm91dEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtaGVhZGVyXCIpO1xuXHRcdGFib3V0SGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHVybDtcblx0XHRjb25zdCBhYm91dEhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdFx0YWJvdXRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJBQk9VVCBVU1wiO1xuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpO1xuXHRcdGFib3V0SGVhZGVyLmFwcGVuZENoaWxkKGFib3V0SGVhZGVyVGV4dCk7XG5cblx0XHRjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0YWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWNvbnRhaW5lclwiKTtcblx0XHRjb250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcblx0XHRjb25zdCBhYm91dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGFib3V0MS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtMVwiKTtcblx0XHRhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dDEpO1xuXHRcdGNvbnN0IGFib3V0SW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGFib3V0SW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWltZ1wiKTtcblx0XHRjb25zdCBhYm91dEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRhYm91dEltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBhYm91dDFJbWFnZSk7XG5cdFx0YWJvdXQxLmFwcGVuZENoaWxkKGFib3V0SW1hZ2VDb250YWluZXIpO1xuXHRcdGFib3V0SW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRJbWFnZSk7XG5cblx0XHRjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGFib3V0VGV4dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dFwiKTtcblx0XHRhYm91dDEuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcblxuXHRcdGNvbnN0IGFib3V0VGV4dEhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG5cdFx0YWJvdXRUZXh0SGVhZGVyMS50ZXh0Q29udGVudCA9IFwiSEVZISBXRUxDT01FIFRPIFNFWkkgQ09PS0lFXCI7XG5cdFx0Y29uc3QgYWJvdXRUZXh0SGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRhYm91dFRleHRIZWFkZXIyLnRleHRDb250ZW50ID0gXCJPVVIgU1RPUllcIjtcblx0XHRjb25zdCBhYm91dFRleHRQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdGFib3V0VGV4dFAxLnRleHRDb250ZW50ID1cblx0XHRcdFwiRm9vZCBpcyB0aGUgZm91bmRhdGlvbiBvZiB0cnVlIGhhcHBpbmVzcy4gTG9yZW0gaXBzdW0gZG9sb3IgYW1ldCxvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQgYWVuZWFuIGNvbW1vZG8uXCI7XG5cdFx0Y29uc3QgYWJvdXRUZXh0UDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRhYm91dFRleHRQMi50ZXh0Q29udGVudCA9XG5cdFx0XHRcIldlIHNlZSBvdXIgY3VzdG9tZXJzIGFzIGludml0ZWQgZ3Vlc3RzIHRvIGEgcGFydHksIGFuZCB3ZSBhcmUgdGhlIGhvc3RzLiBJdOKAmXMgb3VyIGpvYiBldmVyeSBkYXkgdG8gbWFrZSBldmVyeSBpbXBvcnRhbnQgYXNwZWN0IG9mIGN1c3RvbWVyIGV4cGVyaWVuY2UgYSBsaXR0bGUgYml0IGJldHRlci4gRG9uZWMgcXVhbSBmZWxpcywgbmVjLCBwZWxsZW50ZXNxdWUgZXUuXCI7XG5cdFx0Y29uc3QgYWJvdXRUZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWJvdXRUZXh0QnV0dG9uLnRleHRDb250ZW50PVwiT1VSIE1FTlVcIlxuXHRcdGFib3V0VGV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuXHRcdGFib3V0VGV4dC5hcHBlbmRDaGlsZChhYm91dFRleHRIZWFkZXIxKTtcblx0XHRhYm91dFRleHQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0SGVhZGVyMik7XG5cdFx0YWJvdXRUZXh0LmFwcGVuZENoaWxkKGFib3V0VGV4dFAxKTtcblx0XHRhYm91dFRleHQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0UDIpO1xuXHRcdGFib3V0VGV4dC5hcHBlbmRDaGlsZChhYm91dFRleHRCdXR0b24pO1xuXHR9XG59XG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9jb29raWUtaGVyby1sb3cuYXZpZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXHRjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWNvbnRhaW5lclwiKTtcblx0aWYgKCEoZ3JpZENvbnRhaW5lci5kYXRhc2V0LnN0YXR1cyA9PT0gXCJob21lXCIpKSB7XG5cdFx0d2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0Y29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdH1cblx0XHRcblx0Y29uc3QgdXJsID0gYHVybChcIiR7SW1hZ2V9XCIpYDtcblx0XG5cdGdyaWRDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdXJsO1xuXG5cdC8vIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuMCksIHJnYmEoMCwwLDAsMC4wKSksXG5cblx0Y29uc3QgaGVyb0FsaWduQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgaGVyb1RleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuXHRjb25zdCBoZXJvVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGNvbnN0IGhlcm9UZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcblx0Y29uc3QgaGVyb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IGhlcm9CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdGdyaWRDb250YWluZXIuZGF0YXNldC5zdGF0dXMgPSBcImhvbWVcIjtcblxuXHRoZXJvQWxpZ25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlcm8tYWxpZ24tY29udGFpbmVyXCIpO1xuXHRoZXJvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZXJvLWNvbnRhaW5lclwiKTtcblx0aGVyb1RleHQxLmNsYXNzTGlzdC5hZGQoXCJoZXJvLXRleHQtMVwiKTtcblx0aGVyb1RleHQyLmNsYXNzTGlzdC5hZGQoXCJoZXJvLXRleHQtMlwiKTtcblx0aGVyb1RleHQzLmNsYXNzTGlzdC5hZGQoXCJoZXJvLXRleHQtM1wiKTtcblx0aGVyb0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb25cIilcblx0aGVyb0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb24tY29udGFpbmVyXCIpXG5cdGhlcm9UZXh0MS50ZXh0Q29udGVudCA9IFwiV0VMQ09NRSBUT1wiO1xuXHRoZXJvVGV4dDIudGV4dENvbnRlbnQgPSBcIlNFWkkgQ09PS0lFU1wiO1xuXHRoZXJvVGV4dDMudGV4dENvbnRlbnQgPSBcIkNvb2tpZS4gQ29mZmUuIFRlYS4gU3dlZXRzLlwiO1xuXHRoZXJvQnV0dG9uLnRleHRDb250ZW50PVwiUkVTRVJWQVRJT05cIlxuXHRjb250ZW50LmFwcGVuZENoaWxkKGhlcm9BbGlnbkNvbnRhaW5lcik7XG5cdGhlcm9BbGlnbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvQ29udGFpbmVyKTtcblx0aGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvVGV4dDEpO1xuXHRoZXJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9UZXh0Mik7XG5cdGhlcm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb1RleHQzKTtcblx0aGVyb0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvQnV0dG9uKTtcblx0aGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvQnV0dG9uQ29udGFpbmVyKTtcblx0fVxuXG59XG4iLCJpbXBvcnQgaGVyb0ltYWdlIGZyb20gXCIuLi9pbWFnZXMvb3VyLW1lbnUuYXZpZlwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuLi9zY3JpcHRzL21lbnVNb2RlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNZW51KCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXHRjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWNvbnRhaW5lclwiKTtcblx0XG5cblx0aWYoIShncmlkQ29udGFpbmVyLmRhdGFzZXQuc3RhdHVzID09PSBcIm1lbnVcIikpe1xuXHRcdHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCl7XG5cdFx0XHRjb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKClcblx0XHR9XG5cdFx0Z3JpZENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIm5vbmVcIjtcblx0XHRncmlkQ29udGFpbmVyLmRhdGFzZXQuc3RhdHVzID0gXCJtZW51XCI7XG5cdFx0Y29uc3QgdXJsID0gYHVybChcIiR7aGVyb0ltYWdlfVwiKWA7XG5cdFxuXHRcdC8vIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuMCksIHJnYmEoMCwwLDAsMC4wKSksXG5cdFxuXHRcdGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVhZGVyXCIpO1xuXHRcdG1lbnVIZWFkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdXJsO1xuXHRcdGNvbnN0IG1lbnVIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdG1lbnVIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJPVVIgTUVOVVwiO1xuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG5cdFx0bWVudUhlYWRlci5hcHBlbmRDaGlsZChtZW51SGVhZGVyVGV4dCk7XG5cdFxuXHRcdGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cdFxuXHRcdGNvbnN0IG1lbnVGdWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtZW51RnVsbC5jbGFzc0xpc3QuYWRkKFwibWVudS1mdWxsXCIpO1xuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUZ1bGwpO1xuXHRcdGNvbnN0IG1lbnVEcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IG1lbnVGb29kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bWVudURyaW5rcy5jbGFzc0xpc3QuYWRkKFwibWVudS1kcmlua3NcIik7XG5cdFx0bWVudUZvb2RzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWZvb2RzXCIpO1xuXHRcdG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudURyaW5rcyk7XG5cdFx0bWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Rm9vZHMpO1xuXHRcblx0XHRjb25zdCBtZW51RHJpbmtzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtZW51RHJpbmtzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWRyaW5rcy1oZWFkZXJcIik7XG5cdFx0Y29uc3QgZHJpbmtIZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuXHRcdGNvbnN0IGRyaW5rSGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRkcmlua0hlYWRlcjEudGV4dENvbnRlbnQgPSBcIkRSSU5LU1wiO1xuXHRcdGRyaW5rSGVhZGVyMi50ZXh0Q29udGVudCA9IFwiQ09GRkVFUyAmIFRFQVNcIjtcblx0XHRtZW51RHJpbmtzSGVhZGVyLmFwcGVuZENoaWxkKGRyaW5rSGVhZGVyMSk7XG5cdFx0bWVudURyaW5rc0hlYWRlci5hcHBlbmRDaGlsZChkcmlua0hlYWRlcjIpO1xuXHRcdG1lbnVEcmlua3MuYXBwZW5kQ2hpbGQobWVudURyaW5rc0hlYWRlcik7XG5cdFx0Y29uc3QgbWVudUZvb2RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtZW51Rm9vZHNIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtZm9vZHMtaGVhZGVyXCIpO1xuXHRcdGNvbnN0IGZvb2RIZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuXHRcdGNvbnN0IGZvb2RIZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdGZvb2RIZWFkZXIxLnRleHRDb250ZW50ID0gXCJGT09EU1wiO1xuXHRcdGZvb2RIZWFkZXIyLnRleHRDb250ZW50ID0gXCJCQUtFUlkgJiBMVU5DSFwiO1xuXHRcdG1lbnVGb29kc0hlYWRlci5hcHBlbmRDaGlsZChmb29kSGVhZGVyMSk7XG5cdFx0bWVudUZvb2RzSGVhZGVyLmFwcGVuZENoaWxkKGZvb2RIZWFkZXIyKTtcblx0XHRtZW51Rm9vZHMuYXBwZW5kQ2hpbGQobWVudUZvb2RzSGVhZGVyKTtcblx0XG5cdFxuXHRcdFxuXHRcblx0XHRjb25zdCBtZW51RnVsbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bWVudUZ1bGxIZWFkZXIuY2xhc3NMaXN0LmFkZChcImZ1bGwtaGVhZGVyXCIpO1xuXHRcdFxuXHRcdGNvbnN0IGZ1bGxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdFx0ZnVsbEhlYWRlci50ZXh0Q29udGVudCA9IFwiRlVMTCBNRU5VXCI7XG5cdFx0XG5cdFx0bWVudUZ1bGxIZWFkZXIuYXBwZW5kQ2hpbGQoZnVsbEhlYWRlcik7XG5cdFx0XG5cdFx0Y29uc3QgZnVsbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblx0XHRmdWxsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmdWxsLWNvbnRhaW5lclwiKTtcblx0XHRcblx0XHRtZW51RnVsbC5hcHBlbmRDaGlsZChtZW51RnVsbEhlYWRlcik7XG5cdFx0bWVudUZ1bGwuYXBwZW5kQ2hpbGQoZnVsbENvbnRhaW5lcik7XG5cdFx0TWVudS5teU1lbnUuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XG5cdFx0XHRpZiAoZWxlbWVudC5jYXRlZ29yeSA9PSBcImRyaW5rXCIgfHwgZWxlbWVudC5jYXRlZ29yeSA9PSBcImZvb2RcIikge1xuXHRcdFx0XHRkcmlua0FuZEZvb2QoZWxlbWVudCwgbWVudURyaW5rcywgbWVudUZvb2RzKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRmdWxsKGVsZW1lbnQsZnVsbENvbnRhaW5lcilcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cblxuXHRcblxuXHRcbn1cblxuZnVuY3Rpb24gZHJpbmtBbmRGb29kKGVsZW1lbnQsIG1lbnVEcmlua3MsIG1lbnVGb29kcykge1xuXHRjb25zdCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZWxlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2VsZW1lbnQuY2F0ZWdvcnl9YCk7XG5cdGNvbnN0IGNhdGVnb3J5Q29udGFpbmVyID0gZWxlbWVudC5jYXRlZ29yeSA9PSBcImRyaW5rXCIgPyBtZW51RHJpbmtzIDogbWVudUZvb2RzO1xuXHRjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyKTtcblxuXHRjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtlbGVtZW50LmNhdGVnb3J5fS1pbWdgKTtcblx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlbGVtZW50LmltZyk7XG5cdGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuXHRlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG5cblx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtlbGVtZW50LmNhdGVnb3J5fS10ZXh0LWNvbnRhaW5lcmApO1xuXHRlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXG5cdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bmFtZS5jbGFzc0xpc3QuYWRkKGAke2VsZW1lbnQuY2F0ZWdvcnl9LW5hbWVgKTtcblx0bmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcblx0aW5mby5jbGFzc0xpc3QuYWRkKGAke2VsZW1lbnQuY2F0ZWdvcnl9LWluZm9gKTtcblx0aW5mby50ZXh0Q29udGVudCA9IGVsZW1lbnQuaW5mbztcblx0dGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcblx0dGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuXHRjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByaWNlLmNsYXNzTGlzdC5hZGQoYCR7ZWxlbWVudC5jYXRlZ29yeX0tcHJpY2VgKTtcblx0cHJpY2UudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaWNlO1xuXHRlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlKTtcbn1cblxuXG5mdW5jdGlvbiBmdWxsKGVsZW1lbnQsIGZ1bGxDb250YWluZXIpIHtcblxuXHRcblxuXG5cblxuXG5cblxuXG5cdFxuXG5cdGNvbnN0IGVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRlbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmdWxsLWl0ZW1cIik7XG5cdFxuXHRcblx0ZnVsbENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyKVxuXG5cdGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBmdWxsLWltZ2ApO1xuXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGVsZW1lbnQuaW1nKTtcblx0aW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cdGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcblxuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBmdWxsLXRleHQtY29udGFpbmVyYCk7XG5cdGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRuYW1lLmNsYXNzTGlzdC5hZGQoYGZ1bGwtbmFtZWApO1xuXHRuYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuXHRpbmZvLmNsYXNzTGlzdC5hZGQoYGZ1bGwtaW5mb2ApO1xuXHRpbmZvLnRleHRDb250ZW50ID0gZWxlbWVudC5pbmZvO1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXHRlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG5cdGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJpY2UuY2xhc3NMaXN0LmFkZChgZnVsbC1wcmljZWApO1xuXHRwcmljZS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpY2U7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2UpO1xufVxuIiwiaW1wb3J0IGRyaW5rMSBmcm9tIFwiLi4vaW1hZ2VzL2NvZmZlZS0xLmpwZ1wiO1xuaW1wb3J0IGRyaW5rMiBmcm9tIFwiLi4vaW1hZ2VzL2NvZmZlZS0yLmpwZ1wiO1xuaW1wb3J0IGRyaW5rMyBmcm9tIFwiLi4vaW1hZ2VzL2NvZmZlZS0zLmpwZ1wiO1xuaW1wb3J0IGRyaW5rNCBmcm9tIFwiLi4vaW1hZ2VzL2NvZmZlZS00LmpwZ1wiO1xuaW1wb3J0IGRyaW5rNSBmcm9tIFwiLi4vaW1hZ2VzL2NvZmZlZS01LmpwZ1wiO1xuaW1wb3J0IGRyaW5rNiBmcm9tIFwiLi4vaW1hZ2VzL2NvZmZlZS0yLmpwZ1wiO1xuXG5pbXBvcnQgZm9vZDEgZnJvbSBcIi4uL2ltYWdlcy9mb29kLTEuanBnXCI7XG5pbXBvcnQgZm9vZDIgZnJvbSBcIi4uL2ltYWdlcy9mb29kLTIuanBnXCI7XG5pbXBvcnQgZm9vZDMgZnJvbSBcIi4uL2ltYWdlcy9mb29kLTMuanBnXCI7XG5pbXBvcnQgZm9vZDQgZnJvbSBcIi4uL2ltYWdlcy9mb29kLTQuanBnXCI7XG5pbXBvcnQgZm9vZDUgZnJvbSBcIi4uL2ltYWdlcy9mb29kLTUuanBnXCI7XG5pbXBvcnQgZm9vZDYgZnJvbSBcIi4uL2ltYWdlcy9mb29kLTYuanBnXCI7XG5cbmltcG9ydCBwbGF0ZTEgZnJvbSBcIi4uL2ltYWdlcy9wbGF0ZTEuYXZpZlwiO1xuaW1wb3J0IHBsYXRlMiBmcm9tIFwiLi4vaW1hZ2VzL3BsYXRlMi5hdmlmXCI7XG5pbXBvcnQgcGxhdGUzIGZyb20gXCIuLi9pbWFnZXMvcGxhdGUzLmF2aWZcIjtcbmltcG9ydCBwbGF0ZTQgZnJvbSBcIi4uL2ltYWdlcy9wbGF0ZTQuYXZpZlwiO1xuaW1wb3J0IHBsYXRlNSBmcm9tIFwiLi4vaW1hZ2VzL3BsYXRlNS5hdmlmXCI7XG5pbXBvcnQgcGxhdGU2IGZyb20gXCIuLi9pbWFnZXMvcGxhdGU2LmF2aWZcIjtcblxuZXhwb3J0IGNsYXNzIE1lbnUge1xuXHRzdGF0aWMgbXlNZW51ID0gW107XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBpbmZvLCBpbWcsIGNhdGVnb3J5KSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnByaWNlID0gcHJpY2U7XG5cdFx0dGhpcy5pbmZvID0gaW5mbztcblx0XHR0aGlzLmltZyA9IGltZztcblx0XHR0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG5cdFx0TWVudS5teU1lbnUucHVzaCh0aGlzKTtcblx0fVxufVxubmV3IE1lbnUoXG5cdFwiQ2FyYW1lbCBWYW5pbGxhIExhdHRlXCIsXG5cdFwiJDQuMjVcIixcblx0XCJFc3ByZXNzbywgc3RlYW1lZCBtaWxrLCB2YW5pbGxhIHN5cnVwLCBjYXJhbWVsIGRyaXp6bGVcIixcblx0ZHJpbmsxLFxuXHRcImRyaW5rXCJcbik7XG5uZXcgTWVudShcblx0XCJJY2VkIE1hdGNoYSBMYXR0ZVwiLFxuXHRcIiQzLjk1XCIsXG5cdFwiQ2VyZW1vbmlhbCBtYXRjaGEsIGFsbW9uZCBtaWxrLCBhIHRvdWNoIG9mIGhvbmV5XCIsXG5cdGRyaW5rMixcblx0XCJkcmlua1wiXG4pO1xubmV3IE1lbnUoXG5cdFwiSGF6ZWxudXQgTW9jaGFcIixcblx0XCIkJDQuNTBcIixcblx0XCJFc3ByZXNzbywgY2hvY29sYXRlLCBoYXplbG51dCBzeXJ1cCwgd2hpcHBlZCBjcmVhbVwiLFxuXHRkcmluazMsXG5cdFwiZHJpbmtcIlxuKTtcbm5ldyBNZW51KFxuXHRcIlN0cmF3YmVycnkgSGliaXNjdXMgVGVhXCIsXG5cdFwiJDMuNzVcIixcblx0XCJEcmllZCBoaWJpc2N1cyBwZXRhbHMsIGZyZXNoIHN0cmF3YmVycnkgcHVyZWUsIG1pbnRcIixcblx0ZHJpbms0LFxuXHRcImRyaW5rXCJcbik7XG5uZXcgTWVudShcblx0XCJDaW5uYW1vbiBEb2xjZSBDYXBwdWNjaW5vIFwiLFxuXHRcIiQ0LjEwXCIsXG5cdFwiRXNwcmVzc28sIHN0ZWFtZWQgbWlsaywgY2lubmFtb24gZG9sY2Ugc3ByaW5rbGVcIixcblx0ZHJpbms1LFxuXHRcImRyaW5rXCJcbik7XG5uZXcgTWVudShcblx0XCJDb2NvbnV0IENvbGQgQnJld1wiLFxuXHRcIiQ0LjAwXCIsXG5cdFwiU21vb3RoIGNvbGQgYnJldywgY29jb251dCBtaWxrLCBhZ2F2ZSBuZWN0YXIgXCIsXG5cdGRyaW5rNixcblx0XCJkcmlua1wiXG4pO1xubmV3IE1lbnUoXG5cdFwiQ2hvY29sYXRlIENyb2lzc2FudFwiLFxuXHRcIiQyLjg1XCIsXG5cdFwiQnV0dGVyeSBwYXN0cnkgZmlsbGVkIHdpdGggQmVsZ2lhbiBkYXJrIGNob2NvbGF0ZVwiLFxuXHRmb29kMSxcblx0XCJmb29kXCJcbik7XG5uZXcgTWVudShcblx0XCJBdm9jYWRvIFRvYXN0XCIsXG5cdFwiJDUuMjBcIixcblx0XCJTb3VyZG91Z2gsIHNtYXNoZWQgYXZvY2FkbywgY2hpbGkgZmxha2VzLCBzZWEgc2FsdFwiLFxuXHRmb29kMixcblx0XCJmb29kXCJcbik7XG5uZXcgTWVudShcblx0XCJTcGluYWNoICYgRmV0YSBXcmFwXCIsXG5cdFwiJDQuNzVcIixcblx0XCJTcGluYWNoIHRvcnRpbGxhLCBjcnVtYmxlZCBmZXRhLCBzdW4tZHJpZWQgdG9tYXRvZXNcIixcblx0Zm9vZDMsXG5cdFwiZm9vZFwiXG4pO1xubmV3IE1lbnUoXCJCbHVlYmVycnkgTXVmZmluXCIsIFwiJDMuMzBcIiwgXCJGcmVzaCBibHVlYmVycmllcywgdmFuaWxsYSBjcnVtYiB0b3BwaW5nXCIsIGZvb2Q0LCBcImZvb2RcIik7XG5uZXcgTWVudShcblx0XCJUdXJrZXkgJiBTd2lzcyBQYW5pbmlcIixcblx0XCIkNi4xMFwiLFxuXHRcIlJvYXN0ZWQgdHVya2V5LCBTd2lzcyBjaGVlc2UsIHBlc3RvIG1heW9cIixcblx0Zm9vZDUsXG5cdFwiZm9vZFwiXG4pO1xubmV3IE1lbnUoXG5cdFwiUXVpY2hlIExvcnJhaW5lXCIsXG5cdFwiJDUuOTVcIixcblx0XCJGbGFreSBjcnVzdCwgYmFjb24gbGFyZG9ucywgY3JlYW15IGVnZyBjdXN0YXJkXCIsXG5cdGZvb2Q2LFxuXHRcImZvb2RcIlxuKTtcbm5ldyBNZW51KFxuXHRcIlJ1c3RpYyBNdXNocm9vbSBSaXNvdHRvXCIsXG5cdFwiJDE4LjUwXCIsXG5cdFwiQ3JlYW15IGFyYm9yaW8gcmljZSB3aXRoIHBvcmNpbmkgbXVzaHJvb21zLCB3aGl0ZSB3aW5lLCBwYXJtZXNhbiwgYW5kIGZyZXNoIHRoeW1lLlwiLFxuXHRwbGF0ZTEsXG5cdFwicGxhdGVcIlxuKTtcbm5ldyBNZW51KFxuXHRcIk1lZGl0ZXJyYW5lYW4gUG93ZXIgU2FsYWRcIixcblx0XCIkMTQuODBcIixcblx0XCJHcmlsbGVkIGxlbW9uLW1hcmluYXRlZCBjaGlja2VuIG92ZXIgcXVpbm9hIGFuZCBhcnVndWxhLCBmaW5pc2hlZCB3aXRoIGEgemVzdHkgaGVyYiBkcmVzc2luZy5cIixcblx0cGxhdGUyLFxuXHRcInBsYXRlXCJcbik7XG5uZXcgTWVudShcblx0XCJTbW9reSBDaGlwb3RsZSBWZWdnaWUgVGFjb3NcIixcblx0XCIkMTMuNDBcIixcblx0XCJTYXV0w6llZCBiZWxsIHBlcHBlcnMgYW5kIG9uaW9ucyBpbiBzb2Z0IHRvcnRpbGxhcywgdG9wcGVkIHdpdGggY2hpcG90bGUgYWlvbGkgYW5kIGxpbWUgY3JlbWEuIFwiLFxuXHRwbGF0ZTMsXG5cdFwicGxhdGVcIlxuKTtcbm5ldyBNZW51KFxuXHRcIkxlbW9uLUhlcmIgQ2hpY2tlbiBCb3dsIFwiLFxuXHRcIiQxNS45MFwiLFxuXHRcIkdyaWxsZWQgbGVtb24tbWFyaW5hdGVkIGNoaWNrZW4gb3ZlciBxdWlub2EgYW5kIGFydWd1bGEsIGZpbmlzaGVkIHdpdGggYSB6ZXN0eSBoZXJiIGRyZXNzaW5nLlwiLFxuXHRwbGF0ZTQsXG5cdFwicGxhdGVcIlxuKTtcbm5ldyBNZW51KFxuXHRcIlNlYXJlZCBTYWxtb24gVGVyaXlha2lcIixcblx0XCIkMjIuMDBcIixcblx0XCJOb3J3ZWdpYW4gc2FsbW9uIGdsYXplZCBpbiBsaWdodCB0ZXJpeWFraSBzYXVjZSwgc2VydmVkIHdpdGggc2VzYW1lIGdyZWVucyBhbmQgc3Byb3V0cy5cIixcblx0cGxhdGU1LFxuXHRcInBsYXRlXCJcbik7XG5uZXcgTWVudShcblx0XCJUcnVmZmxlIE1hYyBhbmQgQ2hlZXNlXCIsXG5cdFwiJDE3LjI1XCIsXG5cdFwiQWdlZCBjaGVkZGFyIGFuZCBjcmVhbXkgYsOpY2hhbWVsLCBpbmZ1c2VkIHdpdGggYmxhY2sgdHJ1ZmZsZSBvaWwgYW5kIGZpbmlzaGVkIHdpdGggY3Jpc3B5IHBhbmtvLlwiLFxuXHRwbGF0ZTYsXG5cdFwicGxhdGVcIlxuKTtcbmV4cG9ydCBjb25zdCBkZW5lbWUyID0gTWVudS5teU1lbnUiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvbnRzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvbnRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9mb250cy5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9tZW51LmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2Fib3V0LmNzc1wiO1xuaW1wb3J0IGhvbWVSZW5kZXIgZnJvbSBcIi4uL3NjcmlwdHMvaG9tZS5qc1wiO1xuaW1wb3J0IG1lbnVSZW5kZXIgZnJvbSBcIi4uL3NjcmlwdHMvbWVudS5qc1wiO1xuaW1wb3J0IGFib3V0UmVuZGVyIGZyb20gXCIuLi9zY3JpcHRzL2Fib3V0LmpzXCI7XG4vLyBob21lUmVuZGVyKCk7XG4oZnVuY3Rpb24gbmF2UmVuZGVyKCkge1xuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcblx0Y29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1jb250YWluZXJcIik7XG5cdGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlRG9tKTtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblx0XG5cdGhvbWVSZW5kZXIoKTtcblxuXG5cblx0ZnVuY3Rpb24gY2hhbmdlRG9tKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLmhvbWVcIikpIHtcblxuXHRcdFx0aG9tZVJlbmRlcigpO1xuXG5cblxuXG5cdFx0XHRcblx0XHR9ZWxzZSBpZihldmVudC50YXJnZXQubWF0Y2hlcyhcIi5tZW51XCIpKXtcblx0XHRcdG1lbnVSZW5kZXIoKTtcblx0XHR9ZWxzZSBpZihldmVudC50YXJnZXQubWF0Y2hlcyhcIi5hYm91dFwiKSl7XG5cdFx0XHRhYm91dFJlbmRlcigpO1xuXHRcdH1cblx0fVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==