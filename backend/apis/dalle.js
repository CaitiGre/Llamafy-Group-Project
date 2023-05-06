require('dotenv').config();
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const key = "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";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({ apiKey: key });
const openai = new OpenAIApi(configuration);


// ********Def response variables here****************
// let prompt = "Photograph of a man with warm skin tone wearing black trackpants, boots, and a white long-sleeve top.";
// let numImages = 1;
// let size = "512x512"
// let resFormat = "url"
// let user = "llama developers"
// ***************************************************

const imgGen = async (prompt) => {

  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "512x512",
    response_format : "url",
    // user : "Lllamas",
  });

  console.log(response.data.data[0].url);

  // Extract the URL from the response to save to the server
  const genUrl = response.data.data[0].url;
  return genUrl;
}

module.exports = { imgGen };