import React from "react";
import styles from "./Heading.module.css";
import { Box } from "@mui/material";

function Heading({ title }) {
  // This component takes a prop called "title" that will be used as the title of all main pages
  return (
    <React.Fragment>
      <Box className={styles.title}>
        <h1>{title}</h1>
      </Box>
    </React.Fragment>
  );
}

export default Heading;
