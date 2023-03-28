import { Box } from "@mui/material";

export default function LocationBox({ data, handleChange }) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <label htmlFor="location">Primary Location</label>
            <input
                type="text"
                name="location"
                id="location"
                value={data.location}
                onChange={handleChange}
                placeholder="Which city should llama base the recommendations?"
            />
        </Box>
    );
}