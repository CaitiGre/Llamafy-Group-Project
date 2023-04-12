import React, { useState } from "react";
import "./ClothesSelection.scss";
import { Grid, Card, Box, Modal, Typography, Button } from "@mui/material";
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
  // declare states with their initial values using useState hook
  const [openModal, setOpenModal] = useState(false); // to control the visibility of the modal
  const [selectedItem, setSelectedItem] = useState(null); // to store the item that was selected
  const [subSelectionItemsToShow, setSubSelectionItemsToShow] = useState([]); // to store the sub-selection items to show in the modal
  // define clothes items data
  const clothesItems = [
    { src: top, name: "Top" },
    { src: bottom, name: "Bottom" },
    { src: onepiece, name: "OnePiece" },
    { src: shoes, name: "Shoes" },
  ];
  // define sub-selection items for each clothes item
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
  // function to handle opening the modal when a card is clicked
  const handleOpenModal = (item) => {
    setSelectedItem(item); // set the selected item state
    // set the sub-selection items to show based on the selected item
    setSubSelectionItemsToShow(subSelectionItemsByClothesItem[item.name]);
    setOpenModal(true); // open the modal
  };
  // function to handle closing the modal
  const handleCloseModal = () => {
    setOpenModal(false); // close the modal
  };

  const modalContent = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        outline: 'none'
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 4, md: 4, lg: 8 }}
        sx={{ justifyContent: "center" }}
      >
        {subSelectionItemsToShow.map((item, index) => (
          <Grid key={index} item xs={12} sm={4} md={2} lg={2}>
            <Card
              className="clothe-card"
              sx={{
                borderRadius: "4%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                margin: "20px",
                padding: "20px",
                justifyContent: "center",
                display: "flex",
                cursor: "pointer",
              }}
            >
              <img src={item.src} alt="oups" width="100px" />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, maxWidth:"90vw", alignItems:"center" }}>
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
              <Card
                className="clothe-card"
                sx={{
                  borderRadius: "4%",
                  backgroundColor: "rgba(255, 255, 255, 0.82)",
                  margin: "20px",
                  padding: "20px",
                  justifyContent: "center",
                  display: "flex",
                  cursor: "pointer",
                }}
                onClick={() => handleOpenModal(item)}
              >
                <img className="card-image" src={item.src} alt="" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        hideBackdrop={true}
        disableAutoFocus={true}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          outline: "none",
          outline: 0,
          
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            width: "90%",
            height: "80%",
            margin: "auto",
          }}
        >
          <Box sx={{ padding: "40px", position: "relative" }}>
            <Button
              onClick={handleCloseModal}
              sx={{ position: "absolute", top: 8, right: 2, padding: "5px" }}
            >
              <img src={close} alt="close button" width="20px" />
            </Button>
            {selectedItem && (
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                Select type of {selectedItem.name}
              </Typography>
            )}
            {modalContent}
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ClothesSelection;
