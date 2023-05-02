import { useState, useEffect } from "react";
import { Modal, Card, Box, Button, Typography, Grid } from "@mui/material";
import { TwitterPicker } from "react-color";
import close from "./../../assets/close.png";
import ClotheCustomisation from "../ClotheCustomisation/ClotheCustomisation";
import axios from "axios";
import getUserEmail from "../../helpers/getUserEmail";

function ClothingSelectionModal({ selectedItem, showModal, onCloseModal }) {
  // All the states to be recorded in the new wardrobe item JSON
  const [color, setColor] = useState("#000000");
  const [selectedSleeves, setSelectedSleeves] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
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
    const userEmail = await getUserEmail();
    const selectedWardrobeItem = {
      name: selectedItem.name,
      user_email: userEmail,
      category_id: selectedItem.category_id,
      style: selectedStyle,
      pattern: selectedPattern,
      length: selectedLength,
      color: color.hex,
      sleeves: selectedSleeves,
    };

    try {
      // Make a POST request to the server with the new wardrobe item data
      const response = await axios.post(
        "http://localhost:3006/wardrobeSelection/addWardrobeItem",
        {
          name: selectedItem.name,
          user_email: userEmail,
          category_id: selectedItem.category_id,
          style: selectedStyle,
          pattern: selectedPattern,
          length: selectedLength,
          color: color.hex,
          sleeves: selectedSleeves,
        }
      );
      console.log("New Item added to your wardbrobe:", response.data);
      alert("New Wardrobe item added successfully!");
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
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TwitterPicker
                      width="470px"
                      color={color}
                      onChange={handleColorChange}
                      colors={[
                        "#4D4D4D",
                        "#999999",
                        "#FFFFFF",
                        "#F44E3B",
                        "#FE9200",
                        "#FCDC00",
                        "#DBDF00",
                        "#A4DD00",
                        "#68CCCA",
                        "#73D8FF",
                        "#AEA1FF",
                        "#FDA1FF",
                        "#333333",
                        "#808080",
                        "#cccccc",
                        "#D33115",
                        "#E27300",
                        "#FCC400",
                        "#B0BC00",
                        "#68BC00",
                        "#16A5A5",
                        "#009CE0",
                        "#7B64FF",
                        "#FA28FF",
                        "#000000",
                        "#666666",
                        "#B3B3B3",
                        "#9F0500",
                        "#C45100",
                        "#FB9E00",
                        "#808900",
                        "#194D33",
                        "#0C797D",
                        "#0062B1",
                        "#653294",
                        "#AB149E",
                      ]}
                    />
                  </Box>
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
