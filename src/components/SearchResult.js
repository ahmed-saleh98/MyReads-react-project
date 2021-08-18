import React from "react";
import Book from "./Book";
const SearchResult = (props) => {
  const { searchBooks, books, onMoveBook } = props;
  // update books's shelf state on search results
  const updatedBooks = searchBooks.map((book) => {
    books.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : "none"}
            onMoveBook={onMoveBook}
          />
        ))}
      </ol>
    </div>
  );
};
export default SearchResult;
