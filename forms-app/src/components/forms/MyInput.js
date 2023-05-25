import React from "react";
import PropTypes from "prop-types";

const MyInput = (props) => {
    const {type, label, name, value, className, onChange, error} = props;
    return (
        <div>
        <label htmlFor={name}> {label}{type === "submit" ? "" : ":"}</label>
        <input 
            name={name}
            type={type} 
            value={value} 
            className={className} 
            onChange={onChange} 
            id={name}/>
        <p>{error && (<small className="alert alert-danger form-test text-muted">{error}</small>)}</p>
        {/* Sprawdzenie czy wartość błędu jest ustawiona i jeśli tak to komunikat! */}
        </div>
    )
}
MyInput.propTypes = {
    type : PropTypes.string,
    label: PropTypes.string,
    name : PropTypes.string,
    value : PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    className : PropTypes.string,
    onChange : PropTypes.func,
    error : PropTypes.string
}
export default MyInput;