"use strict";
/* tsc --target ES6 index.ts */
Object.defineProperty(exports, "__esModule", { value: true });
var Store = /** @class */ (function () {
    function Store(initState, reducer) {
        if (initState === void 0) { initState = {}; }
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
        this._state = this.reducer(this._state, action);
    };
    return Store;
}());
exports.default = Store;
//# sourceMappingURL=index.js.map