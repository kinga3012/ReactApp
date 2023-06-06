import React, {useState} from "react";
const useCounter = (startValue) => {
    const [counter,setCounter] = useState(startValue);
    return {
        counter : counter,
        increase : () => setCounter(prevCount => prevCount + 1),
        decrease : () => setCounter(prevCount => prevCount - 1),
        clear : () => setCounter(startValue), 
        setValue : (newValue) => setCounter(newValue)        
    };
};

export default useCounter;