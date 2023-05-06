import React, { useState, useEffect } from "react";
import axios from "axios";
import OotdTile from "./OotdTile";
import styles from "./OutfitOfTheDay.module.css";
import { InputLabel, Typography} from "@mui/material";
import { CompactPicker } from "react-color";
import Heading from "../Heading/Heading";
import getUserEmail from "../../helpers/getUserEmail"
import {
  Button
} from "@mui/material";
import SubHeading from "../SubHeading/SubHeading";
import { Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OutfitOfTheDay = () => {

  // def states
  const [username, setUsername] = useState('UsernameFromCookies');
  const [weatherText, setWeatherText] = useState(false);
  const [weatherErr, setWeatherErr] = useState(false);
  const [weatherValues, setWeatherValues] = useState([]);
  const [outfitColor, setColor] = useState("undefined");
  
  // get weather data from weatherAPI proxy
  useEffect(() => {axios.get('http://localhost:3006/weather/data')
  .then(res => {
    setWeatherValues(res.data)
    setWeatherText(true)})
  .catch(err => {
    console.log(err)
    setWeatherErr(true);
  })
  },[]);
  
  const [recommendations, setRecommendations] = useState();
  const [showRecommendations, setShowRecommendations] = useState(false);

  async function handleRecommendationTiles() {
    toast.promise(
      new Promise(async (resolve, reject) => {
        console.log("Fetching User Email");
        const email = await getUserEmail();
        console.log("Generating 3 Outfits for " + email + ", with color scheme: " + outfitColor.hex);
  
        fetch("http://localhost:3006/api/generateOutfits", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            weatherValues : weatherValues,
            colorScheme: outfitColor.hex,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Unable to access generate outfits api");
            }
            return response.json();
          })
          .then((data) => {
            let responseText = JSON.parse(data.responseText);
            console.log(responseText.recommendation1.outfitDescription);
  
            const temp2 = [
              {
                id: 1,
                img: data.imageUrls[0],
                desc: responseText.recommendation1.outfitDescription,
              },
              {
                id: 2,
                img: data.imageUrls[1],
                desc: responseText.recommendation2.outfitDescription,
              },
              {
                id: 3,
                img: data.imageUrls[2],
                desc: responseText.recommendation3.outfitDescription,
              },
            ];
  
            const tiles = temp2
              .map((rec) => ({
                id: rec.id,
                img: rec.img,
                desc: rec.desc,
              }))
              .map((rec) => (
                <div key={rec.id} className={styles.Ootd}>
                  <OotdTile description={rec.desc} imgLink={rec.img} />
                </div>
              ));
  
            setRecommendations(tiles);
            setShowRecommendations(true);
  
            resolve({
              message: "Outfits generated successfully",
              type: toast.TYPE.SUCCESS,
            });
          })
          .catch((error) => {
            console.error("Error generating outfit recommendations:", error);
            reject({
              message: "Failed to generate outfits!",
              type: toast.TYPE.ERROR,
            });
          });
      }),
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        pending: "Generating Outfits",
        success: "Outfits generated successfully 👌",
        error: "Failed to generate outfits 🤯",
        autoClose: 3000,
      }
    );
  }
  
  return (
    <>
      <Heading title="OUTFIT OF THE DAY" />
      
      {/* If there is an error getting weather values, greeet the user and inform them that the api is not working*/}
      {weatherValues && weatherText &&
      
      <Box className={styles.title}>
          <img
            src={weatherValues.iconUrl}
            alt="Weather icon based on the weather today"
          />{" "}
          <br />
          <Typography
            style={{
              fontFamily:
                "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            }}
          >
            Hey {username}. {weatherValues.condition} in{" "}
            {weatherValues.location}.
          </Typography>
          <Typography
            style={{
              fontFamily:
                "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            }}
          >
            {weatherValues.tempC} right now with {weatherValues.humidity}{" "}
            humidity. Windspeed at {weatherValues.windKph}.{" "}
            <small>
              Powered by{" "}
              <a href="https://www.weatherapi.com/" title="Weather API">
                WeatherAPI.com
              </a>
            </small>
          </Typography>
        </Box>
      }
      
      {weatherErr && 
          <div className={styles.title}> 
            <p>Unable to fetch weather details at the moment. Try again soon.</p>
          </div>}

      <br />

      <Box className={styles.formBox} sx={{ gap: "1vh", paddingBottom: "4vh" }}>
        <Box
          className={styles.formContainer}
          sx={{ display: "flex", flexDirection: "column", rowGap: "2vh" }}
        >
          <form className={styles.formBox}>
            <SubHeading subtitle="Generate your outfit" />
            <Box
              sx={{ display: "flex", rowGap: "1vh", flexDirection: "column" }}
            >
              <Box
                sx={{ display: "flex", rowGap: "2vh", flexDirection: "column" }}
              >
                <InputLabel>Select a color scheme<br></br> (<i>optional</i>)</InputLabel>
                <CompactPicker color={outfitColor} onChange={setColor}/>
            </Box>
            </Box>
          </form>

          <Button
            sx={{
              borderRadius: "25px",
              backgroundColor: "white",
              border: "0.1vh solid #ccc",
              color: "#333",
              boxShadow: "2vh 2vh 5vh rgba(255, 255, 255, 0.8)",
              padding: "1vh 4vh",
              marginTop: "4vh",
              width: "40vh",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
            className={styles.generateButton}
            onClick={handleRecommendationTiles}
          >
            GENERATE OUTFIT
          </Button>
        </Box>
      </Box>

      {showRecommendations && (
        <div className={styles.recommendationTiles}>{recommendations}</div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </>
  );
};

export default OutfitOfTheDay;