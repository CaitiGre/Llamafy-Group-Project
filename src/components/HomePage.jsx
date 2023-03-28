import React from "react";
import OutfitTile from "./OutfitTile";
import { ReactDOM } from "react";

const HomePage = () => {

    return <>
        <div>Welcome NAME. Today it is TEMP degrees c</div>
        <br />
        <div>What should we wear today?</div>
        
        <div>
            <OutfitTile />
        </div>

    </>
}

export default HomePage;