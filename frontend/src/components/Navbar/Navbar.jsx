import { useState, useEffect } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import ColourChangeLlama from "../../assets/colourChangeLlama.gif";
import LlamaIcon from "../../assets/llamaProfile.png";
import Sidebar from "../Sidebar/Sidebar";
import { HiMenu } from "react-icons/hi";

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
    <div>
      <div style={{ margin: "0" }}>
        <Sidebar />
      </div>
      <div
        className={style.navbarStyle}
        style={{ top: visible ? "0" : "-6vh" }}
      >
        <div className={style.homeNav}>
          <NavLink to="/">
            <img src={ColourChangeLlama} style={{ height: "5vh" }} />
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
