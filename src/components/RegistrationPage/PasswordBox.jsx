import { Box } from "@mui/material";
import { useState } from "react";



export default function PasswordBox({ data, handleChange }) {

    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="password" className="register-label">Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="register-input"
                    value={data.password}
                    onChange={handleChange}
                    placeholder=""
                />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="reenter-password" className="register-label">Re-enter Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    name="repassword"
                    id="repassword"
                    className="register-input"
                    value={data.repassword}
                    onChange={handleChange}
                    placeholder=""
                />
            </Box>
        </>
    );
};