import React, { useEffect, useState, useCallback } from "react";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Llama from "../../assets/llama.png";
import Sidebar from "../Sidebar/Sidebar";
import axios from 'axios';

const Navbar = () => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  const [initalScrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  /*Creates the hooks that account for the position of the navbar before scrolling down the page and sets when the navbar will be visible again based on the current scroll position against the previous scroll position */
  const handleScroll = () => {
    const currentPageScroll = window.pageYOffset;

    /* Sets the height of the page scroll. Looks at the initial page scroll position of 0 and sets the height that it is visible */
    setVisible(
      (initalScrollPosition > currentPageScroll &&
        initalScrollPosition - currentPageScroll > 60) ||
      currentPageScroll < 10
    );

    setScrollPosition(currentPageScroll);
  };


  const [userAuthenticated, setUserAuthenticated] = useState(false);
  //checks authenticated status to toggle between login and logout buttons. 
  async function checkSession() {
    console.log("checkSession");
    try {
      const response = await axios.post('http://localhost:3006/auth/checkSession', null, {
        withCredentials: true,
      });

      if (response.data.isAuthenticated) {
        setUserAuthenticated(true);
      } else {
        setUserAuthenticated(false);
      }
      console.log(response.data.isAuthenticated);
    } catch (err) {
      console.error('Error checking session:', err);
    }
  }

  /**Handles the scrolling event to trigger the navbar transition */
  useEffect(() => {
    //authenticated status check
    // Call the checkSession function when the component mounts
    checkSession();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [initalScrollPosition, visible, handleScroll]);

  async function handleLogOut() {
    try {
      await axios.post("http://localhost:3006/auth/logout", null, {
        withCredentials: true,
      });
      setUserAuthenticated(false);

    } catch (err) {
      console.error("Error logging out:", err);
    }
    window.location.replace('/login');
  }

  return (
    <React.Fragment>
      <AppBar sx={{ background: "transparent", boxShadow: "none" }}
        style={{ top: visible ? "0" : "-20vh", transition: "top 0.2s" }}>
        <Toolbar
          className="toolbarContainer"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Franklin Gothic"
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavLink to="/">
              <img src={Llama} alt="llama homepage icon" width="40px" />
            </NavLink>
            {isMatch && (
              <NavLink to="/" style={{ textDecoration: "none" }} >
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10px", color: "white" }}>
                  LLAMAFY
                </Typography>
              </NavLink>
            )}
          </Box>

          {!isMatch && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "auto",
                }}
              >
                <NavLink
                  to="/ootd"
                  style={{
                    textDecoration: "none",
                    marginLeft: "2vw",
                    marginRight: "2vw",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  OUTFIT
                </NavLink>
                <NavLink
                  to="/wardrobe"
                  style={{
                    textDecoration: "none",
                    marginLeft: "2vw",
                    marginRight: "2vw",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  WARDROBE
                </NavLink>
                <NavLink
                  to="/pastOutfits"
                  style={{
                    textDecoration: "none",
                    marginLeft: "2vw",
                    marginRight: "2vw",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  FAVOURITES
                </NavLink>
                <NavLink
                  to="/settings"
                  style={{
                    textDecoration: "none",
                    marginLeft: "2vw",
                    marginRight: "2vw",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  SETTINGS
                </NavLink>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginLeft: "auto",
                  fontSize: 20
                }}
              >
                {userAuthenticated ? (
                  <>
                    <Button onClick={handleLogOut} sx={{ marginRight: "10px", color: "white" }}>LOGOUT</Button>
                    <Button sx={{ color: "white" }}>REGISTER</Button>
                  </>

                ) : (
                  <>
                    <NavLink to="/login" style={{ textDecoration: "none" }}>
                      <Button sx={{ marginRight: "10px", color: "white" }}>LOGIN</Button>
                    </NavLink>
                    <Button sx={{ color: "white" }}>REGISTER</Button>
                  </>
                )}
              </Box>
            </Box>
          )}

          {isMatch && <Sidebar />}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
