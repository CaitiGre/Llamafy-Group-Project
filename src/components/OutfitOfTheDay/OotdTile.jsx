import React from 'react'
import styles from './OutfitOfTheDay.module.css'

const OotdTile = ( {imgLink, description} ) => {

    return (
        <div>
            <img src={imgLink} className={styles.OotdTile}/>
            <div className={styles.tileDesc}>
                {description}
            </div>
        </div>
    )

}

export default OotdTile;