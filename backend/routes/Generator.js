const express = require('express');
const router = express.Router();
// const { registerUser } = require('../controllers/RegistrationPage');
const { generateOutfits, changeClotheWornDate } = require('../controllers/Generator')

router.post('/generateOutfits', async (req, res) => {
  try {
    console.log("Generating Outfits for " + req.body.email + ", with color scheme: " + req.body.colorScheme)
    const response = await generateOutfits(req.body.email, req.body.weatherValues, req.body.colorScheme);
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/changeClotheWornDate', async (req, res) => {
  try {
    console.log("Changing lastword for id's " + req.body.listOfIds);
    const response = await changeClotheWornDate(req.body.listOfIds);
    res.status(201).json(response);
  } catch (error){
    console.error(error);
    res.status(500).json({error: 'Internal server error'});
  }
})


module.exports = router;
