import { Box, Typography } from "@mui/material";
import MyButton from "./MyButton";
import Colors from "../../utils/colors";

export function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
        width: "100%",
        position: "fixed",
        zIndex: 100,
        backgroundColor: Colors.secondaryColor,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          padding: 2,
        }}
      >
        <Typography variant="h3" marginLeft={4}>Meu Portfólio </Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          sx={{
            marginLeft: "auto",
            marginRight: "100px",
            gap: 2,
          }}
        >
          <MyButton
            text="Home"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Home
          </MyButton>
          <MyButton
            text="About"
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Sobre
          </MyButton>
          <MyButton
            text="Projects"
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </MyButton>
          <MyButton
            text="Contact"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contato
          </MyButton>
        </Box>
        
      </Box>
      <Box
          sx={{
            background: `linear-gradient(to bottom, ${Colors.secondaryColor} 0%, ${Colors.backgroundColor} 100%)`,
            width: "100%",
            minHeight: "8vh",
          }}
        />
    </Box>
  );
}
