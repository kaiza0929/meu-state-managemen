export declare type State = {
    [key: string]: string | number | boolean | string[] | number[] | boolean[] | State;
};
export declare type Action = {
    type: string;
    payload: State;
};
export default class Store {
    private _state;
    private reducer;
    constructor(initState: State | undefined, reducer: Function);
    get state(): State;
    dispatch(action: Action): void;
}
