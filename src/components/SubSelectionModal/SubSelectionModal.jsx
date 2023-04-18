import React, { useState, useEffect } from "react";
import { Box, Grid, Card, Modal, Typography, Button } from "@mui/material";
import close from "./../../assets/close.png";
import { SliderPicker } from "react-color";
import styles from "./SubSelectionModal.module.css"
/*Renders the sub-selection modal component, which displays the available options
  for a selected item in the main selection modal
  Takes one prop: `itemsToShow` which is an array of clothing items to be displayed in the modal.*/

function SubSelectionModal({ itemsToShow }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [color, setColor] = useState("#000");
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedSleeves, setSelectedSleeves] = useState(null);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [wardrobe, setWardrobe] = useState(null);
  useEffect(() => {
    console.log(selectedStyle);
  }, [selectedStyle]);
  useEffect(() => {
    console.log(selectedPattern);
  }, [selectedPattern]);
  useEffect(() => {
    console.log(selectedLength);
  }, [selectedLength]);
  useEffect(() => {
    console.log(selectedSleeves);
  }, [selectedSleeves]);
  useEffect(() => {
    console.log(selectedFabric);
  }, [selectedFabric]);

  useEffect(() => {
    console.log(wardrobe);
  }, [wardrobe]);

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
  // Event handler to be called when the color is changed, updates the selected color
  const handleColorChange = (value) => {
    console.log("onChange=", value);
    setColor(value);
  };
  const handleAddClick = () => {
    const selectedOptions = {
      style: selectedStyle,
      pattern: selectedPattern,
      length: selectedLength,
      color: color.hex,
      sleeves: selectedSleeves,
      fabric: selectedFabric,
    };
    const selectedCard = {
      name: selectedItem.name,
      src: selectedItem.src,
      selectedOptions: selectedOptions,
    };
    setWardrobe({ ...wardrobe, [selectedCard.name]: selectedCard });
    onCloseModal();
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
        {/* Maps through the `itemsToShow` array and renders a grid of `Card` components
        to display the options for a selected clothe item */}
        {itemsToShow.map((item, index) => (
          <Grid key={index} item xs={12} sm={4} md={2} lg={2}>
            <Card
              className={styles.clothecard}
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
              maxHeight: "90vh",
              minWidth: "50vw",
              margin: "auto",
              padding: "40px",
              paddingBottom: "30px",
              overflowY: "scroll",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Button
                onClick={onCloseModal}
                sx={{ position: "absolute", top: 0, right: 0, padding: "0px" }}
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
                    sx={{ paddingTop: "20px", paddingBottom: "15px" }}
                  >
                    Colour
                  </Typography>

                  <SliderPicker
                    width={300}
                    height={300}
                    color={color}
                    onChange={handleColorChange}
                  />
                </Box>
                {selectedItem.sleeves && (
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ paddingTop: "20px", paddingBottom: "15px" }}
                    >
                      Sleeve
                    </Typography>
                    <Grid
                      container
                      spacing={{ xs: 4, md: 4 }}
                      columns={4}
                      sx={{
                        justifyContent: "center",
                      }}
                    >
                      {selectedItem.sleeves.map((item, index) => (
                        <Grid key={index} item>
                          <Card className={styles.clothecard}
                            sx={{ padding: "15px", cursor: "pointer" }}
                            onClick={() => {
                              setSelectedSleeves(item);
                            }}
                          >
                            {item}
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
                {selectedItem.length && (
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ paddingTop: "20px", paddingBottom: "15px" }}
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
                      {selectedItem.length.map((item, index) => (
                        <Grid key={index} item>
                          <Card className={styles.clothecard}
                            sx={{ padding: "15px", cursor: "pointer" }}
                            onClick={() => {
                              setSelectedLength(item);
                            }}
                          >
                            {item}
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
                {selectedItem.style && (
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ paddingTop: "20px", paddingBottom: "15px" }}
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
                      {selectedItem.style.map((item, index) => (
                        <Grid key={index} item>
                          <Card className={styles.clothecard}
                            sx={{ padding: "15px", cursor: "pointer" }}
                            onClick={() => {
                              setSelectedStyle(item);
                            }}
                          >
                            {item}
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
                {selectedItem.fabric && (
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ paddingTop: "20px", paddingBottom: "15px" }}
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
                      {selectedItem.fabric.map((item, index) => (
                        <Grid key={index} item>
                          <Card className={styles.clothecard}
                            sx={{ padding: "15px", cursor: "pointer" }}
                            onClick={() => {
                              setSelectedFabric(item);
                            }}
                          >
                            {item}
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
                {selectedItem.pattern && (
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ paddingTop: "15px", paddingBottom: "15px" }}
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
                      {selectedItem.pattern.map((item, index) => (
                        <Grid key={index} item>
                          <Card className={styles.clothecard}
                            sx={{ padding: "15px", cursor: "pointer" }}
                            onClick={() => {
                              setSelectedPattern(item);
                            }}
                          >
                            {item}
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "5%",
                    right: "0",
                  }}
                >
                  <Button variant="outlined" onClick={onCloseModal}>
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleAddClick}
                  >
                    Add
                  </Button>
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
