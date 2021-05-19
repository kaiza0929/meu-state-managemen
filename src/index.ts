/* tsc --target ES6 index.ts */

export type State = {
    [key: string]: string | number | boolean | string[] | number[] | boolean[] | State
}

export type Action = {
    type: string,
    payload: State
}

export class ActionCreators {

    private static action_creators: {[action_name: string]: Function} = {};

    /* 複数のアクションクリエイターを一つのオブジェクトで管理(バインドアクションクリエイターズを真似る)
    /* https://noah.plus/blog/024/ */

    static addActionCreater(action_name: string, action_creater: Function): void {
        /* アクションクリエイターはアクションを作る関数 */
        ActionCreators.action_creators[action_name] = action_creater;
    }

    static callActionCreater(action_name: string): Action {
        var action: Action = ActionCreators.action_creators[action_name]();
        return action;
    }

}

export default class Store {

    private _state: State;
    private reducer: Function;

    constructor(initState: State, reducer: Function) {
        this._state = initState;
        this.reducer = reducer;
    }

    get state(): State {
        return this._state;
    }

    dispatch(action: Action): void {
        /* reducer(関数)はユーザーが定義 */
        this._state = this.reducer(this._state, action);
    }

}