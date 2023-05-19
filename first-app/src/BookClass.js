import React, {Component} from "react";
import BookDescription from './BookDescription';

class BookClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                "title": "Dom bez wspomnień",
                "author": "Donato Carrisi",
                "pages": 330
                },
                {
                    "title": "Hashtag",
                    "author": "Remigiusz Mróz",
                    "pages": 450
                },
                {
                    "title": "Krew na śniegu",
                    "author": "Jo Nesbo",
                    "pages": 160
                }
        ]}
    };
    render() {
        return (
        <div className="App">
        {
            this.state.books.map((book, key) => 
            //<BookDescription key = {key} title = {book.title} author = {book.author} pages = {book.pages} />)
            <BookDescription key = {key} {...book} />)
            //<BookDescription key = {key} book = {book} />) // wtedy przy wyśw. props.book.title
        }
    </div>);
    }
};
export default BookClass;