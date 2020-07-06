module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/General.js":
/*!*******************************!*\
  !*** ./components/General.js ***!
  \*******************************/
/*! exports provided: Header, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`\n    text-align: center;\n    margin: 0;\n    line-height: 1.15;\n    font-size: 4rem;\n    font-family: 'Roboto', Geneva, Verdana, sans-serif;\n\n    &a {\n        color: #0070f3;\n        text-decoration: none;\n    }\n\n    &a:hover,\n    &a:focus,\n    &a:active {\n        text-decoration: underline;\n    }\n`;\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`\n    text-align: center;\n    line-height: 1.5;\n    font-size: 1.5rem;\n    font-family: 'Fjord One', serif;\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dlbmVyYWwuanM/MTNlOSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzdHlsZWQiLCJoMSIsIkRlc2NyaXB0aW9uIiwicCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHQyx3REFBTSxDQUFDQyxFQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztDQUF6QjtBQW1CQSxNQUFNQyxXQUFXLEdBQUdGLHdEQUFNLENBQUNHLENBQUU7Ozs7O0NBQTdCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9HZW5lcmFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaDFgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cbiAgICAmYSB7XG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgJmE6aG92ZXIsXG4gICAgJmE6Zm9jdXMsXG4gICAgJmE6YWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuYDtcblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ0Zqb3JkIE9uZScsIHNlcmlmO1xuYDtcblxuZXhwb3J0IHtcbiAgICBIZWFkZXIsXG4gICAgRGVzY3JpcHRpb24sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/General.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_General__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/General */ \"./components/General.js\");\nvar _jsxFileName = \"/Users/taylorcase/code/personal-site/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nconst background = '#191919';\nconst primaryOrange = '#FC5200';\nconst Navbar = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.nav`\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n\n  height: 140px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n`;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`\n  background-color: ${background};\n`;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a`\n  font-family: 'Fjord One', serif;\n  font-size: 48px;\n  color: ${primaryOrange};\n  \n  text-decoration: none;\n`;\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.main`\n  display: flex;\n  margin-top: 170px;\n  color: white;\n\n  font-family: 'Fjord One', serif;\n\n  justify-content: center;\n`;\nconst IntroSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.section`\n\n`;\nconst OrangeSpan = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span`\n  color: ${primaryOrange};\n`;\nfunction Home() {\n  return __jsx(Container, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"2415586982\", [background, primaryOrange]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, \"Taylor Case | Home\"), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Fjord+One&family=Roboto&display=swap\",\n    rel: \"stylesheet\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"2415586982\", [background, primaryOrange]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  })), __jsx(Navbar, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(Logo, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"2415586982\", [background, primaryOrange]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 24\n    }\n  }, \"T\"))), __jsx(Main, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(IntroSection, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(_components_General__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, \"Hello, my name is \", __jsx(OrangeSpan, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 31\n    }\n  }, \"Taylor.\")), __jsx(_components_General__WEBPACK_IMPORTED_MODULE_4__[\"Description\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, \"I'm a front-end engineer.\", __jsx(\"br\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"2415586982\", [background, primaryOrange]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }), \"I like to run, read learn and help others.\"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2415586982\",\n    dynamic: [background, primaryOrange],\n    __self: this\n  }, `html,body{padding:0;margin:0;font-family:'Fjord One',serif;background-color:${background};}*::selection{color:white;background:${primaryOrange};}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JjYXNlL2NvZGUvcGVyc29uYWwtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RXlCLEFBSXFCLEFBT0UsQUFLVSxVQVhiLEVBTytCLE9BTlQsR0FXakMsMkJBVEQsR0FLQywyQ0FMQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9yY2FzZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEhlYWRlciwgRGVzY3JpcHRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL0dlbmVyYWwnO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gJyMxOTE5MTknO1xuY29uc3QgcHJpbWFyeU9yYW5nZSA9ICcjRkM1MjAwJztcblxuY29uc3QgTmF2YmFyID0gc3R5bGVkLm5hdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIGhlaWdodDogMTQwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmR9O1xuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5hYFxuICBmb250LWZhbWlseTogJ0Zqb3JkIE9uZScsIHNlcmlmO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGNvbG9yOiAke3ByaW1hcnlPcmFuZ2V9O1xuICBcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYDtcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxNzBweDtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGZvbnQtZmFtaWx5OiAnRmpvcmQgT25lJywgc2VyaWY7XG5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBJbnRyb1NlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcblxuYDtcblxuY29uc3QgT3JhbmdlU3BhbiA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcmltYXJ5T3JhbmdlfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGF5bG9yIENhc2UgfCBIb21lPC90aXRsZT5cblxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Gam9yZCtPbmUmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPE5hdmJhcj5cbiAgICAgICAgPExvZ28gaHJlZj1cIi9cIj48aDI+VDwvaDI+PC9Mb2dvPlxuICAgICAgPC9OYXZiYXI+XG5cbiAgICAgIDxNYWluPlxuICAgICAgICA8SW50cm9TZWN0aW9uPlxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICBIZWxsbywgbXkgbmFtZSBpcyA8T3JhbmdlU3Bhbj5UYXlsb3IuPC9PcmFuZ2VTcGFuPlxuICAgICAgICAgIDwvSGVhZGVyPlxuXG4gICAgICAgICAgPERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgSSdtIGEgZnJvbnQtZW5kIGVuZ2luZWVyLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBJIGxpa2UgdG8gcnVuLCByZWFkIGxlYXJuIGFuZCBoZWxwIG90aGVycy5cbiAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxuICAgICAgICA8L0ludHJvU2VjdGlvbj5cbiAgICAgIDwvTWFpbj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdGam9yZCBPbmUnLCBzZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmR9XG4gICAgICAgIH1cblxuICAgICAgICAqOjpzZWxlY3Rpb24ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3ByaW1hcnlPcmFuZ2V9O1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/taylorcase/code/personal-site/pages/index.js */`));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImJhY2tncm91bmQiLCJwcmltYXJ5T3JhbmdlIiwiTmF2YmFyIiwic3R5bGVkIiwibmF2IiwiQ29udGFpbmVyIiwiZGl2IiwiTG9nbyIsImEiLCJNYWluIiwibWFpbiIsIkludHJvU2VjdGlvbiIsInNlY3Rpb24iLCJPcmFuZ2VTcGFuIiwic3BhbiIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLFVBQVUsR0FBRyxTQUFuQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxTQUF0QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7Ozs7Q0FBMUI7QUFhQSxNQUFNQyxTQUFTLEdBQUdGLHdEQUFNLENBQUNHLEdBQUk7c0JBQ1BOLFVBQVc7Q0FEakM7QUFJQSxNQUFNTyxJQUFJLEdBQUdKLHdEQUFNLENBQUNLLENBQUU7OztXQUdYUCxhQUFjOzs7Q0FIekI7QUFRQSxNQUFNUSxJQUFJLEdBQUdOLHdEQUFNLENBQUNPLElBQUs7Ozs7Ozs7O0NBQXpCO0FBVUEsTUFBTUMsWUFBWSxHQUFHUix3REFBTSxDQUFDUyxPQUFROztDQUFwQztBQUlBLE1BQU1DLFVBQVUsR0FBR1Ysd0RBQU0sQ0FBQ1csSUFBSztXQUNwQmIsYUFBYztDQUR6QjtBQUllLFNBQVNjLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsZ0dBNkJzQmYsVUE3QnRCLEVBa0NnQkMsYUFsQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFHRTtBQUFNLFFBQUksRUFBQywrRUFBWDtBQUEyRixPQUFHLEVBQUMsWUFBL0Y7QUFBQSxnR0EyQnNCRCxVQTNCdEIsRUFnQ2dCQyxhQWhDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFPRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsSUFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZTtBQUFBLGdHQXVCT0QsVUF2QlAsRUE0QkNDLGFBNUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZixDQURGLENBUEYsRUFXRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNvQixNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURwQixDQURGLEVBS0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUVFO0FBQUEsZ0dBWWtCRCxVQVpsQixFQWlCWUMsYUFqQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLCtDQUxGLENBREYsQ0FYRjtBQUFBO0FBQUEsY0ErQjBCRCxVQS9CMUIsRUFvQ29CQyxhQXBDcEI7QUFBQTtBQUFBLG9GQStCMEJELFVBL0IxQix5Q0FvQ29CQyxhQXBDcEI7O3FFQUFBLEVBREY7QUE4Q0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgSGVhZGVyLCBEZXNjcmlwdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvR2VuZXJhbCc7XG5cbmNvbnN0IGJhY2tncm91bmQgPSAnIzE5MTkxOSc7XG5jb25zdCBwcmltYXJ5T3JhbmdlID0gJyNGQzUyMDAnO1xuXG5jb25zdCBOYXZiYXIgPSBzdHlsZWQubmF2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgaGVpZ2h0OiAxNDBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZH07XG5gO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmFgXG4gIGZvbnQtZmFtaWx5OiAnRmpvcmQgT25lJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6ICR7cHJpbWFyeU9yYW5nZX07XG4gIFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE3MHB4O1xuICBjb2xvcjogd2hpdGU7XG5cbiAgZm9udC1mYW1pbHk6ICdGam9yZCBPbmUnLCBzZXJpZjtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEludHJvU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuXG5gO1xuXG5jb25zdCBPcmFuZ2VTcGFuID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3ByaW1hcnlPcmFuZ2V9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UYXlsb3IgQ2FzZSB8IEhvbWU8L3RpdGxlPlxuXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZqb3JkK09uZSZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TmF2YmFyPlxuICAgICAgICA8TG9nbyBocmVmPVwiL1wiPjxoMj5UPC9oMj48L0xvZ28+XG4gICAgICA8L05hdmJhcj5cblxuICAgICAgPE1haW4+XG4gICAgICAgIDxJbnRyb1NlY3Rpb24+XG4gICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgIEhlbGxvLCBteSBuYW1lIGlzIDxPcmFuZ2VTcGFuPlRheWxvci48L09yYW5nZVNwYW4+XG4gICAgICAgICAgPC9IZWFkZXI+XG5cbiAgICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgICBJJ20gYSBmcm9udC1lbmQgZW5naW5lZXIuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEkgbGlrZSB0byBydW4sIHJlYWQgbGVhcm4gYW5kIGhlbHAgb3RoZXJzLlxuICAgICAgICAgIDwvRGVzY3JpcHRpb24+XG4gICAgICAgIDwvSW50cm9TZWN0aW9uPlxuICAgICAgPC9NYWluPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0Zqb3JkIE9uZScsIHNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZH1cbiAgICAgICAgfVxuXG4gICAgICAgICo6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbWFyeU9yYW5nZX07XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylorcase/code/personal-site/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });