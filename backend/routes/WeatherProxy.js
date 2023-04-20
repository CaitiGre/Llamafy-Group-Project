// Require dotenv for weather API key in .env and configure process.env.
require('dotenv').config();
require('../controllers/HomePage');
const axios = require('axios');

const express = require('express');
const { fetchUserLocation } = require('../controllers/HomePage');
const router = express.Router();
const key = process.env.WEATHER_API_KEY;

/* 
Weather API proxy route so we can isolate the API key to the backend. 
We will call this route from the frontend to make a call to the weather API
*/
app.get('/weather', async (req, res) => {

    // Grab username from /data query string
    const currUser = req.query.username;

    // Get current user's city via controller using username from query string
    const userLoction = await fetchUserLocation(currUser);
    // Pass key and user city to build API call URL
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${userLoction}&aqi=no` //AQI = air quality data

    const weatherVals = {
        location : city,
        currTime : '',
        condition : '',
        tempC : '',
        humidity : '',
        windKph : '',
        iconUrl : '',
    }

    // get async response from the weatherapi API
    axios.get(apiUrl)
    .then(response => {
        // Extract to weatherVals
        console.log(response.data);
        weatherVals.currTime = response.data.location.localtime,
        weatherVals.condition = response.data.current.condition.text,
        weatherVals.tempC = `${response.data.current.temp_c} C`,
        weatherVals.humidity = `${response.data.current.humidity}%`,
        weatherVals.windKph = `${response.data.current.wind_kph} km/h`,
        weatherVals.iconUrl = response.data.current.condition.icon
    })
    .catch(err => {
        console.log(err);
        res.status(418);
        res.send("Unexpected error");
    });
    })

    res.json(weatherVals);

module.exports = router;