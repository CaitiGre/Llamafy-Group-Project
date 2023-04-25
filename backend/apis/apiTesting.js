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

`Given the following JSON, suggest an outfit to wear today given that the temperature outside is 0 degrees celsius.
{
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
Respond in the below format only, substituting % with the values. Do not provide a value for a category if it is covered by another. In the "dalle" property, provide a prompt for the DALL-E model to generate a realistic photograph of the outfit.
{
  "top": [
      {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
  ],
  "bottom": [
      {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
  ],
  "one_piece": [
      {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
  ],
  "shoes": [
      {"id": "%", "description": "%", "colour": "%", "subCategory": "%"}
  ],
  "dalle": "%"
}`;

async function generateAnswer() {
    try {
      const response = await openAi.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.2,
        max_tokens: 1000,
        n: 1,
        stop: null,
        echo : false,
      });

      // console.log(response.data);

      const responseText = response.data.choices[0].text;
      // responseText.trim();
      // const tokensUsed = response.data.usage.total_tokens;

      console.log(responseText);
    //   console.log(tokensUsed);

    try {
    const toJson = JSON.parse(responseText);
    const dallePrompt = toJson.dalle;
    console.log(dallePrompt);
    imgGen(dallePrompt);
    } catch (dalleErr) {
      console.log(dalleErr);
    }

    } catch (error) {
      console.log(error);
    }
  }
  
  generateAnswer();

// exports.generateAnswer();