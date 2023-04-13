import styles from "./landingPage.module.css";
import { NavLink } from "react-router-dom";
import CluelessGif from "../../assets/cluelessCloset.gif";
import ClothingRail from "../../assets/cothingRail.gif";
import { Box, Button, Grid } from "@mui/material";

function LandingPage() {

  const classes = {
    root: {
      flexGrow: 1
    },

    paper: {
      padding: 20,
      textAligh: "justify"
    }
  }

  return (
    /** A div that contains the main components for the landing page. Contains three separate divs.
     * The first is for the top section of the landing page that controls the buttons and the title
     * The aboutContainer contains the first section of the about page that explains about what Llamafy does
     * The third div explains why customers should use our product.
     **/
    <div>
      <Box className={styles.landingPage}>
        <div style={{ width: "cover", height: "700px", margin: "auto" }}>
          <h1 className={styles.landingPageTitle}>LLAMAFY</h1>
          <h2 className={styles.landingPageSubtitle}>
            IT'S TIME TO BUTTON UP OR SHUT UP
          </h2>
          <Button className={styles.buttonContainer}>
            <NavLink to="/login">
              <button className={styles.landingLoginButton}>LOGIN</button>
            </NavLink>
            <NavLink to="/register">
              <button className={styles.registerButton}>REGISTER</button>
            </NavLink>
          </Button>
        </div>
      </Box>
      <h2 className={styles.llamaSubheading}>
        No time for drama? Trust in Llama!
      </h2>
      <div stle={classes.root}></div>
      <Grid
        className={styles.bottomSection}
        flexDirection={"column"}
        height={"700px"}
        width={"100%"}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignContent={"space-evenly"}
          margin={"auto"}
          padding={"35px"}
          width={"100%"}
          className={styles.aboutContainer}
        >
          <p>
            Have you ever wanted to feel like Cher from clueless minus the
            incestuous undertones? Well now you can! LLAMAFY was created to ease
            your worries and allow you to make one less decision in your already
            overwhelming day. Unlike other applications that can make
            suggestions surrounding potential wardrobe choices, LLAMAFY employs
            the use of artificial intelligence to account for your gender,
            general clothing preferences based on what you already have in your
            wardrobe, and the temperature of your home location. This way you
            can rest easy knowing you will not be suggested speedos when it is
            10 degrees celcius outside! Amazing!
          </p>
          <Box
            className={styles.gifContainer}
            display={"flex"}
            style={{
              backgroundImage: `url(${CluelessGif})`,
              width: "250px",
              height: "250px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              border: "1px solid white",
            }}
          ></Box>
        </Box>
        <Box
          className={styles.aboutContainer2}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignContent={"space-evenly"}
          margin={"auto"}
          padding={"35px"}
          width={"100%"}
        >
          <Box
            className={styles.parallaxContainer}
            style={{
              backgroundImage: `url(${ClothingRail})`,
              width: "250px",
              height: "250px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              border: "1px solid white",
            }}
          />
          <p>
            Simply register with us, answer some basic questions about your
            current wardrobe and you're done! Worry not, these answers can be
            altered later and change as your style and current wardrobe change
            too. We can save you up to 16* hours a week in choosing clothes to
            wear with the simple click of a button. Why waste time opening and
            closing the closet trying to decide what to wear? No longer do you
            have to take the Steve Jobs approach of wearing the same outfit day
            in and day out simply to have one less decision to make per day. Try
            LLAMAFY today!
            <br></br>
            <br></br>
            *Don't quote us on this. We're just enthusiastic! Bordering on
            unhinged! Just look at all the exclamation marks!
          </p>
        </Box>
      </Grid>
    </div>
  );
}

export default LandingPage;
