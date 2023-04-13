import React from "react";
import { Card, Box } from "@mui/material";
import styles from "./ClotheItem.module.css";

function ClothesItem({ item, onClick }) {
  return (
    <Box>
      <Card
        className={styles.clothecard}
        sx={{
          borderRadius: "4%",
          backgroundColor: "rgba(255, 255, 255, 0.82)",
          margin: "20px",
          padding: "20px",
          justifyContent: "center",
          display: "flex",
          cursor: "pointer",
        }}
        onClick={() => onClick(item)}
      >
        <img src={item.src} alt={item.name} width="100px" />
      </Card>
    </Box>
  );
}

export default ClothesItem;
