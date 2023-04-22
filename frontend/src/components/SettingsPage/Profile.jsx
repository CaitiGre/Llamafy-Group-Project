import { Input, InputLabel, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import styles from './SettingsPage.module.css';
import useGet from '../../helpers/useGet';
import axios from 'axios';
import { useLocalStorage } from "../../helpers/useLocalStorage";

function Profile() {

    // Get username from cookie once cookie's set up
    const username = "one"; // set username = "one" for now

    // Get user's current profile data from database
    const { data: dataObj, isLoading } = useGet(`http://localhost:3006/profile/getProfile/${username}`);


    let profileData;

    if (!isLoading && dataObj) {
        // console.log(dataObj.userData);
        // console.log(dataObj.userData.firstName);
        profileData = dataObj.userData; // Assign the object containing properties needed to profileData variable.
    }

    // Assign the value of profile data to loadedData. React will throw error if using profileData outside of the if statement.
    const loadedData = { ...profileData };

    console.log(loadedData); // Somehow the first two initial loads will be an empty object. I don't know why it's the case as I thought profileData would only contain properly loaded object
    // since it was assigned inside the if statement.

    // Set data's properties with loadedData's data - Not working because loadedData will be empty the first two times the page loads
    // const [data, setData] = useState({
    //     fname: loadedData.firstName,
    //     lname: loadedData.lname,
    //     email: loadedData.email,
    //     gender: loadedData.gender,
    //     skinTone: '',
    //     location: loadedData.location,
    //     password: ''
    // });

    // console.log("data", data);


    const [data, setData] = useState({
        fname: 'fname',
        lname: 'lname1',
        email: '',
        gender: '',
        skinTone: '',
        location: '',
        password: ''
    });


    const inputData = [
        {
            displayName: "First Name",
            type: "text",
            name: "fname",
            id: "fname",
            value: data.fname,
            loadedData: loadedData.firstName,
            placeHolder: "First name from database"
        },
        {
            displayName: "Last Name",
            type: "text",
            name: "lname",
            id: "lname",
            value: data.lname,
            loadedData: loadedData.lastName,
            placeHolder: "Last name from database"
        },
        {
            displayName: "Email",
            type: "email",
            name: "email",
            id: "email",
            value: data.email,
            loadedData: loadedData.email,
            placeHolder: "Email from database"
        },

        {
            displayName: "Style Preference",
            type: "text",
            name: "stylePreference",
            id: "stylePreference",
            value: data.stylePreference,
            loadedData: loadedData.gender,
            placeHolder: "Style preference from database"
        },
        {
            displayName: "Skin Tone",
            type: "text",
            name: "skinTone",
            id: "skinTone",
            value: data.skinTone,
            loadedData: loadedData.skinTone,
            placeHolder: "Skin tone from database"
        },
        {
            displayName: "Location",
            type: "text",
            name: "location",
            id: "location",
            value: data.location,
            loadedData: loadedData.location,
            placeHolder: "Location from database"
        },
        {
            displayName: "Password",
            type: "password",
            name: "password",
            id: "password",
            value: data.password,
            loadedData: "",
            placeHolder: "Password from database"
        }
    ]

    // console.log(loadedData.firstName);

    async function handleChange(event) {
        const inputData = await event.target.value;
        setData({
            ...data,
            [event.target.name]: inputData
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(JSON.stringify(data));
    }

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
                                // placeholder={item.placeHolder}
                                placeholder={item.loadedData}
                                defaultValue={item.value}
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