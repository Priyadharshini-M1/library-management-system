// backend/server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Priya02012005',
  database: 'empdb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS book (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bookName VARCHAR(255),
    authorName VARCHAR(255),
    year INT,
    subject VARCHAR(255)
  )
`;

connection.query(createTableQuery, (err, result) => {
  if (err) throw err;
  console.log('Books table created or already exists');
});

app.post('/addBook', (req, res) => {
  const { bookName, authorName, year, subject } = req.body;
  const insertQuery = `INSERT INTO book (bookName, authorName, year, subject) VALUES (?, ?, ?, ?)`;
  connection.query(insertQuery, [bookName, authorName, year, subject], (err, result) => {
    if (err) {
      console.error('Error inserting book:', err);
      res.status(500).json({ error: 'Error adding book to database' });
      return;
    }
    console.log('Book added to database');
    res.status(200).json({ message: 'Book added successfully' });
  });
});

app.get('/getBooks', (req, res) => {
  const selectQuery = `SELECT * FROM book`; // Fixed table name from 'books' to 'book'
  connection.query(selectQuery, (err, result) => {
    if (err) {
      console.error('Error fetching books:', err);
      res.status(500).json({ error: 'Error fetching books from database' });
      return;
    }
    console.log('Books fetched from database');
    res.status(200).json(result);
  });
});

app.delete('/deleteBook', (req, res) => {
  const { bookName, authorName, year, subject } = req.body;
  const deleteQuery = `DELETE FROM book WHERE bookName = ? AND authorName = ? AND year = ? AND subject = ?`;
  connection.query(deleteQuery, [bookName, authorName, year, subject], (err, result) => {
    if (err) {
      console.error('Error deleting book:', err);
      res.status(500).json({ error: 'Error deleting book from database' });
      return;
    }
    console.log('Book deleted from database');
    res.status(200).json({ message: 'Book deleted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
