import { Box, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contact";
import Colors from "./utils/colors";
import Theme from "./utils/themes";
import Home from "./components/Home/Home";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          backgroundColor: Colors.backgroundColor,
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            minHeight: "10vh",
          }}
        >
          <Header />
        </Box>

        <Box>
          <Home />
          <Box id="about">
            <About />
          </Box>
          <Box id="projects">
            <Projects />
          </Box>
          <Box id="contact">
            <Contact />
          </Box>
        </Box>
        <Box
          sx={{
            background: `linear-gradient(to bottom, ${Colors.backgroundColor} 0%, ${Colors.secondaryColor} 100%)`,
            width: "100%",
            minHeight: "10vh",
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
