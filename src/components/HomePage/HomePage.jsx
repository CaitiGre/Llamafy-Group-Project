import React from "react";
import { useState, useEffect } from "react";
import OutfitTile from "./OutfitTile";
import shirt from '../../assets/shirt.png'
import styles from './HomePage.module.css'
import axios from "axios";

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
    })

    useEffect(() => {axios.get(call)
    .then(res => setWeatherValues({...weatherValues, 
        currTime : res.data.location.localtime,
        condition : res.data.current.condition.text.toLowerCase(),
        tempC : `${res.data.current.temp_c} C`,
        humidity : `${res.data.current.humidity}%`,
        windKph : `${res.data.current.wind_kph} km/h`}),)
    .catch(err => {console.log(err);
                    setWeatherValues(undefined)});
    }, []);

    // console.log(weatherValues);

    const tempArr = [{
        id: 1,
        render: shirt,
        desc: 'whatever1'
    },
    {
        id: 2,
        render: shirt,
        desc: 'whatever2'
    },
    {
        id: 3,
        render: shirt,
        desc: 'whatever3'
    },
    {
        id: 4,
        render: shirt,
        desc: 'whatever4'
    },
    {
        id: 5,
        render: shirt,
        desc: 'whatever5'
    },
    {
        id: 6,
        render: shirt,
        desc: 'whatever6'
    }]

    const [pastOutfits, setPastOutfits] = useState(tempArr);

    
    return <div className={styles.homePage}>

        
        {weatherValues 
        ?   
            <div className={styles.title}> Hey usernameDBCall. It's {weatherValues.condition} in {weatherValues.location}.
            <p>{weatherValues.tempC} right now with {weatherValues.humidity} humidity. Windiness rated at {weatherValues.windKph}</p>
            <p>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></p>
            </div>
        : 
            <div>Hello llama! </div>
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