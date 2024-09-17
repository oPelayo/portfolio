import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography 
      variant="body2" 
      color="text.secondary" 
      align="center"
      sx={{
        color: 'white',
        position: 'fixed',
        left:'0px',
        bottom: 0,
        width: '100%',
        backgroundColor: '#1c1e29', 
        padding: '10px' 
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/opelayo">
        oPelayo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;