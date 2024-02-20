
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);
useEffect(() => {
  fetchBooks();
}, []);
const fetchBooks = async () => {
  try {
    const response = await axios.get('http://localhost:8000/getBooks');
    setBooks(response.data);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};
const handleDelete = async (book) => {
  try {
    await axios.delete('http://localhost:8000/deleteBook', { data: book });
    console.log('Book deleted successfully!');
    fetchBooks(); // Refresh the book list after deletion
  } catch (error) {
    console.error('Error deleting book:', error);
  }
};
  return (
    <div className='table'>
  <h2>Book List</h2>
  <table>
    <thead>
      <tr>
        <th>Book Name</th>
        <th>Author Name</th>
        <th>Year</th>
        <th>Subject</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr key={index}>
          <td>{book.bookName}</td>
          <td>{book.authorName}</td>
          <td>{book.year}</td>
          <td>{book.subject}</td>
          <td>
            <button onClick={() => handleDelete(book)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default BookList