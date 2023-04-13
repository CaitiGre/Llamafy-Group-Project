import React from "react"
import { useState } from 'react';

import OotdTile from './OotdTile';
import styles from './OutfitOfTheDay.module.css'


const OutfitOfTheDay = () => {

    const temp = [
        {id : 1, img : 'images/good-bad-ugly.jpeg', desc : "A cozy poncho and fleece vest topped with a dapper hat."},
        {id : 2, img : 'images/dirty_harry.jpeg', desc: "Grey tweed jacket over a red knitted vest with a dashing tie. Formal justice wear."},
        {id : 3, img : 'images/unforgiven.jpg', desc: "Thick warm coat and tidy brown polo. Relatively dishevelled."}
    ];

    const [recommendations, setRecommendations] = useState(temp);

    return (
    
        <div>
            <h1 className={styles.landingpageTitle}>Outfit of the Day</h1>
            <h2 className={styles.landingpageSubtitle}>something something llama something</h2>

            <div className={ styles.recommendationTiles }>
                {recommendations.map((rec) => 
                    <div key={rec.id} className={styles.Ootd}>
                        <OotdTile description={rec.desc} imgLink={rec.img}/>
                    </div>
                )}
            </div>

        </div>
    )
};

export default OutfitOfTheDay;