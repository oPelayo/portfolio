import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Navbar from './components/Navbar/Navbar';
import Copyright from './components/Copyright/Copyright';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Error from './pages/Error';
import AboutMe from './pages/AboutMe';
import Proyects from './pages/Proyects';

const RoutingContainer = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ backgroundColor: theme.palette.background.default }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: theme.palette.background.default }}>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} sx={{ borderRadius: '15px' }} />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/proyects" element={<Proyects />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}

export default RoutingContainer;
