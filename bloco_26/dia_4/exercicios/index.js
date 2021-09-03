const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001')
});

// exercício 1
app.get('/ping', function (_request, response) {
  return response.status(200).json('pong')
});

// exercício 2
app.post('/hello', function (request, response) {
  const { name } = request.body;

  return response.status(200).json({ message: `Hello, ${name}` });
});

// exercício 3
app.post('/greetings', function (request, response) {
  const { age, name } = request.body
  if (age <= 17) return response.status(401).json({ "message": "Unauthorized" });
  return response.status(200).json({ "message": `Hello, ${name}!` })
})

// exercício 4
app.put('/users/:name/:age', function (request, response) {
  const { name, age } = request.body;

  return response.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade!` });
})