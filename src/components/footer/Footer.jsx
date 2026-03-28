import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", mt: 10, pt: 6 }}>
      
      <Box
        sx={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 4, px: 4,}} >
        <Box>
          <Typography variant="h6" fontWeight="700"> Get In Touch </Typography>
          <Typography variant="body2" sx={{ my: 2, color: "gray" }}> the quick fox jumps over the lazy dog</Typography>
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
          <Typography variant="h6" fontWeight="700" marginBottom={1}>Company info</Typography>

          <Link component={RouterLink} to="/about" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > About Us </Link>
          <Link component={RouterLink} to="/" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > Carrier </Link>
          <Link component={RouterLink} to="/" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > We are hiring </Link>
          <Link component={RouterLink} to="/blog" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none"> Blog </Link>

        </Box>

        <Box  display={"flex"} flexDirection={"column"}>
          <Typography variant="h6" fontWeight="700" marginBottom={1}>Features</Typography>
          <Link component={RouterLink} to="/" variant="body1"  sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > Business Marketing </Link>
          <Link component={RouterLink} to="/" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > User Analytic </Link>
          <Link component={RouterLink} to="/" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > Live Chat </Link>
          <Link component={RouterLink} to="/" variant="body1" sx={{color: "grey",cursor: "pointer",transition: "0.3s","&:hover": { color: "#384789",transform: "translateX(5px)" }}} underline="none" > Unlimited Support</Link>

        </Box>
      </Box>

      <Box
        sx={{borderTop: "1px solid #ddd",mt: 5,py: 2,textAlign: "center",}}>
        <Typography variant="body2" color="gray">Made With Love By Figmaland All Right Reserved @2026</Typography>
      </Box>

    </Box>
  );
}