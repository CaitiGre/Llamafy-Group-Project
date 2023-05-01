import React, { useEffect, useState } from "react";
import styles from "./ClothesSelection.module.css";
import { Grid, Box, Modal, Button, Typography } from "@mui/material";
import ClothesItem from "../ClotheItem/ClotheItem";
import SubSelectionModal from "../SubSelectionModal/SubSelectionModal";
import close from "./../../assets/close.png";

import { clothesItems } from "./data";
import { subSelectionItemsByClothesItem } from "./data";

function ClothesSelection() {
  // Defining state variables for the modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [subSelectionItemsToShow, setSubSelectionItemsToShow] = useState([]);
  useEffect(() => console.log(selectedItem));

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
