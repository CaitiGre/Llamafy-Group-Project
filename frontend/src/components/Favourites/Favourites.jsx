import React, { useState, useEffect } from "react";
import axios from "axios";
import OutfitTile from "./OutfitTile";
import Heading from "../Heading/Heading";
import SubHeading from "../SubHeading/SubHeading";
import getUserEmail from "../../helpers/getUserEmail";
import { Box, Grid } from "@mui/material";

/* Function to display the Favourite past outfits Page*/
export default function Favourites() {
  // Set the state of the file names to an empty array
  let tempArr = [];
  const [fileNames, setFileNames] = useState([]);
  const [pastOutfits, setPastOutfits] = useState();

  // Grab email and request all user images in their public folder
  // Create a little tile for each
  useEffect(() => {
    const getFavourites = async () => {
      const email = await getUserEmail();
      const postBody = {
        email: email,
      };
      axios
        .post(`http://localhost:3006/favourites/all`, postBody)
        .then((res) => {
          if (res.status === 200) {
            tempArr = [];
            res.data.map((filename, index) => {
              tempArr.push({
                id: index + 1,
                render: `http://localhost:3006/${email}/${filename}`,
                desc: undefined /*`${filename}`*/,
              });
              setPastOutfits(tempArr);
            });
          }
        })
        .catch((err) => {
          console.log("No favourites to display");
        });
    };
    getFavourites();
  }, []);

  return (
    <>
      <Heading title="Favourites" />
      <SubHeading subtitle="PAST OUTFITS" />

      <Box sx={{ marginTop: 8 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          columns={{ xs: 1, sm: 6, md: 8, lg: 12 }}
          sx={{
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* Loop over all the user's past outfits*/}
          {pastOutfits ? (
            pastOutfits.map((outfitObj) => (
              <Grid
                item
                key={outfitObj.id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                }}
              >
                <OutfitTile outfit={outfitObj} images={pastOutfits} />
              </Grid>
            ))
          ) : (
            <SubHeading subtitle="Go select some of your favourite outfits to display here" />
          )}
        </Grid>
      </Box>
    </>
  );
}
