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
      <AppBar sx={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavLink to="/">
              <img src={Llama} alt="llama homepage icon" width="50px" />
            </NavLink>
            {isMatch && (
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10px" }}>
                LLAMAFY
              </Typography>
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
                  Outfit
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
                  Wardrobe
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
                  Favourites
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
                  Settings
                </NavLink>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginLeft: "auto",
                }}
              >
                <Button sx={{ marginRight: "10px", color: "white" }}>
                  Login
                </Button>
                <Button sx={{ color: "white" }}>SignUp</Button>
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
