import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography 
      variant="body2" 
      color="text.secondary" 
      align="center"
      sx={{
        position: 'fixed',
        left:'96px',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white', 
        padding: '10px' 
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        oPelayo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;