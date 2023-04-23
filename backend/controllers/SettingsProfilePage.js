const pool = require('../database/pool');

async function getProfile(userEmail) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(
            `SELECT * FROM Users WHERE email = "${userEmail}"`,
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
        SET firstName='${user.firstName}', lastName='${user.lastName}', email='${user.email}', password='${user.password}',
            location='${user.location}', gender='${user.gender}', skinTone='${user.skinTone}'
        WHERE email='${user.email}'`
        );
        conn.release();
    } catch (error) {
        console.error(error);
        throw error;
    }
}



module.exports = { getProfile, updateProfile };