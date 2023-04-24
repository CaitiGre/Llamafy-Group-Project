const pool = require('../database/pool');

async function getProfile(userEmail) {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(
            `SELECT * FROM Users WHERE email = "${userEmail}"`
        );
        conn.release();
        return result[0][0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Update user profile without updating user password
async function updateProfile(user) {
    try {
        const conn = await pool.getConnection();
        await conn.query(`
        UPDATE Users
        SET firstName='${user.firstName}', lastName='${user.lastName}', email='${user.email}',
            location='${user.location}', gender='${user.gender}', skinTone='${user.skinTone}', clothingSize='${user.size}'
        WHERE id='${user.id}'`
            // Might need to change back to based on email (if email is not to be changed)
        );

        conn.release();
    } catch (error) {
        console.error(error);
        throw error;
    }
}


async function updatePassword(user, hashedPassword) {
    try {
        const conn = await pool.getConnection();
        await conn.query(`
        UPDATE Users
        SET password='${hashedPassword}'
        WHERE email='${user.email}'`
        );
        conn.release();
    } catch (error) {
        console.error(error);
        throw error;
    }
}


async function getAllEmails() {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(
            `SELECT email FROM Users`
        );
        conn.release();
        return result[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getUserId(userEmail) {
    try {
        const conn = await pool.getConnection();
        await conn.query(`
        GET email FROM Users WHERE email='${userEmail}'`
        );
        conn.release();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getAllUsers() {
    try {
        const conn = await pool.getConnection();
        const result = await conn.query(
            `SELECT * FROM Users`
        );
        conn.release();
        return result[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}




module.exports = { getProfile, updateProfile, updatePassword, getAllEmails, getUserId, getAllUsers };