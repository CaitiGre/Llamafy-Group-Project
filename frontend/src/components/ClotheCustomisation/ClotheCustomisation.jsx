import React from "react";
import { Box, Grid, Card, Typography } from "@mui/material";
import styles from "./ClotheCustomisation.module.css";

function ClotheCustomisation({ selectedItemAttribute, name, setFunction }) {
  return (
    <>
      <Box>
        <Typography
          variant="h5"
          sx={{ paddingTop: "20px", paddingBottom: "15px" }}
        >
          {name}
        </Typography>
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          columns={4}
          sx={{
            justifyContent: "center",
          }}
        >
          {selectedItemAttribute.map((item, index) => (
            <Grid key={index} item>
              <Card
                className={styles.clothecard}
                sx={{ padding: "15px", cursor: "pointer" }}
                onClick={() => {
                  setFunction(item);
                }}
              >
                {item}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default ClotheCustomisation;
