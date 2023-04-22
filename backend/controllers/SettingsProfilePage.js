const pool = require('../database/pool');

async function getProfile(username) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(
            `SELECT * FROM Users WHERE username = "${username}"`,
        );
        conn.release();
        return result[0][0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}


module.exports = { getProfile };