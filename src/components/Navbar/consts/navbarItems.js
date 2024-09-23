import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History'
import ProyectIcon from '@mui/icons-material/Inventory2';
import HomeIcon from '@mui/icons-material/Home';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <HomeIcon />,
        label: 'Home',
        route: 'home',
    },
    {
        id: 1,
        icon: <HistoryIcon />,
        label: 'Experience',
        route: 'experience',
    },
    {
        id: 3,
        icon: <ProyectIcon />,
        label: 'Proyects',
        route: 'proyects',
    },
    {
        id: 2,
        icon: <PersonIcon />,
        label: 'About me ',
        route: 'aboutme',
    },  

]