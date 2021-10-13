const { Pool } = require('pg');

const connection = new Pool({
  user: 'huongnguyen',
  host: 'localhost',
  database: 'mvp',
  port: 5432,
});

connection.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('Error connecting to db: ', err);
  } else {
    console.log('Connected to db!');
  }
});

module.exports = connection;
