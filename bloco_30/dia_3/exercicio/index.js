const bodyParser = require('body-parser');
const express = require('express');

const controller = require('./controllers');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', controller.patientsController);
app.use('/plans', controller.plansController);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});