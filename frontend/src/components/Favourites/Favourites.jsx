import React, { useState, useEffect } from "react";
import axios from "axios";
import OutfitTile from "./OutfitTile";
import Heading from "../Heading/Heading";
import SubHeading from "../SubHeading/SubHeading";
import styles from "./Favourites.module.css";
import getUserEmail from "../../helpers/getUserEmail";
import { Box } from "@mui/material";

const Favourites = () => {
  // init states
  let tempArr = [];
  const [fileNames, setFileNames] = useState([]);
  const [pastOutfits, setPastOutfits] = useState();

  // grab email and request all user images in their public folder
  // we then create a little tile for each
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

      {/* Loop over all the user's past outfits for history*/}

      <Box>
        {pastOutfits ? (
          pastOutfits.map((outfitObj) => (
            <Box className={styles.card} key={outfitObj.id}>
              <OutfitTile outfit={outfitObj} />
            </Box>
          ))
        ) : (
          <SubHeading subtitle="Go select some of your favourite outfits to display here" />
        )}
      </Box>
    </>
  );
};

export default Favourites;
