import React, { useState, useEffect } from "react";
import axios from "axios";
import OotdTile from "./OotdTile";
import styles from "./OutfitOfTheDay.module.css";
import { InputLabel, Typography, Box} from "@mui/material";
import { CompactPicker } from "react-color";
import Heading from "../Heading/Heading";
import getUserEmail from "../../helpers/getUserEmail";
import { Card } from "react-bootstrap";
import {
  Button,
  
} from "@mui/material";
import SubHeading from "../SubHeading/SubHeading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import llamaLoad from '../../assets/llamaLoad.gif'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  ]


  // def states
  const [username, setUsername] = useState('llama');
  const [weatherText, setWeatherText] = useState(false);
  const [weatherErr, setWeatherErr] = useState(false);
  const [weatherValues, setWeatherValues] = useState([]);
  const [outfitColor, setColor] = useState("undefined");
  const [recommendations, setRecommendations] = useState(tempTiles
    .map((rec) => ({
      id: rec.id,
      img: rec.img,
      desc: rec.desc,
    }))
    .map((rec) => (
      <div key={rec.id} className={styles.Ootd}>
        <OotdTile description={rec.desc} imgLink={rec.img} />
      </div>
    )));
  const [showRecommendations, setShowRecommendations] = useState(false);

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

    useEffect(() => {
      const getName = async () => {
      const postBody = {
        email : await getUserEmail(),
      }
      axios.post('http://localhost:3006/ootd/getName',postBody)
      .then(res => setUsername(res.data.name))
      .catch(err => console.log('big problem'))
      }
      getName()
    },[])

  async function handleRecommendationTiles() {
    toast.promise(
      new Promise(async (resolve, reject) => {
        console.log("Fetching User Email");
        const email = await getUserEmail();
        console.log("Generating 3 Outfits for " + email + ", with color scheme: " + outfitColor.hex);

        setShowRecommendations(true);
  
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
            <Container>
                <Row>
                    <Heading title="OUTFIT OF THE DAY" />
                </Row>

                <Row>
                    <Col>
                        <Card style={{ width: "80%", height: "200px", minWidth:"200px"}}>
                            <Card.Body>
                            <InputLabel>
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
                                            }}
                                        >
                                            {weatherValues.tempC} with{" "}
                                            {weatherValues.humidity} humidity.
                                            Windspeed at {weatherValues.windKph}
                                            .{" "}
                                        </Typography>
                                    </Box>
                                )}

                                {weatherErr && (
                                    <Box className={styles.title}>
                                        <Typography>
                                            Unable to fetch weather details at
                                            the moment. Try again soon.
                                        </Typography>
                                    </Box>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "80%", height: "200px", minWidth:"300px"}}>
                            <InputLabel>
                                Select a color scheme<br></br> (<i>optional</i>)
                            </InputLabel>
                            <CompactPicker
                                color={outfitColor}
                                onChange={setColor}
                            />
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: "80%", height: "200px"}}>
                            <InputLabel>
                                Your Wardrobe <span style={{color:"#8cc423"}}>[Imported]</span>
                            </InputLabel>
                            
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:"5%"}}>
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
                </Row>
            </Container>

            <br />

            {showRecommendations && (
                <div className={styles.recommendationTiles} style={{marginBottom: "5%"}}>
                    {recommendations}
                </div>
            )}
            
        </>
    );
};

export default OutfitOfTheDay;
