import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BooksList extends Component {
  
  render() {
    let currentlyReading = this.props.books.filter(
      books => books.shelf === "currentlyReading"
    );
    let wantToRead = this.props.books.filter(
      books => books.shelf === "wantToRead"
    );
    let read = this.props.books.filter(books => books.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/* Currently reading shelf*/}
          <BookShelf
            changeShelf ={this.props.changeShelf }
            books={currentlyReading}
            title="Currently Reading"
          />
          {/* Want to read shelf*/}
          <BookShelf
            changeShelf ={this.props.changeShelf}
            books={wantToRead}
            title="Want to Read"
          />
          {/* Read shelf */}
          <BookShelf 
           changeShelf ={this.props.changeShelf } 
           books={read} 
           title="Read" 
           />
        </div>

        {/* Add 'plus' button */}
        <div className="open-search">
          <Link to="/search">Add a Book</Link>
        </div>
      </div>
    );
  }
}

export default BooksList;