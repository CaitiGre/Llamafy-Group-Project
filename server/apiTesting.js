const { Configuration, OpenAIApi } = require("openai");
const key = require('../modules/keyModule').key;

const configuration = new Configuration({
    apiKey: key,
})

const openAi = new OpenAIApi(configuration);

let prompt = "What should i wear today, its 23 degrees and it might rain tonight. im a girl and i like pink items. respond in json with keys layer1, layer2, bottom, accessory, footwear";

async function generateAnswer() {
    try {
      const response = await openAi.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.2,
        max_tokens: 256,
        n: 1,
        // stop: "\n}"
      });

    //   console.log(prompt.trim());

      const responseText = response.data.choices[0].text;
      responseText.trim();
      const tokensUsed = response.data.usage.total_tokens;

      console.log(responseText);
    //   console.log(tokensUsed);

    } catch (error) {
      console.log(error);
    }
  }
  
  generateAnswer();