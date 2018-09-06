import React, { Component } from 'react'
import './App.css'
import books from './books.json'
import './bookentry.js'

class App extends Component {
  constructor () {
    super()
    this.state = { books }
  }
  render () {

    return (
      <div className='App' />
    )
  }
}

export default App
