const fs = require('fs');
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
});

// exercício 5, 6 e 8
const allSimpsons = 'simpsons.json'
const simpsons = JSON.parse(fs.readFileSync(allSimpsons, 'utf-8'));

app
.route('/simpsons')
.get(function (_request, response) {
  return response.status(200).json(simpsons);
})
.post(function (request, response) {
  const { id, name } = request.body;
  const findSimpson = simpsons.find((elem) => parseInt(elem.id) === id);
  if(findSimpson) return response.status(409).json({ message: 'id already exists' });

  simpsons.push({ id: id.toString(), name });
  return response.status(204).end();
})

// exercício 7
app.get('/simpsons/:id', function (request, response) {
  const { id } = request.params;

  const findSimpson = simpsons.find((elem) => elem.id === id);
  if (!findSimpson) return response.status(404).json({ message: 'simpson not found' })

  return response.status(200).json(findSimpson);
});

//
