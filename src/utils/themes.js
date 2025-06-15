import { createTheme } from "@mui/material/styles";
import { Colors } from "./colors";
import "@fontsource/sora"; 

const Theme = createTheme({
  typography: {
    fontFamily: "sora, sans-serif",
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1.2rem",
          padding: "12px",
          backgroundColor: Colors.backgroundColor,
          color: Colors.accentColor,
          borderRadius: "8px",
        },
        arrow: {
          color: Colors.backgroundColor,
        },
      },
    },
  },
});

export default Theme;
