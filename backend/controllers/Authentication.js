// controllers/authentication.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const pool = require('../database/pool');
/**
 * Passport-local strategy used for authentication. This allows for authenticating using a username and password.
 */
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

// Serialize user ID into the session
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // Deserialize user by ID
  passport.deserializeUser(async (id, done) => {
    try {
      const conn = await pool.getConnection();
      const [rows] = await conn.query('SELECT * FROM Users WHERE id = ?', [id]);
      const user = rows[0];
      conn.release();
  
      if (!user) {
        return done(null, false, { message: 'User not found.' });
      }
  
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

function login(req, res, next) {
    //specifying the "local" strategy to authenticate requests. Sets the sessionID and redirects to / if successful. 
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
            res.cookie('user_email', user.email, { httpOnly: false, path: '/' });
            return res.json({ message: 'Logged in' });
        });
    })(req, res, next);
}

function logout(req, res) {
    req.session.passport = null;
    
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Error while logging out.' });
        }
        res.clearCookie('connect.sid');
        res.clearCookie('user_email'); // Clear the user_email cookie
        res.json({ message: 'Logged out' });
    });
}

module.exports = {
    login,
    logout,
    passport,
};
