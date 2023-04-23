import style from "../Sidebar/Sidebar.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiLogin, HiLogout } from "react-icons/hi";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import ColourChangeLlama from "../../assets/colourChangeLlama.gif";
import {IoSettingsSharp} from "react-icons/io5";
import {IoToday} from "react-icons/io5"
import {GiClothes} from "react-icons/gi";
import {BsPersonAdd} from "react-icons/bs"

function CollapsibleSidebar() {
  /**This is the packages version of a hook that creates a toggle effect so that the sidebar collapses when clicked */
  const { collapseSidebar } = useProSidebar();

  return (
    /**Creates a div that the sidebar component sits in and sets some basic styling */
    <div
      className={style.SidebarContainer}
      style={{
        position: "fixed",
        height: "100vh",
        margin: "left 0px",
        display: "flex",
        justifyContent: "flex-start",
        collapsedWidth: "0vh",
        
      }}
    >
      {/* Calls the sidebar compnent provided by the package containing menu items with links to the relevant pages */}
      <Sidebar
        className={style.SidebarContainer}
        style={{ height: "100%",
         }}
        icon={<HiMenu />}
      >
        <Menu className={style.MenuItems} style={{display: "flex"}}>
          <MenuItem
            icon={<HiMenu />}
            onClick={() => {
              collapseSidebar();
            }}
          ><h2 className={style.sidebarTitle} >LLAMAFY</h2></MenuItem>
          <h2>
            <NavLink to="/">
              <img src={ColourChangeLlama} style={{ height: "10vh", width: "10vh", paddingTop: "2vh" }} />
            </NavLink>
          </h2>
          <MenuItem icon={<HiLogin />}>
            <NavLink to="/login">LOGIN</NavLink>
          </MenuItem>
          <MenuItem icon={<BsPersonAdd />}>
            <NavLink to="/register">REGISTER</NavLink>
          </MenuItem>
          <MenuItem icon={<GiClothes />}>
            <NavLink to="/home">WARDROBE</NavLink>
          </MenuItem>
          <MenuItem icon={<IoToday />}>
            <NavLink to="/ootd">TODAY'S FIT</NavLink>
          </MenuItem>
          <MenuItem icon={<IoSettingsSharp />}>
            <NavLink to="/settings">SETTINGS</NavLink>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default CollapsibleSidebar;