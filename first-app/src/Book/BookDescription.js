import React from "react";
import PropTypes from "prop-types";
// klasowo:
/* import {Component} from "react";
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
*/
// funkcyjnie:
const BookDescription = (props) => {
        return (
        <div className="App">
            <h1>"{props.book.title}"</h1>
            <h2>{props.book.author}</h2>
            <h3>{props.book.pages} stron</h3>
            <button onClick={() => props.deleteBook(props.book.id)}>Usuń</button>
        </div>);
};
BookDescription.propTypes = {
    book : PropTypes.object.isRequired,
    deleteBook : PropTypes.func.isRequired
}
export default BookDescription;