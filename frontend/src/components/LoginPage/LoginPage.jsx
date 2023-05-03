import './LoginPage.module.css';
import { Box, Input, InputLabel, Typography, Grid } from "@mui/material";
import { useContext, useState } from "react";
import styles from './LoginPage.module.css';
import Heading from '../Heading/Heading';
import AuthContext from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() { 
    const { setUserAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setData(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3006/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: data.email,
                    password: data.password,
                }),
                credentials: 'include'
            });

            if (response.ok) {
                await setUserAuthenticated(true);
                const result = await response.json();
                navigate('/ootd');
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
            displayName: "EMAIL",
            type: "email",
            name: "email",
            id: "email",
            value: data.email,
            onChange: handleChange,
            placeHolder: "llama@lavenderllama.co.nz"
        },

        {
            displayName: "PASSWORD",
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
            <Heading title="Login"/>

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>

                    {inputData.map((item) => (
                        <Grid>
                        <Box display="flex" flexDirection="column" alignItems="center" key={item.id}>
                            <InputLabel
                                sx={{
                                    paddingTop: "5vh",
                                    color: "#eee",
                                    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                                }}>
                                {item.displayName}
                            </InputLabel>
                        </Box>
                            <Box display="flex" alignItems="center" textAlign="center" paddingTop="2vh">
                            <Input required
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    borderRadius: "20px",
                                    boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)",
                                    height: "40px",
                                    width: "50%",
                                    margin: "auto",
                                    backgroundColor: "white",
                                    textAlign: "center",
                                    alignContent: "center",
                                    caretColor: "black",
                                }}
                                type={item.type}
                                name={item.name}
                                id={item.id}
                                value={item.value}
                                onChange={handleChange}
                                disableUnderline={true}
                                placeholder={item.placeHolder}
                            />
                        </Box>
                        </Grid>
                    ))}
                    

                    <button id="submit-button" type="submit" className={styles.submitButton}>SUBMIT</button>

                </form>
            </div>
        </div>
    )
}

export default LoginPage;
