import React from "react";
import PropTypes from "prop-types";

const MyTextArea = (props) => {
    const {type, label, name, value, className, onChange, error} = props;
    return (
        <div>
        <label htmlFor={name}> {label}: </label>
        <textarea 
            name={name}
            type={type} 
            value={value} 
            className={className} 
            onChange={onChange} 
            id={name}/>
        {error && (<small className="alert alert-danger form-test text-muted">{error}</small>)}
        </div>
    )
}
MyTextArea.propTypes = {
    type : PropTypes.string,
    label: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string,
    className : PropTypes.string,
    onChange : PropTypes.func,
    error : PropTypes.string
}
export default MyTextArea;