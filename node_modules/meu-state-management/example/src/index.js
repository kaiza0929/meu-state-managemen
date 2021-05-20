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
var store = meu_state_management_1["default"].createStore({ name: "", age: "", books: [] }, reducer);
var store2 = meu_state_management_1["default"].createStore({ user_name: "", user_age: "", bought_books: [] }, reducer);
console.log(store2);
var count = 0;
meu_state_management_1.ActionCreators.addActionCreater("SETACTION", function () {
    return { type: "SET", payload: { name: "Yamada", age: 18, books: ["basic english 1", "basic english 2"] } };
});
meu_state_management_1.ActionCreators.addActionCreater("RESETACTION", function () { return { type: "RESET", payload: {} }; });
/* reactならコンポーネントにonclick={() => {}}の形で記述するもの */
document.addEventListener("click", function () {
    if (count % 2 == 0) {
        store.dispatch(meu_state_management_1.ActionCreators.callActionCreater("SETACTION"));
    }
    else {
        store.dispatch(meu_state_management_1.ActionCreators.callActionCreater("RESETACTION"));
    }
    count += 1;
    console.log(store);
    var state = meu_state_management_1["default"].getState();
    /* react内部で処理されること(仮想DOM) */
    Object.values(state).forEach(function (val, index) {
        document.getElementsByClassName("info")[index].innerHTML = JSON.stringify(val);
    });
});
