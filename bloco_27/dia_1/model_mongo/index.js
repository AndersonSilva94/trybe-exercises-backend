const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.use(bodyParser.json());

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

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

app.get('/books/search', async function (request, response) {
  const { id } = request.query;
  const books = await Book.getByAuthorId(id);
  // console.log(books)
  if (!books) {
    return response.status(404).json({ message: 'Not found!' });
  }

  return response.status(200).json(books);
})

app.get('/books', async function (request, response) {
  const books = await Book.getAll();

  return response.status(200).json(books);
})

/* app.get('/books/:id', async function (request, response) {
  const { id } = request.params;
  const book = await Book.getById(id);

  if (!book) return response.status(404).json({ message: 'Not found' });

  return response.status(200).json(book);
});

app.post('/books', async function (request, response) {
  const { title, author_id } = request.body;

  if (!await Book.isValidBook(title, author_id)) {
    return response.status(400).json({ message: 'Dados inválidos' });
  }

  await Book.createBook(title, author_id);

  return response.status(201).json({ message: 'Livro criado com sucesso!' });
}) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
// teste github