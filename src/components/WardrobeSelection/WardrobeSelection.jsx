import React from "react";
import ClothesSelection from "../ClothesSelection/ClothesSelection";
import SubHeading from "../SubHeading/SubHeading";
import Heading from "../Heading/Heading";
import styles from "./WardrobeSelection.module.css";

function WardrobeSelection() {
  return (
    <React.Fragment>
     
      <Heading title="Wardrobe Selection" />
      <SubHeading subtitle="Select some staples" />
       <section className={styles.wardrobe}>
      <ClothesSelection />
      </section>
    </React.Fragment>
  );
}

export default WardrobeSelection;
