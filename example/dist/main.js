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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nvar meu_state_management_1 = __webpack_require__(/*! meu-state-management */ \"../node_modules/meu-state-management/dist/index.js\");\nvar reducer = function (state, action) {\n    if (action.type == \"SET\") {\n        return __assign(__assign({}, state), action.payload);\n    }\n    else if (action.type == \"RESET\") {\n        return { name: \"\", age: \"\", books: [] };\n    }\n    else {\n        return state;\n    }\n};\nvar store = new meu_state_management_1[\"default\"]({ name: \"\", age: \"\", books: [] }, reducer);\nvar count = 0;\n/* reactならコンポーネントにonclick={() => {}}の形で記述するもの */\ndocument.addEventListener(\"click\", function () {\n    count += 1;\n    var action = { type: \"\", payload: {} };\n    var action = {\n        type: \"SET\",\n        payload: { name: \"Yamada\", age: 18, books: [\"basic english 1\", \"basic english 2\"] }\n    };\n    if (count % 2 == 0) {\n        action.type = \"RESET\";\n        action.payload = {};\n    }\n    store.dispatch(action);\n    console.log(store.state);\n    /* react内部で処理されること(仮想DOM) */\n    Object.values(store.state).forEach(function (val, index) {\n        document.getElementsByClassName(\"info\")[index].innerHTML = JSON.stringify(val);\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "../node_modules/meu-state-management/dist/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/meu-state-management/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/* tsc --target ES6 index.ts */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Store = /** @class */ (function () {\n    function Store(initState, reducer) {\n        if (initState === void 0) { initState = {}; }\n        this._state = initState;\n        this.reducer = reducer;\n    }\n    Object.defineProperty(Store.prototype, \"state\", {\n        get: function () {\n            return this._state;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Store.prototype.dispatch = function (action) {\n        this._state = this.reducer(this._state, action);\n    };\n    return Store;\n}());\nexports.default = Store;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///../node_modules/meu-state-management/dist/index.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;