import './LoginPage.module.css';
import CloudBackground from '../assets/full-opacity-cloud.jpg';
import { Parallax } from 'react-parallax';
import { Box } from "@mui/material";

function LoginPage() {
    return (

        <div>
            <Parallax bgImage={CloudBackground} strength={550} className="backgroundImage">
                <div style={{ width: "cover", height: "100vh", margin: "auto" }} >

                    <h1>LOGIN</h1>

                    <div>
                        <form>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <label htmlFor="email">Username/ Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    // value={}
                                    // onChange={}
                                    placeholder="llama@lavenderllama.co.nz"
                                />
                            </Box>

                            <Box display="flex" flexDirection="column" alignItems="center">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                // value={}
                                // onChange={}
                                />
                            </Box>

                            <button id="submit-button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </Parallax>
        </div>



    )
}

export default LoginPage;