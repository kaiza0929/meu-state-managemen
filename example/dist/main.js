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

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nvar meu_state_management_1 = __webpack_require__(/*! meu-state-management */ \"../node_modules/meu-state-management/dist/index.js\");\nvar reducer = function (state, action) {\n    if (action.type == \"SET\") {\n        return __assign(__assign({}, state), action.payload);\n    }\n    else if (action.type == \"RESET\") {\n        return { name: \"\", age: \"\", books: [] };\n    }\n    else {\n        return state;\n    }\n};\nvar store = meu_state_management_1[\"default\"].createStore({ name: \"\", age: \"\", books: [] }, reducer);\nvar store2 = meu_state_management_1[\"default\"].createStore({ user_name: \"\", user_age: \"\", bought_books: [] }, reducer);\nconsole.log(store2);\nvar count = 0;\nmeu_state_management_1.ActionCreators.addActionCreater(\"SETACTION\", function () {\n    return { type: \"SET\", payload: { name: \"Yamada\", age: 18, books: [\"basic english 1\", \"basic english 2\"] } };\n});\nmeu_state_management_1.ActionCreators.addActionCreater(\"RESETACTION\", function () { return { type: \"RESET\", payload: {} }; });\n/* reactならコンポーネントにonclick={() => {}}の形で記述するもの */\ndocument.addEventListener(\"click\", function () {\n    if (count % 2 == 0) {\n        store.dispatch(meu_state_management_1.ActionCreators.callActionCreater(\"SETACTION\"));\n    }\n    else {\n        store.dispatch(meu_state_management_1.ActionCreators.callActionCreater(\"RESETACTION\"));\n    }\n    count += 1;\n    console.log(store);\n    var state = meu_state_management_1[\"default\"].getState();\n    /* react内部で処理されること(仮想DOM) */\n    Object.values(state).forEach(function (val, index) {\n        document.getElementsByClassName(\"info\")[index].innerHTML = JSON.stringify(val);\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "../node_modules/meu-state-management/dist/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/meu-state-management/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/* tsc --target ES6 index.ts */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ActionCreators = void 0;\nvar ActionCreators = /** @class */ (function () {\n    function ActionCreators() {\n    }\n    /* 複数のアクションクリエイターを一つのオブジェクトで管理(バインドアクションクリエイターズを真似る)\n    /* https://noah.plus/blog/024/ */\n    ActionCreators.addActionCreater = function (action_name, action_creater) {\n        /* アクションクリエイターはアクションを作る関数 */\n        ActionCreators.action_creators[action_name] = action_creater;\n    };\n    ActionCreators.callActionCreater = function (action_name) {\n        var action = ActionCreators.action_creators[action_name]();\n        return action;\n    };\n    ActionCreators.action_creators = {};\n    return ActionCreators;\n}());\nexports.ActionCreators = ActionCreators;\nvar Store = /** @class */ (function () {\n    function Store(initState, reducer) {\n        this.state = initState;\n        this.reducer = reducer;\n    }\n    /* Single source of truth(ソースは１つだけ)の原則  storeは1アプリに1つのみ存在する */\n    Store.createStore = function (initState, reducer) {\n        if (!this._instance) {\n            this._instance = new Store(initState, reducer);\n        }\n        else {\n            console.log(\"storeは1アプリに1つしか存在できません\");\n        }\n        return this._instance;\n    };\n    Store.getState = function () {\n        return this._instance.state;\n    };\n    Store.prototype.dispatch = function (action) {\n        /* reducer(関数)はユーザーが定義 */\n        Store._instance.state = Store._instance.reducer(Store._instance.state, action);\n    };\n    return Store;\n}());\nexports.default = Store;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///../node_modules/meu-state-management/dist/index.js?");

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