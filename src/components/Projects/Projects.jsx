import { Box, Typography } from "@mui/material";
function Projects() {
  return (
    <Box
      sx={{
        padding: 2,
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom marginY={3}>
        Projects
      </Typography>
    </Box>
  );
}

export default Projects;
