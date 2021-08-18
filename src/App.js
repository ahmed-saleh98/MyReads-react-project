import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";

class App extends React.Component {
  state = {
    bookShelves: [
      { key: "currentlyReading", name: "Currently Reading" },
      { key: "wantToRead", name: "Want to Read" },
      { key: "read", name: "Read" },
    ],
    books: [],
    searchBooks: [],
  };

  // get data from DB
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  // move books between shelves
  onMoveBook = (book, shelf) => {
    const { books } = this.state;
    // update DB
    BooksAPI.update(book, shelf);

    let updatedBooks = books.filter((b) => b.id !== book.id);
    if (shelf !== "none") {
      book.shelf = shelf;
      updatedBooks = [...updatedBooks, book];
    }
    this.setState({
      books: updatedBooks,
    });
  };

  // handle search
  searchForBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  };

  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    const { books, bookShelves, searchBooks } = this.state;
    console.log(books);
    return (
      <div className="app">
        <Route exact path="/">
          <Home
            books={books}
            bookShelves={bookShelves}
            onMoveBook={this.onMoveBook}
          />
        </Route>
        <Route path="/search">
          <Search
            searchBooks={searchBooks}
            books={books}
            onMoveBook={this.onMoveBook}
            search={this.searchForBooks}
            resetSearch={this.resetSearch}
          />
        </Route>
      </div>
    );
  }
}
export default App;
