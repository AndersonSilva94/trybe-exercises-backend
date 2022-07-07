const connection = require('./connection');
const { ObjectId } = require('mongodb');

const HTTP_BAD_REQUEST_STATUS = 400;

const isValidUsername = (request, response, next) => {
  const { firstName, lastName } = request.body;

  if (!firstName || firstName === '') return response.status(HTTP_BAD_REQUEST_STATUS).json({
    error: true,
    message: "O campo 'firstName' é obrigatório"
  });
  if (!lastName || lastName === '') return response.status(HTTP_BAD_REQUEST_STATUS).json({
    error: true,
    message: "O campo 'lastName' é obrigatório"
  });

  next();
};

const isValidEmail = (request, response, next) => {
  const { email } = request.body;

  if (!email || email === '') return response.status(HTTP_BAD_REQUEST_STATUS).json({
    error: true,
    message: "O campo 'email' é obrigatório"
  });

  next();
};

const isValidPassword = (request, response, next) => {
  const { password } = request.body;

  if (!password || password === '') return response.status(HTTP_BAD_REQUEST_STATUS).json({
    error: true,
    message: "O campo 'password' é obrigatório"
  });

  if (password.length < 6) return response.status(HTTP_BAD_REQUEST_STATUS).json({
    error: true,
    message: "O campo 'password' deve ter pelo menos 6 caracteres"
  });

  next();
}

const createUser = async (firstName, lastName, email, password) => {
  await connection()
    .then((db) => db.collection('users').insertOne({
      firstName,
      lastName,
      email,
      password
    }))
    .then((result) => ({ id: result._id, firstName, lastName, email }));
};

const getAll = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((arr) => {
      return arr.map(({ _id, firstName, lastName, email }) => ({
        id: _id,
        firstName,
        lastName,
        email
      }));
    });
};

const findById = async (id) => {
  const userData = await connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)));

  if (!userData) return null;

  const { firstName, lastName, email } = userData;

  return { id, firstName, lastName, email };
};

const updateUser = async (id, { firstName, lastName, email, password }) => {
  const updated = await connection()
    .then((db) => {
      const user = new ObjectId(id);
      const newValues = { firstName, lastName, email, password };
      return db.collection('users').findOneAndUpdate({ _id: user }, { $set: newValues }, { returnOriginal: false })
        .then((result) => ({ id: result._id, firstName, lastName, email }));
    })

  if (!updated) return null;

  return updated;
}

module.exports = {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  createUser,
  getAll,
  findById,
  updateUser
}