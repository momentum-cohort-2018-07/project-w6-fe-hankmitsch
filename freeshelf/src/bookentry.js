import React, { Component } from 'react'
import request from 'superagent'

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

  updateTitle (title) {
    this.setState({
      bookTitle: title
    })
  }

  updateBookinApi (book) {
    request.put(`http://localhost:3001/books/${book.id}`)
      .send(book)
    this.setState({
      isEditing: false
    })
  }

  render () {
    let { book, updateBook } = this.props
    return (
      this.state.isEditing
        ? <div className='editing-body'>
          <div className='book-title editing'>
            <input type='text' value={book.title} onChange={e => updateBook('title', e.target.value)} />
          </div>
          <div className='book-author editing'>
            <input type='text' value={book.author} onChange={e => updateBook('author', e.target.value)} />
          </div>
          <div className='book-description-short editing'>
            <input type='text' value={book.shortDescription} onChange={e => updateBook('shortDescription', e.target.value)} />
          </div>
          <div className='book-url editing'>
            <input type='text' value={book.url} onChange={e => updateBook('url', e.target.value)} />
          </div>
          <div className='book-date editing'>
            <input type='text' value={book.publicationDate} onChange={e => updateBook('publicationDate', e.target.value)} />
          </div>
          <div className='book-description-full editing'>
            <input type='text' value={book.detailedDescription} onChange={e => updateBook('detailedDescription', e.target.value)} />
          </div>
          <input type='submit' value='Submit' onClick={() => this.updateBookinApi(book)} />
        </div>
        : <div className='display-body'>
          <div className='book-info'>
            <img className='book-cover' src={book.coverImageUrl} alt='' />
            <div className='book-title'> { book.title } </div>
            <div className='book-author'> { book.author } </div>
            <div className='book-description-short'> { book.shortDescription } </div>
            {this.state.showDetail
              ? <div>
                <button id='hide-show' onClick={(e) => this.handleClick(e)}>. . . Less Information</button>
                <div className='moreInfo'>
                  <div className='book-url'>URL:<a href={book.url}>{ book.url }</a></div>
                  <div className='book-date'>Date published: { book.publicationDate } </div>
                  <div className='book-description-full'>Full Description: { book.detailedDescription } </div>
                  <button className='edit-book' onClick={() => this.editBook(book)}>Edit Book</button>
                </div>
              </div>
              : <button id='hide-show' onClick={() => this.handleClick()}>More Information . . .</button> }
          </div>
        </div>
    )
  }
}

export default Bookentry
