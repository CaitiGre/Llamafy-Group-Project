import { Select, MenuItem } from "@mui/material";
import styles from './SettingsPage.module.css';

function Selection({ item, options, selectionValue, handleChange }) {

    return (
        <Select
            name={item.name}
            id={item.id}
            className={styles["register-input"]}
            value={selectionValue}
            onChange={handleChange}
            style={{
                backgroundColor: "white",
                borderRadius: "25px",
                width: "32.5vw",
                padding: "2vh",
                height: "5vh",
                fontSize: "small",
                textAlign: "center",
                justifyContent: "center"
            }}

            disableUnderline={true}
        >

            <MenuItem value={item.value} style={{ color: "black" }} disabled></MenuItem>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}

        </Select>
    );
}

export default Selection;