import React from "react";
import ChangerButton from "./ChangerButton";
const Book = (props) => {
  const { book, shelf, onMoveBook } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks &&
                book.imageLinks.thumbnail})`,
            }}
          />
          <ChangerButton book={book} shelf={shelf} onMoveBook={onMoveBook} />
        </div>
        <div className="book-title">{book.title} </div>
        <span className="book-rating">
          Rating: {book.averageRating ? `${book.averageRating} *` : "N/A"}
        </span>
        <div className="book-authors">
          {book.authors && book.authors.join(", ")}
        </div>
        <span className="book-cat">
          Category: {book.categories ? book.categories : "N/A"}
        </span>
      </div>
    </li>
  );
};

export default Book;
