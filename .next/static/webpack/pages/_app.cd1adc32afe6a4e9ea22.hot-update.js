webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony import */ var _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./db */ \"./lib/db.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/pacman/Desktop/nextjs/lib/auth.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\n\nvar authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__[\"createContext\"])();\nfunction AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var auth = useFirebaseAuth();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(authContext.Provider, {\n    value: auth,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 10\n  }, this);\n}\n\n_s(AuthProvider, \"0F2maWCBqtBnPg5uxJOzptuh0jA=\", false, function () {\n  return [useFirebaseAuth];\n});\n\n_c = AuthProvider;\nvar useAuth = function useAuth() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(authContext);\n};\n\n_s2(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nfunction useFirebaseAuth() {\n  _s3();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_8__[\"useSnackbar\"])(),\n      enqueueSnackbar = _useSnackbar.enqueueSnackbar;\n\n  var firestore = _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].firestore();\n\n  var handleUser = /*#__PURE__*/function () {\n    var _ref2 = Object(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(rawUser) {\n      var _user, token, userWithoutToken;\n\n      return _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!rawUser) {\n                _context.next = 11;\n                break;\n              }\n\n              _context.next = 3;\n              return formatUser(rawUser);\n\n            case 3:\n              _user = _context.sent;\n              token = _user.token, userWithoutToken = Object(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_user, [\"token\"]);\n              Object(_db__WEBPACK_IMPORTED_MODULE_7__[\"createUser\"])(_user.uid, userWithoutToken);\n              setUser(_user);\n              setLoading(false);\n              return _context.abrupt(\"return\", _user);\n\n            case 11:\n              setUser(false);\n              setLoading(false);\n              return _context.abrupt(\"return\", false);\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleUser(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var signupWithEmail = function signupWithEmail(email, password, firstName, type, lastName, cid, years, redirect) {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().createUserWithEmailAndPassword(email, password).then(function (response) {\n      firestore.collection('users').doc(response.user.uid).set({\n        first_name: firstName,\n        last_name: lastName,\n        type: type,\n        cid: cid,\n        years: years\n      });\n      handleUser(response.user);\n      enqueueSnackbar(\"Registration successful (Set password for your account using forgot password link in signin page)\", {\n        variant: 'success'\n      });\n\n      if (redirect) {\n        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(redirect);\n      }\n    })[\"catch\"](function (err) {\n      enqueueSnackbar(err.message, {\n        variant: 'error'\n      });\n    });\n  };\n\n  var resetPassword = function resetPassword(email) {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().sendPasswordResetEmail(email).then(function (response) {\n      enqueueSnackbar('Email sucessfully sent to the registered mail', {\n        variant: 'success'\n      });\n    })[\"catch\"](function (err) {\n      enqueueSnackbar(err.message, {\n        variant: \"error\"\n      });\n    });\n  };\n\n  var signinWithEmail = function signinWithEmail(email, password, redirect) {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signInWithEmailAndPassword(email, password).then(function (response) {\n      handleUser(response.user);\n      _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().onAuthStateChanged(function (user) {\n        if (user) {\n          _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].firestore().collection('users').doc(user.uid).get().then(function (doc) {\n            var type = doc.data().type;\n\n            if (type === 0) {\n              next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/dashboard');\n            }\n\n            if (type === 1) {\n              next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin');\n            }\n          });\n        } else {\n          setType(null);\n        }\n      });\n      enqueueSnackbar(\"Welcome back\", {\n        variant: 'success'\n      });\n\n      if (redirect) {\n        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(redirect);\n      }\n    })[\"catch\"](function (e) {\n      enqueueSnackbar(e.message, {\n        variant: 'error'\n      });\n    });\n  };\n\n  var signinWithGoogle = function signinWithGoogle(redirect) {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signInWithPopup(new _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth.GoogleAuthProvider()).then(function (response) {\n      handleUser(response.user);\n\n      if (redirect) {\n        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(redirect);\n      }\n    });\n  };\n\n  var signout = function signout() {\n    return _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signOut().then(function () {\n      handleUser(false);\n\n      if (user.emailVerified) {\n        enqueueSnackbar(\"User successfully logged out\", {\n          variant: 'success'\n        });\n        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/signin');\n      }\n    })[\"catch\"](function (e) {\n      enqueueSnackbar(e.message, {\n        variant: 'error'\n      });\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var unsubscribe = _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().onIdTokenChanged(handleUser);\n    return function () {\n      return unsubscribe();\n    };\n  }, []);\n\n  var getFreshToken = /*#__PURE__*/function () {\n    var _ref3 = Object(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var currentUser, token;\n      return _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log('getFreshToken called', new Date());\n              currentUser = _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().currentUser;\n\n              if (!currentUser) {\n                _context2.next = 9;\n                break;\n              }\n\n              _context2.next = 5;\n              return currentUser.getIdToken(false);\n\n            case 5:\n              token = _context2.sent;\n              return _context2.abrupt(\"return\", \"\".concat(token));\n\n            case 9:\n              return _context2.abrupt(\"return\", '');\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getFreshToken() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return {\n    user: user,\n    loading: loading,\n    signinWithEmail: signinWithEmail,\n    signinWithGoogle: signinWithGoogle,\n    signout: signout,\n    resetPassword: resetPassword,\n    getFreshToken: getFreshToken,\n    signupWithEmail: signupWithEmail\n  };\n}\n\n_s3(useFirebaseAuth, \"RMUc8taOuKtYuWUIJi0NnhsWsKw=\", false, function () {\n  return [notistack__WEBPACK_IMPORTED_MODULE_8__[\"useSnackbar\"]];\n});\n\nvar formatUser = /*#__PURE__*/function () {\n  var _ref4 = Object(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(user) {\n    var decodedToken, token, expirationTime;\n    return _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return user.getIdTokenResult(\n            /*forceRefresh*/\n            true);\n\n          case 2:\n            decodedToken = _context3.sent;\n            token = decodedToken.token, expirationTime = decodedToken.expirationTime; // console.log(token);\n\n            return _context3.abrupt(\"return\", {\n              uid: user.uid,\n              email: user.email,\n              name: user.displayName,\n              provider: user.providerData[0].providerId,\n              photoUrl: user.photoURL,\n              emailVerified: user.emailVerified,\n              token: token,\n              expirationTime: expirationTime // stripeRole: await getStripeRole(),\n\n            });\n\n          case 5:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function formatUser(_x2) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2F1dGguanM/MzI0ZiJdLCJuYW1lcyI6WyJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VGaXJlYmFzZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiZmlyZXN0b3JlIiwiZmlyZWJhc2UiLCJoYW5kbGVVc2VyIiwicmF3VXNlciIsImZvcm1hdFVzZXIiLCJ0b2tlbiIsInVzZXJXaXRob3V0VG9rZW4iLCJjcmVhdGVVc2VyIiwidWlkIiwic2lnbnVwV2l0aEVtYWlsIiwiZW1haWwiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsInR5cGUiLCJsYXN0TmFtZSIsImNpZCIsInllYXJzIiwicmVkaXJlY3QiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb2xsZWN0aW9uIiwiZG9jIiwic2V0IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInZhcmlhbnQiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyIiwibWVzc2FnZSIsInJlc2V0UGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwic2lnbmluV2l0aEVtYWlsIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJnZXQiLCJkYXRhIiwic2V0VHlwZSIsImUiLCJzaWduaW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aFBvcHVwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbm91dCIsInNpZ25PdXQiLCJlbWFpbFZlcmlmaWVkIiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbklkVG9rZW5DaGFuZ2VkIiwiZ2V0RnJlc2hUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiY3VycmVudFVzZXIiLCJnZXRJZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImRlY29kZWRUb2tlbiIsImV4cGlyYXRpb25UaW1lIiwibmFtZSIsImRpc3BsYXlOYW1lIiwicHJvdmlkZXIiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwicGhvdG9VcmwiLCJwaG90b1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFTyxTQUFTQyxZQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3pDLE1BQU1DLElBQUksR0FBR0MsZUFBZSxFQUE1QjtBQUNBLHNCQUFPLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRUQsSUFBN0I7QUFBQSxjQUFvQ0Q7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBSGVELFk7VUFDREcsZTs7O0tBRENILFk7QUFLVCxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQzNCLFNBQU9DLHdEQUFVLENBQUNQLFdBQUQsQ0FBakI7QUFDRCxDQUZNOztJQUFNTSxPOztBQUliLFNBQVNELGVBQVQsR0FBMkI7QUFBQTs7QUFBQSxrQkFDREcsc0RBQVEsQ0FBQyxJQUFELENBRFA7QUFBQSxNQUNsQkMsSUFEa0I7QUFBQSxNQUNaQyxPQURZOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLElBQUQsQ0FGYjtBQUFBLE1BRWxCRyxPQUZrQjtBQUFBLE1BRVRDLFVBRlM7O0FBQUEscUJBR0dDLDZEQUFXLEVBSGQ7QUFBQSxNQUdqQkMsZUFIaUIsZ0JBR2pCQSxlQUhpQjs7QUFLekIsTUFBTUMsU0FBUyxHQUFHQyxpREFBUSxDQUFDRCxTQUFULEVBQWxCOztBQUVBLE1BQU1FLFVBQVU7QUFBQSxxVEFBRyxpQkFBT0MsT0FBUDtBQUFBOztB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QUFRLEVBQUVyRSxJQUFJLENBQUNzRSxRQUxWO0FBTUxuQiwyQkFBYSxFQUFFbkQsSUFBSSxDQUFDbUQsYUFOZjtBQU9MeEMsbUJBQUssRUFBTEEsS0FQSztBQVFMb0QsNEJBQWMsRUFBZEEsY0FSSyxDQVNMOztBQVRLLGFBTFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVnJELFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEIiLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi9maXJlYmFzZSc7XG5pbXBvcnQgeyBjcmVhdGVVc2VyIH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBhdXRoID0gdXNlRmlyZWJhc2VBdXRoKCk7XG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbn07XG5cbmZ1bmN0aW9uIHVzZUZpcmViYXNlQXV0aCgpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcblxuICBjb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcblxuICBjb25zdCBoYW5kbGVVc2VyID0gYXN5bmMgKHJhd1VzZXIpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnaGFuZGxlVXNlciBjYWxsZWQnLCBuZXcgRGF0ZSgpLCByYXdVc2VyKTtcbiAgICBpZiAocmF3VXNlcikge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGZvcm1hdFVzZXIocmF3VXNlcik7XG4gICAgICBjb25zdCB7IHRva2VuLCAuLi51c2VyV2l0aG91dFRva2VuIH0gPSB1c2VyO1xuXG4gICAgICBjcmVhdGVVc2VyKHVzZXIudWlkLCB1c2VyV2l0aG91dFRva2VuKTtcbiAgICAgIHNldFVzZXIodXNlcik7XG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVzZXIoZmFsc2UpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNpZ251cFdpdGhFbWFpbCA9IChlbWFpbCwgcGFzc3dvcmQsIGZpcnN0TmFtZSwgdHlwZSwgbGFzdE5hbWUsIGNpZCwgeWVhcnMsIHJlZGlyZWN0KSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICByZXR1cm4gZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhyZXNwb25zZS51c2VyLnVpZClcbiAgICAgICAgLnNldCh7XG4gICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgIGxhc3RfbmFtZTogbGFzdE5hbWUsXG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBjaWQ6IGNpZCxcbiAgICAgICAgICB5ZWFyczogeWVhcnNcbiAgICAgICAgfSlcbiAgICAgICAgaGFuZGxlVXNlcihyZXNwb25zZS51c2VyKTtcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgKFNldCBwYXNzd29yZCBmb3IgeW91ciBhY2NvdW50IHVzaW5nIGZvcmdvdCBwYXNzd29yZCBsaW5rIGluIHNpZ25pbiBwYWdlKVwiLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJ30pXG4gICAgXG4gICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgIFJvdXRlci5wdXNoKHJlZGlyZWN0KTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGVucXVldWVTbmFja2JhcihlcnIubWVzc2FnZSwge3ZhcmlhbnQgIDonZXJyb3InfSlcbiAgICB9KTtcbiAgICBcbiAgfVxuXG4gIGNvbnN0IHJlc2V0UGFzc3dvcmQgPSAoIGVtYWlsICkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICByZXR1cm4gZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGVucXVldWVTbmFja2JhcignRW1haWwgc3VjZXNzZnVsbHkgc2VudCB0byB0aGUgcmVnaXN0ZXJlZCBtYWlsJyx7dmFyaWFudDogJ3N1Y2Nlc3MnfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKGVyci5tZXNzYWdlLHt2YXJpYW50OlwiZXJyb3JcIn0pXG4gICAgICB9KVxuICB9XG5cblxuICBjb25zdCBzaWduaW5XaXRoRW1haWwgPSAoZW1haWwsIHBhc3N3b3JkLCByZWRpcmVjdCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgcmV0dXJuIGZpcmViYXNlXG4gICAgICAuYXV0aCgpXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGhhbmRsZVVzZXIocmVzcG9uc2UudXNlcik7XG4gICAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbih1c2VyKSB7XG5cbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ3VzZXJzJylcbiAgICAgICAgICAgICAgICAuZG9jKHVzZXIudWlkKVxuICAgICAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgICAgIC50aGVuKChkb2MpPT57XG4gICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGRvYy5kYXRhKCkudHlwZVxuICAgICAgICAgICAgICAgICAgaWYodHlwZT09PTApe1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZih0eXBlID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbicpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRUeXBlKG51bGwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KTtcblxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoXCJXZWxjb21lIGJhY2tcIiwgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KVxuICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICBSb3V0ZXIucHVzaChyZWRpcmVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpPT57XG4gICAgICAgIGVucXVldWVTbmFja2JhcihlLm1lc3NhZ2UsIHt2YXJpYW50ICA6J2Vycm9yJ30pXG4gICAgICB9KTtcbiAgfTtcblxuXG4gIGNvbnN0IHNpZ25pbldpdGhHb29nbGUgPSAocmVkaXJlY3QpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHJldHVybiBmaXJlYmFzZVxuICAgICAgLmF1dGgoKVxuICAgICAgLnNpZ25JbldpdGhQb3B1cChuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBoYW5kbGVVc2VyKHJlc3BvbnNlLnVzZXIpO1xuXG4gICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgIFJvdXRlci5wdXNoKHJlZGlyZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcbiAgICByZXR1cm4gZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zaWduT3V0KClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaGFuZGxlVXNlcihmYWxzZSlcbiAgICAgICAgaWYodXNlci5lbWFpbFZlcmlmaWVkKXtcbiAgICAgICAgICBlbnF1ZXVlU25hY2tiYXIoXCJVc2VyIHN1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0XCIsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSk7XG4gICAgICAgICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKT0+e1xuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoZS5tZXNzYWdlLCB7dmFyaWFudCAgOidlcnJvcid9KVxuICAgICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlLmF1dGgoKS5vbklkVG9rZW5DaGFuZ2VkKGhhbmRsZVVzZXIpO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG5cblxuICBjb25zdCBnZXRGcmVzaFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdnZXRGcmVzaFRva2VuIGNhbGxlZCcsIG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xuICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBjdXJyZW50VXNlci5nZXRJZFRva2VuKGZhbHNlKTtcbiAgICAgIHJldHVybiBgJHt0b2tlbn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgICBsb2FkaW5nLFxuICAgIHNpZ25pbldpdGhFbWFpbCxcbiAgICBzaWduaW5XaXRoR29vZ2xlLFxuICAgIHNpZ25vdXQsXG4gICAgcmVzZXRQYXNzd29yZCxcbiAgICBnZXRGcmVzaFRva2VuLFxuICAgIHNpZ251cFdpdGhFbWFpbFxuICB9O1xufVxuXG5cbmNvbnN0IGZvcm1hdFVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xuICAvLyBjb25zdCB0b2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlbigvKiBmb3JjZVJlZnJlc2ggKi8gdHJ1ZSk7XG4gIGNvbnN0IGRlY29kZWRUb2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlblJlc3VsdCgvKmZvcmNlUmVmcmVzaCovIHRydWUpO1xuICBjb25zdCB7IHRva2VuLCBleHBpcmF0aW9uVGltZSB9ID0gZGVjb2RlZFRva2VuO1xuICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XG4gIHJldHVybiB7XG4gICAgdWlkOiB1c2VyLnVpZCxcbiAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICBuYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxuICAgIHByb3ZpZGVyOiB1c2VyLnByb3ZpZGVyRGF0YVswXS5wcm92aWRlcklkLFxuICAgIHBob3RvVXJsOiB1c2VyLnBob3RvVVJMLFxuICAgIGVtYWlsVmVyaWZpZWQ6IHVzZXIuZW1haWxWZXJpZmllZCxcbiAgICB0b2tlbixcbiAgICBleHBpcmF0aW9uVGltZSxcbiAgICAvLyBzdHJpcGVSb2xlOiBhd2FpdCBnZXRTdHJpcGVSb2xlKCksXG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ })

})