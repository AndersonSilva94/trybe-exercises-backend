const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'trybe',
  password: 'trybe9423',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
