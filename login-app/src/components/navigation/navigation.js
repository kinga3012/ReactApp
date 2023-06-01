import React from "react";
import NavigationItem from "./navigationItem/navigationItem";
import PropTypes from "prop-types";

const Navigation = (props) => {
    let items = [];
    if (props.items !== undefined) {
        items = props.items.map((item, key) => (
            <NavigationItem key={key} item={item} />
        ));
    }
    return (
        <nav className="nav">
            <ul className="navElements">{items}</ul>
        </nav>
    );
}
Navigation.propTypes = {
    items : PropTypes.array
};

export {Navigation as NavigationComponent};