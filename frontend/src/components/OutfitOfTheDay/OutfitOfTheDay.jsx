import React, { useState, useEffect } from "react";
import axios from 'axios';
import OotdTile from "./OotdTile";
import styles from "./OutfitOfTheDay.module.css";
import { InputLabel, MenuItem, form } from "@mui/material";
import { CompactPicker } from "react-color";
import Heading from "../Heading/Heading";
import getUserEmail from "../../helpers/getUserEmail"
import {
  Button,
  FormControl,
  Select,
  FormLabel,
  TextField,
} from "@mui/material";
import SubHeading from "../SubHeading/SubHeading";
import { Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OutfitOfTheDay = () => {

  const [username, setUsername] = useState('UsernameFromCookies');
  const [weatherValues, setWeatherValues] = useState([]);
  
  // get weather data from weatherAPI proxy
  useEffect(() => {axios.get('http://localhost:3006/weather/data')
  .then(res => setWeatherValues(res.data))
  },[]);

  const temp = [
    {
      id: 1,
      img: "images/good-bad-ugly.jpeg",
      desc: "A cozy poncho and fleece vest topped with a dapper hat.",
    },
    { 
      id: 2, 
      img: "images/generated/triple.png", 
      desc: "Purple wool" },
    {
      id: 3,
      img: "images/dirty_harry.jpeg",
      desc: "Grey tweed jacket over a red knitted vest with a dashing tie. Formal justice wear.",
    },
  ];

  const [recommendations, setRecommendations] = useState(temp);
  const [showRecommendations, setShowRecommendations] = useState(false);

  async function handleRecommendationTiles() {
    toast.promise(
      new Promise(async (resolve, reject) => {
        console.log("Fetching User Email");
        const email = await getUserEmail();
        console.log("Generating 3 Outfits for " + email);
  
        fetch("http://localhost:3006/api/generateOutfits", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
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
              {weatherValues 
        ?   
            <div className={styles.title}> 
            <img src={weatherValues.iconUrl} alt="Weather icon based on the weather today"/> <br />
            Hey {username}. {weatherValues.condition} in {weatherValues.location}.
            <p>{weatherValues.tempC} right now with {weatherValues.humidity} humidity. Windspeed at {weatherValues.windKph}. <small>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></small></p>
            </div>
        : 
            <div className={styles.title}> Hello {username}! 
            <p>Unable to fetch weather details at the moment. Try again soon.</p>
            </div>
        }
        
        <br />

      <Box className={styles.formBox} sx={{ gap: "2vh" }}>
        <form className={styles.formBox}>
          <SubHeading subtitle="Generate a few options below" />
            <Box
              className={styles.secondDropdown}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{ display: "flex", rowGap: "2vh", flexDirection: "column" }}
              >
                <InputLabel>Select a color scheme<br></br> (<i>optional</i>)</InputLabel>
                <CompactPicker />
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