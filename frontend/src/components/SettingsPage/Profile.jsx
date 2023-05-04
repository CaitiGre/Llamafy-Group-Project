import { InputLabel, Box } from "@mui/material";
import { useState, useEffect } from "react";
import styles from './SettingsPage.module.css';
import useGet from '../../helpers/useGet';
import axios from 'axios';

function Profile() {

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

    // Get user's email from cookie once cookie's set up
    const userEmail = "cass@sth.com";

    // Get user's current profile data from database
    const { data: dataObj, isLoading } = useGet(`http://localhost:3006/profile/getProfile/${userEmail}`);

    useEffect(() => {
        if (!isLoading && dataObj) {

            // Assign the object containing properties needed to profileData.
            setProfileData(dataObj.userData);

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


    const locations = [
        "Auckland",
        "Wellington",
        "Christchurch",
        "Dunedin",
        "Invercargill"
    ];

    const inputData = [
        {
            displayName: "EMAIL",
            type: "email",
            name: "email",
            id: "profileEmail",
            value: data.email,
            readOnly: true
        },
        {
            displayName: "FIRST NAME",
            type: "text",
            name: "fname",
            id: "fname",
            value: data.fname,
        },
        {
            displayName: "LAST NAME",
            type: "text",
            name: "lname",
            id: "lname",
            value: data.lname,
        },
        {
            displayName: "GENDER",
            type: "text",
            name: "gender",
            id: "gender",
            value: data.gender,
        },
        {
            displayName: "SKIN TONE",
            type: "text",
            name: "skinTone",
            id: "skinTone",
            value: data.skinTone,
        },
        {
            displayName: "LOCATION",
            type: "select",
            name: "location",
            id: "location",
            value: data.location,
        },
        {
            displayName: "CLOTHING SIZE",
            type: "text",
            name: "size",
            id: "size",
            value: data.size,
        },
        {
            displayName: "NEW PASSWORD",
            type: "password",
            name: "newPassword",
            id: "newPassword",
            value: '',
        },
        {
            displayName: "RE-ENTER NEW PASSWORD",
            type: "password",
            name: "reNewPassword",
            id: "reNewPassword",
            value: '',
        },
        {
            displayName: "CURRENT PASSWORD*",
            type: "password",
            name: "password",
            id: "password",
            value: '',
            required: true
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

        if ((data.newPassword || data.reNewPassword) && (data.newPassword !== data.reNewPassword)) {
            alert("Your new passwords must match.");
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
                });

                console.log("new password to post:", data.newPassword);

                if (response.data.validPass) {
                    console.log("true - response.data.validPass: ", response.data.validPass);
                    alert('Update successful!');
                } else {
                    console.log("false - response.data.validPass: ", response.data.validPass);
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
            {(!isLoading && dataObj) ? (
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        {inputData.map((item) => (
                            <Box display="flex" flexDirection="column" alignItems="center" key={item.id}>
                                <InputLabel
                                    sx={{
                                        paddingTop: "25px",
                                        marginBottom: "2px",
                                        textAlign: "right",
                                        color: "#48124c",
                                        fontSize: "small",
                                        fontWeight: "bold"
                                    }}>

                                    {item.displayName}

                                </InputLabel>


                                <input className={styles.field}
                                    type={item.type}
                                    name={item.name}
                                    id={item.id}
                                    defaultValue={item.value}
                                    onChange={handleChange}
                                    placeholder={item.value}
                                    readOnly={item.readOnly}
                                    required={item.required}
                                    style={item.readOnly && { backgroundColor: "#e4e0e0" }}
                                />

                            </Box>
                        ))}
                        <button id="submit-button" type="submit" className={styles.submitButton}>Submit</button>
                    </form >
                </div>
            )
                :
                <div><p>Loading...</p></div>
            }
        </>

    );
}

export default Profile;