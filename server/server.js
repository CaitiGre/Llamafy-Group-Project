const { configuration } = require("../server/apiconfig")
const { OpenAIApi } = require("openai");

async function generateCompletion(prompt) {
  
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "give me response in a JSON object, categorizing each clothing in a different groups of category. give me only clothes as the response. it seems like it may rain tonight, and I am a brown male, What should i wear today?",
    max_tokens: 2000,
  });
  console.log(completion.data.choices[0].text);
}

generateCompletion();