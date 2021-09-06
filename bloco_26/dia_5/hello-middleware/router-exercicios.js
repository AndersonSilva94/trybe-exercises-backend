const express = require('express');
const router = express.Router();

const { verifyUser, verifyEmail, verifyPassword } = require('./auth-exercicios');

router.post('/register',
  verifyUser,
  verifyEmail,
  verifyPassword,
  function (_request, response) {
    return response.status(201).json({ message: 'user created' });
  }
);

module.exports = router;