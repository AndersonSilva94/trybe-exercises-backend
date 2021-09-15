const connection = require('./connection');
const { ObjectId } = require('mongodb');
const Author = require('./Author');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((books) => {
      return books.map(({ _id, title, author_id }) => {
        return {
          id: _id,
          title,
          authorId: author_id
        }
      })
    })
}

const getByAuthorId = async (authorId) => {
  // console.log(authorId)
  const responseBooks = await connection()
    .then((db) => db.collection('books').find({ author_id: +(authorId) }).toArray())
    .then((books) => {
      return books.map(({ _id, title, author_id }) => {
        return {
          id: _id,
          title,
          authorId: author_id
        }
      })
    })
  return responseBooks;
};

const getById = async (id) => {
  const bookData = await connection().then((db) => db.collection('books').findOne(ObjectId(id)))

  if (!bookData) return null;

  const { title, author_id } = bookData;

  return {
    id,
    title,
    authorId: author_id
  }
}

const isValidBook = async (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId || !(await Author.findById(authorId))) return false;

  return true;
}

const createBook = async (title, authorId) => {
  await connection()
    .then((db) => db.collection('books').insertOne({
      title,
      author_id: authorId
    }))
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValidBook,
  createBook
}