import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1c1e29',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#1c1e29',
      paper: '#ffffff',
    },
    text: {
      primary: '#fff', 
    },
    icon: {
      color: '#fff', 
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1c1e29',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
      paper: '#1c1e29',
    },
    text: {
      primary: '#000', 
    },
    icon: {
      color: '#000', 
    }
  },
});
