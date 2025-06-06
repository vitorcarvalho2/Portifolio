import { Box, Typography, Stack } from "@mui/material";
import Tecnologies from "./topics/Tecnologies";
import Experience from "./topics/Experience";
import Academics from "./topics/Academics";

function About() {
  return (
    <Box
      sx={{
        padding: 2,
        color: "white",
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
      <Typography variant="h6">
        I'm a passionate and dedicated full-stack developer with a strong focus
        on creating user-friendly and visually appealing web experiences. With a
        deep understanding of HTML, CSS, and JavaScript, I specialize in
        crafting dynamic and interactive interfaces that enhance user engagement
        and overall user experience.
      </Typography>

      <Stack>
        <Tecnologies />
        <Academics />
        <Experience />
      </Stack>
    </Box>
  );
}

export default About;
