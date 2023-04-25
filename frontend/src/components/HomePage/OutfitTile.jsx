import React from "react";
import styles from './HomePage.module.css';

const OutfitTile = ({outfit}) => {
    return <div className={styles.outfitTileDiv}> 
            <img src={outfit.render} className={styles.outfitImage} />
            <p>{outfit.desc}</p>
    </div>
}

export default OutfitTile;