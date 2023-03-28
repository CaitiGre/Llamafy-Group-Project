import React from "react";

const OutfitTile = ({outfit}) => {
    return <div> 
            <img src={outfit.render} style={{width: '200px'}} />
            <p>{outfit.desc}</p>
    </div>
}

export default OutfitTile;