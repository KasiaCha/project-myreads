import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  
  state = {
    books: [],
    results: [],
    query: ""
  };

  componentDidMount() {
    this.setState({books: this.props.books});
  }

  searchBooks = event => {
    const query = event.target.value;
    this.setState({query: query});

    // Searching when users input the new figures
    if (query) {
      BooksAPI.search(query, 20).then(books => {
        books.length > 0
          ? this.setState({results: books, searchError: false})
          : this.setState({results: [], searchError: true});
      });

    // Reset state to default if query is empty
    } else this.setState({ results: [], searchError: false });
  };

  render() {
    const {query, results, searchError} = this.state;
    return (
      <div className = "search-books">
      {/* Search bar */}
        <div className = "search-books-bar">
          {/* Return button */} 
          <Link className = "close-search" to="/">Close</Link>
          <div className = "search-books-input-wrapper">
            <input
              className = "search-contacts"
              type = "text"
              placeholder = "Search by title or author"
              value={query}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        {/* Search results */}
        <div className = "search-books-results">
          {results.length > 0 && (
            <div>
              <h3 className = "results-quantity">{results.length} results.</h3>
              <ol className = "books-grid">
                {this.state.results.map(book => (
                  <Book
                    key={book.id}
                    books={this.props.books}
                    book={book}
                    changeShelf={this.props.changeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {searchError && (
            <div>
              <div className = "">
                <h3 className = "results-quantity">Results not found. Please try again.</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Search