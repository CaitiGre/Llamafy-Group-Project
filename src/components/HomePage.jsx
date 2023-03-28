import React from "react";
import OutfitTile from "./OutfitTile";
import shirt from '../assets/shirt.png'

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

    return <>
        <div>Welcome NAME. Today it is TEMP degrees c</div>
        <br />
        <div>What should I wear today?</div>
        
        <div>
            <div>Past Outfits</div>
            {tempArr.map((outfitObj) => <span><OutfitTile outfit={outfitObj} key={outfitObj.id}/></span>)}
        </div>

    </>
}

export default HomePage;