import { Box } from "@mui/material";

export default function EmailBox({data, handleChange}) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                placeholder="llama@lavenderllama.co.nz"
            />
        </Box>
    );
}