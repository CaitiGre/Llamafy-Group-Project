import React from "react";
import ClothesSelection from "../ClothesSelection/ClothesSelection";
import Subtitle from "../SubTitle/Subtitle";
import Title from "../Title/Title";
import "./WardrobeSelection.scss";

function WardrobeSelection() {
  return (
    <React.Fragment>
      <Title name="Wardrobe Selection" />
      <Subtitle name="Select some staples" />
      <ClothesSelection />
    </React.Fragment>
  );
}

export default WardrobeSelection;
