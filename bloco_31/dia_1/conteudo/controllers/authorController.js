const author = require('../models/Author');

const getAllAuthors = async (request, response) => {
  const authors = await author.getAll();

  response.status(200).render('authors/index', { authors });
};

const getAuthorById = async (request, response) => {
  const { id } = request.params;
  const authorResponse = await author.findById(id);

  if (!authorResponse) return response.status(404).render('404');

  response.status(200).render('authors/show', { authorResponse });
}

const newAuthor = (req, res) => {
  res.render('authors/new', { message: null });
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!author.isValid(first_name, middle_name, last_name)) {
    return res.render('authors/new', { message: 'Dados inválidos' });
  }

  await author.create(first_name, middle_name, last_name);
  res.redirect('authors');
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  newAuthor,
  createAuthor,
}