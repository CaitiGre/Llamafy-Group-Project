import React, { useEffect, useState } from "react";
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

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

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

  /**Handles the scrolling event to trigger the navbar transition */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [initalScrollPosition, visible, handleScroll]);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "transparent", boxShadow: "none"}}
      style={{ top: visible ? "0" : "-100vh" }}>
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
              <NavLink to="/" style={{textDecoration: "none"}} >
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
                <Button sx={{ marginRight: "10px", color: "white" }}>
                  LOGIN
                </Button>
                <Button sx={{ color: "white" }}>REGISTER</Button>
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
