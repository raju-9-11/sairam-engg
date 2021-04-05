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

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db */ \"./lib/db.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notistack */ \"notistack\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/pacman/Desktop/nextjs/lib/auth.js\";\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nconst authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nfunction AuthProvider({\n  children\n}) {\n  const auth = useFirebaseAuth();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(authContext.Provider, {\n    value: auth,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 10\n  }, this);\n}\nconst useAuth = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(authContext);\n};\n\nfunction useFirebaseAuth() {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const {\n    enqueueSnackbar\n  } = Object(notistack__WEBPACK_IMPORTED_MODULE_5__[\"useSnackbar\"])();\n  const firestore = _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].firestore();\n\n  const handleUser = async rawUser => {\n    // console.log('handleUser called', new Date(), rawUser);\n    if (rawUser) {\n      const user = await formatUser(rawUser);\n\n      const {\n        token\n      } = user,\n            userWithoutToken = _objectWithoutProperties(user, [\"token\"]);\n\n      Object(_db__WEBPACK_IMPORTED_MODULE_4__[\"createUser\"])(user.uid, userWithoutToken);\n      setUser(user);\n      setLoading(false);\n      return user;\n    } else {\n      setUser(false);\n      setLoading(false);\n      return false;\n    }\n  };\n\n  const signupWithEmail = (email, password, firstName, type, lastName, cid, redirect) => {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().createUserWithEmailAndPassword(email, password).then(response => {\n      firestore.collection('users').doc(response.user.uid).set({\n        first_name: firstName,\n        last_name: lastName,\n        type: type,\n        cid: cid\n      });\n      handleUser(response.user);\n      enqueueSnackbar(\"Registration successful\", {\n        variant: 'success'\n      });\n\n      if (redirect) {\n        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(redirect);\n      }\n    }).catch(err => {\n      enqueueSnackbar(err.message, {\n        variant: 'error'\n      });\n    });\n  };\n\n  const signinWithEmail = (email, password, redirect) => {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signInWithEmailAndPassword(email, password).then(response => {\n      handleUser(response.user);\n      enqueueSnackbar(\"Welcome back\", {\n        variant: 'success'\n      });\n\n      if (redirect) {\n        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(redirect);\n      }\n    }).catch(e => {\n      enqueueSnackbar(e.message, {\n        variant: 'error'\n      });\n    });\n  };\n\n  const signinWithGoogle = redirect => {\n    setLoading(true);\n    return _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signInWithPopup(new _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth.GoogleAuthProvider()).then(response => {\n      handleUser(response.user);\n\n      if (redirect) {\n        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(redirect);\n      }\n    });\n  };\n\n  const signout = () => {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/signin');\n    return _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signOut().then(() => {\n      handleUser(false);\n      enqueueSnackbar(\"User successfully logged out\", {\n        variant: 'success'\n      });\n    }).catch(e => {\n      enqueueSnackbar(e.message, {\n        variant: 'error'\n      });\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const unsubscribe = _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().onIdTokenChanged(handleUser);\n    return () => unsubscribe();\n  }, []);\n\n  const getFreshToken = async () => {\n    console.log('getFreshToken called', new Date());\n    const currentUser = _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().currentUser;\n\n    if (currentUser) {\n      const token = await currentUser.getIdToken(false);\n      return `${token}`;\n    } else {\n      return '';\n    }\n  };\n\n  return {\n    user,\n    loading,\n    signinWithEmail,\n    signinWithGoogle,\n    signout,\n    getFreshToken,\n    signupWithEmail\n  };\n}\n\nconst formatUser = async user => {\n  // const token = await user.getIdToken(/* forceRefresh */ true);\n  const decodedToken = await user.getIdTokenResult(\n  /*forceRefresh*/\n  true);\n  const {\n    token,\n    expirationTime\n  } = decodedToken; // console.log(token);\n\n  return {\n    uid: user.uid,\n    email: user.email,\n    name: user.displayName,\n    provider: user.providerData[0].providerId,\n    photoUrl: user.photoURL,\n    token,\n    expirationTime // stripeRole: await getStripeRole(),\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aC5qcz8zMjRmIl0sIm5hbWVzIjpbImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aCIsInVzZUZpcmViYXNlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZW5xdWV1ZVNuYWNrYmFyIiwidXNlU25hY2tiYXIiLCJmaXJlc3RvcmUiLCJmaXJlYmFzZSIsImhhbmRsZVVzZXIiLCJyYXdVc2VyIiwiZm9ybWF0VXNlciIsInRva2VuIiwidXNlcldpdGhvdXRUb2tlbiIsImNyZWF0ZVVzZXIiLCJ1aWQiLCJzaWdudXBXaXRoRW1haWwiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmlyc3ROYW1lIiwidHlwZSIsImxhc3ROYW1lIiwiY2lkIiwicmVkaXJlY3QiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb2xsZWN0aW9uIiwiZG9jIiwic2V0IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInZhcmlhbnQiLCJSb3V0ZXIiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIiwic2lnbmluV2l0aEVtYWlsIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJlIiwic2lnbmluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25vdXQiLCJzaWduT3V0IiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbklkVG9rZW5DaGFuZ2VkIiwiZ2V0RnJlc2hUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiY3VycmVudFVzZXIiLCJnZXRJZFRva2VuIiwiZGVjb2RlZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImV4cGlyYXRpb25UaW1lIiwibmFtZSIsImRpc3BsYXlOYW1lIiwicHJvdmlkZXIiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwicGhvdG9VcmwiLCJwaG90b1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFTyxTQUFTQyxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBb0M7QUFDekMsUUFBTUMsSUFBSSxHQUFHQyxlQUFlLEVBQTVCO0FBQ0Esc0JBQU8scUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFRCxJQUE3QjtBQUFBLGNBQW9DRDtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtBQUVNLE1BQU1HLE9BQU8sR0FBRyxNQUFNO0FBQzNCLFNBQU9DLHdEQUFVLENBQUNQLFdBQUQsQ0FBakI7QUFDRCxDQUZNOztBQUlQLFNBQVNLLGVBQVQsR0FBMkI7QUFDekIsUUFBTTtBQUFBLE9BQUNHLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLElBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBRUc7QUFBRixNQUFzQkMsNkRBQVcsRUFBdkM7QUFFQSxRQUFNQyxTQUFTLEdBQUdDLGlEQUFRLENBQUNELFNBQVQsRUFBbEI7O0FBRUEsUUFBTUUsVUFBVSxHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDcEM7QUFDQSxRQUFJQSxPQUFKLEVBQWE7QUFDWCxZQUFNVixJQUFJLEdBQUcsTUFBTVcsVUFBVSxDQUFDRCxPQUFELENBQTdCOztBQUNBLFlBQU07QUFBRUU7QUFBRixVQUFpQ1osSUFBdkM7QUFBQSxZQUFrQmEsZ0JBQWxCLDRCQUF1Q2IsSUFBdkM7O0FBRUFjLDREQUFVLENBQUNkLElBQUksQ0FBQ2UsR0FBTixFQUFXRixnQkFBWCxDQUFWO0FB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QXNCO0FBQWlCLE1BQXZDLENBQTNCO0FBQ0EsUUFBTTtBQUFFNUMsU0FBRjtBQUFTNkM7QUFBVCxNQUE0QkYsWUFBbEMsQ0FIaUMsQ0FJakM7O0FBQ0EsU0FBTztBQUNMeEMsT0FBRyxFQUFFZixJQUFJLENBQUNlLEdBREw7QUFFTEUsU0FBSyxFQUFFakIsSUFBSSxDQUFDaUIsS0FGUDtBQUdMeUMsUUFBSSxFQUFFMUQsSUFBSSxDQUFDMkQsV0FITjtBQUlMQyxZQUFRLEVBQUU1RCxJQUFJLENBQUM2RCxZQUFMLENBQWtCLENBQWxCLEVBQXFCQyxVQUoxQjtBQUtMQyxZQUFRLEVBQUUvRCxJQUFJLENBQUNnRSxRQUxWO0FBTUxwRCxTQU5LO0FBT0w2QyxrQkFQSyxDQVFMOztBQVJLLEdBQVA7QUFVRCxDQWZEIiwiZmlsZSI6Ii4vbGliL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgY3JlYXRlVXNlciB9IGZyb20gJy4vZGInO1xuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZUZpcmViYXNlQXV0aCgpO1xuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XG59O1xuXG5mdW5jdGlvbiB1c2VGaXJlYmFzZUF1dGgoKSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XG5cbiAgY29uc3QgZmlyZXN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5cbiAgY29uc3QgaGFuZGxlVXNlciA9IGFzeW5jIChyYXdVc2VyKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hhbmRsZVVzZXIgY2FsbGVkJywgbmV3IERhdGUoKSwgcmF3VXNlcik7XG4gICAgaWYgKHJhd1VzZXIpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmb3JtYXRVc2VyKHJhd1VzZXIpO1xuICAgICAgY29uc3QgeyB0b2tlbiwgLi4udXNlcldpdGhvdXRUb2tlbiB9ID0gdXNlcjtcblxuICAgICAgY3JlYXRlVXNlcih1c2VyLnVpZCwgdXNlcldpdGhvdXRUb2tlbik7XG4gICAgICBzZXRVc2VyKHVzZXIpO1xuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVc2VyKGZhbHNlKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaWdudXBXaXRoRW1haWwgPSAoZW1haWwsIHBhc3N3b3JkLCBmaXJzdE5hbWUsIHR5cGUsIGxhc3ROYW1lLCBjaWQsIHJlZGlyZWN0KSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICByZXR1cm4gZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhyZXNwb25zZS51c2VyLnVpZClcbiAgICAgICAgLnNldCh7XG4gICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgIGxhc3RfbmFtZTogbGFzdE5hbWUsXG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBjaWQ6IGNpZCxcbiAgICAgICAgfSlcbiAgICAgICAgaGFuZGxlVXNlcihyZXNwb25zZS51c2VyKTtcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWxcIiwgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KVxuICAgIFxuICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICBSb3V0ZXIucHVzaChyZWRpcmVjdCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBlbnF1ZXVlU25hY2tiYXIoZXJyLm1lc3NhZ2UsIHt2YXJpYW50ICA6J2Vycm9yJ30pXG4gICAgfSk7XG4gICAgXG4gIH1cblxuICBjb25zdCBzaWduaW5XaXRoRW1haWwgPSAoZW1haWwsIHBhc3N3b3JkLCByZWRpcmVjdCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgcmV0dXJuIGZpcmViYXNlXG4gICAgICAuYXV0aCgpXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGhhbmRsZVVzZXIocmVzcG9uc2UudXNlcik7XG5cbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiV2VsY29tZSBiYWNrXCIsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcbiAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgUm91dGVyLnB1c2gocmVkaXJlY3QpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKT0+e1xuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoZS5tZXNzYWdlLCB7dmFyaWFudCAgOidlcnJvcid9KVxuICAgICAgfSk7XG4gIH07XG5cblxuICBjb25zdCBzaWduaW5XaXRoR29vZ2xlID0gKHJlZGlyZWN0KSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICByZXR1cm4gZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zaWduSW5XaXRoUG9wdXAobmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaGFuZGxlVXNlcihyZXNwb25zZS51c2VyKTtcblxuICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICBSb3V0ZXIucHVzaChyZWRpcmVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxuICAgIHJldHVybiBmaXJlYmFzZVxuICAgICAgLmF1dGgoKVxuICAgICAgLnNpZ25PdXQoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBoYW5kbGVVc2VyKGZhbHNlKVxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoXCJVc2VyIHN1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0XCIsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKT0+e1xuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoZS5tZXNzYWdlLCB7dmFyaWFudCAgOidlcnJvcid9KVxuICAgICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlLmF1dGgoKS5vbklkVG9rZW5DaGFuZ2VkKGhhbmRsZVVzZXIpO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG5cblxuICBjb25zdCBnZXRGcmVzaFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdnZXRGcmVzaFRva2VuIGNhbGxlZCcsIG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xuICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBjdXJyZW50VXNlci5nZXRJZFRva2VuKGZhbHNlKTtcbiAgICAgIHJldHVybiBgJHt0b2tlbn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgICBsb2FkaW5nLFxuICAgIHNpZ25pbldpdGhFbWFpbCxcbiAgICBzaWduaW5XaXRoR29vZ2xlLFxuICAgIHNpZ25vdXQsXG4gICAgZ2V0RnJlc2hUb2tlbixcbiAgICBzaWdudXBXaXRoRW1haWxcbiAgfTtcbn1cblxuXG5jb25zdCBmb3JtYXRVc2VyID0gYXN5bmMgKHVzZXIpID0+IHtcbiAgLy8gY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW4oLyogZm9yY2VSZWZyZXNoICovIHRydWUpO1xuICBjb25zdCBkZWNvZGVkVG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW5SZXN1bHQoLypmb3JjZVJlZnJlc2gqLyB0cnVlKTtcbiAgY29uc3QgeyB0b2tlbiwgZXhwaXJhdGlvblRpbWUgfSA9IGRlY29kZWRUb2tlbjtcbiAgLy8gY29uc29sZS5sb2codG9rZW4pO1xuICByZXR1cm4ge1xuICAgIHVpZDogdXNlci51aWQsXG4gICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgbmFtZTogdXNlci5kaXNwbGF5TmFtZSxcbiAgICBwcm92aWRlcjogdXNlci5wcm92aWRlckRhdGFbMF0ucHJvdmlkZXJJZCxcbiAgICBwaG90b1VybDogdXNlci5waG90b1VSTCxcbiAgICB0b2tlbixcbiAgICBleHBpcmF0aW9uVGltZSxcbiAgICAvLyBzdHJpcGVSb2xlOiBhd2FpdCBnZXRTdHJpcGVSb2xlKCksXG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: createUser, updateUser, getUserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUser\", function() { return updateUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserDetails\", function() { return getUserDetails; });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./lib/firebase.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst firestore = _firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firestore();\nasync function createUser(uid, data) {\n  return await firestore.collection('users').doc(uid).set(_objectSpread({\n    uid\n  }, data), {\n    merge: true\n  });\n}\nasync function updateUser(uid, data) {\n  return await firestore.collection('users').doc(uid).set(_objectSpread({\n    uid\n  }, data), {\n    merge: true\n  });\n}\nasync function getUserDetails(uid) {\n  return await firestore.collection('users').doc(uid).get();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGIuanM/YmI1MSJdLCJuYW1lcyI6WyJmaXJlc3RvcmUiLCJmaXJlYmFzZSIsImNyZWF0ZVVzZXIiLCJ1aWQiLCJkYXRhIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsIm1lcmdlIiwidXBkYXRlVXNlciIsImdldFVzZXJEZXRhaWxzIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsU0FBUyxHQUFHQyxpREFBUSxDQUFDRCxTQUFULEVBQWxCO0FBRU8sZUFBZUUsVUFBZixDQUEwQkMsR0FBMUIsRUFBK0JDLElBQS9CLEVBQXFDO0FBQzFDLFNBQU8sTUFBTUosU0FBUyxDQUNuQkssVUFEVSxDQUNDLE9BREQsRUFFVkMsR0FGVSxDQUVOSCxHQUZNLEVBR1ZJLEdBSFU7QUFHSko7QUFISSxLQUdJQyxJQUhKLEdBR1k7QUFBRUksU0FBSyxFQUFFO0FBQVQsR0FIWixDQUFiO0FBSUQ7QUFFTSxlQUFlQyxVQUFmLENBQTBCTixHQUExQixFQUErQkMsSUFBL0IsRUFBcUM7QUFDMUMsU0FBTyxNQUFNSixTQUFTLENBQ25CSyxVQURVLENBQ0MsT0FERCxFQUVWQyxHQUZVLENBRU5ILEdBRk0sRUFHVkksR0FIVTtBQUdKSjtBQUhJLEtBR0lDLElBSEosR0FHWTtBQUFFSSxTQUFLLEVBQUU7QUFBVCxHQUhaLENBQWI7QUFJRDtBQUdNLGVBQWVFLGNBQWYsQ0FBOEJQLEdBQTlCLEVBQW1DO0FBQ3hDLFNBQU8sTUFBTUgsU0FBUyxDQUNuQkssVUFEVSxDQUNDLE9BREQsRUFFVkMsR0FGVSxDQUVOSCxHQUZNLEVBR1ZRLEdBSFUsRUFBYjtBQUlEIiwiZmlsZSI6Ii4vbGliL2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJy4vZmlyZWJhc2UnO1xuY29uc3QgZmlyZXN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHVpZCwgZGF0YSkge1xuICByZXR1cm4gYXdhaXQgZmlyZXN0b3JlXG4gICAgLmNvbGxlY3Rpb24oJ3VzZXJzJylcbiAgICAuZG9jKHVpZClcbiAgICAuc2V0KHsgdWlkLCAuLi5kYXRhIH0sIHsgbWVyZ2U6IHRydWUgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVpZCwgZGF0YSkge1xuICByZXR1cm4gYXdhaXQgZmlyZXN0b3JlXG4gICAgLmNvbGxlY3Rpb24oJ3VzZXJzJylcbiAgICAuZG9jKHVpZClcbiAgICAuc2V0KHsgdWlkLCAuLi5kYXRhIH0sIHsgbWVyZ2U6IHRydWUgfSk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJEZXRhaWxzKHVpZCkge1xuICByZXR1cm4gYXdhaXQgZmlyZXN0b3JlXG4gICAgLmNvbGxlY3Rpb24oJ3VzZXJzJylcbiAgICAuZG9jKHVpZClcbiAgICAuZ2V0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n// import firebase from 'firebase';\n// require ('firebase/firestore');\n// var firebaseConfig = {\n//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,\n//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,\n//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,\n//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,\n//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,\n//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,\n//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID\n//   };\n//   // Initialize Firebase\n//   firebase.initializeApp(firebaseConfig);\n//   firebase.analytics();\n// var db = firebase.firestore();\n// export const auth = firebase.auth();\n// export const firestore = firebase.firestore;\n// export default db;\n\n\n\nconst clientCredentials = {\n  apiKey: \"AIzaSyAOUnIotxI917S3GWYkgAWDXFKnYuvTPTE\",\n  authDomain: \"sairam-engg.firebaseapp.com\",\n  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,\n  projectId: \"sairam-engg\",\n  appId: \"1:580952136500:web:f338df0ea3bdea001b2361\"\n};\n\nif (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(clientCredentials);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZmlyZWJhc2UuanM/NTNhMyJdLCJuYW1lcyI6WyJjbGllbnRDcmVkZW50aWFscyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9EQVRBQkFTRV9VUkwiLCJwcm9qZWN0SWQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUc7QUFDeEJDLFFBQU0sRUFBRUMseUNBRGdCO0FBRXhCQyxZQUFVLEVBQUVELDZCQUZZO0FBR3hCRSxhQUFXLEVBQUVGLE9BQU8sQ0FBQ0csR0FBUixDQUFZQyxpQ0FIRDtBQUl4QkMsV0FBUyxFQUFFTCxhQUphO0FBS3hCTSxPQUFLLEVBQUVOLDJDQUF1Q087QUFMdEIsQ0FBMUI7O0FBUUEsSUFBSSxDQUFDQyxtREFBUSxDQUFDQyxJQUFULENBQWNDLE1BQW5CLEVBQTJCO0FBQ3pCRixxREFBUSxDQUFDRyxhQUFULENBQXVCYixpQkFBdkI7QUFDRDs7QUFFY1Usa0hBQWYiLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuLy8gcmVxdWlyZSAoJ2ZpcmViYXNlL2ZpcmVzdG9yZScpO1xuXG5cbi8vIHZhciBmaXJlYmFzZUNvbmZpZyA9IHtcbi8vICAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXG4vLyAgICAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4vLyAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lELFxuLy8gICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuLy8gICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuLy8gICAgIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQsXG4vLyAgICAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVBU1VSRU1FTlRfSURcbi8vICAgfTtcbi8vICAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuLy8gICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbi8vICAgZmlyZWJhc2UuYW5hbHl0aWNzKCk7XG5cbi8vIHZhciBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuXG4vLyBleHBvcnQgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbi8vIGV4cG9ydCBjb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmU7XG4vLyBleHBvcnQgZGVmYXVsdCBkYjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuY29uc3QgY2xpZW50Q3JlZGVudGlhbHMgPSB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCxcbn07XG5cbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjbGllbnRDcmVkZW50aWFscyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/theme */ \"./src/theme.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notistack */ \"notistack\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _jsxFileName = \"/home/pacman/Desktop/nextjs/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nfunction MyApp(props) {\n  const {\n    Component,\n    pageProps\n  } = props;\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Sairam Engineering College\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"ThemeProvider\"], {\n      theme: _src_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(notistack__WEBPACK_IMPORTED_MODULE_8__[\"SnackbarProvider\"], {\n        maxSnack: 2,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_auth__WEBPACK_IMPORTED_MODULE_7__[\"AuthProvider\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\nMyApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwidGhlbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDbkMsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBMkJGLEtBQWpDO0FBRUFHLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQjtBQUNBLFVBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFsQjs7QUFDQSxRQUFJRixTQUFKLEVBQWU7QUFDYkEsZUFBUyxDQUFDRyxhQUFWLENBQXdCQyxXQUF4QixDQUFvQ0osU0FBcEM7QUFDRDtBQUNGLEdBTkQsRUFNRyxFQU5IO0FBUUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsc0VBQUQ7QUFBZSxXQUFLLEVBQUVLLGtEQUF0QjtBQUFBLDhCQUVFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLHFFQUFDLDBEQUFEO0FBQWtCLGdCQUFRLEVBQUUsQ0FBNUI7QUFBQSwrQkFDQSxxRUFBQyxzREFBRDtBQUFBLGlDQUNFLHFFQUFDLFNBQUQsb0JBQWVSLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7QUFFREgsS0FBSyxDQUFDWSxTQUFOLEdBQWtCO0FBQ2hCVixXQUFTLEVBQUVXLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDLFVBRGpCO0FBRWhCWixXQUFTLEVBQUVVLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJEO0FBRlosQ0FBbEIiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3NyYy90aGVtZSc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9saWIvYXV0aCdcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tICdub3Rpc3RhY2snO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNhaXJhbSBFbmdpbmVlcmluZyBDb2xsZWdlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPFNuYWNrYmFyUHJvdmlkZXIgbWF4U25hY2s9ezJ9PlxuICAgICAgICA8QXV0aFByb3ZpZGVyID5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n // Create a theme instance.\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: '#556cd6'\n    },\n    secondary: {\n      main: '#fff'\n    },\n    error: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"red\"].A400\n    },\n    background: {\n      default: '#fff'\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUuanM/Y2MzNyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiZXJyb3IiLCJyZWQiLCJBNDAwIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBLE1BQU1BLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUU7QUFEQyxLQURGO0FBSVBDLGFBQVMsRUFBRTtBQUNURCxVQUFJLEVBQUU7QUFERyxLQUpKO0FBT1BFLFNBQUssRUFBRTtBQUNMRixVQUFJLEVBQUVHLDREQUFHLENBQUNDO0FBREwsS0FQQTtBQVVQQyxjQUFVLEVBQUU7QUFDVkMsYUFBTyxFQUFFO0FBREM7QUFWTDtBQURrQixDQUFELENBQTVCO0FBaUJlVixvRUFBZiIsImZpbGUiOiIuL3NyYy90aGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnIzU1NmNkNicsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjZmZmJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiByZWQuQTQwMCxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIj83ZTM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/colors\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/firestore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIj8wNjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2ZpcmVzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/firestore\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"notistack\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub3Rpc3RhY2tcIj80MjVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5vdGlzdGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vdGlzdGFja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///notistack\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });