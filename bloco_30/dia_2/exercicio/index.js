const express = require('express');
const { Book } = require('./models');
const bodyParser = require('body-parser');

// const bookController = require('./controllers/bookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado ' })
  };
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;

// app.use('/book')