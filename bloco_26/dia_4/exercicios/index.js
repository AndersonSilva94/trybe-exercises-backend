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
