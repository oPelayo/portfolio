import React, { useState } from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { useTheme } from "@mui/material/styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const experiences = [
  {
    title: "Technical salesman, onboarding new workers, network and electronic maintenance",
    company: "Cuylas S.L.",
    date: "At present",
    description:[
      "-Technical advice by assessing individual customer needs to recommend products that suit their skill level, skiing style and preferences.",
      "-Shop technician specialized in repair, maintenance, adjustments and care of equipment.", 
      "-Participation in incentive programs to achieve sales goals.", 
      "-Maintenance of warehouse, inventory and product rotation.", 
      "-Participation in training and professional development programs to stay up to date.",
      "-Problem resolution ensuring customer satisfaction.", 
      "-Completion of sales transactions with collections, returns, closings and cash counts.",
      "-Initial training of new colleagues in operating procedures and use of store tools."
    ]
  },
  {
    title: "Intern Web developer",
    company: "Tecnicas Reunidas S.A.",
    date: "2024",
    description:[
      "- Planing & Development of an internal pilot application for digital content.",
      "- Developed with ASP.Net, MVC pattern.", 
      "- Management of Oracle databases.",
      "- Git Control version.", 
      "- Deployment with Azure Cloud."
    ]
  },
  {
    title: "Web maintenance assistant, technical salesman",
    company: "In-Gravity S.L.",
    date: "2017-2019",
    description:[
      "- Maintenance of the company's website updating content, images and videos.",
      "- Technical advice to customers",
      "- Maintenance and repair of equipment"
    ]
  },
  {
    title: "Coordinator of a center for minors with behavioral disorders",
    company: "Consulting Asistencial Sociosanitario S.L.",
    date: "2013-2017",
    description:[
      "- Planning and execution of educational and leisure activities.", 
      "- Coordination with the Educational team and Psychologists.", 
      "- Educational interventions, supervision of guidelines and methodologies to be applied.",
      "- Team management (6 people)"
    ]
  },
  {
    title: "Destinatur founder, project developer and CMS Joomla web developer",
    company: "Asoc. Destinatur",
    date: "2013-2017",
    description:[
      "- Development of educational projects and its implementation.",
      "- Development of the website with Joomla CMS",
      "- Treasurer of the association",
      "- Management of the association"
    ]
  }

]

function Experience() {
  const theme = useTheme();

  return (
    
    <div>
      <Box sx={{ marginTop: 4 }}>
        <Box sx={{ marginTop: 4, display: "flex", alignItems: "center", mb: 3 }}>
          <WorkIcon sx={{ color: "#ffa500", marginRight: 1, fontSize: "2.5rem" }} />
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: theme.palette.text.primary, lineHeight: 1 }}
          >
            Work Experience
          </Typography>
        </Box >
      <List
        sx={{
          position: "relative",
          paddingLeft: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            left: "24px", // Adjusted position for the timeline
            top: 0,
            bottom: 0,
            width: "2px",
            backgroundColor: "#ffa500",
          },
        }}
      >
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </List>
    </Box>
    </div>
  );
}

function ExperienceItem({ experience }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ListItem
      sx={{ display: "flex", alignItems: "flex-start", mb: 4, marginBottom: "48px" }}
    >
      {/* Dot Icon */}
      <FiberManualRecordIcon
        sx={{
          color: "#ffa500",
          fontSize: "16px",
          marginRight: 4,
          marginTop: "4px",
        }}
      />
      <Box>
        {/* Tittle */}
        <Typography
          variant="h6"
          sx={{ color: "#ffc107", fontWeight: "bold" }}
        >
          {experience.title}
        </Typography>

        {/* Company & date */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "medium",
            color: theme.palette.text.primary,
            marginBottom: "8px",
          }}
        >
          {experience.company}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.palette.text.secondary }}
        >
          {experience.date}
        </Typography>

        {/* Description  */}
        <Box
          sx={{
            mt: 1,
            maxHeight: isExpanded ? "none" : "4.5em", // 4.5em para limitar a 3 líneas
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: isExpanded ? "none" : 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {experience.description.map((line, i) =>
            line.startsWith("-") ? (
              <Typography
                key={i}
                variant="body2"
                sx={{ marginLeft: 2, listStyleType: "disc" }}
              >
                <span style={{ marginRight: "8px" }}>–</span>
                {line.substring(1).trim()}
              </Typography>
            ) : (
              <Typography key={i} variant="body2">
                {line}
              </Typography>
            )
          )}
        </Box>


        {/* Botón para expandir/contraer */}
        <Typography
          component="button"
          onClick={toggleExpand}
          sx={{
            color: "#ffc107",
            fontWeight: "medium",
            textDecoration: "none",
            display: "inline-block",
            mt: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {isExpanded ? "Show less" : "More"} &gt;
        </Typography>
      </Box>
    </ListItem>
  );
}

export default Experience;
