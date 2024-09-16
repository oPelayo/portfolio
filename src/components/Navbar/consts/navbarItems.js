import DnsIcon from '@mui/icons-material/Dns';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History'
import ProyectIcon from '@mui/icons-material/Inventory2';

export const mainNavbarItems = [
    {
        id: 0,
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
        id: 1,
        icon: <PersonIcon />,
        label: 'About me ',
        route: 'authentication',
    },
    {
        id: 2,
        icon: <DnsIcon />,
        label: 'Api Nasa',
        route: 'apiNasa',
    }
    
  
]