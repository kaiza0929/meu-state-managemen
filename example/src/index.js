"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var meu_state_management_1 = require("meu-state-management");
var reducer = function (state, action) {
    if (action.type == "SET") {
        return __assign(__assign({}, state), action.payload);
    }
    else if (action.type == "RESET") {
        return { name: "", age: "", books: [] };
    }
    else {
        return state;
    }
};
var store = new meu_state_management_1["default"]({ name: "", age: "", books: [] }, reducer);
var count = 0;
/* reactならコンポーネントにonclick={() => {}}の形で記述するもの */
document.addEventListener("click", function () {
    count += 1;
    var action = { type: "", payload: {} };
    var action = {
        type: "SET",
        payload: { name: "Yamada", age: 18, books: ["basic english 1", "basic english 2"] }
    };
    if (count % 2 == 0) {
        action.type = "RESET";
        action.payload = {};
    }
    store.dispatch(action);
    console.log(store.state);
    /* react内部で処理されること(仮想DOM) */
    Object.values(store.state).forEach(function (val, index) {
        document.getElementsByClassName("info")[index].innerHTML = JSON.stringify(val);
    });
});