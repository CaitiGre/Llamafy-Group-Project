import { InputLabel, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import styles from './SettingsPage.module.css';
import useGet from '../../helpers/useGet';
import axios from 'axios';
// import bcrypt from 'bcryptjs';

function Profile() {

    // const salt = bcrypt.genSaltSync(10);

    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        gender: '',
        skinTone: '',
        location: '',
        size: '',
        newPassword: '',
        reNewPassword: '',
        password: ''
    });

    const [profileData, setProfileData] = useState({});

    // const [currentPassword, setCurrentPassword] = useState('');

    // Get user's email from cookie once cookie's set up
    const userEmail = "test1@sth.com";

    // Get user's current profile data from database
    const { data: dataObj, isLoading } = useGet(`http://localhost:3006/profile/getProfile/${userEmail}`); // Need to change this and all other queries using email to use id (if email can be changed)

    useEffect(() => {
        if (!isLoading && dataObj) {

            setProfileData(dataObj.userData); // Assign the object containing properties needed to profileData.

            // setCurrentPassword(dataObj.userData.password);
            console.log(profileData.password);

            setData(
                {
                    fname: profileData.firstName,
                    lname: profileData.lastName,
                    email: profileData.email,
                    gender: profileData.gender,
                    skinTone: profileData.skinTone,
                    location: profileData.location,
                    size: profileData.clothingSize,
                    newPassword: '',
                    password: profileData.password
                }
            )
        }

    }, [isLoading, dataObj]); // Once isLoading and profileData and dataObj changed (meaning the fetch is completed), useEffect() will run and setData to fetched data
    // Remember that initially when the data was still being fetched, the values of isLoading and dataObj would be different


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
            displayName: "Clothing size",
            type: "text",
            name: "size",
            id: "size",
            value: data.size,
        },
        {
            displayName: "New Password",
            type: "password",
            name: "newPassword",
            id: "newPassword",
            value: '',
        },
        {
            displayName: "Re-enter New Password",
            type: "password",
            name: "reNewPassword",
            id: "reNewPassword",
            value: '',
        },
        {
            displayName: "Enter Password to confirm changes",
            type: "password",
            name: "password",
            id: "password",
            value: '',
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
        console.log(JSON.stringify(data)); // Testing

        if (data.newPassword || data.reNewPassword) {
            if (data.newPassword !== data.reNewPassword) {
                alert("Your new passwords must match.");
            }
        } else {

            try {
                const response = await axios.post(`http://localhost:3006/profile/updateProfile/${userEmail}`, {
                    firstName: data.fname,
                    lastName: data.lname,
                    email: data.email,
                    gender: data.gender,
                    skinTone: data.skinTone,
                    location: data.location,
                    size: data.size,
                    password: data.newPassword,
                    inputPassword: data.password,
                    id: profileData.id
                });

                // if (!response.data.validEmail) {
                //     console.log("valid email: ", response);
                //     alert("Email already exists! Please try another one.");
                // }

                // console.log("valid email: ", response.data.validEmail);

                // if (response.data.validPass && response.data.validEmail) {
                //     console.log("true - response.data.validPass: ", response.data.validPass);
                //     alert('Update successful!');
                // } else {
                //     console.log("false - response.data.validPass: ", response.data.validPass);
                //     alert('Incorrect password. Please try again!');
                // }

                if (response.data.validEmail && response.data.validPass) {
                    console.log('validEmail 1: ', response.data.validEmail, 'validPass 1: ', response.data.validPass);
                    alert('Update successful!');

                } else if (!response.data.validEmail) {
                    console.log('validEmail 2: ', response.data.validEmail);
                    alert('Email already exist. Please try again.')
                } else if (!response.data.validPass) {
                    console.log('validPass 2: ', response.data.validPass);
                    alert('Incorrect password. Please try again!');
                }


            } catch (error) {
                console.error(error);
                alert('An error occurred while registering. Please try again later.');
            }
        }
    }

    return (
        <>
            {profileData ? (
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

                                    {/* input using normal tag - does not give warning re. controlled field becoming uncontrolled */}
                                    <input className={styles.field}
                                        type={item.type}
                                        name={item.name}
                                        id={item.id}
                                        defaultValue={item.value}
                                        onChange={handleChange}
                                        placeholder={item.value}
                                    />

                                </Grid>

                            </Grid>
                        ))}
                        <button id="submit-button" type="submit" className={styles.submitButton}>Submit</button>
                    </form >
                </div>
            )
                :
                <p>Loading...</p>}
        </>

    );
}

export default Profile;