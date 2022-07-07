const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routerUser = require('./router');

app.use(bodyParser.json());

app.use('/users', routerUser);

app.listen(3000, () => {
  console.log('Listening on port 3000')
})