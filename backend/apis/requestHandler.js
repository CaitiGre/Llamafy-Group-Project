function getWeatherData(lat, lon){
    console.log("Running GetWeatherData()")
    const apiKey = "b6d086b3b11b2f457827d5ecf4d3bde8"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        temperature: data.main.temp,
        description: data.weather[0].description,
        weather: data.weather[0].main,
      };
      console.log(data)
      return weatherData;
    })
    .catch(error => {
      console.error('Error fetching weather data', error);
      throw error;
    });
}

function getPersonalData(userID){

}

function getCurrentWardrobe(userID){

}

function promptGenerator(){
  
}

Promise.all([getWeatherData, getPersonalData, getCurrentWardrobe])
  .then(([result1, result2, result3]) => {
    
  })
  .catch((error) => {
    
  });

getWeatherData("36.8509", "174.7645");


  // Data required for prompts:

// 1) Weather
// 2) Current Wardrobe
// 3) Personal Details (ethnicity, height, skin color/tone, etc.)
// 4) Past Requests (likes/dislikes)

// Existing Wardrobe ---> contains 0 to many clothes ---> 


sample_structure = {
    gender: "",
    weather: "",
    height: "",
    skin_color: "",
    skin_tone: "",
    existing_wardrobe: {

    },
}

clothes_sample = {
    type: "",
    brand: "",
    size: "",
    color: "",
    material: "",
    style: "",
    optionals: {
        occasion: "",
        season: "",
    }
}