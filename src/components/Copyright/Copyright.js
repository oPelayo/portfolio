import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';

function Copyright() {
  return (
    <Box
      component="footer"
      sx={{
        color: 'white',
        position: 'fixed',
        left: '0px',
        bottom: 0,
        width: '100%',
        backgroundColor: '#1c1e29', 
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        gap: 2,
        flexWrap: 'nowrap',
        px: { xs: 2, sm: 4 },
      }}
    >

      <Typography 
        variant="body2" 
        color="text.secondary" 
        component="div" 
        sx={{ color: 'white', whiteSpace: 'nowrap', textAlign: 'center' }}
      >
        {'Copyright © '}
        <Link color="inherit" href="mailto:opelayodev@gmail.com?subject=Contact%20trougth%20portfolio">
          oPelayo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      
      <Box sx={{ whiteSpace: 'nowrap'}}>
        <IconButton
          component={Link}
          href="https://github.com/oPelayo" 
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white', p: { xs: 0.5, sm: 1 } }} 
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/opelayo" 
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white', p: { xs: 0.5, sm: 1 } }} 
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Copyright;
