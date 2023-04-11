import './LoginPage.module.css';
import CloudBackground from '../assets/full-opacity-cloud.jpg';
import { Parallax } from 'react-parallax';
import { Box, Input, InputLabel, TextField } from "@mui/material";
import { useState } from "react";

function LoginPage() {

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setData({ [event.target.name]: event.target.value });
    };

    console.log(data);


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
            <Parallax bgImage={CloudBackground} strength={550} className="backgroundImage">
                <div style={{ width: "cover", height: "100vh", margin: "auto" }} >

                    <h1>LOGIN</h1>

                    <div>
                        <form>

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

                            <button id="submit-button" type="submit" className='login-button'>Submit</button>
                            {/* To add functionality to button: send data to database? */}
                        </form>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default LoginPage;