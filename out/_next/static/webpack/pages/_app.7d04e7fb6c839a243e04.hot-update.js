webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony import */ var _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./db */ \"./lib/db.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/pacman/Desktop/nextjs/lib/auth.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\n\nvar authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__[\"createContext\"])();\nfunction AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var auth = useFirebaseAuth();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(authContext.Provider, {\n    value: auth,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 10\n  }, this);\n}\n\n_s(AuthProvider, \"0F2maWCBqtBnPg5uxJOzptuh0jA=\", false, function () {\n  return [useFirebaseAuth];\n});\n\n_c = AuthProvider;\nvar useAuth = function useAuth() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(authContext);\n};\n\n_s2(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nfunction useFirebaseAuth() {\n  _s3();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_8__[\"useSnackbar\"])(),\n      enqueueSnackbar = _useSnackbar.enqueueSnackbar;\n\n  var firestore = _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].firestore();\n\n  var handleUser = /*#__PURE__*/function () {\n    var _ref2 = Object(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(rawUser) {\n      var _user, token, userWithoutToken;\n\n      return _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!rawUser) {\n                _context.next = 11;\n                break;\n              }\n\n              _context.next = 3;\n              return formatUser(rawUser);\n\n            case 3:\n              _user = _context.sent;\n              token = _user.token, userWithoutToken = Object(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_user, [\"token\"]);\n              Object(_db__WEBPACK_IMPORTED_MODULE_7__[\"createUser\"])(_user.uid, userWithoutToken);\n              setUser(_user);\n              setLoading(false);\n              return _context.abrupt(\"return\", _user);\n\n            case 11:\n              setUser(false);\n              setLoading(false);\n              return _context.abrupt(\"return\", false);\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleUser(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var signupWithEmail = function signupWithEmail(email, password, firstName, type, lastName, cid, years, redirect) {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().createUserWithEmailAndPassword(email, password).then(function (response) {\n      firestore.collection('users').doc(response.user.uid).set({\n        first_name: firstName,\n        last_name: lastName,\n        type: type,\n        cid: cid,\n        years: years\n      });\n      handleUser(response.user);\n      enqueueSnackbar(\"Registration successful (Set password for your account using reset password link in Login page)\", {\n        variant: 'success'\n      }); // signout();\n      // Router.push('/signin');\n\n      if (redirect) {\n        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(redirect);\n      }\n    })[\"catch\"](function (err) {\n      enqueueSnackbar(err.message, {\n        variant: 'error'\n      });\n    });\n  };\n\n  var resetPassword = function resetPassword(email) {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().sendPasswordResetEmail(email).then(function (response) {\n      enqueueSnackbar('Email sucessfully sent to the registered mail', {\n        variant: 'success'\n      });\n    })[\"catch\"](function (err) {\n      enqueueSnackbar(err.message, {\n        variant: \"error\"\n      });\n    });\n  };\n\n  var signinWithEmail = function signinWithEmail(email, password, redirect) {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signInWithEmailAndPassword(email, password).then(function (response) {\n      handleUser(response.user);\n\n      if (response.user) {\n        _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].firestore().collection('users').doc(response.user.uid).get().then(function (doc) {\n          var type = doc.data().type;\n\n          if (type === 0) {\n            next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/dashboard');\n          }\n\n          if (type === 1) {\n            next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin');\n          }\n        });\n      } else {\n        setType(null);\n      }\n\n      enqueueSnackbar(\"Welcome back\", {\n        variant: 'success'\n      });\n\n      if (redirect) {\n        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(redirect);\n      }\n    })[\"catch\"](function (e) {\n      enqueueSnackbar(e.message, {\n        variant: 'error'\n      });\n    });\n  };\n\n  var signinWithGoogle = function signinWithGoogle(redirect) {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signInWithPopup(new _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth.GoogleAuthProvider()).then(function (response) {\n      handleUser(response.user);\n\n      if (redirect) {\n        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(redirect);\n      }\n    });\n  };\n\n  var signout = function signout() {\n    return _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signOut().then(function () {\n      handleUser(false);\n\n      if (user.emailVerified) {\n        enqueueSnackbar(\"User successfully logged out\", {\n          variant: 'success'\n        });\n        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/signin');\n      }\n    })[\"catch\"](function (e) {\n      enqueueSnackbar(e.message, {\n        variant: 'error'\n      });\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var unsubscribe = _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().onIdTokenChanged(handleUser);\n    return function () {\n      return unsubscribe();\n    };\n  }, []);\n\n  var getFreshToken = /*#__PURE__*/function () {\n    var _ref3 = Object(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var currentUser, token;\n      return _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log('getFreshToken called', new Date());\n              currentUser = _firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().currentUser;\n\n              if (!currentUser) {\n                _context2.next = 9;\n                break;\n              }\n\n              _context2.next = 5;\n              return currentUser.getIdToken(false);\n\n            case 5:\n              token = _context2.sent;\n              return _context2.abrupt(\"return\", \"\".concat(token));\n\n            case 9:\n              return _context2.abrupt(\"return\", '');\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getFreshToken() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return {\n    user: user,\n    loading: loading,\n    signinWithEmail: signinWithEmail,\n    signinWithGoogle: signinWithGoogle,\n    signout: signout,\n    resetPassword: resetPassword,\n    getFreshToken: getFreshToken,\n    signupWithEmail: signupWithEmail\n  };\n}\n\n_s3(useFirebaseAuth, \"RMUc8taOuKtYuWUIJi0NnhsWsKw=\", false, function () {\n  return [notistack__WEBPACK_IMPORTED_MODULE_8__[\"useSnackbar\"]];\n});\n\nvar formatUser = /*#__PURE__*/function () {\n  var _ref4 = Object(_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(user) {\n    var decodedToken, token, expirationTime;\n    return _home_pacman_Desktop_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return user.getIdTokenResult(\n            /*forceRefresh*/\n            true);\n\n          case 2:\n            decodedToken = _context3.sent;\n            token = decodedToken.token, expirationTime = decodedToken.expirationTime; // console.log(token);\n\n            return _context3.abrupt(\"return\", {\n              uid: user.uid,\n              email: user.email,\n              name: user.displayName,\n              provider: user.providerData[0].providerId,\n              photoUrl: user.photoURL,\n              emailVerified: user.emailVerified,\n              token: token,\n              expirationTime: expirationTime // stripeRole: await getStripeRole(),\n\n            });\n\n          case 5:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function formatUser(_x2) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2F1dGguanM/MzI0ZiJdLCJuYW1lcyI6WyJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VGaXJlYmFzZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiZmlyZXN0b3JlIiwiZmlyZWJhc2UiLCJoYW5kbGVVc2VyIiwicmF3VXNlciIsImZvcm1hdFVzZXIiLCJ0b2tlbiIsInVzZXJXaXRob3V0VG9rZW4iLCJjcmVhdGVVc2VyIiwidWlkIiwic2lnbnVwV2l0aEVtYWlsIiwiZW1haWwiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsInR5cGUiLCJsYXN0TmFtZSIsImNpZCIsInllYXJzIiwicmVkaXJlY3QiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb2xsZWN0aW9uIiwiZG9jIiwic2V0IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInZhcmlhbnQiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyIiwibWVzc2FnZSIsInJlc2V0UGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwic2lnbmluV2l0aEVtYWlsIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnZXQiLCJkYXRhIiwic2V0VHlwZSIsImUiLCJzaWduaW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aFBvcHVwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbm91dCIsInNpZ25PdXQiLCJlbWFpbFZlcmlmaWVkIiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbklkVG9rZW5DaGFuZ2VkIiwiZ2V0RnJlc2hUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiY3VycmVudFVzZXIiLCJnZXRJZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImRlY29kZWRUb2tlbiIsImV4cGlyYXRpb25UaW1lIiwibmFtZSIsImRpc3BsYXlOYW1lIiwicHJvdmlkZXIiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwicGhvdG9VcmwiLCJwaG90b1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFTyxTQUFTQyxZQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3pDLE1BQU1DLElBQUksR0FBR0MsZUFBZSxFQUE1QjtBQUNBLHNCQUFPLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRUQsSUFBN0I7QUFBQSxjQUFvQ0Q7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBSGVELFk7VUFDREcsZTs7O0tBRENILFk7QUFLVCxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQzNCLFNBQU9DLHdEQUFVLENBQUNQLFdBQUQsQ0FBakI7QUFDRCxDQUZNOztJQUFNTSxPOztBQUliLFNBQVNELGVBQVQsR0FBMkI7QUFBQTs7QUFBQSxrQkFDREcsc0RBQVEsQ0FBQyxJQUFELENBRFA7QUFBQSxNQUNsQkMsSUFEa0I7QUFBQSxNQUNaQyxPQURZOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLElBQUQsQ0FGYjtBQUFBLE1BRWxCRyxPQUZrQjtBQUFBLE1BRVRDLFVBRlM7O0FBQUEscUJBR0dDLDZEQUFXLEVBSGQ7QUFBQSxNQUdqQkMsZUFIaUIsZ0JBR2pCQSxlQUhpQjs7QUFLekIsTUFBTUMsU0FBUyxHQUFHQyxpREFBUSxDQUFDRCxTQUFULEVBQWxCOztBQUVBLE1BQU1FLFVBQVU7QUFBQSxxVEFBRyxpQkFBT0MsT0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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Q0FBQ2tELGFBTmY7QUFPTHZDLG1CQUFLLEVBQUxBLEtBUEs7QUFRTG1ELDRCQUFjLEVBQWRBLGNBUkssQ0FTTDs7QUFUSyxhQUxVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZwRCxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCIiwiZmlsZSI6Ii4vbGliL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgY3JlYXRlVXNlciB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZUZpcmViYXNlQXV0aCgpO1xuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XG59O1xuXG5mdW5jdGlvbiB1c2VGaXJlYmFzZUF1dGgoKSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XG5cbiAgY29uc3QgZmlyZXN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5cbiAgY29uc3QgaGFuZGxlVXNlciA9IGFzeW5jIChyYXdVc2VyKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hhbmRsZVVzZXIgY2FsbGVkJywgbmV3IERhdGUoKSwgcmF3VXNlcik7XG4gICAgaWYgKHJhd1VzZXIpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmb3JtYXRVc2VyKHJhd1VzZXIpO1xuICAgICAgY29uc3QgeyB0b2tlbiwgLi4udXNlcldpdGhvdXRUb2tlbiB9ID0gdXNlcjtcblxuICAgICAgY3JlYXRlVXNlcih1c2VyLnVpZCwgdXNlcldpdGhvdXRUb2tlbik7XG4gICAgICBzZXRVc2VyKHVzZXIpO1xuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVc2VyKGZhbHNlKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaWdudXBXaXRoRW1haWwgPSAoZW1haWwsIHBhc3N3b3JkLCBmaXJzdE5hbWUsIHR5cGUsIGxhc3ROYW1lLCBjaWQsIHllYXJzLCByZWRpcmVjdCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgcmV0dXJuIGZpcmViYXNlXG4gICAgICAuYXV0aCgpXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBmaXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MocmVzcG9uc2UudXNlci51aWQpXG4gICAgICAgIC5zZXQoe1xuICAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZSxcbiAgICAgICAgICBsYXN0X25hbWU6IGxhc3ROYW1lLFxuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgY2lkOiBjaWQsXG4gICAgICAgICAgeWVhcnM6IHllYXJzXG4gICAgICAgIH0pXG4gICAgICAgIGhhbmRsZVVzZXIocmVzcG9uc2UudXNlcik7XG4gICAgICAgIGVucXVldWVTbmFja2JhcihcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIChTZXQgcGFzc3dvcmQgZm9yIHlvdXIgYWNjb3VudCB1c2luZyByZXNldCBwYXNzd29yZCBsaW5rIGluIExvZ2luIHBhZ2UpXCIsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcbiAgICAgICAgLy8gc2lnbm91dCgpO1xuICAgICAgICAvLyBSb3V0ZXIucHVzaCgnL3NpZ25pbicpO1xuICAgIFxuICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICBSb3V0ZXIucHVzaChyZWRpcmVjdCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBlbnF1ZXVlU25hY2tiYXIoZXJyLm1lc3NhZ2UsIHt2YXJpYW50ICA6J2Vycm9yJ30pXG4gICAgfSk7XG4gICAgXG4gIH07XG5cbiAgY29uc3QgcmVzZXRQYXNzd29yZCA9ICggZW1haWwgKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIHJldHVybiBmaXJlYmFzZVxuICAgICAgLmF1dGgoKVxuICAgICAgLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdFbWFpbCBzdWNlc3NmdWxseSBzZW50IHRvIHRoZSByZWdpc3RlcmVkIG1haWwnLHt2YXJpYW50OiAnc3VjY2Vzcyd9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoZXJyLm1lc3NhZ2Use3ZhcmlhbnQ6XCJlcnJvclwifSlcbiAgICAgIH0pXG4gIH1cblxuXG4gIGNvbnN0IHNpZ25pbldpdGhFbWFpbCA9IChlbWFpbCwgcGFzc3dvcmQsIHJlZGlyZWN0KSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICByZXR1cm4gZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaGFuZGxlVXNlcihyZXNwb25zZS51c2VyKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS51c2VyKSB7XG4gICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ3VzZXJzJylcbiAgICAgICAgICAgICAgICAuZG9jKHJlc3BvbnNlLnVzZXIudWlkKVxuICAgICAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgICAgIC50aGVuKChkb2MpPT57XG4gICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGRvYy5kYXRhKCkudHlwZVxuICAgICAgICAgICAgICAgICAgaWYodHlwZT09PTApe1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZih0eXBlID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbicpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRUeXBlKG51bGwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiV2VsY29tZSBiYWNrXCIsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcbiAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgUm91dGVyLnB1c2gocmVkaXJlY3QpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKT0+e1xuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoZS5tZXNzYWdlLCB7dmFyaWFudCAgOidlcnJvcid9KVxuICAgICAgfSk7XG4gIH07XG5cblxuICBjb25zdCBzaWduaW5XaXRoR29vZ2xlID0gKHJlZGlyZWN0KSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICByZXR1cm4gZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zaWduSW5XaXRoUG9wdXAobmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaGFuZGxlVXNlcihyZXNwb25zZS51c2VyKTtcblxuICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICBSb3V0ZXIucHVzaChyZWRpcmVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZpcmViYXNlXG4gICAgICAuYXV0aCgpXG4gICAgICAuc2lnbk91dCgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGhhbmRsZVVzZXIoZmFsc2UpXG4gICAgICAgIGlmKHVzZXIuZW1haWxWZXJpZmllZCl7XG4gICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiVXNlciBzdWNjZXNzZnVsbHkgbG9nZ2VkIG91dFwiLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJ30pO1xuICAgICAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSk9PntcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKGUubWVzc2FnZSwge3ZhcmlhbnQgIDonZXJyb3InfSlcbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBmaXJlYmFzZS5hdXRoKCkub25JZFRva2VuQ2hhbmdlZChoYW5kbGVVc2VyKTtcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgfSwgW10pO1xuXG5cbiAgY29uc3QgZ2V0RnJlc2hUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZ2V0RnJlc2hUb2tlbiBjYWxsZWQnLCBuZXcgRGF0ZSgpKTtcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcbiAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgY3VycmVudFVzZXIuZ2V0SWRUb2tlbihmYWxzZSk7XG4gICAgICByZXR1cm4gYCR7dG9rZW59YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHVzZXIsXG4gICAgbG9hZGluZyxcbiAgICBzaWduaW5XaXRoRW1haWwsXG4gICAgc2lnbmluV2l0aEdvb2dsZSxcbiAgICBzaWdub3V0LFxuICAgIHJlc2V0UGFzc3dvcmQsXG4gICAgZ2V0RnJlc2hUb2tlbixcbiAgICBzaWdudXBXaXRoRW1haWxcbiAgfTtcbn1cblxuXG5jb25zdCBmb3JtYXRVc2VyID0gYXN5bmMgKHVzZXIpID0+IHtcbiAgLy8gY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW4oLyogZm9yY2VSZWZyZXNoICovIHRydWUpO1xuICBjb25zdCBkZWNvZGVkVG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW5SZXN1bHQoLypmb3JjZVJlZnJlc2gqLyB0cnVlKTtcbiAgY29uc3QgeyB0b2tlbiwgZXhwaXJhdGlvblRpbWUgfSA9IGRlY29kZWRUb2tlbjtcbiAgLy8gY29uc29sZS5sb2codG9rZW4pO1xuICByZXR1cm4ge1xuICAgIHVpZDogdXNlci51aWQsXG4gICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgbmFtZTogdXNlci5kaXNwbGF5TmFtZSxcbiAgICBwcm92aWRlcjogdXNlci5wcm92aWRlckRhdGFbMF0ucHJvdmlkZXJJZCxcbiAgICBwaG90b1VybDogdXNlci5waG90b1VSTCxcbiAgICBlbWFpbFZlcmlmaWVkOiB1c2VyLmVtYWlsVmVyaWZpZWQsXG4gICAgdG9rZW4sXG4gICAgZXhwaXJhdGlvblRpbWUsXG4gICAgLy8gc3RyaXBlUm9sZTogYXdhaXQgZ2V0U3RyaXBlUm9sZSgpLFxuICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ })

})