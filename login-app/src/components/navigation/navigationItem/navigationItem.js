import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationItem = (props) => {
    return (
        <li className="navElement">
            <Link to={props.item.link} className="navLink" >
                {props.item.title}
            </Link>
        </li> 
    );
};
NavigationItem.propTypes = {
    item : PropTypes.object.isRequired
};
export default NavigationItem;