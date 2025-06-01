import { Box, Typography } from "@mui/material";
import profileImage from "../../assets/images/profile.png";
function Home() {
  return (
    <Box
      sx={{
        padding: 2,
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          textAlign: "flex-end",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "flex-end",
          margin: "auto",

        }}
      >
        <Box>
          <Typography variant="h6" gutterBottom marginY={3}>
            Olá me chamo Vitor!
          </Typography>
          <img
            src={profileImage}
            alt="Vitor"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography variant="h5" gutterBottom marginY={3} width={"50%"} alignContent={"space-evenly"}>
          Este perfil é dedicado a publicar alguns projetos individuais como desenvolvedor.
        </Typography>
      </Box>
    </Box>
  );
}
export default Home;
