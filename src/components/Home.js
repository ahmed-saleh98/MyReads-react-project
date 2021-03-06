import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./BookShelf";
const Home = (props) => {
  const { bookShelves, books, onMoveBook } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookShelves.map((shelf) => (
            <Bookshelf
              key={shelf.key}
              shelf={shelf}
              books={books}
              onMoveBook={onMoveBook}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
