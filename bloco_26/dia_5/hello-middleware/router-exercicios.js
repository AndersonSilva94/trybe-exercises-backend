const express = require('express');
const router = express.Router();

const { verifyUser, verifyEmail, verifyPassword } = require('./auth-exercicios');

// exercicio 1
router.post('/register',
  verifyUser,
  verifyEmail,
  verifyPassword,
  function (_request, response) {
    return response.status(201).json({ message: 'user created' });
  }
);

// exercicio 2
router.post('/login',
  verifyEmail,
  verifyPassword,
  function (_request, response) {
    return response.status(200).json({ token: "86567349784e" })
  }
)

module.exports = router;