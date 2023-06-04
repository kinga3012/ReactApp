import React, {useReducer} from "react";
import counterReducer from "./reducers/counterReducer";
import { INCREASE, DECREASE, CLEAR, SET_VALUE } from "./actions/counterActions";


const Counter_useReducer = () => {
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
                <h1>Stan licznika to: {counterState.counter}</h1>
                <button onClick={increase}>Zwiększ</button>
                <button onClick={decrease}>Zmniejsz</button>
                <button onClick={clear}>Zeruj</button>
                <button onClick={() => setValue(parseInt(prompt("Podaj wartość")))}>Podaj wartość</button>
            </div>
        )
};
export default Counter_useReducer;