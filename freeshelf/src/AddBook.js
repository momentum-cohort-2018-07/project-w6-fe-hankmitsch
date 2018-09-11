import React, { Component } from 'react'
import request from 'superagent'

class AddBook extends Component {
  render () {

    // addBookToApi () {

    // }

    return (
      <form>
        <label>Title:<input type='text' name='name' id='newTitle' /></label>
        <label>Author:<input type='text' name='name' id='newAuthor' /></label>
        <label>Short Description:<input type='text' name='name' id='newBook-description-short' /></label>
        <label>URL:<input type='text' name='name' id='newUrl' /></label>
        <label>Date Published:<input type='text' name='name' id='newDate' /></label>
        <label>Full Description:<input type='text' name='name' id='newBook-description-full' /></label>
        <input type='submit' value='Submit' onClick={() => this.addBookToApi()} />
      </form>
    )
  }
}

export default AddBook
