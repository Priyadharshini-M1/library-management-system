// frontend/src/admin.js
import React from 'react'
import './Admin.css';
import AddBookForm from './AddBookForm';
import BookList from './BookList';

const Admin = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <AddBookForm />
      <BookList />
    </div>
  );
};

export default Admin;
