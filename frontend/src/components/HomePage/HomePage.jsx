import React, { useState, useEffect } from "react";
import axios from "axios";
import OutfitTile from "./OutfitTile";
import shirt from "../../assets/shirt.png";
import SubHeading from "../SubHeading/SubHeading"
import styles from "./HomePage.module.css";
import getUserEmail from "../../helpers/getUserEmail";

const HomePage = () => {

    // init states
    let tempArr = [];
    const [fileNames, setFileNames] = useState([]);
    const [pastOutfits, setPastOutfits] = useState();

    // grab email and request all user images in their public folder
    // we then create a little tile for each
    useEffect(() => {
      const getFavourites = async () => {
        const email = await getUserEmail(); 
        const postBody = {
          email : email,
        }
        axios.post(`http://localhost:3006/favourites/all`, postBody)
        .then(res => {
          if (res.status === 200) {
        tempArr = []; 
        res.data.map((filename, index) => {
        tempArr.push({id : index + 1, render : `http://localhost:3006/${email}/${filename}`, desc: undefined/*`${filename}`*/})
        setPastOutfits(tempArr);
      })}})
      .catch(err => {
        console.log("No favourites to display")
      })
      }
      getFavourites();
    },[])
 
    return <div className={styles.homePage}>

        <SubHeading subtitle="PAST OUTFITS"/>

        Stuff you've loved

        {/* Loop over all the user's past outfits for history*/}


      <div className={styles.outfitTileContainer}>

        {pastOutfits 
        ? 
        pastOutfits.map((outfitObj) => (
          <div className={styles.card} key={outfitObj.id}>
            <OutfitTile outfit={outfitObj} />
          </div>
        ))
        :
        <h2>Find some favourites and they'll display here!</h2>
        }
      </div>
    </div>
};

export default HomePage;
