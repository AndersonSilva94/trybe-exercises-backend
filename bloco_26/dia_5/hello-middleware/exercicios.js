const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// exercício 1
const routerUser = require('./router-exercicios');
app.use('/user', routerUser);

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
})