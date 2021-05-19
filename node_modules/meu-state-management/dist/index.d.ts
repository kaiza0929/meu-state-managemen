export declare type State = {
    [key: string]: string | number | boolean | string[] | number[] | boolean[] | State;
};
export declare type Action = {
    type: string;
    payload: State;
};
export declare class ActionCreators {
    private static action_creators;
    static addActionCreater(action_name: string, action_creater: Function): void;
    static callActionCreater(action_name: string): Action;
}
export default class Store {
    private _state;
    private reducer;
    constructor(initState: State, reducer: Function);
    get state(): State;
    dispatch(action: Action): void;
}
