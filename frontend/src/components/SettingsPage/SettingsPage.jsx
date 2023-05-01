import { useLocalStorage } from "../../helpers/useLocalStorage";
import { useState } from "react";
import { ButtonGroup, Button, Typography } from "@mui/material";
import styles from './SettingsPage.module.css';
import Profile from './Profile';
import Wardrobe from './Wardrobe';
import Heading from "../Heading/Heading";

function SettingsPage() {
    const [isProfile, setProfile] = useLocalStorage(true);
    // const [isWardrobe, setWardrobe] = useLocalStorage(false);

    function handleProfileClick() {
        setProfile(true);
    }

    function handleWardrobeClick() {
        setProfile(false);
        // setWardrobe(true);
    }


    return (
        <div>
            <Heading title="SETTINGS" className={styles.heading}/>
            <h2 className={styles.subHeading}>No need for drama llama, alpaca the bags</h2>

            <div>
                <ButtonGroup color="secondary" size="small" aria-label="small button group"
                    sx={{
                        marginBottom: "2%"
                    }}
                >
                    <Button onClick={handleProfileClick}>Profile</Button>
                    <Button onClick={handleWardrobeClick}>Wardrobe</Button>

                </ButtonGroup>
            </div>
            {/* {isProfile ? <Profile /> : isWardrobe ? <Wardrobe /> : <Profile />} */}
            {isProfile ? <Profile /> : <Wardrobe />}
        </div>
    );
}

export default SettingsPage;