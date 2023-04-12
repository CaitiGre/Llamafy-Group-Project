// import mui from 'mui';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import React from 'react'
import OotdTile from './OotdTile';

const OutfitOfTheDay = ( {} ) => {

    const temp = [
        {id : 1, img : 'images/good-bad-ugly.jpeg', desc : "A cozy poncho and fleece vest topped with a dapper hat."},
        {id : 2, img : 'images/dirty_harry.jpeg', desc: "Grey tweed jacket over a red knitted vest with a dashing tie. Formal."},
        {id : 3, img : 'images/unforgiven.jpg', desc: "Thick warm coat and tidy brown polo."}
    ]

    const [recommendations, setRecommendations] = useState(temp)

    return (
        <React.Fragment>
            <h1>Outfit of the Day</h1>
            <h2>somethign something llama something</h2>

            <div>
                {recommendations.map(rec => 
                    <div key={rec.id}>
                        <OotdTile description={rec.desc} imgLink={rec.img}/>
                    </div>
                )}
            </div>

        </React.Fragment>
    );

}

export default OutfitOfTheDay;