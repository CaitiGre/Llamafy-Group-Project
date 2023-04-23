import { Input, InputLabel, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import styles from './SettingsPage.module.css';
import useGet from '../../helpers/useGet';


function Profile() {

    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        gender: '',
        skinTone: '',
        location: '',
        password: ''
    });

    // Get username from cookie once cookie's set up
    const username = "one"; // set username = "one" for now

    // Get user's current profile data from database
    const { data: dataObj, isLoading } = useGet(`http://localhost:3006/profile/getProfile/${username}`);

    const { profileData, setProfileData } = useState({});

    // let profileData;

    useEffect(() => {
        if (!isLoading && dataObj) {
            // console.log(dataObj.userData);
            // console.log(dataObj.userData.firstName);
            // profileData = dataObj.userData; // Assign the object containing properties needed to profileData variable.

            setProfileData(dataObj.userData); // Error: setProfileData is not a function

            setData(
                {
                    fname: profileData.firstName,
                    lname: profileData.lastName,
                    email: profileData.email,
                    gender: profileData.gender,
                    skinTone: profileData.skintTone,
                    location: profileData.location,
                    password: profileData.password,
                }
            )

        }

    }, [isLoading, dataObj]); // Once isLoading and profileData and dataObj changed (meaning the fetch is completed), useEffect() will run and setData to fetched data
    // Remember that initially when the data was still being fetched, the values of isLoading and dataObj would be different

    // console.log(profileData); // Why is profileData undefined?

    const inputData = [
        {
            displayName: "First Name",
            type: "text",
            name: "fname",
            id: "fname",
            value: data.fname,
        },
        {
            displayName: "Last Name",
            type: "text",
            name: "lname",
            id: "lname",
            value: data.lname,
        },
        {
            displayName: "Email",
            type: "email",
            name: "email",
            id: "email",
            value: data.email,
        },

        {
            displayName: "Gender",
            type: "text",
            name: "gender",
            id: "gender",
            value: data.gender,
        },
        {
            displayName: "Skin Tone",
            type: "text",
            name: "skinTone",
            id: "skinTone",
            value: data.skinTone,
        },
        {
            displayName: "Location",
            type: "text",
            name: "location",
            id: "location",
            value: data.location,
        },
        {
            displayName: "Password",
            type: "password",
            name: "password",
            id: "password",
            value: data.password,
        }
    ]

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
                                placeholder={item.loadedData}
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