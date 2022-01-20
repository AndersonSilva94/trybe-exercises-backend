const authorModel = require('../../Model/Author/authorModel');

const listAllAuthors = async (request, response) => {
  const authors = await authorModel.findAllAuthors();

  response.status(200).render('./Author/Author', { authors });
  // response.status(200).json(authors);
}

const newAuthor = (req, res) => {
  res.render('Author/New', { message: null });
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!authorModel.isValid(first_name, middle_name, last_name)) {
    return res.render('Authors/New', { message: 'Dados inválidos' });
  }

  await authorModel.create(first_name, middle_name, last_name);
  res.redirect('/authors');
};

module.exports = {
  listAllAuthors,
  newAuthor,
  createAuthor,
}