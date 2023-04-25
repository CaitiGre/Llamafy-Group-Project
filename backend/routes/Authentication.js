const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/Authentication');


router.post('/', authenticationController.login);
router.post('/logout', authenticationController.logout);

module.exports = router;