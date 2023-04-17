import React, { useState } from "react";
import { Box, Grid, Card, Modal, Typography, Button } from "@mui/material";
import close from "./../../assets/close.png";
import { SketchPicker } from "react-color";
/*Renders the sub-selection modal component, which displays the available options
  for a selected item in the main selection modal
  Takes two props: `itemsToShow` is an array of items to be displayed in the modal, 
  and `onCloseModal` is a function to be called when the modal is closed.*/

function SubSelectionModal({ itemsToShow }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [color, setColor] = useState("#000");

  const onOpenModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  const handleColorChange = (value) => {
    console.log("onChange=", value);
    setColor(value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        overflowY: "scroll",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        sx={{
          justifyContent: "center",
        }}
      >
        {/* Maps through `itemsToShow` array and renders a grid of `Card` components
        to display the options for a selected item */}
        {itemsToShow.map((item, index) => (
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
              onClick={() => onOpenModal(item)}
            >
              <img src={item.src} alt={item.name} width="100px" />
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedItem && (
        <Modal
          open={showModal}
          onClose={onCloseModal}
          sx={{ overflowY: "scroll" }}
        >
          <Card
            sx={{
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
              onClick={onCloseModal}
              sx={{ position: "absolute", top: 8, right: 2, padding: "5px" }}
            >
              <img src={close} alt="close button" width="20px" />
            </Button>
            <Typography variant="h4">{selectedItem.name}</Typography>
            <Grid>
              <Typography>Colour</Typography>
              <Box>
                <SketchPicker
                  width={200}
                  height={200}
                  color={color}
                  onChange={handleColorChange}
                />
              </Box>
              <Typography>Length</Typography>
              <Box></Box>
              <Typography>Style</Typography>
              <Box></Box>
              <Typography>Pattern</Typography>
              <Box></Box>
            </Grid>
          </Card>
        </Modal>
      )}
    </Box>
  );
}

export default SubSelectionModal;
