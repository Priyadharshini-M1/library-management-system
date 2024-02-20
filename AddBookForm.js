
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddBookForm = () => {
    const [bookData, setBookData] = useState({
        bookName: '',
        authorName: '',
        year: '',
        subject: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:8000/addBook', bookData);
          console.log('Book added successfully!');
          setBookData({
            bookName: '',
            authorName: '',
            year: '',
            subject: ''
          });
        } catch (error) {
          console.error('Error adding book:', error);
        }
      };
  return (
    <div>
        <h2>Add New Book</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="bookName" placeholder="Book Name" value={bookData.bookName} onChange={handleChange} />
            <input type="text" name="authorName" placeholder="Author Name" value={bookData.authorName} onChange={handleChange} />
            <input type="text" name="year" placeholder="Year" value={bookData.year} onChange={handleChange} />
            <input type="text" name="subject" placeholder="Subject" value={bookData.subject} onChange={handleChange} />
            <button type="submit">Add Book</button>
        </form>
    </div>
  )
}

export default AddBookForm