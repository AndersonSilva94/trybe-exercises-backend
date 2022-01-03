const express = require('express');
const { Book } = require('../models');
const router = express.Router();

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

module.exports = router;
