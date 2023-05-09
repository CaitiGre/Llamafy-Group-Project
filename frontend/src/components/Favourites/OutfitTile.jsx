import React, { useState } from "react";
import next from "./../../assets/right-arrow.png";
import previous from "./../../assets/left-arrow.png";
import { Typography, Card, Box, Button, Modal } from "@mui/material";

const OutfitTile = ({ outfit, images }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    console.log(index);
    console.log(images[currentIndex]);
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    console.log("length", images.length);
    console.log("current", currentIndex);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  return (
    <React.Fragment>
      <Box justifyContent={"center"} sx={{ width: "fit-content" }}>
        <Card
          sx={{
            width: "fit-content",
            borderRadius: "4%",
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            margin: "20px",
            padding: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            src={outfit.render}
            alt="An image of a generated outfit"
            width={200}
            onClick={() => handleOpen(outfit.id)}
          />
        </Card>
      </Box>
      <Box>
        <Typography>{outfit.desc}</Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableAutoFocus={true}
        sx={{ borderRadius: "4%", overflowY: "scroll" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
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
          }}
        >
          <Button onClick={handlePrev}>
            <img src={previous} alt="previous button" width={40} />
          </Button>
          <Card
            sx={{
              width: "fit-content",
              borderRadius: "4%",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              margin: 8,

              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src={images[currentIndex].render}
              alt="An image of a generated outfit"
              width={600}
              onClick={handleOpen}
              style={{ borderRadius: "4%" }}
            />
          </Card>

          <Button onClick={handleNext}>
            <img src={next} alt="next button" width={40} />
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default OutfitTile;
