const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');

const { isValidUsername, isValidEmail, isValidPassword, createUser } = User;

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;

const router = express.Router();
router.use(bodyParser.json());

router.post('/',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  async (request, response) => {
    const { firstName, lastName, email, password } = request.body;

    const newUser = await createUser(firstName, lastName, email, password);

    return response.status(HTTP_CREATED_STATUS).json(newUser);
  });

router.get('/', async (request, response) => {
  const users = await User.getAll();

  if (users.length === 0) return response.status(HTTP_OK_STATUS).json([]);

  return response.status(HTTP_OK_STATUS).json(users);
})

module.exports = router;