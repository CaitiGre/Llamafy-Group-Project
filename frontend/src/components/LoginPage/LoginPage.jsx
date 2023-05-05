import "./LoginPage.module.css";
import { Box, Input, InputLabel, Grid } from "@mui/material";
import { useContext, useState } from "react";
import styles from "./LoginPage.module.css";
import Heading from "../Heading/Heading";
import AuthContext from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import eyeIcon from "../../assets/show.png";
import lashIcon from "../../assets/hide.png";

function LoginPage() {
  const { setUserAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3006/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.email,
          password: data.password,
        }),
        credentials: "include",
      });

      if (response.ok) {
        await setUserAuthenticated(true);
        const result = await response.json();
        navigate("/ootd");
      } else {
        const error = await response.json();
        console.error(error);
        alert("Invalid username or password. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div>
      <Heading title="Login" />

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Grid>
            <Box>
              <InputLabel
                sx={{
                  paddingTop: "5vh",
                  paddingBottom: "2vh",
                  color: "#fefefe",
                  fontFamily:
                    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                }}
              >
                EMAIL
              </InputLabel>
              <Input
                required
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "20px",
                  boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)",
                  height: "40px",
                  width: "70vh",
                  margin: "auto",
                  backgroundColor: "white",
                  textAlign: "center",
                  alignContent: "center",
                  caretColor: "black",
                }}
                type="email"
                onChange={handleChange}
                disableUnderline={true}
                placeholder={"llama@lavenderllama.co.nz"}
              />
              <InputLabel
                sx={{
                  paddingTop: "5vh",
                  color: "#fefefe",
                  fontFamily:
                    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                }}
              >
                PASSWORD
              </InputLabel>
              <Box style={{display: "flex", width: "70vh", alignContent: "center", alignItems: "center", justifyContent: "flex-end", paddingTop: "2vh", }}>
              <Input
                required
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "20px",
                  boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)",
                  height: "40px",
                  width: "70vh",
                  margin: "auto",
                  backgroundColor: "white",
                  textAlign: "center",
                  alignContent: "center",
                  caretColor: "black",
                }}
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                disableUnderline={true}
                placeholder={""}
              />
              
                <img
                src={showPassword ? lashIcon : eyeIcon}
                className={styles.passwordIcon}
                style={{}}
                onClick={toggleShowPassword}
                alt="Eye icon to display or hide password"
              />
              </Box>
            </Box>
          </Grid>
          <button
            id="submit-button"
            type="submit"
            className={styles.submitButton}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
