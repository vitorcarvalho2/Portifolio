import { Box, Typography } from "@mui/material";
import { Gradients } from "../utils/colors";

const Topics = ({ display, variant }) => {
  return (
    <Box sx={{ width: "fit-content", height: "auto", padding: "5px" }}>
      <Typography
        fontFamily={"sora, sans-serif"}
        variant={variant}
        gutterBottom
        marginY={3}
        sx={{
          fontWeight: "bold",
          background: Gradients.topicsGradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {display}
      </Typography>
    </Box>
  );
};

export default Topics;
