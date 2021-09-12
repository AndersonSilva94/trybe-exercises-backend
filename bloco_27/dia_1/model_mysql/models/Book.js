const connection = require('./connection');

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

module.exports = {
  getAll,
  getByAuthorId,
  getById
}