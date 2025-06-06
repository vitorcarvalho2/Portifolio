import { Box, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Links from "../Contacts/Links";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <Box
      sx={{
        padding: 2,
        color: "white",
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom marginY={3}>
        Contact
      </Typography>

      <Typography variant="h5" paragraph>
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. Or have a project in
        mind? Let's connect.
      </Typography>
      <Stack
        spacing={{ xs: 2, sm: 4, md: 8 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap", gap: 2, justifyContent: "center", padding: 2 }}
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
          href=" mailto:vitorco.oliveira@gmail.com"
        />
      </Stack>
    </Box>
  );
}

export default Contact;
