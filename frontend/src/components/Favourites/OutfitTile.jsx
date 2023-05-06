import React from "react";
import styles from "./Favourites.module.css";
import { Typography, Card, Box } from "@mui/material";

const OutfitTile = ({ outfit }) => {
  return (
    <>
      <Box>
        <Card>
          <img
            src={outfit.render}
            alt="An image of a generated outfit"
            className={styles.outfitImage}
          />
        </Card>
        <Typography>{outfit.desc}</Typography>
      </Box>
    </>
  );
};

export default OutfitTile;
