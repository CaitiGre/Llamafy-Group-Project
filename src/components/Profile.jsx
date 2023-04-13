import './SettingsPage.module.css';
import { Box, Input, InputLabel, ButtonGroup, Button } from "@mui/material";
import { useState } from "react";
import styles from './SettingsPage.module.css';

function Profile() {
    const [data, setData] = useState({
        name: '',
        gender: '',
        skinTone: '',
        insights: ''
    });

    const handleChange = (event) => {
        setData({ [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("To send data to database");
    }


    const inputData = [
        {
            displayName: "Name",
            type: "text",
            name: "name",
            id: "name",
            value: data.name,
            onChange: handleChange,
            placeHolder: "Name from database"
        },

        {
            displayName: "Gender",
            type: "text",
            name: "gender",
            id: "gender",
            value: data.gender,
            onChange: handleChange,
            placeHolder: "Gender from database"
        },
        {
            displayName: "Skin Tone",
            type: "text",
            name: "skinTone",
            id: "skinTone",
            value: data.skinTone,
            onChange: handleChange,
            placeHolder: "Skin tone from database"
        },
        {
            displayName: "Insights",
            type: "text",
            name: "insights",
            id: "insights",
            value: data.insights,
            onChange: handleChange,
            placeHolder: "Insights from database"
        }
    ]

    return (
        <>
            <form onSubmit={handleSubmit}>

                {inputData.map((item) => (
                    <Box >
                        <InputLabel
                            sx={{
                                marginBottom: "5px"
                            }}>

                            {item.displayName}

                            <Input
                                sx={{
                                    borderRadius: "20px",
                                    boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)",
                                    height: "40px",
                                    width: "35%",
                                    marginBottom: "15px",
                                    backgroundColor: "white",
                                    marginLeft: "20px"
                                }}
                                type={item.type}
                                name={item.name}
                                id={item.id}
                                value={item.value}
                                onChange={handleChange}
                                inputProps={{ style: { textAlign: "center" } }}
                                disableUnderline={true}
                                placeholder={item.placeHolder}
                            />
                        </InputLabel>

                    </Box>
                ))}

                <button id="submit-button" type="submit" className={styles.submitButton}>Submit</button>

            </form >

        </>
    );
}

export default Profile;