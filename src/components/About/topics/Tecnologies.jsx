import { Box } from "@mui/material";
import Itemscarousel from "./Itemscarousel";

import Topics from "../../Topics";

function Tecnologies() {
  return (
    <Box
      sx={{
        padding: 2,
        color: "white",
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        margin: "auto",
      }}
    >
      <Topics display="Technologies" variant={"h4"} />
      <Itemscarousel />
    </Box>
  );
}

export default Tecnologies;
