const pool = require("../database/pool");
const { imgGen } = require("../apis/dalle");

// API CONFIG

const { Configuration, OpenAIApi } = require("openai");
const key = "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";

const configuration = new Configuration({
    apiKey: key,
});

const openAi = new OpenAIApi(configuration);

// FUNCTIONS

async function generateOutfits(user_email, weatherValues, colorScheme) {
    console.log(
        "Called Generating outfits function for " +
            user_email +
            ", with color scheme: " +
            colorScheme
    );

    const weatherVals = {
        temp: weatherValues.tempC,
        condition: weatherValues.condition,
    };

    console.log("awaiting promptGenerator");
    const prompt = await promptGenerator(user_email, weatherVals, colorScheme);

    console.log("awaiting response from davinci");
    try {
        const response = await openAi.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.2,
            max_tokens: 2047,
            n: 1,
            stop: null,
            echo: false,
        });

        let responseText = response.data.choices[0].text;
        responseText = responseText.trim();

        try {
            console.log("Generating DalE Images");
            let toJson = JSON.stringify(responseText);
            toJson = JSON.parse(responseText);

            const dallePrompt1 =
                toJson.recommendation1.dalle + " Hyper Realistic Style";
            const dallePrompt2 =
                toJson.recommendation2.dalle + " Hyper Realistic Style";
            const dallePrompt3 =
                toJson.recommendation3.dalle + " Hyper Realistic Style";

            console.log("waiting for dalle");
            const images = await Promise.all([
                imgGen(dallePrompt1),
                imgGen(dallePrompt2),
                imgGen(dallePrompt3),
            ]);

            return {
                responseText: responseText,
                // imageUrls: [imgUrl1, imgUrl2, imgUrl3],
                imageUrls: [images[0], images[1], images[2]],
            };
        } catch (dalleErr) {
            console.log(dalleErr);
        }
    } catch (error) {
        console.log(error);
    } finally {
        console.log("end generator");
    }
}

async function getUserWardrobe(user_email) {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query(
            `SELECT ClothingItem.clothing_id, Category.main_category, Category.sub_category, ClothingItem.color, ClothingItem.sleeves, ClothingItem.pattern, ClothingItem.style, ClothingItem.lastWorn FROM ClothingItem INNER JOIN Users ON ClothingItem.user_email = Users.email INNER JOIN Category ON ClothingItem.category_id = Category.category_id WHERE Users.email = ? AND DATEDIFF(NOW(), ClothingItem.lastWorn) > 7`,
            [user_email]
        );
        conn.release();

        const clothingItemsByCategory = {};

        rows[0].forEach((row) => {
            const {
                clothing_id,
                main_category,
                sub_category,
                color,
                sleeves,
                pattern,
                style,
            } = row;

            if (!clothingItemsByCategory[main_category]) {
                clothingItemsByCategory[main_category] = [];
            }

            clothingItemsByCategory[main_category].push({
                clothing_id,
                sub_category,
                color,
                sleeves,
                pattern,
                style,
            });
        });

        return clothingItemsByCategory;
    } catch (err) {
        throw err;
    }
}

async function getUserData(user_email) {
    const conn = await pool.getConnection();

    try {
        const [rows] = await conn.query(
            "SELECT gender, skinTone FROM Users WHERE email = ?",
            [user_email]
        );

        if (!rows.length) {
            throw new Error(`User with email ${user_email} not found`);
        }
        s = `${rows[0]["gender"]} with a ${rows[0]["skinTone"]} skin tone`;
        return s;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function promptGenerator(user_email, weatherValsObj, colorScheme) {
    // if the weather API endpoint cannot be reached upstream, assume good weather
    if (
        weatherValsObj.temp == undefined ||
        weatherValsObj.condition == undefined
    ) {
        weatherValsObj.temp = 20;
        weatherValsObj.condition = "fine";
    }

    // console.log(weatherValsObj);

    const [userData, userWardrobe] = await Promise.all([
        getUserData(user_email),
        getUserWardrobe(user_email),
    ]);

    var colorAddString = "";
    if (colorScheme != undefined) {
        colorAddString = `If possible and if the user's wardrobe permits, try following this color scheme: ${colorScheme}`;
    }

    var prompt = `Given the following JSON of clothes, suggest three outfits to wear today for a ${userData}, given that the temperature outside is ${
        weatherValsObj.temp
    } degrees celsius and ${weatherValsObj.condition}. ${colorAddString}

  ${JSON.stringify(userWardrobe)}
  Respond in the below valid JSON format only, substituting % with the values (do not actually include the % sign if there are no values). Do not provide a value for a category if it is covered by another. In the "dalle" property, provide a comprehensive prompt to give to the DALL-E model. Focus on providing detail on colour. For the outfitDescription, give a small sentence of what the is included in the outfit
  {
    "recommendation1": {
      "top": [
        {
          "id": "%",
          "description": "%",
          "colour": "%",
          "subCategory": "%"
        }
      ],
      "bottom": [
        {
          "id": "%",
          "description": "%",
          "colour": "%",
          "subCategory": "%"
        }
      ],
      "onePiece": [
        {
          "id": "%",
          "description": "%",
          "colour": "%",
          "subCategory": "%"
        }
      ],
      "shoes": [
        {
          "id": "%",
          "description": "%",
          "colour": "%",
          "subCategory": "%"
        }
      ],
      "dalle": "A full-body lookbook style photograph of a male model wearing %",
      "outfitDescription": "%"
    },
    "recommendation%": {
      "top": "%..."
    }
  }`;

    // console.log(prompt);
    return prompt;
}

module.exports = { generateOutfits };
