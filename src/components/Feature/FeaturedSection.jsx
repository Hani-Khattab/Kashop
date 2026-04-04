import React from "react";
import { Box, Container, Typography } from "@mui/material";
import feature1 from "../../assets/img/feature/feature1.webp";
import feature2 from "../../assets/img/feature/feature2.webp";
import { useTranslation } from "react-i18next";

export default function FeaturedSection() {
  const {t} = useTranslation();
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            gap: 5,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              width: { xs: "100%", md: "60%" },
            }}
          >
            <Box
              component="img"
              src={feature2}
              alt="Feature 2"
              sx={{
                width: { xs: "100%", sm: "48%" },
                maxWidth: 220,
                borderRadius: 3,
                objectFit: "cover",
                boxShadow: 4,
                transition: "transform 0.3s ",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
            <Box
              component="img"
              src={feature1}
              alt="Feature 1"
              sx={{
                width: { xs: "100%", sm: "48%" },
                maxWidth: 220,
                borderRadius: 3,
                objectFit: "cover",
                boxShadow: 4,
                transition: "transform 0.3s ",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              maxWidth: 400,
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 3, md: 15 },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: "#4a90e2", fontWeight: "bold", mb: 1 }}
            >
               {t('Featured Products')} 
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              We love what we do
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, fontSize: { xs: 15, md: 17 } }}
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: 15, md: 17 } }}
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
