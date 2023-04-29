import React from "react";
import styles from './HomePage.module.css';

const OutfitTile = ({outfit}) => {
    return <div className={styles.outfitTileDiv}> 
            <img src={outfit.render} alt="An image of a generated outfit" className={styles.outfitImage} />
            <p>{outfit.desc}</p>
    </div>
}

export default OutfitTile;