import './LoginPage.module.css';
import { Box, Input, InputLabel } from "@mui/material";
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

    const handleSubmit = (event) => {
        event.preventDefault();

        const hashedPassword = ""; // Get user password from database
        const inputPassword = data.password; // Get the password input by user

        // Compare the passwords. Code is sth like:
        // const validPassword = bcrypt.compare(inputPassword, hashedPassword);

        // To replace if condition below with validPassword once connected to database

        if (hashedPassword === inputPassword) {
            // Send user to Home Page
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }


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

            <h1 className={styles.heading}>LOGIN</h1>

            <form onSubmit={handleSubmit}>

                {inputData.map((item) => (
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <InputLabel
                            sx={{
                                marginBottom: "5px"
                            }}>
                            {item.displayName}
                        </InputLabel>

                        <Input
                            sx={{
                                borderRadius: "20px",
                                boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)",
                                height: "40px",
                                width: "40%",
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
    )
}

export default LoginPage;
