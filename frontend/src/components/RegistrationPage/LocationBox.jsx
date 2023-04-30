import { Box } from "@mui/material";
import style from '../RegistrationPage/Registration.module.css';

export default function LocationBox({ data, handleChange }) {

    const locations = [
        "Auckland",
        "Wellington",
        "Christchurch",
        "Dunedin",
        "Invercargill"
    ];

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <label htmlFor="location" className={style["register-label"]}>Primary Location</label>
            <select
                name="location"
                id={style["location"]}
                className={style["register-input"]}
                value={data.location}
                onChange={handleChange}
            >
                <option value="" disabled>
                    Which city should llama base the recommendations?
                </option>
                {locations.map((location) => (
                    <option key={location} value={location}>
                        {location}
                    </option>
                ))}
            </select>
        </Box>
    );
};