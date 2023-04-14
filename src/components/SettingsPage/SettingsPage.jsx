import { useState } from "react";
import './SettingsPage.module.css';
import { ButtonGroup, Button } from "@mui/material";
import styles from './SettingsPage.module.css';
import Profile from './Profile';
import Wardrobe from './Wardrobe';

function SettingsPage() {
    const [isProfile, setProfile] = useState(true);

    function handleProfileClick() {
        setProfile(true);
    }

    function handleWardrobeClick() {
        setProfile(false);
    }


    return (
        <div>
            <h1 className={styles.heading}>SETTINGS</h1>
            <h2 className={styles.subHeading}>no need for drama llama, alpaca the bags</h2>

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

            {isProfile ? <Profile /> : <Wardrobe />}
        </div>
    );
}

export default SettingsPage;