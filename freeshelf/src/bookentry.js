import React, { Component } from 'react'
import App from './App.js'

class Bookentry extends Component {
  constructor (props) {
    super()
    this.state = {
      showDetail: false
    }
  }

  handleClick (e) {
    this.state.showDetail ? this.setState({ showDetail: false }) : this.setState({ showDetail: true })
  }

  render () {
    let { book } = this.props
    return (
      <div className='display-body'>
        <div className='book-info'>
          <img className='book-cover' src={book.coverImageUrl} />
          <div className='book-title'> { book.title } </div>
          <div className='book-author'> { book.author } </div>
          <div className='book-description-short'> { book.shortDescription } </div>
          {this.state.showDetail ? (<div>
            <button id='hide-show' onClick={(e) => this.handleClick(e)}>Less Information</button>
            <div className='moreInfo'>
              <div className='book-url'>URL: { book.url} </div>
              <div className='book-date'>Date published: { book.publicationDate } </div>
              <div className='book-description-full'>Full Description: { book.detailedDescription } </div>
            </div>
          </div>
          )
            : <button id='hide-show' onClick={(e) => this.handleClick(e)}>More Information</button> }
        </div>
      </div>
    )
  }
}

export default Bookentry
