import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import ProyectIcon from '@mui/icons-material/Inventory2';
import HomeIcon from '@mui/icons-material/Home';

export const mainNavbarItems = [
  {
    id: 0,
    icon: <HomeIcon />,
    label: 'Home',
    route: 'home', // Esto coincide con el id="home"
  },
  {
    id: 1,
    icon: <HistoryIcon />,
    label: 'Experience',
    route: 'experience', // Esto coincide con el id="experience"
  },
  {
    id: 2,
    icon: <ProyectIcon />,
    label: 'Proyects',
    route: 'proyects', // Esto coincide con el id="proyects"
  },
  {
    id: 3,
    icon: <PersonIcon />,
    label: 'About me',
    route: 'aboutme', // Esto coincide con el id="aboutme"
  },
];
