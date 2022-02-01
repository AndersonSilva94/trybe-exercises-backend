const express = require('express');
const bodyParser = require('body-parser');
const authorController = require('./Controller/Author/authorController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './View')

app.get('/authors', authorController.listAllAuthors);
app.get('/authors/new', authorController.newAuthor);
app.post('/authors', authorController.createAuthor);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));