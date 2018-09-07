import React, { Component } from 'react'
import './App.css'
import books from './books.json'
import Bookentry from './Bookentry.js'

class App extends Component {
  constructor () {
    super()
    this.state = { books: books }
  }
  render () {
    return (
      <div>
        { this.state.books.map((book, idx) => <Bookentry key={idx} book={book} />)}
      </div>
    )
  }
}

export default App
