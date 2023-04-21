const express = require('express');
const router = express.Router();
const { updateProfile } = require('../controllers/SettingsProfilePage');

router.get('/getProfile/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await getProfile(id);
        res.status(201).json({ userData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
