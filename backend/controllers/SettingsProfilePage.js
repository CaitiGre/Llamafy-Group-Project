const pool = require('../database/pool');

async function getProfile(id) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(
            `SELECT * FROM Users WHERE id = ${id}`,
        );
        connection.release();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getProfile };