import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { useTheme } from '@mui/material/styles';

function Experience() {
  const theme = useTheme();

    return (
        <div>
        <h1>Work experience</h1>
        <List>
          <ListItem>
            <ListItemIcon sx={{ color: theme.palette.icon.color }}>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText 
                primary="Web maintenance assistant" 
                secondary="In-Gravity S.L." 
                sx={{'& .MuiListItem-root': {
                        padding: '8px'    
                    },
                    }} />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ color: theme.palette.icon.color }}>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Full Stack Web Developer" secondary="Asoc. Destinatur" />
          </ListItem>
        </List>
      </div>
    )
  }
  
  export default Experience;