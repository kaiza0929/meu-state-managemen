/* tsc --target ES6 index.ts */

import { throws } from "assert/strict";

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

    private state: State;
    private reducer: Function;
    private static _instance: Store;

    private constructor(initState: State, reducer: Function) {
        this.state = initState;
        this.reducer = reducer;
    }

    /* Single source of truth(ソースは１つだけ)の原則  storeは1アプリに1つのみ存在する */
    static createStore(initState: State, reducer: Function): Store {
        if (!this._instance) {
            this._instance = new Store(initState, reducer);
        } else {
            console.log("storeは1アプリに1つしか存在できません");
        }
        return this._instance;
    }

    static getState(): State {
        return this._instance.state;
    }

    dispatch(action: Action): void {
        /* reducer(関数)はユーザーが定義 */
        Store._instance.state = Store._instance.reducer(Store._instance.state, action);
    }

}