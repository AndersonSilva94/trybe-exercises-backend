const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');

const { isValidUsername, isValidEmail, isValidPassword, createUser } = User;

const router = express.Router();
router.use(bodyParser.json());

router.post('/',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  async (request, response) => {
    const { firstName, lastName, email, password } = request.body;

    const newUser = await createUser(firstName, lastName, email, password);

    return response.status(200).json(newUser);
  });

module.exports = router;