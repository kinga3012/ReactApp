import React, {useEffect, useState} from "react";

const Counter_useEffect = () => {
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
    useEffect(() => {document.title = "Stan licznika to " + counter}, [counter]);
    // drugi argument to pola po zmianie których ma się wykonać ten efekt
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
export default Counter_useEffect;