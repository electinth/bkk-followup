module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/SafeHydrate.js



function SafeHydrate({
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    suppressHydrationWarning: true,
    children: true ? null : undefined
  });
}

/* harmony default export */ var components_SafeHydrate = (SafeHydrate);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./jsconfig.json
var jsconfig = __webpack_require__("wdRG");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/MetaHead.js







function MetaHead() {
  let og_image = jsconfig.og_main;
  const router = Object(router_["useRouter"])();
  const og_url = `${jsconfig.web_url}${router.query.title ? `dashboard/${router.query.title}` : ""}`;
  if (router.query.title === "น้ำท่วมถนน") og_image = jsconfig.og_flood;
  if (router.query.title === "พื้นที่สีเขียว") og_image = jsconfig.og_green;
  if (router.query.title === "มลพิษในคลอง") og_image = jsconfig.og_water;
  if (router.query.title === "ขยะมูลฝอย") og_image = jsconfig.og_waste;
  if (router.query.title === "ฝุ่นควันเกินมาตรฐาน") og_image = jsconfig.og_air;
  if (router.query.slide === 15) og_image = jsconfig.og_overall; // if (router.query.slide == 8) og_image = config.og_responsibility;

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
      children: jsconfig.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "description",
      content: jsconfig.description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:title",
      content: jsconfig.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:description",
      content: jsconfig.description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:image",
      content: jsconfig.web_url + og_image
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:url",
      content: og_url
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:title",
      content: jsconfig.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:description",
      content: jsconfig.description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:image:src",
      content: jsconfig.web_url + og_image
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "twitter:url",
      content: og_url
    })]
  });
}

/* harmony default export */ var components_MetaHead = (MetaHead);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__("H/sG");

// EXTERNAL MODULE: ./styles/font.css
var font = __webpack_require__("PeLA");

// EXTERNAL MODULE: ./styles/dashboard.scss
var dashboard = __webpack_require__("dEY1");

// EXTERNAL MODULE: ./styles/home.scss
var home = __webpack_require__("k1Zc");

// EXTERNAL MODULE: ./node_modules/swiper/swiper.scss
var swiper = __webpack_require__("X2ca");

// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_MetaHead, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_SafeHydrate, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "H/sG":
/***/ (function(module, exports) {



/***/ }),

/***/ "PeLA":
/***/ (function(module, exports) {



/***/ }),

/***/ "X2ca":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dEY1":
/***/ (function(module, exports) {



/***/ }),

/***/ "k1Zc":
/***/ (function(module, exports) {



/***/ }),

/***/ "wdRG":
/***/ (function(module) {

module.exports = JSON.parse("{\"compilerOptions\":{\"baseUrl\":\".\"},\"title\":\"BKK Follow-Up สำรวจปัญหากวนใจชาว กทม.\",\"description\":\"เปิดข้อมูลย้อนหลัง ฝุ่น น้ำท่วม ขยะ มลพิษ และสิ่งที่ติดค้างใจคน กทม.\",\"web_url\":\"https://bkk-followup.netlify.app/bkk-election/\",\"og_main\":\"og_main.jpg\",\"og_budget\":\"og_budget.jpg\",\"og_air\":\"og_air.jpg\",\"og_green\":\"og_green.jpg\",\"og_waste\":\"og_waste.jpg\",\"og_water\":\"og_water.jpg\",\"og_flood\":\"og_flood.jpg\",\"og_overall\":\"og_overall.jpg\",\"og_responsibility\":\"og_responsibility.jpg\"}");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });