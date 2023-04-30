const pool = require('../database/pool');

async function getWardrobeItems(userEmail) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(
            `SELECT ci.clothing_id, ci.color, ci.sleeves, ci.pattern, c.main_category
            FROM ClothingItem ci, Category c
            WHERE ci.category_id = c.category_id
            AND ci.user_email = "${userEmail}"`
        );
        conn.release();

        return result[0];

    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getWardrobeItems };