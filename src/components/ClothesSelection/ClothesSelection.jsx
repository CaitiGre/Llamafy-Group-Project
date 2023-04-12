import React, { useState } from "react";
import "./ClothesSelection.scss";
import { Grid, Card, Box, Modal, Typography, Button } from "@mui/material";
import ClothesItem from "../ClotheItem/ClotheItem";
import SubSelectionModal from "../SubSelectionModal/SubSelectionModal";

import top from "./../../assets/tshirt.png";
import bottom from "./../../assets/pants.png";
import onepiece from "./../../assets/jumpsuit.png";
import shoes from "./../../assets/shoe.png";
import cropTop from "./../../assets/CropTop.png";
import shirt from "./../../assets/shirt.png";
import blouse from "./../../assets/blouse.png";
import shorts from "./../../assets/shorts.png";
import skirt from "./../../assets/skirt.png";
import dress from "./../../assets/dress.png";
import overall from "./../../assets/overall.png";
import suit from "./../../assets/suit.png";
import heel from "./../../assets/heel.png";
import dressShoes from "./../../assets/dress-shoes.png";
import boots from "./../../assets/boots.png";
import close from "./../../assets/close.png";

function ClothesSelection() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [subSelectionItemsToShow, setSubSelectionItemsToShow] = useState([]);

  const clothesItems = [
    { src: top, name: "Top" },
    { src: bottom, name: "Bottom" },
    { src: onepiece, name: "OnePiece" },
    { src: shoes, name: "Shoes" },
  ];

  const subSelectionItemsByClothesItem = {
    Top: [
      { src: top, name: "Tshirt" },
      { src: shirt, name: "Shirt" },
      { src: blouse, name: "Blouse" },
      { src: cropTop, name: "Crop Top" },
    ],
    Bottom: [
      { src: bottom, name: "Pants" },
      { src: shorts, name: "shorts" },
      { src: skirt, name: "skirt" },
    ],
    OnePiece: [
      { src: onepiece, name: "Jumpsuit" },
      { src: dress, name: "dress" },
      { src: suit, name: "suit" },
      { src: overall, name: "overall" },
    ],
    Shoes: [
      { src: shoes, name: "shoes" },
      { src: heel, name: "heels" },
      { src: dressShoes, name: "dress-shoes" },
      { src: boots, name: "boots" },
    ],
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setSubSelectionItemsToShow(subSelectionItemsByClothesItem[item.name]);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, maxWidth: "90vw", alignItems: "center" }}>
        <Grid
          className="clothes-panel"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 6, md: 9, lg: 12 }}
          sx={{
            justifyContent: "center",
            backgroundColor: "rgba(235, 73, 227, 0.315)",
          }}
        >
          {clothesItems.map((item, index) => (
            <Grid key={index} item xs={3}>
              <ClothesItem item={item} onClick={handleOpenModal} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <SubSelectionModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        selectedItem={selectedItem}
        itemsToShow={subSelectionItemsToShow}
      />
    </React.Fragment>
  );
}

export default ClothesSelection;
