import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box sx={{ backgroundColor:"inherit", mt: 10, pt: 6 }}>
      
      <Box
        sx={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 4, px: 4,borderTop: "1px solid #ddd", paddingTop:5}} >
        <Box>
          <Typography variant="h6" fontWeight="700" > {t("Get In Touch")} </Typography>
          <Typography variant="body2" sx={{ my: 2, color: "gray" }}> {t("the quick fox jumps over the lazy dog")} </Typography>
          <Box>
            <IconButton sx={{ color: "#0d24ed" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#9c214e" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#3ea8ee" }}>
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h6" fontWeight="700" marginBottom={1} > {t("Company info")} </Typography>

          <Link component={RouterLink} to="/about" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > {t("About Us")} </Link>
          <Link component={RouterLink} to="/" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > {t("Carrier")} </Link>
          <Link component={RouterLink} to="/" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > {t("We are hiring")} </Link>
          <Link component={RouterLink} to="/blog" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none"> {t("Blog")} </Link>

        </Box>

        <Box  display={"flex"} flexDirection={"column"}>
          <Typography variant="h6" fontWeight="700" marginBottom={1}> {t("Features")} </Typography>
          <Link component={RouterLink} to="/" variant="body1"  sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" >{t("Business Marketing")}</Link>
          <Link component={RouterLink} to="/" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" >  {t("User Analytic")}</Link>
          <Link component={RouterLink} to="/" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > {t("Live Chat")} </Link>
          <Link component={RouterLink} to="/" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > {t("Unlimited Support")} </Link>

        </Box>
      </Box>

      <Box
        sx={{borderTop: "1px solid #ddd",mt: 5,py: 2,textAlign: "center",}}>
        <Typography variant="body2" color="gray">{t("Made With Love By Figmaland All Right Reserved @2026")}</Typography>
      </Box>

    </Box>
  );
}