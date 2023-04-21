const pool = require('../database/pool');

async function fetchUserLocation(username) {
  try {
    const conn = await pool.getConnection();
    const result = await conn.query(
      `select location from Users where username = ?`, username,
    );
    conn.release();
    return result[0][0].location;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { fetchUserLocation };