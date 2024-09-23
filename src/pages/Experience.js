import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { useTheme } from "@mui/material/styles";

function Experience() {
  const theme = useTheme();

  return (
    <div>
      <h2 style={{ color: theme.palette.text.primary }}>Work Experience</h2>
      <List sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: '#ffa500', // Change the color here
        },
      }}>
        <ListItem>
          <ListItemIcon sx={{ color: theme.palette.icon.color }}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Technical salesman, onboarding new workers, network and electronic maintenance"
            secondary="Cuylas S.L."
            sx={{
              "& .MuiListItem-root": {
                padding: "8px",
              },
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: theme.palette.icon.color }}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Web maintenance assistant, technical salesman"
            secondary="In-Gravity S.L."
            sx={{
              "& .MuiListItem-root": {
                padding: "8px",
              },
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: theme.palette.icon.color }}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Coordinator of a center for minors with behavioral disorders"
            secondary="Consulting Asistencial Sociosanitario S.L."
            sx={{
              "& .MuiListItem-root": {
                padding: "8px",
              },
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: theme.palette.icon.color }}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Full Stack Web Developer"
            secondary="Asoc. Destinatur"
          />
        </ListItem>
      </List>
    </div>
  );
}

export default Experience;
