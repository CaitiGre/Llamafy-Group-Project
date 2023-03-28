import { Box } from "@mui/material";


export default function PasswordBox({ data, handleChange }) {


    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder=""
                />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="reenter-password">Re-enter Password</label>
                <input
                    type="password"
                    name="repassword"
                    id="repassword"
                    value={data.repassword}
                    onChange={handleChange}
                    placeholder=""
                />
            </Box>
        </>
    );
};