import React, {useMemo, useState} from "react";

const Memo = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const getSum = (a,b) => {
        let sum = parseInt(a) + parseInt(b);
        for (let i=0; i<12345; i++)
            sum = parseInt(a) + parseInt(b);
        return sum;
    };
    const calculateSum = useMemo(() => {
        return getSum(a,b)
    }, [a,b]);

    return (
        <div>
            <h1>Policz sumę</h1>
            <input type="text" onChange={(event) => {setA(event.target.value)}} />
            <input type="text" onChange={(event) => {setB(event.target.value)}} />
            <h3>Suma wynosi: {calculateSum}</h3>
        </div>
    );
};
export default Memo;