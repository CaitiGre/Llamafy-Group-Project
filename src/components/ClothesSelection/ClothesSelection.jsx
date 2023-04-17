import React, { useState } from "react";
import styles from "./ClothesSelection.module.css";
import { Grid, Box, Modal, Button, Typography } from "@mui/material";
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
  // Defining state variables for the modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [subSelectionItemsToShow, setSubSelectionItemsToShow] = useState([]);

  // Defining an array of objects for the clothes items and their images
  const clothesItems = [
    { src: top, name: "Top" },
    { src: bottom, name: "Bottom" },
    { src: onepiece, name: "OnePiece" },
    { src: shoes, name: "Shoes" },
  ];
  // Defining an object that maps each clothes item to an array of its sub-selection items and their images
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
  // Handling the open modal event and setting the selected item and its sub-selection items to show
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setSubSelectionItemsToShow(subSelectionItemsByClothesItem[item.name]);
    setOpenModal(true);
  };

  // Handling the close modal event
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      {/* The clothes panel */}
      <Box sx={{ flexGrow: 1, maxWidth: "90vw", alignItems: "center" }}>
        <Grid
          className={styles.clothespanel}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 6, md: 9, lg: 12 }}
          sx={{
            justifyContent: "center",
            backgroundColor: "rgba(235, 73, 227, 0.315)",
          }}
        >
          {/* Map over the clothes items and create a ClothesItem for each one */}
          {clothesItems.map((item, index) => (
            <Grid key={index} item xs={3}>
              <ClothesItem item={item} onClick={handleOpenModal} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        disableAutoFocus={true}
        sx={{ overflowY: "scroll" }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "16px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
            outline: 0,
            height: "fit-content",
            margin: "auto",
            padding: "40px",
          }}
        >
          <Button
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 8, right: 2, padding: "5px" }}
          >
            <img src={close} alt="close button" width="20px" />
          </Button>
          {selectedItem && (
            <Typography
              variant="h4"
              sx={{ textAlign: "center", margin: "10px" }}
            >
              Select type of {selectedItem.name}
            </Typography>
          )}
          {/* The sub-selection modal */}
          <SubSelectionModal
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            selectedItem={selectedItem}
            itemsToShow={subSelectionItemsToShow}
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ClothesSelection;
