import { useState, useEffect } from "react";
import { Modal, Card, Box, Button, Typography, Grid } from "@mui/material";
import { SliderPicker } from "react-color";
import close from "./../../assets/close.png";
import ClotheCustomisation from "../ClotheCustomisation/ClotheCustomisation";
import axios from "axios";

function ClothingSelectionModal({ selectedItem, showModal, onCloseModal }) {
  // All the states to be recorded in the new wardrobe item JSON
  const [color, setColor] = useState("#000000");
  const [selectedSleeves, setSelectedSleeves] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [wardrobe, setWardrobe] = useState(null);
  // To be removed: Just checking that a JSON object was correctly created upon clicking the add button
  useEffect(() => {
    console.log(wardrobe);
  }, [wardrobe]);
  // Updates the color state with the color selected
  const handleColorChange = (value) => {
    setColor(value);
  };
  // Function to create new wardobe item JSON upon clicking the add button on the modal
  const handleAddClick = async () => {
    const selectedWardrobeItem = {
      name: selectedItem.name,
      style: selectedStyle,
      pattern: selectedPattern,
      length: selectedLength,
      color: color.hex,
      sleeves: selectedSleeves,
      fabric: selectedFabric,
    };

    try {
      // Make a POST request to the server with the new wardrobe item data
      const response = await axios.post(
        "http://localhost:3006/wardrobeSelection/addWardrobeItem",
        {
          name: selectedItem.name,
          style: selectedStyle,
          pattern: selectedPattern,
          length: selectedLength,
          color: color.hex,
          sleeves: selectedSleeves,
          fabric: selectedFabric,
        }
      );
      console.log("New Item added to your wardbrobe:", response.data);
      alert(
        "New Wardrobe item added successfully!"
      );
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred while trying to add an item to your wardrobe. Please try again later."
      );
    }
    // Updates the wardrobe state
    setWardrobe({
      ...wardrobe,
      [selectedWardrobeItem.name]: selectedWardrobeItem,
    });

    // Closes the Modal upon clicking the add button on the modal
    onCloseModal();
  };

  return (
    <>
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
                sx={{ position: "absolute", top: 0, right: 0, padding: "0" }}
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
                    sx={{
                      paddingTop: "4vh",
                      paddingBottom: "2vh",
                      color: "#58315c",
                    }}
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
                  <ClotheCustomisation
                    selectedItemAttribute={selectedItem.sleeves}
                    name="Sleeves"
                    setFunction={setSelectedSleeves}
                  />
                )}
                {selectedItem.length && (
                  <ClotheCustomisation
                    selectedItemAttribute={selectedItem.length}
                    name="Length"
                    setFunction={setSelectedLength}
                  />
                )}
                {selectedItem.style && (
                  <ClotheCustomisation
                    selectedItemAttribute={selectedItem.style}
                    name="Style"
                    setFunction={setSelectedStyle}
                  />
                )}
                {selectedItem.fabric && (
                  <ClotheCustomisation
                    selectedItemAttribute={selectedItem.fabric}
                    name="Fabric"
                    setFunction={setSelectedFabric}
                  />
                )}
                {selectedItem.pattern && (
                  <ClotheCustomisation
                    selectedItemAttribute={selectedItem.pattern}
                    name="Pattern"
                    setFunction={setSelectedPattern}
                  />
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
    </>
  );
}

export default ClothingSelectionModal;
