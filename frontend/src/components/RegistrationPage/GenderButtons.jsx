import { Box, InputLabel, Button } from "@mui/material";
import style from "../RegistrationPage/Registration.module.css";

export default function GenderButtons({ data, handleButtonClick }) {
  return (
    <>
      <Box
        className={style.GenderButtonBox}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <InputLabel
          htmlFor="gender"
          className={style.registerLabel}
          style={{
            width: "70vh",
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: "5px",
            textTransform: "uppercase",
            fontFamily:
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            color: "#fefefe",
          }}
        >
          Style Preference
        </InputLabel>
        <div className={style["gender-div"]}>
          <Button
            type="button"
            className={`${style["gender-button"]} ${
              data.gender === "male" ? style["selected"] : ""
            }`}
            onClick={() => handleButtonClick("male")}
          >
            Male
          </Button>
          <Button
            type="button"
            className={`${style["gender-button"]} ${
              data.gender === "female" ? style["selected"] : ""
            }`}
            onClick={() => handleButtonClick("female")}
          >
            Female
          </Button>
          <Button
            type="button"
            className={`${style["gender-button"]} ${
              data.gender === "other" ? style["selected"] : ""
            }`}
            onClick={() => handleButtonClick("other")}
          >
            All
          </Button>
        </div>
      </Box>
    </>
  );
}
