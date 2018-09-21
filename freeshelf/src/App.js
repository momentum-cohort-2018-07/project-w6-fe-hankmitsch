import React, { Component } from 'react'
import './App.css'
import Bookentry from './Bookentry.js'
import request from 'superagent'
import AddBook from './AddBook'

class App extends Component {
  constructor () {
    super()
    this.state = { books: [],
      addBook: false }
  }

  componentDidMount () {
    request.get('http://localhost:3001/books')
      .then(res => {
        this.setState({
          books: res.body
        })
      })
  }

  addBook () {
    this.setState({
      addBook: true
    })
  }

  updateBook (bookID, field, value) {
    const idx = this.state.books.findIndex(book => book.id === bookID)
    if (idx === -1) { return }
    this.setState(state => {
      state.books[idx][field] = value
      return { books: state.books }
    })
  }

  updateBookinApi (book) {
    request.put(`http://localhost:3001/books/${book.id}`)
      .send(book)
  }

  render () {
    return (this.state.addBook
      ? <AddBook />
      : (
        <div>
          { this.state.books.map((book) =>
            <Bookentry key={book.id} book={book}
              updateBook={(field, value) => this.updateBook(book.id, field, value)} />)}
          <button onClick={() => this.addBook()}>Add Book</button>
        </div>
      )
    )
  }
}

export default App
