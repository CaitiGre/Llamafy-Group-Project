import { Input, InputLabel, Grid } from "@mui/material";
import { useState } from "react";
import styles from './SettingsPage.module.css';

function Profile() {
    const [data, setData] = useState({
        name: '',
        gender: '',
        skinTone: '',
        insights: ''
    });

    async function handleChange(event) {
        const inputData = await event.target.value;
        setData({
            ...data,
            [event.target.name]: inputData
        })
    }
    // console.log(data);


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(data));
    }


    const inputData = [
        {
            displayName: "Name",
            type: "text",
            name: "name",
            id: "name",
            value: data.name,
            placeHolder: "Name from database"
        },

        {
            displayName: "Gender",
            type: "text",
            name: "gender",
            id: "gender",
            value: data.gender,
            placeHolder: "Gender from database"
        },
        {
            displayName: "Skin Tone",
            type: "text",
            name: "skinTone",
            id: "skinTone",
            value: data.skinTone,
            placeHolder: "Skin tone from database"
        },
        {
            displayName: "Insights",
            type: "text",
            name: "insights",
            id: "insights",
            value: data.insights,
            placeHolder: "Insights from database"
        }
    ]

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                {inputData.map((item) => (
                    <Grid container spacing={2}
                        sx={{ margin: 0 }}>

                        <Grid item xs={4}>
                            <InputLabel
                                sx={{
                                    marginBottom: "2px",
                                    textAlign: "right"
                                }}>

                                {item.displayName}

                            </InputLabel>
                        </Grid>

                        <Grid item xs={8}
                            direction="row"
                            display={'flex'}
                            justifyContent="flex-start">
                            <Input
                                sx={{
                                    borderRadius: "20px",
                                    boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)",
                                    height: "30px",
                                    width: "60%",
                                    marginBottom: "15px",
                                    backgroundColor: "white",
                                    margin: "0px"
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
                        </Grid>

                    </Grid>
                ))}
                <button id="submit-button" type="submit" className={styles.submitButton}>Submit</button>
            </form >
        </div>
    );
}

export default Profile;