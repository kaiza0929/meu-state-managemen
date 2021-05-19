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
        this._state = initState;
        this.reducer = reducer;
    }
    Object.defineProperty(Store.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.dispatch = function (action) {
        /* reducer(関数)はユーザーが定義 */
        this._state = this.reducer(this._state, action);
    };
    return Store;
}());
exports.default = Store;
//# sourceMappingURL=index.js.map