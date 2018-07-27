import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import BookShelfChanger from './BookShelfChanger'
import Search from './Search'
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books : []
  }

  // get the books from database
  
  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

  // moveBook will take in an id, store it as an object and also a shelf destination

  moveBook = (id, shelf) => {
    BooksAPI.update(id,shelf)
    this.getBooks()
  }

  // call method to fetch books on load
  
  componentDidMount() {
    this.getBooks()
  }

  render() {
    return (

      <div className = "app">
        <Route exact path = '/' render={() => (
          <BookShelf
            books = {this.state.books}
            getBooks = {this.getBooks}
            moveBook = {this.moveBook}
          />
        )} />
        <Route path = '/search' render={() => (
          <Search
            moveBook = {this.moveBook}
            getBooks = {this.getBooks}
          />
          )} />
          </div>
        );
      }
    }

          export default App;