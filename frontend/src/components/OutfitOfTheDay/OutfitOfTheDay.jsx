import React, { useState } from "react";
import OotdTile from "./OotdTile";
import styles from "./OutfitOfTheDay.module.css";
import { InputLabel, MenuItem, form } from "@mui/material";
import { CompactPicker } from "react-color";
import Heading from "../Heading/Heading";
import {
  Button,
  FormControl,
  Select,
  FormLabel,
  TextField,
} from "@mui/material";
import SubHeading from "../SubHeading/SubHeading";
import { Box } from "@mui/material";

const OutfitOfTheDay = () => {
  const temp = [
    {
      id: 1,
      img: "images/good-bad-ugly.jpeg",
      desc: "A cozy poncho and fleece vest topped with a dapper hat.",
    },
    { id: 2, img: "images/generated/triple.png", desc: "Purple wool" },
    {
      id: 3,
      img: "images/dirty_harry.jpeg",
      desc: "Grey tweed jacket over a red knitted vest with a dashing tie. Formal justice wear.",
    },
  ];

  const [recommendations, setRecommendations] = useState(temp);
  const [showRecommendations, setShowRecommendations] = useState(false);

  function handleRecommendationTiles() {
    const tiles = temp
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
  }

  return (
    <>
      <Heading title="OUTFIT OF THE DAY" />

      <Box className={styles.formBox} sx={{ gap: "2vh" }}>
        <form className={styles.formBox}>
          <SubHeading subtitle="What are we feeling like today?" />
          <h2 className={styles.subSubHeading}>
            ADD SOME SPECIFICS OR YOU CAN JUST CLICK GENERATE
          </h2>

          <Box
            className={styles.dropdownMenus}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              className={styles.topSelection}
              sx={{
                display: "flex",
                rowGap: "2vh",
                flexDirection: "column",
              }}
            >
              <InputLabel
                className={styles.topLabel}
                sx={{
                  marginTop: "2vh",
                  colour: "black",
                }}
              >
                TOPS
              </InputLabel>
              <Select
                sx={{
                  backgroundColor: "white",
                  width: 300,
                  overflow: "shown",
                  width: "25vh",
                }}
                placeholder="CHOOSE A TOP HALF"
              >
                <MenuItem value={1}>T-SHIRT</MenuItem>
                <MenuItem value={2}>LONG SLEEVE</MenuItem>
                <MenuItem value={3}>BUTTON UP</MenuItem>
                <MenuItem value={4}>SINGLET OR TANK TOP</MenuItem>
                <MenuItem value={5}>DRESS</MenuItem>
              </Select>
              <CompactPicker />
            </Box>

            <Box
              className={styles.bottomSelection}
              sx={{ display: "flex", rowGap: "2vh", flexDirection: "column" }}
            >
              <InputLabel
                sx={{
                  marginTop: "2vh",
                }}
              >
                BOTTOMS
              </InputLabel>
              <Select
                sx={{
                  backgroundColor: "white",
                  width: 250,
                  overflow: "shown",
                  width: "25vh",
                }}
              >
                <MenuItem value={1}>SHORTS</MenuItem>
                <MenuItem value={2}>SKIRT</MenuItem>
                <MenuItem value={3}>JEANS</MenuItem>
                <MenuItem value={4}>FUR SUIT</MenuItem>
              </Select>
              <CompactPicker />
            </Box>
          </Box>

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
              <InputLabel>HOW ABOUT A GENERAL COLOUR SCHEME</InputLabel>
              <CompactPicker />
            </Box>
            <Box
              sx={{ display: "flex", rowGap: "2vh", flexDirection: "column" }}
            >
              <InputLabel>OR SOME SHOES?</InputLabel>
              <Select
                sx={{
                  backgroundColor: "white",
                  width: 250,
                  overflow: "shown",
                  width: "25vh",
                }}
              >
                <MenuItem value={1}>BOOTS</MenuItem>
                <MenuItem value={2}>SNEAKERS</MenuItem>
                <MenuItem value={3}>HOOVES</MenuItem>
                <MenuItem value={4}>JANDALS</MenuItem>
                <MenuItem value={5}>HEELS</MenuItem>
              </Select>
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
    </>
  );
};

export default OutfitOfTheDay;
