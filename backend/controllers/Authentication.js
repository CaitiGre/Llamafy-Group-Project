// controllers/authentication.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const pool = require('../database/pool');

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const conn = await pool.getConnection();
            const [rows] = await conn.query('SELECT * FROM Users WHERE email = ?', [username]);
            const user = rows[0];
            
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            conn.release();
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

function login(req, res, next) {
    passport.authenticate('local', { session: true }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: info.message });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.json({ message: 'Logged in' });
        });
    })(req, res, next);
}

function logout(req, res) {
    req.logout();
    req.session.destroy();
    res.clearCookie('connect.sid'); // Clear the session cookie
    res.json({ message: 'Logged out' });
}

module.exports = {
    login,
    logout,
    passport,
};
