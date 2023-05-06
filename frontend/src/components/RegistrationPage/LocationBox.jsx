import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import style from "../RegistrationPage/Registration.module.css";

export default function LocationBox({ data, handleChange }) {
  const locations = [
    "Auckland",
    "Wellington",
    "Christchurch",
    "Dunedin",
    "Invercargill",
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <InputLabel
        htmlFor="location"
        className={style.registerLabel}
        style={{
          paddingBottom: "5px",
          textTransform: "uppercase",
          fontFamily:
          "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          color: "#fefefe",
        }}
      >
        Primary Location
      </InputLabel>
      <Select
        name="location"
        id={style["location"]}
        className={style["register-input"]}
        value={data.location}
        onChange={handleChange}
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
          width: "71vh",
          height: "4.5vh",
          color: "black",
          fontFamily:
          "Franklin Gothic Medium, 'Arial Narrow', Arial, sans-serif",
          textAlign: "center",
          fontWeight: "1px",
          justifyContent: "center",
        }}
        disableUnderline={true}
      >
        <MenuItem value="" style={{ color: "black" }} disabled>
          Which city should LLAMAFY base recommendations on?
        </MenuItem>
        {locations.map((location) => (
          <MenuItem key={location} value={location}>
            {location}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
