import React from "react";
import { Box, Grid, Card } from "@mui/material";

/*Renders the sub-selection modal component, which displays the available options
  for a selected item in the main selection modal
  Takes two props: `itemsToShow` is an array of items to be displayed in the modal, 
  and `onCloseModal` is a function to be called when the modal is closed.*/

function SubSelectionModal({ itemsToShow, onOpenModal }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        outline: "none",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 4, md: 4, lg: 8 }}
        sx={{ justifyContent: "center" }}
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
    </Box>
  );
}

export default SubSelectionModal;
