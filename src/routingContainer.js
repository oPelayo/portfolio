import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar/Navbar';
import Copyright from './components/Copyright/Copyright';
import Home from './pages/Home'
import Experience from './pages/Experience';
import Error from './pages/Error'
import AboutMe from './pages/AboutMe';

const RoutingContainer = () => {
    return (
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100hv' }}>
          <Navbar />
          <Box sx={{ flex: 1 }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
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