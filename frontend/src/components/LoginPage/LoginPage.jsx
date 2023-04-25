import './LoginPage.module.css';
import { Box, Input, InputLabel, Typography } from "@mui/material";
import { useState } from "react";
import styles from './LoginPage.module.css';
import bcrypt from 'bcryptjs';

function LoginPage() {

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setData({ [event.target.name]: event.target.value });
    };


    console.log(data);

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const response = await fetch('http://?/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: data.email,
                    password: data.password,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                alert(result.message);
                // Send user to Home Page
            } else {
                const error = await response.json();
                console.error(error);
                alert("Invalid username or password. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred while logging in. Please try again.");
        }
    };


    const inputData = [
        {
            displayName: "Username/ Email",
            type: "email",
            name: "email",
            id: "email",
            value: data.email,
            onChange: handleChange,
            placeHolder: "llama@lavenderllama.co.nz"
        },

        {
            displayName: "Password",
            type: "password",
            name: "password",
            id: "password",
            value: data.password,
            onChange: handleChange,
            placeHolder: ""
        }
    ]

    return (

        <div>
            <Typography variant="h1" mt="10%" className={styles.heading}>LOGIN</Typography>

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>

                    {inputData.map((item) => (
                        <Box display="flex" flexDirection="column" alignItems="center" key={item.id}>
                            <InputLabel
                                sx={{
                                    marginBottom: "5px",
                                    color: "#eee"
                                }}>
                                {item.displayName}
                            </InputLabel>

                            <Input required
                                sx={{
                                    borderRadius: "20px",
                                    boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)",
                                    height: "40px",
                                    width: "85%",
                                    marginBottom: "35px",
                                    backgroundColor: "white",
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
                        </Box>
                    ))}

                    <button id="submit-button" type="submit" className={styles.submitButton}>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default LoginPage;
