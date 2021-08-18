import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
const Search = (props) => {
  const { search, resetSearch, searchBooks, onMoveBook, books } = props;
  return (
    <div className="search-books">
      <SearchBar search={search} resetSearch={resetSearch} />
      <SearchResult
        books={books}
        searchBooks={searchBooks}
        onMoveBook={onMoveBook}
      />
    </div>
  );
};
export default Search;
