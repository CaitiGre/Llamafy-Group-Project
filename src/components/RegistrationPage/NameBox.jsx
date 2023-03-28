import { Box } from "@mui/material"

export default function NamesBox({ data, handleChange }) {
    return (
        <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="first-name" className="register-label">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    className="register-input"
                    value={data.firstName}
                    onChange={handleChange}
                    placeholder="Llama"
                />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="last-name" className="register-label">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    className="register-input"
                    value={data.lastName}
                    onChange={handleChange}
                    placeholder="Alpaca"
                />
            </Box>
        </Box>
    );
};