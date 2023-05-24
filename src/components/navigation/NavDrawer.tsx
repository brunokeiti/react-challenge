import React, { useState } from "react";
import {
  Link,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

export const NavDrawer = () => {
  const [drawer, setDrawer] = useState(false);
  const handleOpen = () => {
    setDrawer(true);
  };
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          color: "#fff",
        }}
        aria-label="open drawer"
      >
        <MenuIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        <Box sx={{ width: "200px" }}>
          <List
            subheader={
              <ListSubheader component="div">Code Challenge</ListSubheader>
            }
          >
            <Link underline="none" href="/" color="inherit">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link underline="none" href="/user" color="inherit">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BadgeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="User" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link underline="none" href="/table" color="inherit">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TableChartOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Table" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
