import React, {Component} from "react";
import PropTypes from "prop-types";
class BookDescription extends Component {
    constructor(props) {
        super(props);
    };
    // const BookDescriptionFunction = (props) => 
    render() { //gdyby to był komponent funkcujny to wtedy w ciele to co w render i bez this!!!
        return (
        <div className="App">
            <h1>"{this.props.title}"</h1>
            <h2>{this.props.author}</h2>
            <h3>{this.props.pages} stron</h3>
        </div>);
    }
};
// Gdyby to był komponent funkcyjny!
//BookDescription.PropTypes = {
//    book : PropTypes.object.isRequired
//}
export default BookDescription;