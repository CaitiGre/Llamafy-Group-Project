import React, { useState, useEffect } from "react";
import axios from "axios";
import OutfitTile from "./OutfitTile";
import shirt from '../../assets/shirt.png'
import styles from './HomePage.module.css'

const HomePage = () => {

    // init states
    const [username, setUsername] = useState('UsernameFromCookies');
    const [weatherValues, setWeatherValues] = useState([]);
   
    // get weather data from weatherAPI proxy
    useEffect(() => {axios.get('http://localhost:3006/weather/data')
    .then(res => setWeatherValues(res.data))
    },[]);

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
            Hey {username}. {weatherValues.condition} in {weatherValues.location}.
            <p>{weatherValues.tempC} right now with {weatherValues.humidity} humidity. Windspeed at {weatherValues.windKph}. <small>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></small></p>
            </div>
        : 
            <div className={styles.title}> Hello {username}! 
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