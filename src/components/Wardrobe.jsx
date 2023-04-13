import './SettingsPage.module.css';
import shirt from '../assets/shirt.png';
// import { Box, Input, InputLabel, ButtonGroup, Button } from "@mui/material";
import { useState } from "react";
import styles from './SettingsPage.module.css';

function Wardrobe() {
    // Get clothes data from database once set up
    const clothes = [
        {
            id: 1,
            render: shirt,
            desc: 'item1'
        },
        {
            id: 2,
            render: shirt,
            desc: 'item2'
        },
        {
            id: 3,
            render: shirt,
            desc: 'item3'
        }
    ]

    // Might delete this and iimport OutfitTile once merged with main
    const OutfitTile = ({ outfit }) => {
        return <div>
            <img src={outfit.render} style={{ width: '200px' }} />
            <p>{outfit.desc}</p>
        </div>
    }


    return (
        <>
            <div className={styles.outfitTileContainer}>
                {clothes.map((outfitObj) => (
                    <div className={styles.card} key={outfitObj.id}>
                        <OutfitTile outfit={outfitObj} />
                    </div>))
                }
            </div>
        </>
    );
}

export default Wardrobe;