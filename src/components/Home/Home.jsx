import { Box, Typography, useMediaQuery } from "@mui/material";
import profileImage from "../../assets/images/profile.png";
import { Gradients, Colors } from "../../utils/colors";

function Home() {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  return (
    <Box
      sx={{
        padding: 2,
        color: "white",
        marginTop: "20vh",
        display: "flex",
        flexDirection: "column",
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
          marginBottom: "50px",
        }}
      >
        {isSmallScreen ? (
          <Box
            sx={{
              borderRadius: "50%",
              width: "250px",
              height: "250px",
              background: Gradients.perfilGradient,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              margin: "auto",
            }}
          >
            <Box
              borderRadius="50%"
              sx={{
                width: "210px",
                height: "210px",
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
        ) : (
          <>
            <Box
              sx={{
                borderRadius: "50%",
                width: "250px",
                height: "250px",
                background: Gradients.perfilGradient,
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
                background: Colors.secondaryColor,
                padding: "15px 25px",
                borderRadius: "20px",
                boxShadow: `0 0 15px ${Colors.boxShadowColor}`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: "-10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderRight: `10px solid ${Colors.secondaryColor}`,
                },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: Colors.textColor,
                  fontWeight: 500,
                }}
              >
                Hi there! My name is{" "}
                <span
                  style={{
                    color: Colors.accentColor,
                    fontWeight: "bold",
                    textShadow: `0 0 5px ${Colors.boxShadowColor}`,
                  }}
                >
                  Vitor Carvalho Oliveira
                </span>
              </Typography>
            </Box>
          </>
        )}
      </Box>
      <Box
        sx={{
          width: "60%",
          padding: "20px 30px",
          p: 3,
          background: `linear-gradient(145deg, ${Colors.secondaryColor}, ${Colors.thirdColor})`,
          border: `1px solid ${Colors.lightColor}`,
          borderRadius: 2,
          boxShadow: `0 8px 20px ${Colors.hoverColor}`,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: "center",
            color: Colors.textColor,
            fontWeight: 500,
            lineHeight: 1.5,
          }}
        >
          This profile highlights my individual projects, experience, and skills
          as a developer, grounded in my background in Computer Science.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
