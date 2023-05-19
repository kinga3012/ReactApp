const book = {
    "title": "Dom głosów",
    "author": "Donato Carrisi",
    "pages": 350
};

function Book() {
    return (
        <div className="App">
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <h3>{book.pages} stron</h3>
        </div>
    );
};

export default Book;