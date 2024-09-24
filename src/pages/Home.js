import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import HomeIcon from '@mui/icons-material/Home'; 

function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ marginTop: 4 }}>
      {/* Título principal con icono */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <HomeIcon sx={{ color: '#ffa500', fontSize: "2.5rem", marginRight: 1 }} />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: theme.palette.text.primary, lineHeight: 1 }}
        >
          Pelayo's Portfolio
        </Typography>
      </Box>
      
      {/* Descripción principal */}
      <Typography variant="body1" sx={{ color: '#aaa', marginBottom: 2 }}>
        I am a full-stack developer with a strong foundation in Java, Spring, Node.js, Angular, and React.
        My experience co-founding an association has provided me with strong skills in project management,
        teamwork, and problem-solving, which I now apply to build innovative web solutions. My passion for 
        technology drives me to always stay up to date with the latest trends, such as Docker, Kotlin, and Python.
      </Typography>

      {/* Lista de habilidades, similar a la lista de experiencia */}
      <Box sx={{ paddingLeft: 3 }}>
        <Typography variant="h6" sx={{ color: '#ffa500', fontWeight: 'bold' }}>
          My Skills:
        </Typography>
        <ul style={{ color: '#aaa', marginBottom: '1rem' }}>
          <li>Full-stack development using Java, Spring, Node.js, and Angular</li>
          <li>Experience with React for frontend development</li>
          <li>Proficient in project management and teamwork</li>
          <li>Passionate about staying up to date with latest technologies</li>
        </ul>
      </Box>
    </Box>
  );
}

export default Home;
