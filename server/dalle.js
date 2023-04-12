const key = require('../modules/keyModule').key;

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);


const imgGen = async () => {


const response = await openai.createImage({
  prompt: "A cute baby sea otter",
  n: 2,
  size: "1024x1024",
});


console.log(response.data)

}


imgGen();