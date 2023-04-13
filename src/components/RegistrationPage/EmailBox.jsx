import { Box } from "@mui/material";
import style from '../RegistrationPage/Registration.module.css';

export default function EmailBox({data, handleChange}) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <label htmlFor="email" className={style["register-label"]}>Email</label>
            <input
                type="email"
                name="email"
                id={style["email"]}
                className={style["register-input"]}
                value={data.email}
                onChange={handleChange}
                placeholder="llama@lavenderllama.co.nz"
            />
        </Box>
    );
};