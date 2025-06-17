import { Box, Typography, Stack, Paper } from "@mui/material";
import Tecnologies from "./topics/Tecnologies";
import Experience from "./topics/Experience";
import Academics from "./topics/Academics";
import Topics from "../Topics";
import { Colors } from "../../utils/colors";

function About() {
  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: { xs: "95%", md: "80%" },
        margin: "auto",
        gap: 4,
        minHeight: "100vh",
      }}
    >
      <Topics display="About Me" variant={"h3"} />
      <Paper
        elevation={3}
        sx={{
          p: 3,
          transition: "all 0.3s ease-in-out",
          background: `linear-gradient(145deg, ${Colors.secondaryColor}, ${Colors.thirdColor})`,
          border: `1px solid ${Colors.lightColor}`,
          borderRadius: 2,
          boxShadow: `0 8px 20px ${Colors.hoverColor}`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            lineHeight: 1.8,
            textAlign: "justify",
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: { xs: "1rem", md: "1.1rem" },
            letterSpacing: "0.5px",
            color: Colors.textColor,
          }}
        >
          I am a developer passionate about technology and innovation, focused
          on creating efficient and scalable solutions. My journey in software
          development is marked by a constant pursuit of learning and
          improvement. I believe that technology is constantly evolving, which
          is why I dedicate myself to staying updated with the best practices
          and new technologies in the market. I have a strong ability to adapt
          and solve problems, combined with a collaborative approach that allows
          me to work effectively in teams. My goal is to always deliver clean,
          well-structured, and high-quality code, contributing to projects that
          make a difference.
        </Typography>
      </Paper>

      <Stack spacing={4}>
        <Tecnologies />
        <Academics />
        <Experience />
      </Stack>
    </Box>
  );
}

export default About;
