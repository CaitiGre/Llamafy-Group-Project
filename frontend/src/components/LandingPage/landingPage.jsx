import styles from "./landingPage.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import ClothingRail from "../../assets/cothingRail.gif";
import WardrobeChange from "../../assets/Wardorbe-Change.gif";
import { Box, Button, Grid, Typography } from "@mui/material";

function LandingPage() {
  return (
    /** A div that contains the main components for the landing page. Contains three separate divs.
     * The first is for the top section of the landing page that controls the buttons and the title
     * The aboutContainer contains the first section of the about page that explains about what Llamafy does
     * The third div explains why customers should use our product.
     **/
    <React.Fragment>
      <Box className={styles.landingPage}>
        <Box style={{ width: "cover", height: "100vh", margin: "auto" }}>
          <h1 className={styles.landingPageTitle}>LLAMAFY</h1>
          <h2 className={styles.landingPageSubtitle}>
            IT'S TIME TO BUTTON UP OR SHUT UP
          </h2>
          <Box className={styles.buttonContainer}>
            <NavLink to="/login">
              <Button>LOGIN</Button>
            </NavLink>
            <NavLink to="/register">
              <Button>REGISTER</Button>
            </NavLink>
          </Box>
        </Box>
      </Box>
      <h2 className={styles.llamaSubheading}>
        NO TIME FOR DRAMA? TRUST IN LLAMA!
      </h2>

      <Grid container spacing={3} sx={{padding: "3vh"}}>
        <Grid item xs={8} md={10}>
          <Box
            className={styles.aboutContainer}
            bgcolor="white"
            sx={{
              borderRadius: "25px",
              padding: "3vh",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              height: "auto",
              alignItems: "center",
            }}
            p={2}
          >
            <Typography sx={{ alignItems: "center", textAlign: "justify", margin: "auto" }}>
              Have you ever wanted to feel like Cher from clueless minus the
              incestuous undertones? Well now you can! LLAMAFY was created to
              ease your worries and allow you to make one less decision in your
              already overwhelming day. Unlike other applications that can make
              suggestions surrounding potential wardrobe choices, LLAMAFY
              employs the use of artificial intelligence to account for your
              gender, general clothing preferences based on what you already
              have in your wardrobe, and the temperature of your home location.
              This way you can rest easy knowing you will not be suggested
              speedos when it is 10 degrees celcius outside! Amazing!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1} md={2} >
          <Box
            sx={{
              margin: "auto",
              textAlign: "center",
              backgroundSize: "cover",
              borderRadius: "25px",
              height: "fit",
              width: "fit",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${WardrobeChange})`,
            }}
            p={2}
          ></Box>
        </Grid>
        <Grid item xs={1} md={2}>
          <Box
            p={2}
            sx={{
              backgroundImage: `url(${ClothingRail})`,
              margin: "auto",
              textAlign: "center",
              backgroundSize: "cover",
              borderRadius: "25px",
              height: "fit",
              width: "fit",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Grid>
        <Grid item xs={8} md={10}>
          <Box
            bgcolor="white"
            p={2}
            sx={{
              borderRadius: "25px",
              padding: "3vh",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              height: "30vh",
              alignItems: "center",
              height: "auto"
            }}
          >
            <Typography sx={{ alignItems: "center", textAlign: "justify" }}>
              Simply register with us, answer some basic questions about your
              current wardrobe and you're done! Worry not, these answers can be
              altered later and change as your style and current wardrobe change
              too. We can save you up to 16* hours a week in choosing clothes to
              wear with the simple click of a button. Why waste time opening and
              closing the closet trying to decide what to wear? No longer do you
              have to take the Steve Jobs approach of wearing the same outfit
              day in and day out simply to have one less decision to make per
              day. Try LLAMAFY today!
              <br></br>
              <br></br>
              *Don't quote us on this. We're just enthusiastic! Bordering on
              unhinged! Just look at all the exclamation marks!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default LandingPage;
