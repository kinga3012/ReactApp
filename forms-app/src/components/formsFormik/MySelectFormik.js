import React from "react";
import PropTypes from "prop-types";
import {useField} from "formik";
const MySelectFormik = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div>
        <label htmlFor={props.name}> {label} </label>
        <select {...field} {...props} >
        {props.options.map((option, index) => (
            <option key={index} value={option.name}>
                {option.name}
            </option>
        ))}
        </select>
        {meta.error ? (<small className="alert">{meta.error}</small>) : null}
        </div>
    );
}
MySelectFormik.propTypes = {
    label: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string,
    className : PropTypes.string,
    onChange : PropTypes.func,
    options : PropTypes.array,
    error : PropTypes.string
}
export default MySelectFormik;