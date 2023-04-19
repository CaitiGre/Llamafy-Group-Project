require('dotenv').config();
const key = process.env.OPEN_AI_KEY;

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({ apiKey: key });
const openai = new OpenAIApi(configuration);


// Def response variables here
let prompt = "Digital painting of lavender llamas";
let numImages = 1;
let size = "512x512"
let resFormat = "url"
let user = "llama developers"

const imgGen = async () => {

const response = await openai.createImage({
  prompt: prompt,
  n: numImages ? numImages : 1,
  size: size ? size : "1024x1024",
  response_format : resFormat ? resFormat : "url",
  user : user ? user : "unverified user!"
});

console.log(response.data);
}


imgGen();