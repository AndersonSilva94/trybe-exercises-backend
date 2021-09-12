const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async function (request, response) {
  const authors = await Author.getAll();

  return response.status(200).json(authors);
});

app.get('/books', async function (request, response) {
  const books = await Book.getAll();

  return response.status(200).json(books);
})

app.get('/books/:id', async function (request, response) {
  const { id } = request.params;
  const books = await Book.getByAuthorId(id);

  if(!books) {
    return response.status(404).json({ message: 'Not found!' });
  }

  return response.status(200).json(books);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})