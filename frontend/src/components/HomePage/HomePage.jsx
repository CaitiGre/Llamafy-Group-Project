import React, { useState, useEffect } from "react";
import axios from "axios";
import OutfitTile from "./OutfitTile";
import shirt from "../../assets/shirt.png";
import SubHeading from "../SubHeading/SubHeading"
import styles from "./HomePage.module.css";

const HomePage = () => {

    // init states
    let tempArr = [];
    const [fileNames, setFileNames] = useState([]);
    const [pastOutfits, setPastOutfits] = useState([]);

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
