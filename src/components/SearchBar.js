import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = {
    value: "",
  };
  // handle search input
  handleChange = (e) => {
    const val = e.target.value;
    const { search } = this.props;
    this.setState({
      value: val,
    });
    search(val);
  };
  render() {
    const { resetSearch } = this.props;
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={resetSearch}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
      */}
          <input
            type="text"
            value={this.state.value}
            placeholder="Search by title or author"
            onChange={this.handleChange}
            autoFocus
          />
        </div>
      </div>
    );
  }
}
export default SearchBar;
