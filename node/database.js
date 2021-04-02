const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'kodolj',
  database: 'kodolj',
  password: 'kodolj2021'
});

module.exports = pool;