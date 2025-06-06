import { Box, Link, Typography } from "@mui/material";
import { Colors, Gradients } from "../../utils/colors";

function Links({ display, icon: Icon, href, hoverColor }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      sx={{
        transition: "transform 0.5s ease-in-out",
        padding: 2,
        "&:hover": {
          color: hoverColor || "inherit",
          cursor: "pointer",
          transform: "scale(1.1)",
          backgroundColor: Colors.backgroundColor,
          background: Gradients.linkGradient,
        },
      }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        underline="hover"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {Icon && <Icon />}
        <Typography variant="h6">{display}</Typography>
      </Link>
    </Box>
  );
}

export default Links;
