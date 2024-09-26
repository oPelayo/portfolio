import React from "react";
import { Box, Typography } from "@mui/material"; 
import { useTheme } from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';

const AboutMe = () => {
  const theme= useTheme();

  return (
    <Box sx={{ marginTop: 4, marginBottom: "96px" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <PersonIcon sx={{ color: '#ffa500', fontSize: "2.5rem", marginRight: 1 }} />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: theme.palette.text.primary, lineHeight: 1 }}
        >
          About Me
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary", 
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
        These enriching experiences sparked my interest in coding. Although I initially focused on hardware, I began exploring software development and am now channeling my learning into this field. I continue to explore various aspects of computing to grow professionally.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
          marginBottom: 2,
        }}
      >
       In addition to my formal training in Java, Spring, Maven, Node, HTML5, CSS3, JS, Git, React, Angular, and Docker, I am always looking to expand my knowledge with technologies like Python, Kotlin, TypeScript, and cybersecurity. This mindset helps me face challenges with flexibility and versatility.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
        }}
      >
        I am excited about the goals I’ve set for myself and enjoy learning something new every day. I am open to opportunities and collaborations that allow me to keep growing professionally.
      </Typography>
    </Box>
  );
}

export default AboutMe;
