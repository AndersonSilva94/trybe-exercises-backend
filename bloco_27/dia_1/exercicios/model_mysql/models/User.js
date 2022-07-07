const connection = require('./connection');

const serialize = (userData) => {
  return {
    id: userData.id,
    firstName: userData.first_name,
    lastName: userData.last_name,
    email: userData.email
  }
}

const createUser = async (firstName, lastName, email, password) => connection.execute(
  'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
  [firstName, lastName, email, password],
)

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM users_crud.users'
  );

  return users.map(serialize);
};

const findById = async (id) => {
  const userData = await connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)));

  if (!userData) return null;

  const { firstName, lastName, email } = userData;

  return { id, firstName, lastName, email };
};

const updateUser = async (id, { firstName, lastName, email, password }) => {
  const updated = await connection()
    .then((db) => {
      const user = new ObjectId(id);
      const newValues = { firstName, lastName, email, password };
      return db.collection('users').findOneAndUpdate({ _id: user }, { $set: newValues }, { returnOriginal: false })
        .then((result) => ({ id: result._id, firstName, lastName, email }));
    })

  if (!updated) return null;

  return updated;
}

module.exports = {
  createUser,
  getAll,
  findById,
  updateUser
}