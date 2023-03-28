import React from "react";
import "./ClothesSelection.scss";
import { Grid, Card, Box } from "@mui/material";
import top from "./../../assets/Tshirt.png";
import bottom from "./../../assets/pants.png";
import onepiece from "./../../assets/jumpsuit.png";
import shoes from "./../../assets/shoe.png";

// Define an array of items with the image sources
function ClothesSelection() {
  const clothesItems = [
    { src: top },
    { src: bottom },
    { src: onepiece },
    { src: shoes },
  ];

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          className="clothes-panel"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 6, md: 9, lg: 12 }}
          sx={{ justifyContent: "center" }}
        >
          {/* Use the map() function to create a Grid item for each item in the array */}
          {clothesItems.map((item, index) => (
            <Grid key={index} item xs={3}>
              <Card
                className="clothe-card"
                sx={{
                  borderRadius: "4%",
                  backgroundColor: "rgba(255, 255, 255, 0.89)",
                  margin: "20px",
                  padding: "20px",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {/* Set the image source based on the current item */}
                <img className="card-image" src={item.src} alt="" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default ClothesSelection;
