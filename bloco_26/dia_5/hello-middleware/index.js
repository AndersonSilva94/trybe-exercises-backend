const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const authMiddleware = require('./auth-middleware');

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.status(200).json({ message: 'Opened!' });
});

app.use(authMiddleware);

const recipesRouter = require('./routerRecipes');

app.use('/recipes', recipesRouter);

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001')
})