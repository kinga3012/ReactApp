import { decrement, increment, clear, setValue } from "../slices/counterSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const counterVal = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const increase = () => {dispatch(increment())};
    const decrease = () => {dispatch(decrement())};    
    const clearCounter = () => {dispatch(clear())};
    const setValueCounter = (val) => {dispatch(setValue(val))};
    return (
        <div className="App">
            <h1>Stan licznika to: {counterVal}</h1>
            <button onClick={increase}>Zwiększ</button>
            <button onClick={decrease}>Zmniejsz</button>
            <button onClick={clearCounter}>Zeruj</button>
            <button onClick={() => setValueCounter(parseInt(prompt("Podaj wartość")))}>Podaj wartość</button>
        </div>
    );
};
export default Counter;