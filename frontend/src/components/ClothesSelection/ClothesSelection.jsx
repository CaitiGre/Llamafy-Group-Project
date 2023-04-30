import React, { useEffect, useState } from "react";
import styles from "./ClothesSelection.module.css";
import { Grid, Box, Modal, Button, Typography } from "@mui/material";
import ClothesItem from "../ClotheItem/ClotheItem";
import SubSelectionModal from "../SubSelectionModal/SubSelectionModal";
import top from "./../../assets/tshirt.png";
import bottom from "./../../assets/pants.png";
import onepiece from "./../../assets/jumpsuit.png";
import shoes from "./../../assets/shoes.png";
import cropTop from "./../../assets/crop-top.png";
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
        category_id: 1,
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: shirt,
        name: "shirt",
        category_id: 2,
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: blouse,
        name: "blouse",
        category_id: 3,
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
      {
        src: cropTop,
        name: "crop-top",
        category_id: 4,
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        style: ["crew neck", "V neck", "Henley", "Polo"],
        pattern: ["striped", "Graphic", "baseball", "floral"],
      },
    ],
    BOTTOM: [
      {
        src: bottom,
        name: "pants",
        category_id: 5,
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: shorts,
        name: "shorts",
        category_id: 6,
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: skirt,
        name: "skirt",
        category_id: 6,
        length: ["mini", "3/4", "maxi"],
        style: ["flared", "slim", "cargo", "straight", "sweat"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
    ],
    JUMPER: [
      {
        src: jumper,
        name: "jumper",
        category_id: 16,
        style: ["crew neck", "V neck", "turtle neck"],
        pattern: [
          "striped",
          "Graphic",
          "animal print",
          "christmas",
          "abstract",
          "floral",
        ],
      },
      {
        src: cardigan,
        name: "cardigan",
        category_id: 17,
        style: ["crew neck", "V neck", "turtle neck"],
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
        src: hoodie,
        name: "hoodie",
        category_id: 18,
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
        src: jersey,
        name: "jersey",
        category_id: 19,
        style: ["crew neck", "V neck", "turtle neck"],
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
    JACKET: [
      {
        src: jacket,
        name: "jacket",
        category_id: 20,
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
        category_id: 21,
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
        category_id: 22,
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
        category_id: 23,
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
        name: "jumpsuit",
        category_id: 8,
        length: ["shorts", "3/4", "full length"],
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: dress,
        name: "dress",
        category_id: 9,
        length: ["mini", "knee-high", "3/4", "maxi"],
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: suit,
        name: "suit",
        category_id: 10,
        length: ["shorts", "3/4", "full length"],
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: overall,
        name: "overalls",
        category_id: 11,
        length: ["shorts", "cropped", "full"],
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
    ],
    SWIMWEAR: [
      {
        src: onepieceSwim,
        name: "onepiece",
        category_id: 24,
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
        src: bikini,
        name: "bikini",
        category_id: 25,
        sleeves: ["straps", "short sleeves", "3/4 sleeves", "long sleeves"],
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
        src: trunks,
        name: "trunks",
        category_id: 26,
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
        src: speedo,
        name: "speedo",
        category_id: 27,
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
    SHOES: [
      {
        src: shoes,
        name: "sneakers",
        category_id: 12,
        style: ["running shoes", "high-tops", "low-tops", "retro"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: heel,
        name: "Heels",
        category_id: 13,
        style: ["stiletto", "platform", "block", "flare"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: dressShoes,
        name: "dress-shoes",
        category_id: 14,
        style: ["flats", "loafers", "oxford", "derby"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: boots,
        name: "boots",
        category_id: 15,
        style: ["chelsea", "combat", "work", "hiking", "gumboots"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
    ],
    ACCESSORIES: [
      {
        src: cap,
        name: "hat",
        category_id: 28,
        style: ["cap", "beanie", "fedora", "beret"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: glasses,
        name: "glasses",
        category_id: 29,
        style: ["aviator", "wayfarer", "sport", "butterfly"],
      },
      {
        src: scarf,
        name: "scarf",
        category_id: 30,
        style: ["shawl", "infinity", "pashmina", "bandana"],
        pattern: ["striped", "checkered", "animal print", "floral"],
      },
      {
        src: gloves,
        name: "gloves",
        category_id: 31,
        style: ["winter", "fingerless", "ski", "dress"],
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
