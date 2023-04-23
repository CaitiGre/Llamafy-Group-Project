import { useState, useEffect } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import ColourChangeLlama from "../../assets/colourChangeLlama.gif";
import LlamaIcon from "../../assets/llamaIcon.png";

const Navbar = () => {
  const [initalScrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const currentPageScroll = window.pageYOffset;

    setVisible(
      (initalScrollPosition > currentPageScroll &&
        initalScrollPosition - currentPageScroll > 60) ||
        currentPageScroll < 10
    );

    setScrollPosition(currentPageScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [initalScrollPosition, visible, handleScroll]);

  return (
    <div className={style.navbarStyle} style={{ top: visible ? "0" : "-60px" }}>
      <div className={style.homeNav}>
        <NavLink to="/">
          <img src={ColourChangeLlama} style={{ height: "50px" }} />
          <h2>LLAMAFY</h2>
        </NavLink>
      </div>
      <div className={style.navCenter}>
        <NavLink to="/home">WARDROBE</NavLink>
        <NavLink to="/ootd">DRESS ME</NavLink>
      </div>
      
      <div className={style.navbarRight}>
        <NavLink to="/login">LOGIN</NavLink>
        <NavLink to="/register">REGISTER</NavLink>
        <NavLink to="/settings">
          <img src={LlamaIcon} style={{ height: "35px" }}></img>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
