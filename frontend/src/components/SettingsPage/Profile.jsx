import { InputLabel, Box, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import styles from './SettingsPage.module.css';
import useGet from '../../helpers/useGet';
import axios from 'axios';
import getUserEmail from "../../helpers/getUserEmail";
import { locations } from "./locations";
import Selection from "./Selection";

function Profile() {

    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        gender: '',
        skinTone: '',
        location: '',
        newPassword: '',
        reNewPassword: '',
        password: ''
    });

    // Get user's email
    const [userEmail, setUserEmail] = useState(null);
    useEffect(() => {
        async function fetchUserEmail() {
            const email = await getUserEmail();
            console.log("User email:", email);
            setUserEmail(email);
        }

        fetchUserEmail();
    }, []);

    // Get user's current profile data from database
    const { data: dataObj, isLoading } = useGet(`http://localhost:3006/profile/getProfile/${userEmail}`);

    useEffect(() => {
        if (!isLoading && dataObj.userData) {
            console.log("isLoading: ", isLoading, "dataObj: ", dataObj);

            setData(
                {
                    fname: dataObj.userData.firstName,
                    lname: dataObj.userData.lastName,
                    email: dataObj.userData.email,
                    gender: dataObj.userData.gender,
                    skinTone: dataObj.userData.skinTone,
                    location: dataObj.userData.location,
                    newPassword: '',
                    password: dataObj.userData.password
                }
            )

            console.log("data", data);
        }

    }, [isLoading, dataObj]);


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
            type: "select",
            name: "gender",
            id: "gender",
            value: data.gender,
        },
        {
            displayName: "SKIN TONE",
            type: "select",
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

    const genders = [
        "female",
        "male",
        "all"
    ];

    const skinTones = [
        "warm",
        "cool",
        "neutral",
        "neutral warm",
        "neutral cool",
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
            {(!isLoading && dataObj.userData) ? (
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        {inputData.map((item) => (
                            <Box display="flex" flexDirection="column" alignItems="center" key={item.id}>
                                {item.type !== "select" ?
                                    <>
                                        <InputLabel
                                            sx={{
                                                paddingTop: "25px",
                                                marginBottom: "2px",
                                                textAlign: "right",
                                                color: "#eee",
                                                fontWeight: "bold",
                                                fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
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
                                    </>
                                    :
                                    <>
                                        <InputLabel
                                            sx={{
                                                paddingTop: "25px",
                                                marginBottom: "2px",
                                                textAlign: "right",
                                                color: "#eee",
                                                fontWeight: "bold",
                                                fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                                            }}>

                                            {item.displayName}

                                        </InputLabel>

                                        {item.name == "location" ?
                                            <Selection item={item} options={locations} selectionValue={data.location} handleChange={handleChange}></Selection>
                                            :
                                            item.name == "gender" ?
                                                <Selection item={item} options={genders} selectionValue={data.gender} handleChange={handleChange}></Selection>
                                                :
                                                <Selection item={item} options={skinTones} selectionValue={data.skinTone} handleChange={handleChange}></Selection>
                                        }


                                    </>

                                }
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