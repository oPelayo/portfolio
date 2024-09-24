import React from "react";
import { Box, Typography } from "@mui/material"; 
import { useTheme } from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';

const AboutMe = () => {
  const theme= useTheme();

  return (
    <Box sx={{ marginTop: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <PersonIcon sx={{ color: '#ffa500', fontSize: "2.5rem", marginRight: 1 }} />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: theme.palette.text.primary, lineHeight: 1 }}
        >
          About Me
        </Typography>
      </Box>
      {/* Descripción con estilo de párrafo */}
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary", // Usa el color secundario que aplicaste en otras páginas
          lineHeight: 1.6,
          marginBottom: 2,
        }}
      >
        I am a person with a methodical, decisive approach and a great curiosity to face challenges efficiently. From a personal point of view, I consider myself open and extroverted. My professional career in the sports and social fields led me to enthusiastically co-found my own Association. For two years, we led various activities in collaboration with schools. During that time, we learned what teamwork is, we managed each event as a project and we effectively solved each problem.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
          marginBottom: 2,
        }}
      >
        These experiences were very enriching and the process of developing our own website sparked my interest in code. Always focused on hardware, I began to delve into software from then on. At the moment, I am focusing what I have learned towards this area, exploring different aspects of computing in order to grow professionally.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
          marginBottom: 2,
        }}
      >
        In addition to my formal training in Java, Spring, Maven, Node, HTML5, CSS3, JS, Git, React, Angular and Docker, I am constantly looking to stay up to date with complementary technologies such as Python, Docker, Kotlin, TypeScript or cybersecurity. This approach allows me to face any challenge with greater ease and versatility.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
        }}
      >
        I am excited about the new goal I have set for myself and I enjoy learning something new every day. I am always open to opportunities and collaborations that allow me to continue growing professionally.
      </Typography>
    </Box>
  );
}

export default AboutMe;
