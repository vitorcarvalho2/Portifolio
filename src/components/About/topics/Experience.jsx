import { Box, Typography, Paper } from "@mui/material";
import Topics from "../../Topics";
import { Colors } from "../../../utils/colors";

function Experience() {
  return (
    <Box
      className="knowledge"
      sx={{
        width: "100%",
        margin: "auto",
        padding: 3,
        borderRadius: 2,
      }}
    >
      <Topics display="Professional Experience" variant={"h4"} />
      <Box
        className="experience"
        sx={{
          width: "100%",
          margin: "auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {[
          {
            title: "Trainee",
            period: "Nov 2023 - Mar 2024",
            location: "Jatai, Brazil",
            company: "Centro de Gestão Acadêmica (CGA-UFJ)",
            responsibilities: [
              "Initiated the development of the UFJ Enrollment System, focusing on documentation and system diagramming.",
              "Designed and developed user interfaces for the system, ensuring usability and accessibility.",
            ],
          },
          {
            title: "Trainee",
            period: "Jul 2024 - Sep 2024",
            location: "Jatai, Brazil",
            company: "Elevential Digital Solutions",
            responsibilities: [
              "Designed and implemented AI-driven solutions for specialized chatbots.",
              "Addressed complex challenges by integrating cutting-edge technologies and efficient algorithms.",
            ],
          },
          {
            title: "Junior Software Developer",
            period: "Sep 2024 - Present",
            location: "Jatai, Brazil",
            company: "Elevential Digital Solutions",
            responsibilities: [
              "Developed APIs using FastAPI and Django for robust and scalable backend solutions.",
              "Implemented responsive front-end solutions with React.js, enhancing user experience.",
              "Delivered efficient and innovative solutions to diverse technical challenges.",
            ],
          },
        ].map((job, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              transition: "all 0.3s ease-in-out",
              background: `linear-gradient(145deg, ${Colors.secondaryColor}, ${Colors.thirdColor})`,
              border: `1px solid ${Colors.lightColor}`,
              borderRadius: 2,
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: `0 8px 20px ${Colors.hoverColor}`,
                background: `linear-gradient(145deg, ${Colors.thirdColor}, ${Colors.secondaryColor})`,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: Colors.accentColor,
                fontWeight: "bold",
                mb: 1,
                textShadow: `0 0 10px ${Colors.transparentaAcentColor}`,
              }}
            >
              {job.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ 
                color: Colors.lightColor,
                mb: 1,
                opacity: 0.9,
              }}
            >
              {job.location} | {job.period}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ 
                color: Colors.textColor,
                mb: 2,
                fontWeight: "medium",
              }}
            >
              {job.company}
            </Typography>
            <Box 
              component="ul" 
              sx={{ 
                pl: 2,
                m: 0,
                "& li": {
                  color: Colors.textColor,
                  opacity: 0.9,
                  mb: 1,
                  position: "relative",
                  "&::before": {
                    content: '"•"',
                    color: Colors.accentColor,
                    position: "absolute",
                    left: -15,
                  }
                }
              }}
            >
              {job.responsibilities.map((responsibility, idx) => (
                <Typography
                  key={idx}
                  component="li"
                  variant="body1"
                >
                  {responsibility}
                </Typography>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Experience;
