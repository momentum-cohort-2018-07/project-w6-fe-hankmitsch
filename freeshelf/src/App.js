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
  //   if(this.state.showMe) {
  //     return (<div> one div </div>);
  // } else {
  //     return (<a onClick={this.onClick}> press me </a>);
  // }
  addBook () {
    this.setState({
      addBook: true
    })
  }

  render () {
    if (this.state.addBook === true) {
      return (<AddBook />)
    } else {
      return (
        <div>
          { this.state.books.map((book) => <Bookentry key={book.id} book={book} />)}
          <button onClick={() => this.addBook()}>Add Book</button>
        </div>
      )
    }
  }
}

export default App
