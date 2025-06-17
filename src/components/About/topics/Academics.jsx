import { Box, Typography } from "@mui/material";
import Topics from "../../Topics";
import { Colors, Gradients } from "../../../utils/colors";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";

function MyAcademics({ local, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Box
        position="relative"
        width="424px"
        height="auto"
        padding={2}
        display="flex"
        flexDirection="column"
        borderRadius={4}
        zIndex={2}
        backgroundColor={Colors.transparentaAcentColor}
        sx={{
          backdropFilter: "blur(10px)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Box 
          display={"flex"} 
          alignItems="center" 
          gap={2} 
          paddingY={1}
          sx={{
            borderBottom: `2px solid ${Colors.accentColor}`,
            marginBottom: 1
          }}
        >
          <SchoolIcon fontSize="medium" sx={{ color: Colors.accentColor }} />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: "bold",
              background: Gradients.topicsGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems="center"
          gap={2}
          paddingX={2}
          paddingY={1}
        >
          <LocationOnIcon fontSize="small" sx={{ color: Colors.accentColor }} />
          <Typography variant="body1">{local}</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems="center"
          gap={2}
          paddingX={2}
          paddingY={1}
        >
          <AutoStoriesIcon fontSize="small" sx={{ color: Colors.accentColor }} />
          <Typography variant="body1">{subtitle}</Typography>
        </Box>
      </Box>
    </motion.div>
  );
}

function Academics() {
  return (
    <Box
      className="knowledge"
      sx={{ 
        width: "100%", 
        margin: "auto", 
        padding: 2,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Topics display="Academic Background" variant={"h4"} />
      <Box
        className="experience"
        sx={{
          width: "100%",
          height: "100%",
          margin: "auto",
          padding: 2,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          position: "relative",
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          style={{
            position: "absolute",
            
          }}
          
        >
          <Box
          className="circle"
          sx={{
            background: Gradients.backgroundCircleGradient,
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 0,
            transform: "translate(-50%, -50%)",
          }}
        />
        </motion.div>

        <MyAcademics
          title="High School"
          local="Patrocínio, MG, Brazil | 2018 - 2020"
          subtitle="Colégio Educacional ABC Anglo"
        />

        <MyAcademics
          title="English Language Course"
          local="Patrocínio, MG, Brazil | 2014 - 2020"
          subtitle="Centro de Cultura Anglo Americana - CCAA"
        />

        <MyAcademics
          title="Bachelor's Degree in Computer Science"
          local="Jataí, GO, Brazil | 2021 - 2024"
          subtitle="Universidade Federal de Jataí - UFJ"
        />
      </Box>
    </Box>
  );
}

export default Academics;