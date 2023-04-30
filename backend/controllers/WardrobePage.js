const pool = require("../database/pool");

async function addWardrobeItem(data) {
  try {
    const connection = await pool.getConnection();
    const result = await connection.query(
      "INSERT INTO ClothingItem (category_id, color, style, sleeves, pattern, length) VALUES (?, ?, ?, ?, ?, ?)",
      [
        data.category_id,
        data.color,
        data.style,
        data.sleeves,
        data.pattern,
        data.length,
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
