import React from "react";
import ClothesSelection from "../ClothesSelection/ClothesSelection";
import SubHeading from "../SubHeading/SubHeading";
import Heading from "../Heading/Heading";
import "./WardrobeSelection.scss";

function WardrobeSelection() {
  return (
    <React.Fragment>
      <Heading title="Wardrobe Selection" />
      <SubHeading subtitle="Select some staples" />
      <ClothesSelection />
    </React.Fragment>
  );
}

export default WardrobeSelection;
