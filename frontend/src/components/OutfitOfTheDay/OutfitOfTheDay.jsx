import React, { useState, useEffect } from "react";
import axios from "axios";
import OotdTile from "./OotdTile";
import styles from "./OutfitOfTheDay.module.css";
import { InputLabel, Typography, Box, Button, Grid } from "@mui/material";
import { CompactPicker } from "react-color";
import Heading from "../Heading/Heading";
import getUserEmail from "../../helpers/getUserEmail";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import llamaLoad from "../../assets/llamaLoad.gif";
import handingTowel from "../../assets/towelHang.png";
import { NavLink } from "react-router-dom";

const OutfitOfTheDay = () => {
  const tempTiles = [
    {
      id: 1,
      img: llamaLoad,
      desc: "Loading...",
    },
    {
      id: 2,
      img: llamaLoad,
      desc: "Loading...",
    },
    {
      id: 3,
      img: llamaLoad,
      desc: "Loading...",
    },
  ];

  // def states
  const [username, setUsername] = useState("llama");
  const [weatherText, setWeatherText] = useState(false);
  const [weatherErr, setWeatherErr] = useState(false);
  const [weatherValues, setWeatherValues] = useState([]);
  const [outfitColor, setColor] = useState("undefined");
  const [recommendations, setRecommendations] = useState(
    tempTiles
      .map((rec) => ({
        id: rec.id,
        img: rec.img,
        desc: rec.desc,
      }))
      .map((rec) => (
        <div key={rec.id} className={styles.Ootd}>
          <OotdTile description={rec.desc} imgLink={rec.img} />
        </div>
      ))
  );
  const [showRecommendations, setShowRecommendations] = useState(false);

  // get weather data from weatherAPI proxy
  useEffect(() => {
    axios
      .get("http://localhost:3006/weather/data")
      .then((res) => {
        setWeatherValues(res.data);
        setWeatherText(true);
      })
      .catch((err) => {
        console.log(err);
        setWeatherErr(true);
      });
  }, []);

  useEffect(() => {
    const getName = async () => {
      const postBody = {
        email: await getUserEmail(),
      };
      axios
        .post("http://localhost:3006/ootd/getName", postBody)
        .then((res) => setUsername(res.data.name))
        .catch((err) => console.log("big problem"));
    };
    getName();
  }, []);

  async function handleRecommendationTiles() {
    toast.promise(
      new Promise(async (resolve, reject) => {
        console.log("Fetching User Email");
        const email = await getUserEmail();
        console.log(
          "Generating 3 Outfits for " +
            email +
            ", with color scheme: " +
            outfitColor.hex
        );

        setShowRecommendations(true);

        fetch("http://localhost:3006/api/generateOutfits", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            weatherValues: weatherValues,
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

            const items = [
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

            const tiles = items
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
            setShowRecommendations(false);
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
      <Box>
        <Box>
          <Heading title="OUTFIT OF THE DAY" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-evenly",
            alignContent: "center",
            width: "100%",
            margin: "auto",
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={8}
          >
            <Grid item xs={10} md={3} sx={{ columnGap: "2vh" }}>
              <Box
                sx={{
                  backgroundColor: "#fefefe",
                  padding: "1vh",
                  borderRadius: "2vh",
                  height: "30vh",
                  padding: "2vh",
                  width: "100%",
                  margin: "auto",
                  minWidth: "35vh",
                }}
              >
                <InputLabel
                  sx={{
                    paddingBottom: "2vh",
                    fontFamily:
                      "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    fontSize: "3vh",
                  }}
                >
                  Today's Weather
                </InputLabel>
                {/* If there is an error getting weather values, greeet the user and inform them that the api is not working*/}
                {weatherValues && weatherText && (
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
                        paddingTop: "2vh",
                        fontSize: "2.5vh",
                      }}
                    >
                      {weatherValues.tempC} with {weatherValues.humidity}{" "}
                      humidity. Windspeed at {weatherValues.windKph}.{" "}
                    </Typography>
                  </Box>
                )}

                {weatherErr && (
                  <Box className={styles.title}>
                    <Typography>
                      Unable to fetch weather details at the moment. Try again
                      soon.
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid item xs={10} md={3}>
              <Box
                sx={{
                  backgroundColor: "#fefefe",
                  padding: "2vh",
                  borderRadius: "2vh",
                  height: "30vh",
                  width: "100%",
                  margin: "auto",
                  minWidth: "35vh",
                }}
              >
                <InputLabel
                  sx={{
                    paddingBottom: "2vh",
                    fontFamily:
                      "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    fontSize: "3vh",
                  }}
                >
                  Select a Color Scheme<br></br> (<i>Optional</i>)
                </InputLabel>
                <div style={{ flex: "1", overflow: "auto" }}>
                  <CompactPicker color={outfitColor} onChange={setColor} />
                </div>
              </Box>
            </Grid>{" "}
            <Grid item xs={10} md={3}>
              <Box
                sx={{
                  backgroundColor: "#fefefe",
                  padding: "1vh",
                  borderRadius: "2vh",
                  height: "30vh",
                  width: "100%",
                  margin: "auto",
                  minWidth: "35vh",
                }}
              >
                <InputLabel
                  sx={{
                    fontFamily:
                      "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    fontSize: "3vh",
                    paddingBottom: "2vh",
                  }}
                >
                  Your Wardrobe{" "}
                  <span style={{ color: "#8cc423", fontSize: "2vh" }}>
                    <br></br>
                  </span>
                </InputLabel>
                <NavLink to={"/wardrobe"}>
                  <img
                    src={handingTowel}
                    style={{
                      display: "flex",
                      height: "18vh",
                      justifyContent: "center",
                      margin: "auto",
                      alignItems: "center",
                    }}
                  />
                </NavLink>
              </Box>
            </Grid>
            <Grid item xs={11} md={8}>
              <Box sx={{ paddingTop: "1vh" }}>
                <Button
                  sx={{
                    borderRadius: "25vh",
                    backgroundColor: "white",
                    border: "0.1vh solid #ccc",
                    color: "#333",
                    boxShadow: "1vh 1vh 4vh rgba(255, 255, 255, 0.8)",
                    padding: "1vh 4vh",
                    marginTop: "2vh",
                    width: "40vh",
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto",
                    flexDirection: "column",
                  }}
                  className={styles.generateButton}
                  onClick={handleRecommendationTiles}
                >
                  GENERATE OUTFIT
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />

      {showRecommendations && (
        <div
          className={styles.recommendationTiles}
          style={{ paddingBottom: "5%" }}
        >
          {recommendations}
        </div>
      )}
    </>
  );
};

export default OutfitOfTheDay;
