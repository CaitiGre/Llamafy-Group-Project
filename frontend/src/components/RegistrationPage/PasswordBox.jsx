import { Box, Input, InputLabel, useMediaQuery, useTheme } from "@mui/material";
import style from "../RegistrationPage/Registration.module.css";
import { useState } from "react";
import eyeIcon from "../../assets/show.png";
import lashIcon from "../../assets/hide.png";

export default function PasswordBox({ data, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <InputLabel
          htmlFor="password"
          className={style.registerLabel}
          style={{
            paddingBottom: "5px",
            textTransform: "uppercase",
            fontFamily:
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            color: "#fefefe",
          }}
        >
          Password
        </InputLabel>
        <div className={style["wrapper"]}>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            id={style["password"]}
            className={style["register-input"]}
            value={data.password}
            onChange={handleChange}
            placeholder=""
            style={{
              backgroundColor: "white",
              width: isLargeScreen ? "50vw" : "72vw",
              height: "4.5vh",
            }}
            disableUnderline={true}
          />
          <img
            src={showPassword ? lashIcon : eyeIcon}
            className={style["password-icon"]}
            onClick={toggleShowPassword}
            alt="Eye icon to display or hide password"
          />
        </div>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <InputLabel
          htmlFor="reenter-password"
          className={style.registerLabel}
          style={{
            paddingBottom: "5px",
            textTransform: "uppercase",
            fontFamily:
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            color: "#fefefe",
          }}
        >
          Re-enter Password
        </InputLabel>
        <div className={style["wrapper"]}>
          <Input
            type={showPassword ? "text" : "password"}
            name="repassword"
            id={style["repassword"]}
            className={style["register-input"]}
            value={data.repassword}
            onChange={handleChange}
            placeholder=""
            style={{ 
              backgroundColor: "white",   
              width: isLargeScreen ? "50vw" : "72vw", 
              height: "4.5vh", 
            }}
            disableUnderline={true}
          />
          <img
            src={showPassword ? lashIcon : eyeIcon}
            className={style["password-icon"]}
            onClick={toggleShowPassword}
          />
        </div>
      </Box>
    </>
  );
}
