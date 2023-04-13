import styles from './LoginPage.module.css';
import CloudBackground from '../../assets/full-opacity-cloud.jpg';
import { Parallax } from 'react-parallax';
import { Box } from "@mui/material";
import { useState } from "react";
import eyeIcon from '../../assets/show.png';
import lashIcon from '../../assets/hide.png';

function LoginPage() {

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    };

    console.log(data);


    return (

        <div className={styles.LoginPage}>
            <Parallax bgImage={CloudBackground} strength={550} className={styles.backgroundImage}>
                <div style={{ width: "cover", height: "100vh", margin: "auto" }} >

                    <h1 className='loginpage-title'>LOGIN</h1>

                    <div>
                        <form>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <label htmlFor="email">Username/ Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    placeholder="llama@lavenderllama.co.nz"
                                />
                            </Box>

                            <Box display="flex" flexDirection="column" alignItems="center">
                                <label htmlFor="password">Password</label>
                                <div className={styles["wrapper"]}>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={data.password}
                                        onChange={handleChange}
                                    />
                                    <img
                                        src={showPassword ? lashIcon : eyeIcon}
                                        className={styles["password-icon"]}
                                        onClick={toggleShowPassword}
                                    />
                                </div>
                            </Box>

                            <button id="submit-button" type="submit">Submit</button>
                            {/* To add functionality to button: send data to database? */}
                        </form>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default LoginPage;