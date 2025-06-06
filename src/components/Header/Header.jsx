import { Box, Typography } from "@mui/material";
import MyButton from "../MyButton";
import Colors from "../../utils/colors";

const menuItems = [
  { text: "Home", target: "top" },
  { text: "About", target: "about" },
  { text: "Projects", target: "projects" },
  { text: "Contact", target: "contact" },
];

export function Header() {
  const handleScroll = (target) => {
    const offset = 100;
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(target);
      if (element) {
        const elementPosition = element.offsetTop;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }
  };

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
        <Typography variant="h3" sx={{ marginLeft: 4 }}>
          Meu Portfólio
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
            marginRight: "100px",
            gap: 2,
          }}
        >
          {menuItems.map((item) => (
            <MyButton
              key={item.text}
              text={item.text}
              aria-label={`Navigate to ${item.text}`}
              onClick={() => handleScroll(item.target)}
            >
              {item.text}
            </MyButton>
          ))}
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
