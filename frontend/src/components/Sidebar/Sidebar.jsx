import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Outfit", "Wardrobe", "Favourites", "Settings"];
const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

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
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <NavLink
                  style={{
                    marginLeft: "4vw",
                    textDecoration: "none",
                    color: "black",
                  }}
                  to="/"
                >
                  <ListItemText>{page}</ListItemText>
                </NavLink>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <NavLink
          to="/disclaimer"
          style={{ marginLeft: "4vw", color: "lightgrey" }}
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
