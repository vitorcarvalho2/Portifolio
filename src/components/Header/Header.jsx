import { Box, Typography } from "@mui/material";
import MyButton from "../MyButton";
import { Colors } from "../../utils/colors";

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
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          padding: "1rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginLeft: 4,
            color: Colors.accentColor,
            fontWeight: 700,
            letterSpacing: "1px",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-5px",
              left: 0,
              width: "100%",
              height: "2px",
              background: `linear-gradient(90deg, ${Colors.accentColor} 0%, transparent 100%)`,
              transform: "scaleX(0.8)",
              transition: "transform 0.3s ease-in-out",
            },
            "&:hover::after": {
              transform: "scaleX(1)",
            },
          }}
        >
          Portfolio
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
            marginRight: "100px",
            gap: 3,
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
    </Box>
  );
}
