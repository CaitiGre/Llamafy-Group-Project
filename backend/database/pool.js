const mysql = require('mysql2/promise');
const config = require('./database-config');

const pool = mysql.createPool({
  connectionLimit: config.connectionLimit,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port,
});

module.exports = pool;
