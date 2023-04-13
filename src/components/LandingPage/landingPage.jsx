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

function LandingPage(){
    return(
        /** A div that contains the main components for the landing page. Contains three separate divs. 
         * The first is for the top section of the landing page that controls the buttons and the title
         * The aboutContainer contains the first section of the about page that explains about what Llamafy does
         * The third div explains why customers should use our product.
         **/
        <div>
            <div className="landingpage">
            <Parallax bgImage={CloudBackground} strength={550} className="backgroundImage"> 
            <div style={{width: "cover", height:"700px", margin: "auto"}} >
                <h1 className="landingPageTitle">LLAMAFY</h1>
                <h2 className="landingPageSubtitle">IT'S TIME TO BUTTON UP OR SHUT UP</h2>
                <div className="buttonContainer">
                    <button className="landing-login-button">LOGIN</button>
                    <button className="register-button">REGISTER</button> 
                </div>
            </div>
            </Parallax>
            </div>
            <h2 className="llamaSubheading">No time for drama? Trust in Llama!</h2>
            <Parallax bgImage={CloudBackground} strength={550}>
                <div className="bottomSection" style={{width: "cover", height:"700px", margin: "auto"}} >
                    <div className="aboutContainer">
                    <p>Have you ever wanted to feel like Cher from clueless minus the incestuous undertones? Well now you can! LLAMAFY was created to ease your worries and allow you to make one less decision in your already overwhelming day. Unlike other applications that can make suggestions surrounding potential wardrobe choices, LLAMAFY employs the use of artificial intelligence to account for your gender, general clothing preferences based on what you already have in your wardrobe, and the temperature of your home location. This way you can rest easy knowing you will not be suggested speedos when it is 10 degrees celcius outside! Amazing!</p>
                    <div className="parallaxContainer">Some form of gif type thing here</div>
                </div>
                <div className="aboutContainer2">
                    <div className="gifContainer"> Some form of gif type thing here</div>
                    <p>Simply register with us, answer some basic questions about your current wardrobe and you're done! Worry not, these answers can be altered later and change as your style and current wardrobe change too. We can save you up to 16* hours a week in choosing clothes to wear with the simple click of a button. Why waste time opening and closing the closet trying to decide what to wear? No longer do you have to take the Steve Jobs approach of wearing the same outfit day in and day out simply to have one less decision to make per day. Try LLAMAFY today!
                        <br></br>
                        <br></br>
                *Don't quote us on this. We're just enthusiastic! Bordering on unhinged! Just look at all the exclamation marks!</p>
                </div>
                </div>
            </Parallax>
        </div>
        /**The bottom section is split into two separate sections */
        
    )
}

export default LandingPage;
