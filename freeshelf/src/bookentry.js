import React, { Component } from 'react'
import App from './App.js'
// import Addbook from './Addbook'

class Bookentry extends Component {
  constructor () {
    super()
    this.state = {
      showDetail: false,
      isEditing: false
    }
  }

  handleClick () {
    this.state.showDetail ? this.setState({ showDetail: false }) : this.setState({ showDetail: true })
  }

  editBook (book) {
    this.setState({
      isEditing: true
    })
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
            <div id='hide-show' onClick={(e) => this.handleClick(e)}>. . . Less Information</div>
            <div className='moreInfo'>
              <div className='book-url'>URL: { book.url} </div>
              <div className='book-date'>Date published: { book.publicationDate } </div>
              <div className='book-description-full'>Full Description: { book.detailedDescription } </div>
              <button className='edit-book' onClick={() => this.editBook(book)}>Edit Book</button>
            </div>
          </div>
          )
            : <div id='hide-show' onClick={() => this.handleClick()}>More Information . . .</div> }
        </div>
      </div>
    )
  }
}

export default Bookentry
