import { Box, Link, Typography } from "@mui/material";
import { Colors, Gradients } from "../../utils/colors";

function Links({ display, icon: Icon, href }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      sx={{
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: "12px 20px",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        "&:hover": {
          color: Colors.accentColor,
          cursor: "pointer",
          transform: "translateY(-5px)",
          boxShadow: "0 0 20px rgba(114, 196, 255, 0.3)",
          background: Gradients.itemGradient,
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        underline="none"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          width: "100%",
        }}
      >
        {Icon && <Icon sx={{ fontSize: "1.5rem" }} />}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 500,
            letterSpacing: "0.5px"
          }}
        >
          {display}
        </Typography>
      </Link>
    </Box>
  );
}

export default Links;