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


async function updateProfile(user) {
    try {
        const conn = await pool.getConnection();
        await conn.query(`
        UPDATE Users
        SET firstName=${user.firstName}, lastName=${user.lastName}, email=${user.email}, password=${user.password},
            location=${user.location}, gender=${user.gender}, skinTone=${user.skinTone}
        WHERE id=${user.username}`
        );
        conn.release();
    } catch (error) {
        console.error(error);
        throw error;
    }
}



module.exports = { getProfile, updateProfile };