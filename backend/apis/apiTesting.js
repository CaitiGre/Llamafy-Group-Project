require('dotenv').config();

//config dalle
const { imgGen } = require("./dalle");

const { Configuration, OpenAIApi } = require("openai");
const key = process.env.OPEN_AI_KEY;

const configuration = new Configuration({
    apiKey: key,
})

const openAi = new OpenAIApi(configuration);

let prompt = 

`Given the following JSON of clothes, suggest three outfits to wear today given that the temperature outside is 20 degrees celsius and partly cloudy.
{
    tops : [
        {id : 1, description : "plain", colour : "white", subCategory : "longsleeve"},
        {id : 400, description : "extremely summery linen", colour : "blue", subCategory : "dressShirt"},
        {id : 69, description : "overcoat made of pure orangatang", colour: "orange", subCategory : "overcoat"},
        {id : 47, description : "white dress shirt", colour : "red", subCategory : "dressShirt"},
        {id : 48, description : "wifebeater", colour : "white", subCategory : "singlet"}
    ],
    bottoms: [
        {id : 2, description : "riddled with holes", colour : "rainbow", subCategory : "shorts"},
        {id : 3, description : "adidas trackpants", colour : "black", subCategory : "trackpants"},
        {id : 0, description : "extremely mini", colour : "pink", subCategory : "skirts"},
        {id : 11, description : "fleece leggings", colour : "green", subCategory : "activewear"},
        {id : 42, description : "long fluffy skirt", colour : "purple", subCategory : "skirts"}
    ],
    one_piece:
    [
        {id : 100, description : "coal mining overalls", colour : "coal", subCategory : "overalls"},
        {id : 101, description : "very short and flirty", colour : "yellow", subCategory : "dress"},
        {id : 102, description : "playsuit", colour : "blue", subCategory : "dress"},
        {id : 103, description : "HAZMAT suit from Chernobyl", colour : "white", subCategory : "overalls"},
        {id : 104, description : "mummy wraps", colour : "white", subCategory : "funeralAttire"}
    ],
    shoes:
    [
        {id : 9000, description : "fancy italian leather", colour : "tan", subCategory : "dress"},
        {id : 9001, description : "standard doc marten's boots", colour : "brown", subCategory : "boots"},
        {id : 9002, description : "HAZMAT boots", colour : "white", subCategory : "boots"},
        {id : 9003, description : "extremely fluffy", colour : "pink", subCategory : "slippers"},
        {id : 9004, description : "sandals", colour : "lavender", subCategory : "sandals"}
    ],
}
Respond in the below format only, substituting % with the values. Do not provide a value for a category if it is covered by another. In the "dalle" property, provide a comprehensive prompt to give to the DALL-E model. Focus on providing detail on colour.
{
  "recommendation1" : {
    "top": [
        {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
    ],
    "bottom": [
        {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
    ],
    "onePiece": [
        {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
    ],
    "shoes": [
        {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
    ],
    "dalle": "A full-body lookbook style photograph of a male model wearing %"
  },
  "recommendation2" : {"top" : "%..."},
}`;


// const format = {
//   "recommendation1" : {
//     "top": [
//         {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
//     ],
//     "bottom": [
//         {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
//     ],
//     "onePiece": [
//         {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
//     ],
//     "shoes": [
//         {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
//     ],
//     "dalle": "%"
//   },
//   "recommendation2" : {"top" : "%..."},
// }

async function generateAnswer() {
    try {
      const response = await openAi.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.2,
        max_tokens: 2047,
        n: 1,
        stop: null,
        echo : false,
      });

      // console.log(response.data);
      const responseText = response.data.choices[0].text;
      console.log(responseText);
      // const tokensUsed = response.data.usage.total_tokens;
      //   console.log(tokensUsed);

    try {
    const toJson = JSON.parse(responseText);

    const dallePrompt1 = toJson.recommendation1.dalle;
    const dallePrompt2 = toJson.recommendation2.dalle;
    const dallePrompt3 = toJson.recommendation3.dalle;

    console.log(dallePrompt1);
    console.log(dallePrompt2);
    console.log(dallePrompt3);

    imgGen(dallePrompt1);
    imgGen(dallePrompt2);
    imgGen(dallePrompt3);

    } catch (dalleErr) {
      console.log(dalleErr.response.status);
      console.log(dalleErr.response.statusText);
    }
    } catch (error) {
      console.log(error);
    }
  }
  
  generateAnswer();

// exports.generateAnswer();