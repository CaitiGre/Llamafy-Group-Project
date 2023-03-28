import { Box } from "@mui/material";


export default function PasswordBox({ data, handleChange }) {


    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="password" className="register-label">Password</label>
                <input
                    type="password"
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
                    type="password"
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