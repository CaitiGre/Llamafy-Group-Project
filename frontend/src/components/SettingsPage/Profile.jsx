import { InputLabel, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import styles from './SettingsPage.module.css';
import useGet from '../../helpers/useGet';
import axios from 'axios';
import bcrypt from 'bcryptjs';

function Profile() {

    const salt = bcrypt.genSaltSync(10);

    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        gender: '',
        skinTone: '',
        location: '',
        newPassword: '',
        password: ''
    });

    const [profileData, setProfileData] = useState({});

    const [currentPassword, setCurrentPassword] = useState('');

    // Get user's email from cookie once cookie's set up
    const userEmail = "test1@sth.com";

    // Get user's current profile data from database
    const { data: dataObj, isLoading } = useGet(`http://localhost:3006/profile/getProfile/${userEmail}`);

    useEffect(() => {
        if (!isLoading && dataObj) {

            setProfileData(dataObj.userData); // Assign the object containing properties needed to profileData.

            setCurrentPassword(dataObj.userData.password);
            console.log(currentPassword);

            setData(
                {
                    fname: profileData.firstName,
                    lname: profileData.lastName,
                    email: profileData.email,
                    gender: profileData.gender,
                    skinTone: profileData.skinTone,
                    location: profileData.location,
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
            displayName: "New Password",
            type: "password",
            name: "newPassword",
            id: "newPassword",
            value: '',
        },
        {
            displayName: "Password",
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

        let hashedPassword;

        if (data.newPassword) {
            hashedPassword = bcrypt.hashSync(data.newPassword, salt);
        } else {
            hashedPassword = currentPassword;
        }

        // Compare input password with hashed password from DB
        const isValid = bcrypt.compareSync(data.password, currentPassword);


        if (!isValid) {
            console.log("Current password incorrect", currentPassword);
        } else {
            console.log("Current password correct", currentPassword);

            setCurrentPassword(hashedPassword);
            console.log("current password:", currentPassword);
            console.log("newPassword:", hashedPassword);

            // alert('Updated profile successfully!');

            try {
                await axios.post(`http://localhost:3006/profile/updateProfile`, {
                    firstName: data.fname,
                    lastName: data.lname,
                    email: data.email,
                    gender: data.gender,
                    skinTone: data.skinTone,
                    location: data.location,
                    // password: newPassword,
                    password: hashedPassword
                })
                    .then(() => {
                        return alert('Updated profile successfully!');
                    })
                // Alert is not working

            } catch (error) {
                console.error(error);
                alert('An error occurred while registering. Please try again later.');
            }
        }
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
    );
}

export default Profile;