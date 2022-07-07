const connection = require('./connection');
const Author = require('./Author');

const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id
  }
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE author_id = ?',
    [authorId]
  );

  if(books.length === 0) return null;
  
  return books.map(serialize);
}

const getById = async (idBook) => {
  const [book] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE id = ?',
    [idBook]
  );

  if(book.length === 0) return null;

  const { id, title, authorId } = serialize(book[0]);

  return { id, title, authorId };
}

const isValidBook = async (title, authorId) => {
  /* const [author] = await connection.execute(
    'SELECT id FROM authors WHERE id = ?',
    [authorId]
  ); */

  if (!title || title.length < 3) return false;
  if (!authorId || !(await Author.findById(authorId))) return false;

  return true;
}

const createBook = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books(title, author_id) VALUES(?,?)',
  [title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValidBook,
  createBook
}