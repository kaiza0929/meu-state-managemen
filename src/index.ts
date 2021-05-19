/* tsc --target ES6 index.ts */

export type State = {
    [key: string]: string | number | boolean | string[] | number[] | boolean[] | State
}

export type Action = {
    type: string,
    payload: State
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