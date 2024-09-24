import React, { useState, useEffect } from "react";
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
  const [scrolling, setScrolling] = useState(false);

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
                item.route === activeLink ? "2px solid #FFA500" : "none",
              color: item.route === activeLink ? "#FFA500" : (isDarkMode ? "#f5f5f5" : "#1c1e29"),
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
         <ListItem onClick={toggleTheme} sx={{
            padding: "0 10px",
            color: isDarkMode ? "#f5f5f5" : "#1c1e29",
            transition: "color 0.3s ease-in-out",
                "&:hover": {
                color: "#00bcd4",
                backgroundColor: "transparent",
                },
            }}         
         >
          <ListItemIcon sx={{ color:'00bcd4' }}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </ListItemIcon>
          <ListItemText primary="Toggle Theme" sx={{ color: isDarkMode ? "#f5f5f5" : "#1c1e29", transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#00bcd4",
              },   
            }} 
          />
        </ListItem>
      </List>
    </Box>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        setScrolling(true);  
      } else {
        setScrolling(false);  
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <>
      <AppBar position="fixed" 
        sx={{
            backgroundColor: scrolling ? (isDarkMode ? "rgba(90, 90, 90, 0.8)" : "rgba(40, 40, 40, 0.7)") : "#1C1E29", 
            transition: "background-color 0.3s ease", 
            backdropFilter: scrolling ? "blur(4px)" : "none",
            boxShadow: scrolling ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Mobile menu button */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="Open navigation menu"
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none", color: scrolling && isDarkMode ? "#000" : "#fff", marginLeft:'-64px' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ width: '48px', display: { sm: "none"} }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                ml: 1,
                display: { xs: "flex", sm: "none" },
                color: scrolling && isDarkMode ? "#000" : "#fff"
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
                    padding: "0 2px",
                    border:
                      item.route === activeLink ? "2px solid #FFA500" : "none",
                    color: scrolling && isDarkMode ? "#f5f5f5" : "#fff",
                    borderRadius: '15px',
                    transition: "color 0.3s ease-in-out",
                    "&:hover": {
                      color: "#FFA500",
                    },
                  }}
                >
                  <ListItemIcon aria-label="Open navigation menu"
                    sx={{ color: scrolling && isDarkMode ? "#f5f5f5" : "#fff" }}
                  >
                        {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
              <IconButton sx={{ color: "#FFA500" }} onClick={toggleTheme}>
                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </List>
            
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
          display: { xs: "block", sm: "none" }, 
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
