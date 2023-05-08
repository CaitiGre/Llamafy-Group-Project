import React from "react";

import { Typography, Card, Box } from "@mui/material";

const OutfitTile = ({ outfit }) => {
  return (
    <React.Fragment>
      <Box justifyContent={"center"} sx={{ width: "fit-content" }}>
        <Card
          sx={{
            width: "fit-content",
            borderRadius: "4%",
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            margin: "20px",
            padding: 0,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            src={outfit.render}
            alt="An image of a generated outfit"
            width={200}
          />
        </Card>
      </Box>
      <Box>
        <Typography>{outfit.desc}</Typography>
      </Box>
    </React.Fragment>
  );
};

export default OutfitTile;
