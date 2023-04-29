import React, { useEffect, useState } from "react";
import styles from "./ClothesSelection.module.css";
import { Grid, Box, Modal, Button, Typography } from "@mui/material";
import ClothesItem from "../ClotheItem/ClotheItem";
import SubSelectionModal from "../SubSelectionModal/SubSelectionModal";
import top from "./../../assets/tshirt.png";
import bottom from "./../../assets/pants.png";
import onepiece from "./../../assets/jumpsuit.png";
import shoes from "./../../assets/shoes.png";
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
import jumper from "./../../assets/jumper.png";
import jacket from "./../../assets/jacket.png";
import accessories from "./../../assets/accessories.png";
import swimwear from "./../../assets/swimwear.png";
import trunks from "./../../assets/trunks.png";
import bikini from "./../../assets/bikini.png";
import onepieceSwim from "./../../assets/onepiece-swim.png";
import speedo from "./../../assets/speedo.png";
import trench from "./../../assets/trench.png";
import blazer from "./../../assets/blazer.png";
import raincoat from "./../../assets/rain-coat.png";
import cardigan from "./../../assets/cardi.png";
import jersey from "./../../assets/jersey.png";
import hoodie from "./../../assets/hoodie.png";
import gloves from "./../../assets/gloves.png";
import scarf from "./../../assets/scarf.png";
import glasses from "./../../assets/glasses.png";
import cap from "./../../assets/cap.png";

function ClothesSelection() {
  // Defining state variables for the modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [subSelectionItemsToShow, setSubSelectionItemsToShow] = useState([]);
  useEffect(() => console.log(selectedItem));
  // Defining an array of objects for the clothes items and their images
  const clothesItems = [
    { src: top, name: "TOP" },
    { src: bottom, name: "BOTTOM" },
    { src: jumper, name: "JUMPER" },
    { src: jacket, name: "JACKET" },
    { src: onepiece, name: "ONEPIECE" },
    { src: swimwear, name: "SWIMWEAR" },
    { src: shoes, name: "SHOES" },
    { src: accessories, name: "ACCESSORIES" },
  ];
  // Defining an object that maps each clothes item to an array of its sub-selection items and their images
  const subSelectionItemsByClothesItem = {
    TOP: [
      {
        src: top,
        name: "Tshirt",
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: shirt,
        name: "Shirt",
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: blouse,
        name: "Blouse",
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: cropTop,
        name: "Crop Top",
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
    ],
    BOTTOM: [
      {
        src: bottom,
        name: "Pants",
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: shorts,
        name: "shorts",
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: skirt,
        name: "skirt",
        length: ["mini", "3/4", "maxi"],
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
    ],
    JUMPER: [
      {
        src: jumper,
        name: "jumper",
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "christmas", "baseball", "floral"],
      },
      {
        src: cardigan,
        name: "cardigan",
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: hoodie,
        name: "hoodie",
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: jersey,
        name: "knitwear",
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
    ],
    JACKET: [
      {
        src: jacket,
        name: "jacket",
        style: ["bomber", "leather", "parka", "denim"],
        pattern: [
          "striped",
          "Graphic",
          "animal print",
          "geometric",
          "abstract",
          "floral",
        ],
      },
      {
        src: blazer,
        name: "blazer",
        style: ["double breasted", "single breasted", "velvet"],
        pattern: [
          "striped",
          "Graphic",
          "animal print",
          "geometric",
          "abstract",
          "floral",
        ],
      },
      {
        src: raincoat,
        name: "raincoat",
        style: ["trench", "poncho", "anorak", "parka"],
        pattern: [
          "striped",
          "Graphic",
          "animal print",
          "geometric",
          "abstract",
          "floral",
        ],
      },
      {
        src: trench,
        name: "trenchcoat",
        style: ["classic", "military", "long"],
        pattern: [
          "striped",
          "Graphic",
          "animal print",
          "geometric",
          "abstract",
          "floral",
        ],
      },
    ],
    ONEPIECE: [
      {
        src: onepiece,
        name: "Jumpsuit",
        length: ["cropped", "3/4", "full length"],
        sleeves: ["short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: dress,
        name: "Dress",
        length: ["mini", "knee-high", "3/4", "maxi"],
        sleeves: ["short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        fabric: ["cotton", "denim", "linen", "wool"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: suit,
        name: "Onesie",
        length: ["cropped", "3/4", "full length"],
        sleeves: ["short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: overall,
        name: "Overall",
        length: ["shorts", "cropped", "full"],
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
    ],
    SWIMWEAR: [
      {
        src: onepieceSwim,
        name: "one piece",
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: bikini,
        name: "bikini",
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: trunks,
        name: "trunks",
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: speedo,
        name: "speedo",
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
    ],
    SHOES: [
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
    ACCESSORIES: [
      {
        src: cap,
        name: "hats",
        style: ["cap", "beanie", "fedora", "beret"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: glasses,
        name: "glasses",
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "geometric", "animal print", "floral"],
      },
      {
        src: scarf,
        name: "scarf",
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "geometric", "animal print", "floral"],
      },
      {
        src: gloves,
        name: "gloves",
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "geometric", "animal print", "floral"],
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
            backgroundColor: "rgba(235, 90, 220, 0.315)",
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
            backgroundColor: "rgba(248, 201, 244, 0.89)",
            borderRadius: "16px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
            height: "fit-content",
            margin: "auto",
            padding: "40px",
            maxHeight: "80vh",
            overflowY: "scroll",
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
              sx={{ textAlign: "center", margin: "10px", color: "#58315c" }}
            >
              SELECT TYPE OF {selectedItem.name}
            </Typography>
          )}
          {/* The sub-selection modal */}
          <SubSelectionModal itemsToShow={subSelectionItemsToShow} />
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ClothesSelection;
