
// set up dotenv and grab openAI key
require('dotenv').config();
const key = process.env.OPEN_AI_KEY;

// set up express
const axios = require('axios');
const express = require('express');
const router = express.Router();

// set up to instantiate openAI obj
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: key,
})
const openAi = new OpenAIApi(configuration);



app.post('/davinci', async (req, res) => {

    // get user prompt from request body via axios post on homepage button click
    // then @ frontend, redirect to OOTD
    const prompt = req.body;

    try {
        const response = await openAi.createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
          temperature: 0.2,
          max_tokens: 256,
          n: 1,
          // stop: "\n}"
        });
  
        const responseText = response.data.choices[0].text;
        responseText.trim();
        const tokensUsed = response.data.usage.total_tokens;
  
        console.log(responseText, tokensUsed);
  
    } catch (error) {
        console.log(error);
    }

})



app.get('/dalle', async (req, res) => {


})

module.exports = router;