import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI' 

class BookShelfChanger extends Component {
 
  // method to change shelf, call changeShelf props
  newShelf = (e, callback) => {
    const shelf = e.target.value;
    this.props.changeShelf(this.props.book, shelf);
  };

  componentWillMount() {
    this.setState({ shelf: this.props.book.shelf });
    }
  
  render() {

    const {book} = this.props

    // Creating the select list
    return (
      <div className = "book-shelf-changer">
      {/* Options button */}
        <select
        className = "bookshelf-select"
        defaultValue={this.state.shelf}
        value={book.shelf || 'none'} onChange={(event) => this.props.changeShelf(book, event.target.value)}
        >
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;