const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const routerPosts = require('./router-exercicio4');
const { errorRouter } = require('./router-not-found4');

app.use('/posts', routerPosts);

// parte 3
app.use('*', function (_req, _res, next) {
  next({ message: 'Opsss, route not found!' });
});
app.use(errorRouter)

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001')
})