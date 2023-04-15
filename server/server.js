const { configuration } = require("../server/apiconfig")
const { OpenAIApi } = require("openai");

async function generateCompletion(prompt, max_tokens) {
  
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: max_tokens,
  });
  return completion.data.choices[0].text;
}

// generateCompletion();