import { Box, Input, InputLabel } from "@mui/material";
import style from "../RegistrationPage/Registration.module.css";

export default function NamesBox({ data, handleChange }) {
  return (
    <Box className={style.NameBoxContainer} display="flex" flexDirection="row">
      <Box display="flex" flexDirection="column" > 
        <InputLabel
          htmlFor="first-name"
          className={style.registerLabel}
          style={{
            paddingBottom: "5px",
            textTransform: "uppercase",
            fontFamily:
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            color: "#fefefe",
          }}
        >
          First Name
        </InputLabel>
        <Input
          type="text"
          name="firstName"
          id="first-name"
          className={style["register-input"]}
          value={data.firstName}
          onChange={handleChange}
          placeholder="Llama"
          style={{ backgroundColor: "white" }}
          disableUnderline={true}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <InputLabel
          htmlFor="last-name"
          className={style.registerLabel}
          style={{
            paddingBottom: "5px",
            textTransform: "uppercase",
            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            color: "#fefefe",
          }}
        >
          Last Name
        </InputLabel>
        <Input
          type="text"
          name="lastName"
          id="last-name"
          className={style["register-input"]}
          value={data.lastName}
          onChange={handleChange}
          placeholder="Alpaca"
          style={{ backgroundColor: "white" }}
          disableUnderline={true}
        />
      </Box>
    </Box>
  );
}
