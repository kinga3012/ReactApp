import React from "react";
import PropTypes from "prop-types";

const MyInput = (props) => {
    const {type, label, name, value, className, onChange} = props;
    return (
        <div>
        <label htmlFor={name}> {label}: </label>
        <input 
            name={name}
            type={type} 
            value={value} 
            className={className} 
            onChange={onChange} 
            id={name}/>
        </div>
    )
}
MyInput.propTypes = {
    type : PropTypes.string,
    label: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string,
    className : PropTypes.string,
    onChange : PropTypes.func
}
export default MyInput;