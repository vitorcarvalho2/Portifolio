import { Box } from "@mui/material";
import Itemscarousel from "./Itemscarousel";
import Topics from "../../Topics";

function Tecnologies() {
  return (
    <Box>
            <Topics display="Technologies" variant={"h4"} />

    <Box
      sx={{
        padding: 4,
        color: "white",
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        background: `linear-gradient(135deg, 
          rgba(114, 196, 255, 0.1) 0%,
          rgba(162, 34, 247, 0.1) 50%,
          rgba(114, 196, 255, 0.1) 100%)`,
        borderRadius: "20px",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 12px 40px rgba(114, 196, 255, 0.2)",
      }}
    >
      <Itemscarousel />
    </Box>
    </Box>
  );
}

export default Tecnologies;
