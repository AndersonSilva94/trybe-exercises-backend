const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// exercício 1
const authMiddleware = require('./auth-exercicios');

app.use(authMiddleware);

app.post('/user/register', function (_request, response) {
  return response.status(201).json({ message: 'user created' });
})

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
})