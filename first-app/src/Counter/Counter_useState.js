import React, {useState} from "react";

const Counter_useState = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(prevState => prevState + 1)
    }
    const decrease = () => {
        setCounter(prevState => prevState - 1)
    }
    const clear = () => {
        setCounter(0)
    }
    const setValue = (value) => {
        setCounter(value);
    }
        return (
            <div className="App">
                <h1>Stan licznika to: {counter}</h1>
                <button onClick={increase}>Zwiększ</button>
                <button onClick={decrease}>Zmniejsz</button>
                <button onClick={clear}>Zeruj</button>
                <button onClick={() => setValue(parseInt(prompt("Podaj wartość")))}>Podaj wartość</button>
            </div>
        )
};
export default Counter_useState;