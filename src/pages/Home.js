import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import ContactPage from '@mui/icons-material/ContactPage'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ marginTop: 4 }}>
      {/* Title */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <ContactPage sx={{ color: '#ffa500', fontSize: "2.5rem", marginRight: 1 }} />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: theme.palette.text.primary, lineHeight: 1, flexWrap: 'nowrap', }}
        >
          oPelayo's portfolio
        </Typography>
      </Box>
      
      {/* Description */}
      <Typography variant="body1" sx={{ color: theme.palette.text.primary, marginBottom: 2 }}>
        I am a full-stack developer with a strong foundation in Java, Spring, Node.js, Angular, and React.
        My experience co-founding an association has provided me with strong skills in project management,
        teamwork, and problem-solving, which I now apply to build innovative web solutions. My passion for 
        technology drives me to always stay up to date with the latest trends, such as Docker, Kotlin, and Python.
      </Typography>

      {/* Skills list */}
      <Box sx={{ paddingLeft: 3 }}>
        <Typography variant="h6" sx={{ color: '#ffa500', fontWeight: 'bold' }}>
          My Skills:
        </Typography>
        <ul style={{ color: theme.palette.text.primary, marginBottom: '1rem' }}>
          <li>Backend development using Java, Spring & SpringBoot, Node.js</li>
          <li>Frontend development with Angular and React</li>
          <li>Proficient in project management and teamwork</li>
          <li>Passionate about staying up to date with latest technologies</li>
        </ul>
      </Box>

      <Typography 
        variant="h6" 
        sx={{ color: theme.palette.text.primary, textAlign: 'center', fontWeight: 'bold', marginBottom: 2 }}
      >
        ¡Available to work!
      </Typography>

      {/* Contact buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<MailIcon />} 
          href="mailto:opelayodev@gmail.com?subject=Contact%20through%20portfolio"
          sx={{ backgroundColor: '#7c7a76', color: 'white' }}

        >
          Contact
        </Button>

        <Button 
          variant="contained" 
          color="info" 
          startIcon={<LinkedInIcon />} 
          href="https://www.linkedin.com/in/opelayo" 
          target="_blank"
        >
          LinkedIn
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
