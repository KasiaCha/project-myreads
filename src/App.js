import React , {Component} from "react"
import "./App.css"
import {Route} from "react-router-dom"
import BooksList from "./BooksList"
import Search from "./Search"
import * as BooksAPI from "./BooksAPI"

class App extends Component {
  state = {
    books: []
  };

  // call method to fetch books on load
  componentWillMount() {
    BooksAPI.getAll().then(data => {
      this.setState({books: data});
    });
  }
  
  moveBook = (book , shelf) => {
    BooksAPI.update(book, shelf)
          .then(() => {
            book.shelf = shelf;
            this.setState(state => ({
              books: state.books.filter(item => item.id !== book.id).concat([book])
            }))
          })
    }

  render() {
    if (this.state.books.length < 1) {
      return (
        <div className = "pre-app"></div>
      );
    }
    if (this.state.books.length >= 1) {
      return (
        <div className = "app">
          <Route exact path = "/" render={() => (
          <BooksList books={this.state.books} changeShelf={this.moveBook}/>)}
          />
          <Route path = "/search" render={() => (
          <Search books={this.state.books} changeShelf={this.moveBook}/>)}
          />
        </div>
      );
    }
  }
}

export default App;