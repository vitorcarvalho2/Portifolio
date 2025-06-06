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
      <Box sx={{  display: "flex", width: "100%", margin: "auto", padding: 2, justifyContent: "center", alignContent: "center" }}>
        <Typography variant="h5">Soon...</Typography>
      </Box>
    </Box>
  );
}

export default Projects;
