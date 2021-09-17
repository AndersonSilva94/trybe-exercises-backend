const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const User = require('./models/User');

const { isValidUsername, isValidEmail, isValidPassword, createUser } = User;

app.use(bodyParser.json());

app.post('/users',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  async (request, response) => {
    const { firstName, lastName, email, password } = request.body;

    const newUser = await createUser(firstName, lastName, email, password);

    return response.status(200).json(newUser);
  });

app.listen(3000, () => {
  console.log('Listening on port 3000')
})