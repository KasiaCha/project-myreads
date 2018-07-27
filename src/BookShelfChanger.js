import React, { Component } from 'react'

class BookShelfChanger extends Component {

    state = {
        shelf: ''
    }

    componentWillMount() {
        if (this.props.shelf) {
          this.setState({ shelf: this.props.shelf });
        }
      }

    // method to change shelf, call changeShelf props
    newShelf(shelf) {
        this.setState({shelf: shelf});
        this.props.changeShelf(this.props.book, shelf);
    }

    render() {
        
        // Creating the select list
      
    return (
      <div className="book-shelf-changer">
        <select
          className="bookshelf-select"
          defaultValue={this.state.shelf}
          onChange={this.newShelf}
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
export default BookShelfChanger