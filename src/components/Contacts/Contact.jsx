import { Box, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Links from "../Contacts/Links";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Topics from "../Topics";

function Contact() {

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        color: "white",
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: { xs: "95%", md: "80%" },
        margin: "auto",
      }}
    >
      <Topics display="Contact" variant={"h3"} />

      <Typography 
        variant="h6" 
        sx={{ 
          textAlign: "center",
          maxWidth: "800px",
          margin: "2rem auto",
          lineHeight: 1.8,
          opacity: 0.9,
          fontSize: { xs: "1rem", md: "1.25rem" }
        }}
      >
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. Or have a project in
        mind? Let's connect.
      </Typography>
      
      <Stack
        spacing={{ xs: 2, sm: 3, md: 4 }}
        direction="row"
        useFlexGap
        sx={{ 
          flexWrap: "wrap", 
          gap: 3, 
          justifyContent: "center", 
          padding: 2,
          "& > *": {
            flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 24px)", md: "0 1 auto" }
          }
        }}
      >
        <Links
          display="LinkedIn"
          icon={LinkedInIcon}
          href="https://www.linkedin.com/in/vitor-oliveira-849816299/"
        />
        <Links
          display="GitHub"
          icon={GitHubIcon}
          href="https://github.com/vitorcarvalho2"
        />
        <Links
          display="Whatsapp"
          icon={WhatsAppIcon}
          href="https://wa.me/5534988627864"
        />
        <Links
          display="Instagram"
          icon={InstagramIcon}
          href="https://www.instagram.com/vitorc.oliveira_/"
        />
        <Links
          display="Email"
          icon={EmailIcon}
          href="mailto:vitorco.oliveira@gmail.com?subject=Contato do Portfólio"
        />
      </Stack>
    </Box>
  );
}

export default Contact;