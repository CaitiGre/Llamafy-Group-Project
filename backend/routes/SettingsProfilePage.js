const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/SettingsProfilePage');

router.get('/getProfile/:userEmail', async (req, res) => {
    try {
        const { userEmail } = req.params;
        const userData = await getProfile(userEmail);
        res.status(201).json({ userData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.post('/updateProfile', async (req, res) => {
    try {
        await updateProfile(req.body);
        res.status(201);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
