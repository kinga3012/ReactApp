import React from "react";
import useCounter from "../hooks/useCounter";

const UseCounterExample = () => {
    const Counter = useCounter(0);
    return (
    <div className="App">
        <h1>Stan licznika to: {Counter.counter}</h1>
        <button onClick={Counter.increase}>Zwiększ</button>
        <button onClick={Counter.decrease}>Zmniejsz</button>
        <button onClick={Counter.clear}>Zeruj</button>
        <button onClick={() => Counter.setValue(parseInt(prompt("Podaj wartość")))}>Podaj wartość</button>
    </div>);
};
export default UseCounterExample;