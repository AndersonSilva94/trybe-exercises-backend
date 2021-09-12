const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async function (request, response) {
  const authors = await Author.getAll();

  return response.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.get('/books/search', async function (request, response) {
  const { id } = request.query;
  const books = await Book.getByAuthorId(id);

  if(!books) {
    return response.status(404).json({ message: 'Not found!' });
  }

  return response.status(200).json(books);
})

app.get('/books', async function (request, response) {
  const books = await Book.getAll();

  return response.status(200).json(books);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})