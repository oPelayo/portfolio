import React, { useState } from 'react';
import RoutingContainer from './routingContainer'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <RoutingContainer toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> 
    </ThemeProvider>  
  );
}

export default App;
