const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/Authentication');


router.post('/auth/login', authenticationController.login);
router.post('/auth/logout', authenticationController.logout);

module.exports = router;