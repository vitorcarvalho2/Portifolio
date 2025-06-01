import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        padding: 2,
        color: "white",
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom marginY={3}>
        About Me
      </Typography>
    </Box>
  );
}

export default About;
