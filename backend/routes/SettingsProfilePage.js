const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/SettingsProfilePage');

router.get('/getProfile/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const userData = await getProfile(username);
        res.status(201).json({ userData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;
