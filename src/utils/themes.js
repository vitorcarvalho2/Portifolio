import { createTheme } from "@mui/material/styles";
import { Colors } from "./colors";
const Theme = createTheme({
  typography: {
    fontFamily: "Preahvihear", 
  },
  palette: {
    primary: {
      main: Colors.backgroundColor,
    },
    secondary: {
      main: Colors.secondaryColor,
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1.2rem",       
          padding: "12px",          
          backgroundColor: "#fff", 
          color: Colors.secondaryColor,            
          borderRadius: "8px",     
        },
        arrow: {
          color: "#fff",            
        }
      }
    }
  }
});

export default Theme;