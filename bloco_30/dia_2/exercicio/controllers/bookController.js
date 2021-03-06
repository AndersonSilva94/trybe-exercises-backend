const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/search', async (req, res) => {
  try {
    const { author } = req.query;
    const book = await Book.findAll({ where: { author } });

    if (!book) return res.status(404).json({ message: 'Autor não encontrado' });

    return res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity = 0 } = req.body;

    const updateBook = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({ where: { id } });

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
