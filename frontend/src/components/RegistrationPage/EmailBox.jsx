import { Box, Input, InputLabel } from "@mui/material";
import style from "../RegistrationPage/Registration.module.css";

export default function EmailBox({ data, handleChange }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <InputLabel
        htmlFor="email"
        className={style.registerLabel}
        style={{
          paddingBottom: "5px",
          textTransform: "uppercase",
          fontFamily:
            "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          color: "#fefefe",
        }}
      >
        Email
      </InputLabel>
      <Input
        type="email"
        name="email"
        id={style["email"]}
        className={style["register-input"]}
        value={data.email}
        onChange={handleChange}
        placeholder="llama@lavenderllama.co.nz"
        style={{ backgroundColor: "white" }}
        disableUnderline={true}
      />
    </Box>
  );
}
