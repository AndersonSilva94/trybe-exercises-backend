const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Auth = require('./models/auth');

const { createUser, getAll, findById, updateUser } = User;
const { isValidUsername, isValidEmail, isValidPassword, } = Auth;

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NOT_FOUND_STATUS = 404;

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
  const users = await getAll();

  if (users.length === 0) return response.status(HTTP_OK_STATUS).json([]);

  return response.status(HTTP_OK_STATUS).json(users);
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;

  const user = await findById(id);

  if (!user) return response.status(HTTP_NOT_FOUND_STATUS).json({
    error: true,
    message: "Usuário não encontrado"
  });

  return response.status(HTTP_OK_STATUS).json(user);
});

router.put('/:id',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  async (request, response) => {
    const { id } = request.params;
    const { firstName, lastName, email, password } = request.body

    const user = await updateUser(id, { firstName, lastName, email, password });

    if (!user) return response.status(HTTP_NOT_FOUND_STATUS).json({
      error: true,
      message: "Usuário não encontrado"
    });

    return response.status(HTTP_OK_STATUS).json(user);
  }
)

module.exports = router;