# Components:

├── App

├──── 1: Home
├────── 1.1:BookShelf
├──────── 1.1.1:Book
├────────── 1.1.1.1:ChangerButton

---

├──── 2: Search
├────── 2.1: SearchBar
├────── 2.2: SearchResult
├──────── 2.2.1: Book
├──────── 2.2.1.1:ChangerButton

---

# Data:

1:books from database:
assigned to [App.js] by (getAll()) method and passed down through components to [Book.js].

---

2:book shelves
declared in [App.js] and passed to [Home.js] to loop over it to craete shelves.

---

# Events Functions:

## in App.js:

### 1:onMoveBook:

takes two arguments (book, shelf) , updates database by calling {BooksAPI.update(book, shelf)} and updates state based on passed arguments.

---

### 2:searchForBooks:

takes one argument (query) query is the search input, handles search input : search query in dataBase by calling {BooksAPI.search(query)}, handled search error and updates state based on the response from {BooksAPI.search(query)}.

---

### 3:resetSearch:

it just reset state.

---

## in SearchBar.js:

### 1:handleChange:

handels input change by updating state ,invokes {search()} which invoke {searchForBooks() in [App.js]} and pass the event target's value to it.

---

### 2:onClick at the close-search button

it invokes the {resetSearch() in [App.js]} to reset the search data

---

## in ChangerButton.js

### 1:handleChange:

handels select change by updating state ,invokes {onMoveBook()} which invoke {onMoveBook() in [App.js]} and pass the to it the book which had changed and the value of this change.
