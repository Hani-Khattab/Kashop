import { Box, Container } from "@mui/material";

import aws from "../../assets/img/Brands/aws.webp";
import hooli from "../../assets/img/Brands/hooli.webp";
import lyft from "../../assets/img/Brands/lyft.webp";
import Vector1 from "../../assets/img/Brands/Vector1.webp";
import Vector2 from "../../assets/img/Brands/Vector2.webp";
import stripe from "../../assets/img/Brands/stripe.webp";

const brands = [hooli, lyft, Vector1, stripe, aws, Vector2];

export default function BrandsSection() {
  return (
    <Box className="BrandsSection" py={6}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: { xs: 3, md: 6 },
          }}
        >
          {brands.map((logo, index) => (
            <Box
              key={index}
              component="img"
              src={logo}
              sx={{
                flex: { xs: "0 0 100%", sm: "0 0 45%", md: "0 0 auto" },
                height: { xs: 30, md: 40 },
                maxWidth: "120px",
                objectFit: "contain",
                filter: "grayscale(100%)",
                opacity: 0.6,
                transition: "all 0.3s ",
                "&:hover": {
                  filter: "grayscale(0%)",
                  opacity: 1,
                  transform: "scale(1.1)",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
