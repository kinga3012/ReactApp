import React from "react";
import PropTypes from "prop-types";

function MyInput(props,ref) {
    const {label} = props; // przypisanie destrukcyjne - wyciąganie zmiennych z props
    return (
        <div className="RefInputs">
            {label}:{" "}
            <input ref={ref} />
        </div>
    );
}
MyInput.propTypes = {
    inputRef : PropTypes.oneOfType([
        PropTypes.func, // funkcyjne
        // lub
        PropTypes.shape({current: PropTypes.any}) // instanacja dowolnego obiektu
    ]),
    label : PropTypes.string.isRequired
}
export default React.forwardRef(MyInput); // tworzymy nowy element niosący informacje o tworzonej referencji (w celu poprawnego przekazania między rodzicem a dzieckiem)