const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'andy',
  password: 'trybe9423',
  host: 'localhost',
  database: 'users_crud'
});

module.exports = connection;
