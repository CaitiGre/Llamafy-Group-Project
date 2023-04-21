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

    const tempArr = [
        {id: 1, render: shirt, desc: 'whatever1'},
        {id: 2, render: shirt, desc: 'whatever2'},
        {id: 3, render: shirt, desc: 'whatever3'},
        {id: 4, render: shirt, desc: 'whatever4'},
        {id: 5, render: shirt, desc: 'whatever5'},
        {id: 6, render: shirt, desc: 'whatever6'}
    ];

    const [pastOutfits, setPastOutfits] = useState(tempArr);
    
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