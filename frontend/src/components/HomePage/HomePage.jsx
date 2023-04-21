import React, { useState, useEffect } from "react";
import axios from "axios";
import OutfitTile from "./OutfitTile";
import shirt from '../../assets/shirt.png'
import styles from './HomePage.module.css'

const HomePage = () => {

    // weather api key - to put in to .env later
    const weatherKey = "e9c2f39101b44170a9753323231504";

    // need an axios DB call for user's city. setting to auckland for now
    const [city, setCity] = useState("Auckland");

    const call = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${city}&aqi=no` //AQI = air quality data

    const [weatherValues, setWeatherValues] = useState({
        location : city,
        currTime : '',
        condition : '',
        tempC : '',
        humidity : '',
        windKph : '',
        windDir : '',
        iconUrl : '',
    });

    useEffect(() => {axios.get(call)
    .then(res => {
        console.log(res.data);
        setWeatherValues({...weatherValues, 
        currTime : res.data.location.localtime,
        condition : res.data.current.condition.text,
        tempC : `${res.data.current.temp_c} C`,
        humidity : `${res.data.current.humidity}%`,
        windKph : `${res.data.current.wind_kph} km/h`,
        // windDir : res.data.current.wind_dir,
        iconUrl : res.data.current.condition.icon});})
    .catch(err => {console.log(err);
                    setWeatherValues(undefined)});
    }, []);

    console.log(weatherValues);

    let tempArr = [];

    const [fileNames, setFileNames] = useState([]);
    const [pastOutfits, setPastOutfits] = useState([]);

    useEffect(() => {axios.get('/images/generated')
    .then(res => {tempArr = []; res.data.map((filename, index) => {tempArr.push({id : index + 1, render : `images/generated/${filename}`, desc: `${filename}`})})})
    .then((next) => setPastOutfits(tempArr))
    }, [])

    console.log(tempArr);
    
    return <div className={styles.homePage}>

        
        {weatherValues 
        ?   
            <div className={styles.title}> 
            <img src={weatherValues.iconUrl} /> <br />
            Hey username. {weatherValues.condition} in {weatherValues.location}.
            <p>{weatherValues.tempC} right now with {weatherValues.humidity} humidity. Windspeed at {weatherValues.windKph}. <small>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></small></p>
            </div>
        : 
            <div className={styles.title}> Hello username! 
            <p>Unable to fetch weather details at the moment. Try again soon.</p>
            </div>
        }
        

        <br />
        <button className={styles.button} onClick={() => alert("not set up yet dude")}>Generate an Outfit of the Day</button>
        

        <h2><div className={styles.header}>Past Outfits</div></h2>

        <div className={styles.outfitTileContainer}>
            {pastOutfits.map((outfitObj) => 
                <div className={styles.card} key={outfitObj.id}>
                    <OutfitTile outfit={outfitObj} />
                </div>
                )
            }
        </div>
    </ div>
}

export default HomePage;