"use strict";
/* tsc --target ES6 index.ts */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionCreators = void 0;
var ActionCreators = /** @class */ (function () {
    function ActionCreators() {
    }
    /* 複数のアクションクリエイターを一つのオブジェクトで管理(バインドアクションクリエイターズを真似る)
    /* https://noah.plus/blog/024/ */
    ActionCreators.addActionCreater = function (action_name, action_creater) {
        /* アクションクリエイターはアクションを作る関数 */
        ActionCreators.action_creators[action_name] = action_creater;
    };
    ActionCreators.callActionCreater = function (action_name) {
        var action = ActionCreators.action_creators[action_name]();
        return action;
    };
    ActionCreators.action_creators = {};
    return ActionCreators;
}());
exports.ActionCreators = ActionCreators;
var Store = /** @class */ (function () {
    function Store(initState, reducer) {
        this.state = initState;
        this.reducer = reducer;
    }
    /* Single source of truth(ソースは１つだけ)の原則  storeは1アプリに1つのみ存在する */
    Store.createStore = function (initState, reducer) {
        if (!this._instance) {
            this._instance = new Store(initState, reducer);
        }
        else {
            console.log("storeは1アプリに1つしか存在できません");
        }
        return this._instance;
    };
    Store.getState = function () {
        return this._instance.state;
    };
    Store.prototype.dispatch = function (action) {
        /* reducer(関数)はユーザーが定義 */
        Store._instance.state = Store._instance.reducer(Store._instance.state, action);
    };
    return Store;
}());
exports.default = Store;
//# sourceMappingURL=index.js.map