import { Box, Typography } from "@mui/material";
import profileImage from "../../assets/images/profile.png";
import Colors from "../../utils/colors";

function Home() {
  return (
    <Box
      sx={{
        padding: 2,
        color: "white",
        marginTop: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          position: "relative",
          width: "80%",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            width: "250px",
            height: "250px",
            background: `radial-gradient(circle, ${Colors.secondaryColor} 0%, ${Colors.backgroundColor} 100%)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            borderRadius="50%"
            sx={{
              width: "210px",
              height: "210px",
              backgroundColor: Colors.lightColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
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
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "1%",
            left: "25%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Hi there! My name is{" "}
            <span style={{ color: Colors.lightColor, fontWeight: "bold" }}>
              Vitor
            </span>
          </Typography>
        </Box>

        <Box
          sx={{
            margin: "auto",
            width: "50%",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: "center",
            }}
          >
            Este perfil é dedicado a publicar alguns projetos individuais como
            desenvolvedor.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
