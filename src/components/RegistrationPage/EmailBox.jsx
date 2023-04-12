import { Box } from "@mui/material";

export default function EmailBox({data, handleChange}) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <label htmlFor="email" className="register-label">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                className="register-input"
                value={data.email}
                onChange={handleChange}
                placeholder="llama@lavenderllama.co.nz"
            />
        </Box>
    );
};