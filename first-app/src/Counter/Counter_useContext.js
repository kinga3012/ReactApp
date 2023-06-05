import React, {createContext, useContext, useReducer} from "react";
import counterReducer from "./reducers/counterReducer";
import { INCREASE, DECREASE, CLEAR, SET_VALUE } from "./actions/counterActions";

const CounterContext = createContext();
const Counter_useContext = () => {
    const initialState = {
        counter : 0
    };
    const [counterState, dispatch] = useReducer(counterReducer, initialState);
    const increase = () => {
        dispatch({type : INCREASE})
    }
    const decrease = () => {
        dispatch({type : DECREASE})
    }
    const clear = () => {
        dispatch({type : CLEAR})
    }
    const setValue = (value) => {
        dispatch({type : SET_VALUE, value: value})
    }
        return (
            <div className="App">
                <CounterContext.Provider value={counterState.counter} >
                    <p>To wiadomość z funkcji Counter_useContext</p>
                    <CounterPrinter />
                </CounterContext.Provider>
                <button onClick={increase}>Zwiększ</button>
                <button onClick={decrease}>Zmniejsz</button>
                <button onClick={clear}>Zeruj</button>
                <button onClick={() => setValue(parseInt(prompt("Podaj wartość")))}>Podaj wartość</button>
            </div>
        )
};
const CounterPrinter = () => {
        const value = useContext(CounterContext);
        return (<h1>Stan licznika to: {value}</h1>);
        // <CounterContext.Consumer>
        //     {value => (<h1>Stan licznika to: {value}</h1>)}
        // </CounterContext.Consumer>
}
export { Counter_useContext, CounterContext};