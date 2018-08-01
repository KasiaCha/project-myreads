import React, {Component} from 'react'
import NoImageCover from './icons/no-cover-image.png'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    state = {
    book: {}
  };

  componentWillMount() {
    this.syncState();
  }

  syncState = () => {
    for (let i = 0; i < this.props.books.length; i++) {
      if (this.props.books[i].id === this.props.book.id) {
        this.setState({book: this.props.books[i]});
      }
    }
  };

  render() {

    const {book, books, changeShelf} = this.props;
    const bookCover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : NoImageCover;
    const title = book.title ? book.title : "Book title unavailable";

    return (
      <li>
        <div className = "book">
          <div className = "book-top">
            <div
              className = "book-cover" style={{width: 128, height: 193, backgroundImage: `url(${bookCover})`}}
            />
            <BookShelfChanger
              shelf={this.state.book.shelf}
              book={book}
              books={books}
              changeShelf={changeShelf}
            />
          </div>
          {/* Book's title */}
          <div className = "book-title">{title}</div>
          {/* Book's author */}
          {book.authors && book.authors.map((author, index) => (
              <div className = "book-authors" key={index}>
                {author}
              </div>
            ))}
            {!book.authors &&
            <div className = "book-authors">Unknown Author</div>}
        </div>
      </li>
    );
  }
}

export default Book;