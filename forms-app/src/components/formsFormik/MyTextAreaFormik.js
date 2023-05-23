import React from "react";
import PropTypes from "prop-types";
import {useField} from "formik";

const MyTextAreaFormik = ({label, ...props}) => {
    const [field,meta] = useField(props);
    return (
        <div>
        <label htmlFor={props.name}> {label}</label>
        <textarea {...field} {...props}/>
        <p>{meta.error ? (<small className="alert">{meta.error}</small>) : null}</p>
        </div>
    )
}
MyTextAreaFormik.propTypes = {
    type : PropTypes.string,
    label: PropTypes.string,
    name : PropTypes.string,
    value : PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    className : PropTypes.string,
    onChange : PropTypes.func,
    error : PropTypes.string
}
export default MyTextAreaFormik;