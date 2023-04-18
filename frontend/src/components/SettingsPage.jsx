import './SettingsPage.module.css';
import CloudBackground from '../assets/full-opacity-cloud.jpg';
import { Parallax } from 'react-parallax';
import { ButtonGroup, Button } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
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
        <>
            <Parallax bgImage={CloudBackground} strength={550} className={styles.backgroundImage}>
                <div style={{ width: "cover", height: "100vh", margin: "auto" }} >

                    <h1 className={styles.heading}>SETTINGS</h1>
                    <h2 className={styles.subHeading}>no need for drama llama, alpaca the bags</h2>

                    <div>
                        <ButtonGroup color="secondary" size="small" aria-label="small button group"
                            sx={{
                                marginBottom: "35px"
                            }}
                        >
                            <Button onClick={handleProfileClick}>Profile</Button>
                            <Button onClick={handleWardrobeClick}>Wardrobe</Button>

                        </ButtonGroup>
                    </div>

                    {isProfile ? <Profile /> : <Wardrobe />}

                </div>
            </Parallax>
        </>
    );
}

export default SettingsPage;