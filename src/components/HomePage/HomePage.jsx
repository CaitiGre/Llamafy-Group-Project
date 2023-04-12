import React from "react";
import OutfitTile from "../OutfitTile";
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
    }]

    return <div className={styles.homePage}>
        <div className={styles.title}> Welcome Ding Dong. Today it is 5000&#8451;</div>
        <br />
        <button>What should I wear today?</button>
        
        <div className={styles.outfitTileContainer}>
            <div className={styles.header}>Past Outfits</div>
            {tempArr.map((outfitObj) => 
                <div className={styles.card} key={outfitObj.id}>
                    <OutfitTile outfit={outfitObj} />
                </div>
                )
            }
        </div>
    </ div>
}

export default HomePage;