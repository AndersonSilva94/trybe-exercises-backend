const connection = require('./connection');
const { ObjectId } = require('mongodb');


const isValidUsername = (request, response, next) => {
  const { firstName, lastName } = request.body;

  if (!firstName || firstName === '') return response.status(400).json({
    error: true,
    message: "O campo 'firstName' é obrigatório"
  });
  if (!lastName || lastName === '') return response.status(400).json({
    error: true,
    message: "O campo 'lastName' é obrigatório"
  });

  next();
};

const isValidEmail = (request, response, next) => {
  const { email } = request.body;

  if (!email || email === '') return response.status(400).json({
    error: true,
    message: "O campo 'email' é obrigatório"
  });

  next();
};

const isValidPassword = (request, response, next) => {
  const { password } = request.body;

  if (!password || password === '') return response.status(400).json({
    error: true,
    message: "O campo 'password' é obrigatório"
  });

  if (password.length < 6) return response.status(400).json({
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
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

module.exports = {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  createUser
}