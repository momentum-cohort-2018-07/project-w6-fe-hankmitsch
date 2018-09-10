import React, { Component } from 'react'

class AddBook extends Component {
  render () {

    const newBookInfo = {
      title: document.getElementById('newTitle').value.trim(),
      author: document.getElementById('newAuthor').value,
      shortDescription: document.getElementById('newBook-desciption-short').value,
      url: document.getElementById('newUrl').value,
      publicationDate: document.getElementById('newDate').value,
      detailedDescription: document.getElementById('newBook-description-full')
    }
    return (
      <form>
        <label>Title:<input type='text' name='name' id='newTitle' /></label>
        <label>Author:<input type='text' name='name' id='newAuthor' /></label>
        <label>Short Description:<input type='text' name='name' id='newBook-description-short' /></label>
        <label>URL:<input type='text' name='name' id='newUrl' /></label>
        <label>Date Published:<input type='text' name='name' id='newDate' /></label>
        <label>Full Description:<input type='text' name='name' id='newBook-description-full' /></label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default AddBook
