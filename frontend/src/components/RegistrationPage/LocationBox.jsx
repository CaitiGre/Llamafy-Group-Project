import { Box } from "@mui/material";
import style from '../RegistrationPage/Registration.module.css';

export default function LocationBox({ data, handleChange }) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <label htmlFor="location" className={style["register-label"]}>Primary Location</label>
            <input
                type="text"
                name="location"
                id={style["location"]}
                className={style["register-input"]}
                value={data.location}
                onChange={handleChange}
                placeholder="Which city should llama base the recommendations?"
            />
        </Box>
    );
};