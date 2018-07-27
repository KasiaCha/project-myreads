import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI' 

class Search extends Component {
  state = {
    booksArray : []
  }

  // searchBooks fetches the query via the API and then changes the array of books.
    
  searchBooks = (query) => {
    if (query !== '') {
      BooksAPI.search(query).then(result => {
        if (Array.isArray(result)) {
          let array = result.map(book => ({title : book.title, authors : book.authors, thumbnail : book.imageLinks.thumbnail, shelf : book.shelf, id : book.id}))
          this.setState({booksArray : array})}
        }
      )
    } else {
      this.setState({
        booksArray : []
      })
    }
  }

  // clearSearch will clear both the state's booksArray property and the input value 

  clearSearch = () => {
    this.setState({
      booksArray : []
    })
    document.getElementById('search-input').value = ''
  }

  render() {

    const {getBooks, moveBook} = this.props

    return (
      <div className="search-books">

        {/* Search bar */}

        <div className="search-books-bar">

        {/* Return button */} 
          
        <Link to='/' className='close-search' onClick={getBooks()}>Close</Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              id="search-input"
              onChange={(event) => {
                this.searchBooks(event.target.value)
              }}
            ref='input'/>
          </div>
        </div>

        {/* Search results */}

        <div className="search-books-results">
          <ol className="books-grid">

            {/* Books */}
            {this.state.booksArray.map((book, index) => (
              <li key={index}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  thumbnail={book.thumbnail}
                  shelf={book.shelf}
                  id={book.id}
                  moveBook={moveBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search