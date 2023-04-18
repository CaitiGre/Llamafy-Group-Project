import { useState, useEffect } from "react";
import { Modal, Card, Box, Button, Typography, Grid } from "@mui/material";
import { SliderPicker } from "react-color";
import styles from "./ClothingSelectionModal.module.css";
import close from "./../../assets/close.png";

function ClothingSelectionModal({ selectedItem, showModal, onCloseModal }) {
  const [color, setColor] = useState("#000000");
  const [selectedSleeves, setSelectedSleeves] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [wardrobe, setWardrobe] = useState(null);
  useEffect(() => {
    console.log(wardrobe);
  }, [wardrobe]);

  const handleColorChange = (value) => {
    setColor(value);
  };
  // Function to creat new wardobe item JSON up clicking th add button
  const handleAddClick = () => {
    const selectedWardrobeItem = {
      name: selectedItem.name,
      style: selectedStyle,
      pattern: selectedPattern,
      length: selectedLength,
      color: color.hex,
      sleeves: selectedSleeves,
      fabric: selectedFabric,
    };
    setWardrobe({
      ...wardrobe,
      [selectedWardrobeItem.name]: selectedWardrobeItem,
    });
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
                          <Card
                            className={styles.clothecard}
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
                          <Card
                            className={styles.clothecard}
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
                          <Card
                            className={styles.clothecard}
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
                          <Card
                            className={styles.clothecard}
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
                          <Card
                            className={styles.clothecard}
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
    </>
  );
}

export default ClothingSelectionModal;
