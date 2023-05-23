import React, {Component} from "react";
import BookDescription from './BookDescription';

class BookClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    "id": 1,
                    "title": "Dom bez wspomnień",
                    "author": "Donato Carrisi",
                    "pages": 330
                },
                {
                    "id": 2,
                    "title": "Hashtag",
                    "author": "Remigiusz Mróz",
                    "pages": 450
                },
                {
                    "id": 3,
                    "title": "Krew na śniegu",
                    "author": "Jo Nesbo",
                    "pages": 160
                }
        ]}
    };
    deleteBookById = (id) => {
        this.setState({
            books: this.state.books.filter(book => book.id !== id)
        })
    }
    render() {
        return (
        <div className="App">
        {
            this.state.books.map((book, key) => 
            //<BookDescription key = {key} title = {book.title} author = {book.author} pages = {book.pages} />)
            //<BookDescription key = {key} {...book} />)
            <BookDescription key = {key} book = {book} deleteBook = {this.deleteBookById}/>) // wtedy przy wyśw. props.book.title
        }
    </div>);
    }
};
export default BookClass;