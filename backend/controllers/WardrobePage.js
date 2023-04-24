const pool = require("../database/pool");

async function addWardrobeItem(data) {
  try {
    const connection = await pool.getConnection();
    const result = await connection.query(
      "INSERT INTO UserWardrobe (name, color, length, sleeves, style, fabric, pattern) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        data.name,
        data.color,
        data.length,
        data.sleeves,
        data.style,
        data.fabric,
        data.pattern,
      ]
    );
    connection.release();
    return result[0].insertId;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { addWardrobeItem };
