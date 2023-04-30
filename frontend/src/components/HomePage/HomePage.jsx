import React, { useState, useEffect } from "react";
import axios from "axios";
import OutfitTile from "./OutfitTile";
import shirt from "../../assets/shirt.png";
import SubHeading from "../SubHeading/SubHeading"
import styles from "./HomePage.module.css";

const HomePage = () => {

    // init states
    let tempArr = [];
    const [username, setUsername] = useState('UsernameFromCookies');
    const [weatherValues, setWeatherValues] = useState({
      tempC : null,
    });
    const [fileNames, setFileNames] = useState([]);
    const [pastOutfits, setPastOutfits] = useState([]);
   
    // get weather data from weatherAPI proxy
    useEffect(() => {axios.get('http://localhost:3006/weather/data')
    .then(res => setWeatherValues(res.data))
    },[]);

    // loop through AI generated images for homepage cards
    // TODO: only loop through the past outfits for the current user
    useEffect(() => {axios.get('/images/generated')
    .then(res => {
      tempArr = []; 
      res.data.map((filename, index) => {
        tempArr.push({id : index + 1, render : `images/generated/${filename}`, desc: `${filename}`})
      })})
    .then((next) => setPastOutfits(tempArr))
    }, [])
    
    return <div className={styles.homePage}>

        {/* If there is an error getting weather values, greeet the user and inform them that the api is not working*/}
        {weatherValues.tempC
        ?   
            <div className={styles.title}> 
            <img src={weatherValues.iconUrl} alt="Weather icon based on the weather today"/> <br />
            Hey {username}. {weatherValues.condition} in {weatherValues.location}.
            <p>{weatherValues.tempC} right now with {weatherValues.humidity} humidity. Windspeed at {weatherValues.windKph}. <small>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></small></p>
            </div>
        : 
            <div className={styles.title}> Hello! 
            <p>Unable to fetch weather details at the moment. Try again soon.</p>
            </div>
        }
        
        <br />

        <SubHeading subtitle="PAST OUTFITS"/>

        {/* Loop over all the user's past outfits for history*/}
      <div className={styles.outfitTileContainer}>
        {pastOutfits.map((outfitObj) => (
          <div className={styles.card} key={outfitObj.id}>
            <OutfitTile outfit={outfitObj} />
          </div>
        ))}
      </div>
    </div>
};

export default HomePage;
