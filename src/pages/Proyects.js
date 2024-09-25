import React from "react";
import { Typography, Box, Button, Chip } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import CodeIcon from '@mui/icons-material/Code';
/*import VisibilityIcon from '@mui/icons-material/Visibility';*/
import WebIcon from '@mui/icons-material/Web';
import MigralogImage from './../imgs/Migralog.png';
import NexuscomImage from './../imgs/Nexuscom.png';

function Proyects() {
  /* Proyects data list */
  const projectData = [
    {
      title: 'Migralog - Migraine monitoring app',
      description: 'Final degree project rated as excellent',
      image: MigralogImage,
      tags: ['Spring', 'Angular', 'MySQL', 'Docker' ],
      codeLink: "https://github.com/oPelayo/the_way",
      previewLink: '#',
    },
    {
      title: 'Nexuscom',
      description: 'This project represents my inaugural venture into web development using Java, HTML, CSS, and JS, with MySQL',
      image: NexuscomImage,
      tags: ['Native Java', 'HTML','CSS', 'JS', 'MySQL'],
      codeLink: "https://github.com/oPelayo/the_Way_two", 
      previewLink: '#',
    }
  ];

  const theme = useTheme();

  return (
    <Box sx={{ padding: 4 }}>
      {/* Title */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <WebIcon sx={{ color: '#ffa500', fontSize: '2.5rem', marginRight: 1 }} />
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', color: theme.palette.text.primary, lineHeight: 1 }}
        >
          Proyectos
        </Typography>
      </Box>

      {/* Proyects list */}
      {projectData.map((project, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            backgroundColor: '#1e1e1e',
            borderRadius: '10px',
            marginBottom: 4,
            padding: 3,
            boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
            flexWrap: { xs: 'wrap', md: 'nowrap' }, 
            maxWidth: '100%', 
          }}
        >
          {/* Project Image */}
          <Box
            sx={{
              flex: 1,
              paddingRight: { md: 2 },
              marginBottom: { xs: 2, md: 0 },
              width: '100%', 
              maxWidth: { xs: '100%', md: '300px' }, 
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </Box>

          {/* Project Details */}
          <Box sx={{ flex: 2, width: '100%' }}>
            <Typography variant="h5" sx={{ color: '#ffa500', fontWeight: 'bold' }}>
              {project.title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#aaa', marginBottom: 2 }}>
              {project.description}
            </Typography>

            {/* Tags */}
            <Box sx={{ display: 'flex', gap: 1, marginBottom: 2, flexWrap: 'wrap' }}>
              {project.tags.map((tag, i) => (
                <Chip key={i} label={tag} sx={{ backgroundColor: '#333', color: '#fff' }} />
              ))}
            </Box>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  '&:hover': { borderColor: '#ffa500', color: '#ffa500' }
                }}
                startIcon={<CodeIcon />}
                href={project.codeLink}
              >
                Code
              </Button>
              {/*Preview button
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  '&:hover': { borderColor: '#ffa500', color: '#ffa500' }
                }}
                startIcon={<VisibilityIcon />}
                href={project.previewLink}
              >
                Preview
              </Button>*/}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Proyects;
