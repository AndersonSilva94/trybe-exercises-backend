const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'andy',
  password: 'andy9423',
  database: 'mvc_example_2'
});

module.exports = connection;
