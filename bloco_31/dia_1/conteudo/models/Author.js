const connection = require('./connection');

// criando uma string com o nome completo do author

const newAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    ...authorData,
    name: fullName,
  };
};

// mudando os nomes dos campos de author para camelCase

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// buscando todos os autores do banco

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors;',
  );
  return authors.map(serialize).map(newAuthor);
};

// buscando autores pelo id

const findById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT first_name, middle_name, last_name FROM authors WHERE id = ?',
    [id]
  );

  if (!authorData.length) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return newAuthor({
    id,
    firstName,
    middleName,
    lastName,
  })
};

// insere função para validar os dados que serão inseridos

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
}

// função para criar um novo autor

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO mvc_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
  [firstName, middleName, lastName],
);

module.exports = {
  getAll,
  findById,
  isValid,
  create,
}