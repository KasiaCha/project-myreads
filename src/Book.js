import React, { Component } from 'react'
import BookShelf from './BookShelf'

class Book extends Component {
  render() {

    // Import the moveBook() method from BookShelf component via props 

    const {title, authors, thumbnail, shelf, id, moveBook} = this.props

    return (

      <div className = "book">
      <div className = "book-top">

      <div className = "book-cover" style = {{ width: 128, height: 188, backgroundImage: 'url(' + thumbnail + ')' }}></div>

          {/* Options button */}

          <div className = "book-shelf-changer">
            <select onChange = {event => {moveBook({id}, event.target.value)}} value = {shelf}>
              <option value="none" disabled> Move to..</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        {/* Book's title */}

        <div className = "book-title">{title}</div>

        {/* Book's author */}

        <div className = "book-authors">{authors}</div>

      </div>

    )
  }
}

export default Book