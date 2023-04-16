const pool = require('../server/database/database');

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to database successfully!');
    connection.release();
  } catch (error) {
    console.error('Failed to connect to database:', error);
  }
}

testConnection();
