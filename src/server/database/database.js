const mysql = require('mysql2/promise');
const config = require('../config/database-config');

// Create a pool object using the configuration
const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

// Export the pool object to be used in other modules
module.exports = pool;
