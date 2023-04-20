import { useState } from "react";
import { ButtonGroup, Button, Typography } from "@mui/material";
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
            <Typography variant="h1" mt="10%" className={styles.heading}>SETTINGS</Typography>
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