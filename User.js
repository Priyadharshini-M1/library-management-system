import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('');

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


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const filteredData = books.filter((book) => {
    if (filterOption === '') {
      return true;
    } else {
      return book[filterOption].toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <div className='table'>
      <h2>Book List</h2>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={filterOption} onChange={handleFilterChange}>
          <option value="">Filter by...</option>
          <option value="bookName">Title</option>
          <option value="authorName">Author</option>
          <option value="year">Year</option>
          <option value="subject">Subject</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Year</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((book, index) => (
            <tr key={index}>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.year}</td>
              <td>{book.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
