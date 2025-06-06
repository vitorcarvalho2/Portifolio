import { Box, Typography } from "@mui/material";

function Experience() {
  return (
    <Box
      className="knowledge"
      sx={{ width: "100%", margin: "auto", padding: 2 }}
    >
      <Typography variant="h5" gutterBottom marginY={3}>
        Professional Experience
      </Typography>
      <Box
        className="experience"
        sx={{
          width: "100%",
          margin: "auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6">Trainee</Typography>
        <Typography variant="body1">
          Jatai, Brazil | Nov 2023 - Mar 2024
          <br />
          Centro de Gestão Acadêmica (CGA-UFJ)
          <br />
          - Initiated the development of the UFJ Enrollment System, focusing on
          documentation and system diagramming.
          <br />- Designed and developed user interfaces for the system,
          ensuring usability and accessibility.
        </Typography>

        <Typography variant="h6">Trainee</Typography>
        <Typography variant="body1">
          Jatai, Brazil | Jul 2024 - Sep 2024
          <br />
          Elevential Digital Solutions
          <br />
          - Designed and implemented AI-driven solutions for specialized
          chatbots.
          <br />- Addressed complex challenges by integrating cutting-edge
          technologies and efficient algorithms.
        </Typography>

        <Typography variant="h6">Junior Software Developer</Typography>
        <Typography variant="body1">
          Jatai, Brazil | Sep 2024 - Present
          <br />
          Elevential Digital Solutions
          <br />
          - Developed APIs using FastAPI and Django for robust and scalable
          backend solutions.
          <br />
          - Implemented responsive front-end solutions with React.js, enhancing
          user experience.
          <br />- Delivered efficient and innovative solutions to diverse
          technical challenges.
        </Typography>
      </Box>
    </Box>
  );
}

export default Experience;
