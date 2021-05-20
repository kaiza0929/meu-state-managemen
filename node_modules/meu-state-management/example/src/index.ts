import Store, { ActionCreators, Action, State } from "meu-state-management"

var reducer = (state: State, action: Action): State => {
    if (action.type == "SET") {
        return {...state, ...action.payload};
    } else if (action.type == "RESET") {
        return {name: "", age: "",  books: []}
    } else {
        return state;
    }
}

var store: Store = Store.createStore({name: "", age: "",  books: []}, reducer);
var store2: Store = Store.createStore({user_name: "", user_age: "",  bought_books: []}, reducer);
console.log(store2);
var count = 0;

ActionCreators.addActionCreater("SETACTION", () => { 
    return {type: "SET", payload: {name: "Yamada", age: 18, books: ["basic english 1", "basic english 2"]}}
});

ActionCreators.addActionCreater("RESETACTION", () => { return {type: "RESET", payload: {}} });

/* reactならコンポーネントにonclick={() => {}}の形で記述するもの */
document.addEventListener("click", () => {

    if (count % 2 == 0) {
        store.dispatch(ActionCreators.callActionCreater("SETACTION"));
    } else {
        store.dispatch(ActionCreators.callActionCreater("RESETACTION"));
    }

    count += 1;
    console.log(store);
    var state: State = Store.getState();
    
    /* react内部で処理されること(仮想DOM) */
    Object.values(state).forEach((val, index) => {
        document.getElementsByClassName("info")[index].innerHTML = JSON.stringify(val);
    });

});
