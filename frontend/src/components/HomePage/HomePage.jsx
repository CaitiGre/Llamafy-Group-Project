import React from "react";
import { useState } from "react";

import OutfitTile from "./OutfitTile";

import shirt from '../../assets/shirt.png'
import styles from './HomePage.module.css'

const HomePage = () => {

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
        <div className={styles.title}> Welcome Ding Dong. Today it is 5000&#8451;</div>
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