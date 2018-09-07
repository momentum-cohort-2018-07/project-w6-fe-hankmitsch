import React, { Component } from 'react'

class AddBook extends Component {
  render () {
    return (
      <div>
        {/* <h1>Hell Yeah</h1> */}
        <form>
          <input type='text' className='newBook-title'>Title</input>
          <input type='text' className='newBook-author'>Author</input>
          <input type='text' className='newBook-description-short'>Short Description</input>
          <input type='text' className='newBook-url'>URL:</input>
          <input type='text' className='newBook-date'>Date published:</input>
          <input type='text' className='newBook-description-full'>Full Description:</input>
        </form>
      </div>
    )
  }
}

export default AddBook
