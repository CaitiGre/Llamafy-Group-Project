// set up dotenv and grab openAI key
require('dotenv').config();
const key = process.env.OPEN_AI_KEY;

// set up express
const express = require('express');
const router = express.Router();

const axios = require('axios');

// set up and instantiate openAI obj
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: key,
    organisation : "Llamafy"
})
const openAi = new OpenAIApi(configuration);


const data = {
    tops : [
        {id : 1, description : "plain", colour : "white", subCategory : "longsleeve"},
        {id : 400, description : "extremely summery linen", colour : "blue", subCategory : "dressShirt"}
    ],
    bottoms: [
        {id : 2, description : "riddled with holes", colour : "rainbow", subCategory : "shorts"},
        {id : 3, description : "adidas trackpants", colour : "black", subCategory : "trackpants"}
    ],
    one_piece:
    [
        {id : 100, description : "coal mining overalls", colour : "coal", subCategory : "overalls"},
        {id : 101, description : "very short and flirty", colour : "yellow", subCategory : "dress"}
    ],
    shoes:
    [
        {id : 9000, description : "fancy italian leather", colour : "tan", subCategory : "dress"},
        {id : 1000, description : "standard doc marten's boots", colour : "brown", subCategory : "boots"}
    ],
}

const responseFormat = {
    top : [
        {id : "%", description : "%", colour : "%", subCategory : "%"}
    ],
    bottom : [
        {id : "%", description : "%", colour : "%", subCategory : "%"}
    ],
    one_piece : [
        {id : "%", description : "%", colour : "%", subCategory : "%"}
    ],
    shoes : [
        {id : "%", description : "%", colour : "%", subCategory : "%"}
    ],
}





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
        res.send(responseText);

    } catch (error) {
        console.log(error);
    }

})


app.get('/dalle', async (req, res) => {


})

module.exports = router;