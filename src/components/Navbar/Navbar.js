import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { mainNavbarItems } from "./consts/navbarItems";
import "../../index.css";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Drawer from "@mui/material/Drawer";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [activeLink, setActiveLink] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleActiveLink = (route) => setActiveLink(route);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {mainNavbarItems.map((item) => (
          <ListItem
            key={item.id}
            component={NavLink}
            to={item.route}
            onClick={() => handleActiveLink(item.route)}
            sx={{
              padding: "0 10px",
              borderBottom:
                item.route === activeLink ? "2px solid #00bcd4" : "none",
              color: item.route === activeLink ? "#00bcd4" : "#1c1e29",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#00bcd4",
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
         <ListItem button onClick={toggleTheme} sx={{
            padding: "0 10px",
            color:'#1c1e29',
            transition: "color 0.3s ease-in-out",
                "&:hover": {
                color: "#00bcd4",  // Color del texto en hover
                backgroundColor: "transparent", // Quita el fondo sombreado en hover
                },
            }}         
         >
          <ListItemIcon sx={{ color:'00bcd4' }}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </ListItemIcon>
          <ListItemText primary="Toggle Theme" sx={{ color: '#1c1e29', transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#00bcd4",
              },   
            }} 
          />
        </ListItem>
      </List>
      
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Mobile menu button */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                ml: 1,
                display: { xs: "flex", sm: "none" },
              }}
            >
              oPelayo's portfolio
            </Typography>
          </Box>

          {/* Normal Navbar for larger screens */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <List sx={{ display: "flex", alignItems: "center" }}>
              {mainNavbarItems.map((item) => (
                <ListItem
                  key={item.id}
                  component={NavLink}
                  to={item.route}
                  onClick={() => handleActiveLink(item.route)}
                  sx={{
                    padding: "0 10px",
                    borderBottom:
                      item.route === activeLink ? "2px solid #00bcd4" : "none",
                    color: "#fff",
                    transition: "color 0.3s ease-in-out",
                    "&:hover": {
                      color: "#00bcd4",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "#fff" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
            <IconButton sx={{ color: "#00bcd4" }} onClick={toggleTheme}>
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for mobile menu */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" }, // Only show drawer on small screens
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
