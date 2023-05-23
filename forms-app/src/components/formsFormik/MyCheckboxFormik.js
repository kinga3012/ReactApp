import React from "react";
import PropTypes from "prop-types";
import {useField} from "formik";

const MyCheckboxFormik = ({label, ...props}) => {
    const [field,meta] = useField({...props, type: "checkbox"});
    return (
        <div>
        <label htmlFor={props.name}> {label}</label>
        <input {...field} {...props} type="checkbox"/>
        <p>{meta.error ? (<small className="alert">{meta.error}</small>) : null}</p>
        </div>
    );
}
MyCheckboxFormik.propTypes = {
    type : PropTypes.string,
    label: PropTypes.string,
    name : PropTypes.string,
    value : PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    className : PropTypes.string,
    onChange : PropTypes.func,
    error : PropTypes.string
}
export default MyCheckboxFormik;