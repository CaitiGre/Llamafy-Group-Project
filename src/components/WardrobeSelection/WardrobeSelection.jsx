import React from "react";
import ClothesSelection from "../ClothesSelection/ClothesSelection";
import SubHeading from "../SubHeading/SubHeading";
import Heading from "../Heading/Heading";
import styles from "./WardrobeSelection.module.css";

function WardrobeSelection() {
  return (
    <React.Fragment>
      <section className={styles.wardrobe}>
        <Heading title="Wardrobe Selection" />
        <SubHeading subtitle="Select some staples" />
        <ClothesSelection />
      </section>
    </React.Fragment>
  );
}

export default WardrobeSelection;
