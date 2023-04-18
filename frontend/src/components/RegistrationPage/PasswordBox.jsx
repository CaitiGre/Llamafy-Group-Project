import { Box } from "@mui/material";
import style from '../RegistrationPage/Registration.module.css';
import { useState } from "react";
import eyeIcon from '../../assets/show.png';
import lashIcon from '../../assets/hide.png';



export default function PasswordBox({ data, handleChange }) {

    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="password" className={style["register-label"]}>Password</label>
                <div className={style["wrapper"]}>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id={style["password"]}
                        className={style["register-input"]}
                        value={data.password}
                        onChange={handleChange}
                        placeholder=""
                    />
                    <img
                        src={showPassword ? lashIcon : eyeIcon}
                        className={style["password-icon"]}
                        onClick={toggleShowPassword}
                    />
                </div>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="reenter-password" className={style["register-label"]}>Re-enter Password</label>
                <div className={style["wrapper"]}>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="repassword"
                        id={style["repassword"]}
                        className={style["register-input"]}
                        value={data.repassword}
                        onChange={handleChange}
                        placeholder=""
                    />
                    <img
                        src={showPassword ? lashIcon : eyeIcon}
                        className={style["password-icon"]}
                        onClick={toggleShowPassword}
                    />
                </div>
            </Box>
        </>
    );
};