import { Box, Typography } from "@mui/material";
import Topics from "../Topics";

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
      <Topics display="Projects" variant={"h3"} />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          margin: "auto",
          padding: 2,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="h5">Soon...</Typography>
      </Box>
    </Box>
  );
}

export default Projects;
