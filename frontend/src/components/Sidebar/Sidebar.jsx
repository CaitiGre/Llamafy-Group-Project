import React, { useState, useEffect, useContext } from "react";
import { Drawer, IconButton, List, ListItemText, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./Sidebar.module.css";
import AuthContext from "../../AuthContext";
import checkSession from "../../helpers/checkSession";
import handleLogout from "../../helpers/handleLogout";

const Sidebar = () => {
  const { userAuthenticated, setUserAuthenticated } = useContext(AuthContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  async function handleLogOut() {
    await handleLogout(setUserAuthenticated);
  }

  useEffect(() => {
    checkSession(setUserAuthenticated);
  }, []);

  const loggedInSidebar = (
    <List style={{ fontSize: "30px", paddingLeft: "20px" }}>
      <NavLink to={"/ootd"}>
        <ListItemText>OUTFIT</ListItemText>
      </NavLink>
      <NavLink to={"/wardrobe"}>
        <ListItemText>WARDROBE</ListItemText>
      </NavLink>
      <NavLink to={"/Settings"}>
        <ListItemText>SETTINGS</ListItemText>
      </NavLink>

      <ListItemText onClick={handleLogOut}>LOGOUT</ListItemText>
    </List>
  );

  const loggedOutSidebar = (
    <List style={{ fontSize: "30px", paddingLeft: "20px" }}>
      <NavLink to={"/login"}>
        <ListItemText>LOGIN</ListItemText>
      </NavLink>
      <NavLink to={"/register"}>
        <ListItemText>REGISTER</ListItemText>
      </NavLink>
    </List>
  );

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        PaperProps={{
          sx: { width: "40%" },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={style.navbarLinks}>
          {userAuthenticated ? loggedOutSidebar : loggedInSidebar}
        </List>
        <Divider />
        <NavLink
          to="/disclaimer"
          style={{ textAlign: "center", color: "lightgrey" }}
        >
          Disclaimer
        </NavLink>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default Sidebar;
