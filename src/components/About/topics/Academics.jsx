import { Box, Typography } from "@mui/material";

function Academics() {
  return (
    <Box
      className="knowledge"
      sx={{ width: "100%", margin: "auto", padding: 2 }}
    >
      <Typography variant="h5" gutterBottom marginY={3}>
        Academic Background
      </Typography>
      <Box
        className="experience"
        sx={{
          width: "100%",
          margin: "auto",
          padding: 2,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Box>
          <Typography variant="h6">Ensino Médio Completo</Typography>
          <Typography variant="body1">
            Patrocínio, MG, Brazil | 2018 - 2020
            <br />
            Colégio ABC Anglo
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6">English language course</Typography>
          <Typography variant="body1">
            Patrocínio, MG, Brazil | 2014 - 2020
            <br />
            Centro de cultura anglo americana CCAA
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6">
            Bachelor's degree in Computer Science
          </Typography>
          <Typography variant="body1">
            Jataí, GO, Brazil | 2021 - 2024
            <br />
            Universidade Federal de Jataí
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Academics;
