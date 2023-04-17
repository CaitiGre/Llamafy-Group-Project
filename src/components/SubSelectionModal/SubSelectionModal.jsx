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
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              borderRadius: "16px",
              height: "max-content",
              outline: "none",
              outline: 0,
              maxHeight: "90vh",
              minWidth: "50vw",
              margin: "auto",
              padding: "40px",
              overflowY: "scroll",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Button
                onClick={onCloseModal}
                sx={{ position: "absolute", top: 8, right: 2, padding: "5px" }}
              >
                <img src={close} alt="close button" width="20px" />
              </Button>
              <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                {selectedItem.name}
              </Typography>
              <Grid>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ paddingTop: "20px", paddingBottom: "20px" }}
                  >
                    Colour
                  </Typography>

                  <SketchPicker
                    width={300}
                    height={300}
                    color={color}
                    onChange={handleColorChange}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ paddingTop: "20px", paddingBottom: "20px" }}
                  >
                    Length
                  </Typography>
                  <Grid
                    container
                    spacing={{ xs: 4, md: 4 }}
                    columns={4}
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <Grid item>
                      <Card sx={{ padding: "20px" }}>short</Card>
                    </Grid>
                    <Grid item>
                      <Card sx={{ padding: "20px" }}>1/2</Card>
                    </Grid>
                    <Grid item>
                      <Card sx={{ padding: "20px" }}>3/4</Card>
                    </Grid>
                    <Grid item>
                      <Card sx={{ padding: "20px" }}>full</Card>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ paddingTop: "20px", paddingBottom: "20px" }}
                  >
                    Style
                  </Typography>
                  <Grid
                    container
                    spacing={{ xs: 4, md: 4 }}
                    columns={3}
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <Grid item>
                      <Card sx={{ padding: "20px" }}>flared</Card>
                    </Grid>
                    <Grid item>
                      <Card sx={{ padding: "20px" }}>loose</Card>
                    </Grid>
                    <Grid item>
                      <Card sx={{ padding: "20px" }}>tight</Card>
                    </Grid>
                  </Grid>
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{ paddingTop: "20px", paddingBottom: "20px" }}
                  >
                    Pattern
                  </Typography>
                  <Grid
                    container
                    spacing={{ xs: 4, md: 4 }}
                    columns={3}
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <Grid item>
                      <Card sx={{ padding: "20px" }}>floral</Card>
                    </Grid>
                    <Grid item>
                      <Card sx={{ padding: "20px" }}>stripes</Card>
                    </Grid>
                    <Grid item>
                      <Card sx={{ padding: "20px" }}>polka dots</Card>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ position: "absolute" }}>
                  <Button>Add</Button>
                  <Button onClick={onCloseModal}>Cancel</Button>
                </Box>
              </Grid>
            </Box>
          </Card>
        </Modal>
      )}
    </Box>
  );
}

export default SubSelectionModal;
