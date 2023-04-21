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
router.get('/data', async (req, res) => {
    console.log('accessed /weather/data');

    // Grab username from /data?username=foo query string
    // const currUser = req.query.username;
    const currUser = 'kral';

    // Get current user's city via controller using username from query string
    const userLocation = await fetchUserLocation(currUser);

    // Pass key and user city to build API call URL
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${userLocation}&aqi=no` //AQI = air quality data

    const weatherVals = {
        location : userLocation,
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
        // Extract to weatherVals obj
        weatherVals.currTime = response.data.location.localtime,
        weatherVals.condition = response.data.current.condition.text,
        weatherVals.tempC = `${response.data.current.temp_c} C`,
        weatherVals.humidity = `${response.data.current.humidity}%`,
        weatherVals.windKph = `${response.data.current.wind_kph} km/h`,
        weatherVals.iconUrl = response.data.current.condition.icon
    })
    .then(() => res.json(weatherVals))
    .catch(err => {
        console.log(err);
        res.status(418);
        res.send("Unexpected teapot error");
    });
    });


module.exports = router;