import React, { useState } from "react";

import { Typography, Card, Box, Button, Modal } from "@mui/material";

const OutfitTile = ({ outfit }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            onClick={handleOpen}
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
          <Card
            sx={{
              width: "fit-content",
              borderRadius: "4%",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              margin: "20px",
          
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src={outfit.render}
              alt="An image of a generated outfit"
              width={600}
              onClick={handleOpen}
              style={{ borderRadius: "4%" }}
            />
          </Card>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default OutfitTile;
