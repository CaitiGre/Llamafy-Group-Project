import { useState, useEffect } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import ColourChangeLlama from "../../assets/colourChangeLlama.gif";
import LlamaIcon from "../../assets/llamaProfile.png";
import Sidebar from "../Sidebar/Sidebar";
//import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [initalScrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  /*Creates the hooks that account for the position of the navbar before scrolling down the page and sets when the navbar will be visible again based on the current scroll position against the previous scroll position */
  const handleScroll = () => {
    const currentPageScroll = window.pageYOffset;

    setVisible(
      (initalScrollPosition > currentPageScroll &&
        initalScrollPosition - currentPageScroll > 60) ||
        currentPageScroll < 10
    );

    setScrollPosition(currentPageScroll);
  };

  /**Handles the scrolling event to trigger the navbar transition */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [initalScrollPosition, visible, handleScroll]);

  return (
    <div>
      {/* Creates a div which the side bar is called within */}
      <div style={{ margin: "0" }}>
        <Sidebar />
      </div>
      <div
        className={style.navbarStyle}
        style={{ top: visible ? "0" : "-6vh" }}
      >
        {/* Links the llama gif and the LLamafy title to the homepage */}
        <div className={style.homeNav}>
          <NavLink to="/">
            <img src={ColourChangeLlama} className={style.LlamaGifColour} style={{ height: "5vh" }} />
            <h2>LLAMAFY</h2>
          </NavLink>
        </div>
        <div className={style.navbarRight} style={{height: "5vh"}}>
          <NavLink to="/settings">
            <img src={LlamaIcon} style={{ height: "4vh" }}></img>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
