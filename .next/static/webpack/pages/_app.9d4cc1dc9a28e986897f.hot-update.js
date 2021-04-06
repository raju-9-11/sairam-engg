webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ \"./pages/index.js\");\n/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard */ \"./pages/dashboard/index.js\");\n/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin */ \"./pages/admin/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/theme */ \"./src/theme.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n\n\n\nvar _jsxFileName = \"/home/pacman/Desktop/nextjs/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(props) {\n  _s();\n\n  var Component = props.Component,\n      pageProps = props.pageProps;\n  var type = 0; // const { user } = useAuth()\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    // Remove the server-side injected CSS.\n    var jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []); // let allowed = false;\n  // let ComponentToRender = allowed ? Admin : Dashboard;\n\n  var ComponentToRender = _index__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__[\"useRouter\"])();\n\n  if (router.pathname.startsWith(\"/admin\") && type === 1) {\n    ComponentToRender = _admin__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n  }\n\n  if (router.pathname.startsWith(\"/dashboard\") && type === 0) {\n    ComponentToRender = _dashboard__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n  }\n\n  if (type === null) {\n    ComponentToRender = _index__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Sairam Engineering College\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"ThemeProvider\"], {\n      theme: _src_theme__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(notistack__WEBPACK_IMPORTED_MODULE_12__[\"SnackbarProvider\"], {\n        maxSnack: 2,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_lib_auth__WEBPACK_IMPORTED_MODULE_11__[\"AuthProvider\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ComponentToRender, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MyApp, \"CuHC/gmkH7n0V0sJOkcbkPBFVeg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_13__[\"useRouter\"]];\n});\n\n_c = MyApp;\nMyApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0eXBlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJDb21wb25lbnRUb1JlbmRlciIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJBZG1pbiIsIkRhc2hib2FyZCIsInRoZW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsTUFDM0JDLFNBRDJCLEdBQ0ZELEtBREUsQ0FDM0JDLFNBRDJCO0FBQUEsTUFDaEJDLFNBRGdCLEdBQ0ZGLEtBREUsQ0FDaEJFLFNBRGdCO0FBR25DLE1BQUlDLElBQUksR0FBRyxDQUFYLENBSG1DLENBSW5DOztBQUVBQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBbEI7O0FBQ0EsUUFBSUYsU0FBSixFQUFlO0FBQ2JBLGVBQVMsQ0FBQ0csYUFBVixDQUF3QkMsV0FBeEIsQ0FBb0NKLFNBQXBDO0FBQ0Q7QUFDRixHQU5ELEVBTUcsRUFOSCxFQU5tQyxDQWNuQztBQUNBOztBQUNBLE1BQUlLLGlCQUFpQixHQUFHQyw4Q0FBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUNBLE1BQUlELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsVUFBaEIsQ0FBMkIsUUFBM0IsS0FBd0NiLElBQUksS0FBSyxDQUFyRCxFQUF3RDtBQUN0RFEscUJBQWlCLEdBQUdNLDhDQUFwQjtBQUNEOztBQUNELE1BQUlKLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsVUFBaEIsQ0FBMkIsWUFBM0IsS0FBNENiLElBQUksS0FBSyxDQUF6RCxFQUE0RDtBQUMxRFEscUJBQWlCLEdBQUdPLGtEQUFwQjtBQUNEOztBQUNELE1BQUlmLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCUSxxQkFBaUIsR0FBR0MsOENBQXBCO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsc0VBQUQ7QUFBZSxXQUFLLEVBQUVPLG1EQUF0QjtBQUFBLDhCQUVFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLHFFQUFDLDJEQUFEO0FBQWtCLGdCQUFRLEVBQUUsQ0FBNUI7QUFBQSwrQkFDQSxxRUFBQyx1REFBRDtBQUFBLGlDQUNFLHFFQUFDLGlCQUFELG9CQUF1QmpCLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztHQTdDdUJILEs7VUFpQlBlLHNEOzs7S0FqQk9mLEs7QUErQ3hCQSxLQUFLLENBQUNxQixTQUFOLEdBQWtCO0FBQ2hCbkIsV0FBUyxFQUFFb0IsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFEakI7QUFFaEJyQixXQUFTLEVBQUVtQixpREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUZaLENBQWxCIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIb21lIGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vZGFzaGJvYXJkJztcbmltcG9ydCBBZG1pbiBmcm9tICcuL2FkbWluJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zcmMvdGhlbWUnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyLCB1c2VBdXRoIH0gZnJvbSAnLi4vbGliL2F1dGgnXG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi9saWIvZmlyZWJhc2UnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIGxldCB0eXBlID0gMDtcbiAgLy8gY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIGxldCBhbGxvd2VkID0gZmFsc2U7XG4gIC8vIGxldCBDb21wb25lbnRUb1JlbmRlciA9IGFsbG93ZWQgPyBBZG1pbiA6IERhc2hib2FyZDtcbiAgbGV0IENvbXBvbmVudFRvUmVuZGVyID0gSG9tZSBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGlmIChyb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hZG1pblwiKSAmJiB0eXBlID09PSAxKSB7XG4gICAgQ29tcG9uZW50VG9SZW5kZXIgPSBBZG1pblxuICB9XG4gIGlmIChyb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9kYXNoYm9hcmRcIikgJiYgdHlwZSA9PT0gMCkge1xuICAgIENvbXBvbmVudFRvUmVuZGVyID0gRGFzaGJvYXJkXG4gIH1cbiAgaWYgKHR5cGUgPT09IG51bGwgKXtcbiAgICBDb21wb25lbnRUb1JlbmRlciA9IEhvbWVcbiAgfSBcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2FpcmFtIEVuZ2luZWVyaW5nIENvbGxlZ2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8U25hY2tiYXJQcm92aWRlciBtYXhTbmFjaz17Mn0+XG4gICAgICAgIDxBdXRoUHJvdmlkZXIgPlxuICAgICAgICAgIDxDb21wb25lbnRUb1JlbmRlciB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICAgICAgPC9TbmFja2JhclByb3ZpZGVyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbk15QXBwLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})