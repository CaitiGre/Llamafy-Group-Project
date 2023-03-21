const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function generateAnswer() {
  try {
    const response = await openai.createCompletion({
      model: "davinci",
      prompt: "What should i wear today, its 23 degrees and it might rain tonight",
      temperature: 0,
      max_tokens: 2000,
      n: 1,
      stop: "\n"
    });

    console.log(response.data);

  } catch (error) {
    console.log(error);
  }
}

generateAnswer();
