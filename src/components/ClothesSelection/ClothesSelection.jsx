import React from "react";
import "./ClothesSelection.scss";
import { Grid, Card } from "@mui/material";
import top from "./../../assets/tshirt.png";
import bottom from "./../../assets/trousers.png";
import onepiece from "./../../assets/jumpsuit.png";
import shoes from "./../../assets/shoes.png";

function ClothesSelection() {
  return (
    <React.Fragment>
      <Grid
        className="clothes-panel"
        container
        sx={{ borderRadius: 2, margin: "50px", width: "90%" }}
      >
        <Grid item xs={12} md={6} lg={3}>
          <Card
            className="clothe-card"
            sx={{ margin: "20px", padding: "20px", justifyContent: "center" }}
          >
            <img className="card-image" src={top} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            className="clothe-card"
            sx={{ margin: "20px", padding: "20px" }}
          >
            <img className="card-image" src={bottom} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            className="clothe-card"
            sx={{ margin: "20px", padding: "20px" }}
          >
            <img className="card-image" src={onepiece} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            className="clothe-card"
            sx={{ margin: "20px", padding: "20px" }}
          >
            <img className="card-image" src={shoes} alt="" />
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ClothesSelection;
