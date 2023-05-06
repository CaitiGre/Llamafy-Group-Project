const express = require('express');
const router = express.Router();
const { fetchUserFirstName } = require('../controllers/OotdPage');

router.post('/getName', async (req, res) => {
  try {
    const name = await fetchUserFirstName(req.body.email);
    console.log(name);
    res.status(201).json({ name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving user's name"});
  }
});

module.exports = router;