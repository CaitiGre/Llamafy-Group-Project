require('dotenv').config();
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const key = process.env.OPEN_AI_KEY;


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({ apiKey: key });
const openai = new OpenAIApi(configuration);


// ********Def response variables here****************
let prompt = "Photograph of a man with warm skin tone wearing black trackpants, boots, and a white long-sleeve top.";
let numImages = 1;
let size = "512x512"
let resFormat = "url"
let user = "llama developers"
// ***************************************************

const imgGen = async () => {

  const response = await openai.createImage({
    prompt: prompt,
    n: numImages ? numImages : 1,
    size: size ? size : "1024x1024",
    response_format : resFormat ? resFormat : "url",
    user : user ? user : "unverified user!"
  });

  
  console.log(response.data.data[0].url);

  // Extract the URL from the response to save to the server
  const genUrl = response.data.data[0].url;

// axios call to the URL provided by the DALL-E API
// and save the image at the endpoint
  try {
  const imgRes = await axios.get(genUrl, {responseType: 'stream'});
  const file = fs.createWriteStream(`${uuidv4()}.png`);
  imgRes.data.pipe(file);
  } catch (err) {
    console.log("Image could not be saved to the server");
    console.log(err);
  }
  return genUrl;
}

imgGen();