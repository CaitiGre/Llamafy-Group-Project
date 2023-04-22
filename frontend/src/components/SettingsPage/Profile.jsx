import { Input, InputLabel, Grid } from "@mui/material";
import { useState } from "react";
import styles from './SettingsPage.module.css';

function Profile() {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        stylePreference: '',
        skinTone: '',
        location: '',
        password: ''
    });

    async function handleChange(event) {
        const inputData = await event.target.value;
        setData({
            ...data,
            [event.target.name]: inputData
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(data));
    }


    const inputData = [
        {
            displayName: "First Name",
            type: "text",
            name: "fname",
            id: "fname",
            value: data.fname,
            placeHolder: "First name from database"
        },
        {
            displayName: "Last Name",
            type: "text",
            name: "lname",
            id: "lname",
            value: data.lname,
            placeHolder: "Last name from database"
        },
        {
            displayName: "Email",
            type: "email",
            name: "email",
            id: "email",
            value: data.email,
            placeHolder: "Email from database"
        },

        {
            displayName: "Style Preference",
            type: "text",
            name: "stylePreference",
            id: "stylePreference",
            value: data.stylePreference,
            placeHolder: "Style preference from database"
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
            displayName: "Location",
            type: "text",
            name: "location",
            id: "location",
            value: data.location,
            placeHolder: "Location from database"
        },
        {
            displayName: "Password",
            type: "password",
            name: "password",
            id: "password",
            value: data.password,
            placeHolder: "Password from database"
        }
    ]

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                {inputData.map((item) => (
                    <Grid container key={item.id} spacing={2}
                        sx={{ margin: 0 }}>

                        <Grid item xs={4}>
                            <InputLabel
                                sx={{
                                    marginBottom: "2px",
                                    textAlign: "center",
                                    color: "#eee"
                                }}>

                                {item.displayName}

                            </InputLabel>
                        </Grid>

                        <Grid item xs={8}
                            display={'flex'}
                            justifyContent="flex-start">
                            <Input
                                sx={{
                                    borderRadius: "20px",
                                    boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)",
                                    height: "30px",
                                    width: "90%",
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