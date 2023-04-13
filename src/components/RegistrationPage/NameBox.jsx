import { Box } from "@mui/material"
import style from '../RegistrationPage/Registration.module.css';

export default function NamesBox({ data, handleChange }) {
    return (
        <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="first-name" className={style["register-label"]}>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    className={style["register-input"]}
                    value={data.firstName}
                    onChange={handleChange}
                    placeholder="Llama"
                />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="last-name" className={style["register-label"]}>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    className={style["register-input"]}
                    value={data.lastName}
                    onChange={handleChange}
                    placeholder="Alpaca"
                />
            </Box>
        </Box>
    );
};