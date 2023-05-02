const express = require('express');
const router = express.Router();
// const { registerUser } = require('../controllers/RegistrationPage');
const { generateOutfits } = require('../controllers/Generator')

router.post('/generateOutfits', async (req, res) => {
  try {
    console.log("Generating Outfits for " + req.body.email)
    const response = await generateOutfits(req.body.email);
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
