const express = require('express');
const router = express.Router();
const { getWardrobeItems } = require('../controllers/SettingsWardrobePage');

router.get('/getWardrobeItems/:userEmail', async (req, res) => {
    try {
        const { userEmail } = req.params;
        const wardrobeItems = await getWardrobeItems(userEmail);
        res.status(201).json({ wardrobeItems });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;