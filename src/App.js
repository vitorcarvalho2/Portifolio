import { Box, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contact";
import { Gradients } from "./utils/colors";
import Theme from "./utils/themes";
import Home from "./components/Home/Home";

const reactScanScript = document.createElement("script");
reactScanScript.src = "//unpkg.com/react-scan/dist/auto.global.js";
reactScanScript.crossOrigin = "anonymous";
reactScanScript.async = true;
document.body.appendChild(reactScanScript);

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        minHeight={"100vh"}
        width="100%"
        sx={{ background: Gradients.backgroundGradient }}
      >
        <Box minHeight={"10vh"}>
          <Header />
        </Box>

        <Box classname="content">
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
      </Box>
    </ThemeProvider>
  );
}

export default App;
