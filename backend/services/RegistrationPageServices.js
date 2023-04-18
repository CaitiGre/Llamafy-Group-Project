const pool = require('../database/database.js');

async function registerUser(data) {
    try {
      const conn = await pool.getConnection();
      const result = await conn.query(
        'INSERT INTO Users (firstName, lastName, email, password, location, gender) VALUES (?, ?, ?, ?, ?, ?)',
        [data.firstName, data.lastName, data.email, data.password, data.location, data.gender]
      );
      conn.release();
      return result[0].insertId;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
// registerUser({
//     firstName: "First",
//     lastName: "Human",
//     email: "test@test.com",
//     password: "test",
//     location: "Auckland",
//     gender: "Male",
//   })