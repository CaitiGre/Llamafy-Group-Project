require('dotenv').config();
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const key = process.env.OPEN_AI_KEY;

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({ apiKey: key });
const openai = new OpenAIApi(configuration);

const imgGen = async (prompt) => {

  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "512x512",
    response_format : "url",
    // user : "Lllamas",
  });

  console.log("Outfit Image Generated");

  // Extract the URL from the response to save to the server
  const genUrl = response.data.data[0].url;
  return genUrl;
}

module.exports = { imgGen };