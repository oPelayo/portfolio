import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { mainNavbarItems } from './consts/navbarItems';
import { navbarStyles } from './styles';
import '../../index.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("");

    const handleActiveLink = (route) => setActiveLink(route);

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1c1e29', color: '#fff' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Menú de Navegación */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <List sx={{ display: 'flex', alignItems: 'center' }}>
                        {mainNavbarItems.map((item) => (
                            <ListItem
                                button
                                key={item.id}
                                component={NavLink}
                                to={item.route}
                                onClick={() => handleActiveLink(item.route)}
                                sx={{
                                    padding: '0 10px',
                                    borderBottom: item.route === activeLink ? '2px solid #00bcd4' : 'none',
                                    color: item.route === activeLink ? '#00bcd4' : '#fff',
                                    transition: 'color 0.3s ease-in-out',
                                    '&:hover': {
                                        color: '#00bcd4',
                                    },
                                }}
                            >
                              <ListItemIcon
                                sx={navbarStyles.icons}
                              >
                                {item.icon}
                              </ListItemIcon>
                              <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Iconos de Contacto */}
                <Box>
                    <IconButton sx={{ color: '#00bcd4' }}> {/* Icono LinkedIn o Contacto */}
                        <i className="fas fa-envelope"></i> {/* Reemplazar con Material Icons */}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
