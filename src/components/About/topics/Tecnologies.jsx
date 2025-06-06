import { Box, Typography } from "@mui/material";
import Itemscarousel from "./Itemscarousel";

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
      <Typography variant="h5" gutterBottom marginY={3}>
        Technologies
      </Typography>
      <Itemscarousel />
    </Box>
  );
}

export default Tecnologies;
