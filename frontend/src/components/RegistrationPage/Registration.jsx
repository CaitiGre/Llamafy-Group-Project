import { useState } from "react";
import style from "../RegistrationPage/Registration.module.css";
import { Box, Button, Grid } from "@mui/material";
import bcrypt from "bcryptjs";
import NamesBox from "./NameBox";
import EmailBox from "./EmailBox";
import LocationBox from "./LocationBox";
import GenderButtons from "./GenderButtons";
import PasswordBox from "./PasswordBox";
import axios from "axios";
import Heading from "../Heading/Heading";
import { useNavigate } from "react-router";

const salt = bcrypt.genSaltSync(10);

function RegistrationPage() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: "",
    location: "",
    gender: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleButtonClick = (gender) => {
    setData({ ...data, gender });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.password !== data.repassword) {
      alert("Your passwords must match.");
    } else if (Object.values(data).includes("")) {
      alert("All details on this form are required.");
    } else {
      const hashedPassword = bcrypt.hashSync(data.password, salt);
      try {
        const response = await axios.post(
          "http://localhost:3006/registration/registerNewUser",
          {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: hashedPassword,
            location: data.location,
            gender: data.gender,
          }
        );
        alert("Registration successful!");
        navigate('/login');
      } catch (error) {
        console.log(error);
        alert(
          "An error occurred while registering. Please try again later." +
            String(error)
        );
      }
    }
  };

  return (
    <>
    
      <Heading title="Register" />
      <div className={style["form-container"]}>
        <form onSubmit={handleSubmit} style={{width: "90vh"}}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            rowGap="0.6vh"
            style={{paddingBottom: "3vh"}}
          >
            <NamesBox data={data} handleChange={handleChange} />
            {/*Need to add alert function if email entered is already in use.*/}
            <EmailBox data={data} handleChange={handleChange} />
            <PasswordBox data={data} handleChange={handleChange} />
            <LocationBox data={data} handleChange={handleChange} />
            <GenderButtons data={data} handleButtonClick={handleButtonClick} />
            <Button className={style.submitButton} style={{backgroundColor: "white", color: "black", borderRadius: "25px"}} type="submit">
              SUBMIT
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
}

export default RegistrationPage;
