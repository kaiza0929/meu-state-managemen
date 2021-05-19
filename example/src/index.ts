import Store, { Action, State } from "meu-state-management";

var reducer = (state: State, action: Action): State => {
    if (action.type == "SET") {
        return {...state, ...action.payload};
    } else if (action.type == "RESET") {
        return {name: "", age: "",  books: []}
    } else {
        return state;
    }
}

var store: Store = new Store({name: "", age: "",  books: []}, reducer);
var count = 0;

/* reactならコンポーネントにonclick={() => {}}の形で記述するもの */
document.addEventListener("click", () => {

    count += 1;

    var action: Action = {type: "", payload: {}}

    var action: Action = {
        type: "SET",
        payload: {name: "Yamada", age: 18, books: ["basic english 1", "basic english 2"]}
    }

    if (count % 2 == 0) {
        action.type = "RESET";
        action.payload = {};
    }
    
    store.dispatch(action);
    console.log(store.state);
    
    /* react内部で処理されること(仮想DOM) */
    Object.values(store.state).forEach((val, index) => {
        document.getElementsByClassName("info")[index].innerHTML = JSON.stringify(val);
    });

});
