import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar/Navbar';
import Copyright from './components/Copyright/Copyright';
import Home from './pages/Home'
import Error from './pages/Error'

const RoutingContainer = () => {
    return (
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '80hv' }}>
          <Navbar />
          <Box sx={{ flex: 1 }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}

export default RoutingContainer;