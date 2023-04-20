import React, { useEffect, useState } from "react";
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
useEffect(()=>console.log(selectedItem));
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
      {
        src: top,
        name: "Tshirt",
        length: ["cropped", "full", "oversized"],
        sleeves: [
          "no sleeves",
          "straps",
          "short sleeves",
          "3/4 sleeves",
          "long sleeves",
        ],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: shirt,
        name: "Shirt",
        length: ["cropped", "full", "oversized"],
        sleeves: [
          "no sleeves",
          "straps",
          "short sleeves",
          "3/4 sleeves",
          "long sleeves",
        ],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: blouse,
        name: "Blouse",
        length: ["cropped", "full", "oversized"],
        sleeves: [
          "no sleeves",
          "straps",
          "short sleeves",
          "3/4 sleeves",
          "long sleeves",
        ],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: cropTop,
        name: "Crop Top",
        sleeves: [
          "no sleeves",
          "straps",
          "short sleeves",
          "3/4 sleeves",
          "long sleeves",
        ],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
    ],
    Bottom: [
      {
        src: bottom,
        name: "Pants",
        length: ["cropped", "3/4", "full length"],
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: shorts,
        name: "shorts",
        length: ["mini", "above knee", "3/4"],
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: skirt,
        name: "skirt",
        length: ["mini", "3/4", "maxi"],
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
    ],
    OnePiece: [
      {
        src: onepiece,
        name: "Jumpsuit",
        length: ["cropped", "3/4", "full length"],
        sleeves: ["no sleeves", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: dress,
        name: "Dress",
        length: ["mini", "knee-high", "3/4", "maxi"],
        sleeves: ["no sleeves", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: suit,
        name: "Onesie",
        length: ["cropped", "3/4", "full length"],
        sleeves: ["no sleeves", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: overall,
        name: "Overall",
        length: ["shorts", "cropped", "full"],
        sleeves: [
          "no sleeves",
          "straps",
          "short sleeves",
          "3/4 sleeves",
          "long sleeves",
        ],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
    ],
    Shoes: [
      {
        src: shoes,
        name: "Shoe",
        style: ["sneakers", "flats", "loafers", "sandals"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: heel,
        name: "Heels",
        style: ["stiletto", "platform", "block", "flare"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: dressShoes,
        name: "dress-shoes",
        style: ["flats", "loafers", "oxford", "derby"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: boots,
        name: "boots",
        style: ["chelsea", "combat", "work", "hiking"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
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
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderRadius: "16px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
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
