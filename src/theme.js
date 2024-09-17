import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme 
const theme = createTheme({
  palette: {
    primary: {
      main: '#0000ff',//blue
    },
    secondary: {
      main: '#19857b',//aguamarina
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;