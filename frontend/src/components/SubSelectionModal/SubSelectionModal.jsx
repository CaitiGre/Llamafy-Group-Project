import React, { useState } from "react";
import { Box, Grid, Card, Button, Typography } from "@mui/material";
import styles from "./SubSelectionModal.module.css";
import ClothingSelectionModal from "../ClothingSelectionModal/ClothingSelectionModal";
import close from "./../../assets/close.png";
/*Renders the sub-selection modal component, which displays the available options
  for a selected item in the main selection modal
  Takes one prop: `itemsToShow` which is an array of clothing items to be displayed in the modal.*/

function SubSelectionModal({ itemsToShow }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Event handler to be called when a Card component is clicked, sets the selected item and shows the modal
  const onOpenModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  // Event handler to be called when the modal is closed, resets the selected item and hides the modal
  const onCloseModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        maxHeight: "80vh",
      }}
    >
      <Button
        onClick={onCloseModal}
        sx={{ position: "absolute", top: 8, right: 2, padding: "5px" }}
      >
        <img src={close} alt="close button" width="20px" />
      </Button>
      {selectedItem && (
        <Typography
          variant="h4"
          sx={{ textAlign: "center", margin: "10px", color: "white" }}
        >
          SELECT TYPE OF {selectedItem.name}
        </Typography>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        sx={{
          justifyContent: "center",
          
        }}
      >
        {/* Maps through the `itemsToShow` array and renders a grid of `Card` components
        to display the options for a selected clothe item */}
        {itemsToShow.map((item, index) => (
          <Grid key={index} item xs={12} sm={4} md={2} lg={2}>
            <Card
              className={styles.clothecard}
              sx={{
                borderRadius: "4%",
                margin: "20px",
                padding: "20px",
                justifyContent: "center",
                display: "flex",
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.68)",
              }}
              onClick={() => onOpenModal(item)}
            >
              <img src={item.src} alt={item.name} width="100px" />
            </Card>
          </Grid>
        ))}
      </Grid>
      <ClothingSelectionModal
        selectedItem={selectedItem}
        showModal={showModal}
        onCloseModal={onCloseModal}
      />
    </Box>
  );
}

export default SubSelectionModal;