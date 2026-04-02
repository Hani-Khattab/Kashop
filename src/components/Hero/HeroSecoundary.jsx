import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";

import hero1 from "../../assets/img/Hero/herovita1.webp";
import hero2 from "../../assets/img/Hero/herovita2.webp"
const slides = [
  {
    image: hero1,
    subtitle: "SUMMER COLLECTION",
    title: "Upgrade Your Style",
    description:
      "Discover the latest trends and find your perfect outfit today.",
  },
  {
    image: hero2,
    subtitle: "NEW ARRIVALS",
    title: "Fresh Looks Just Dropped",
    description:
      "Explore our newest collection designed for modern lifestyle.",
  },
];

export default function HeroSecoundary() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 4000 }}
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
              px: { xs: 3, md: 12 },
            }}
          >
            {/* Content */}
            <Box sx={{ maxWidth: "500px", zIndex: 2 }}>
              <Typography variant="overline" sx={{ color: "#23A6F0" }}>
                {slide.subtitle}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "2.2rem", md: "3.8rem" },
                  fontWeight: "bold",
                  mb: 2,
                  color: "#252B42",
                }}
              >
                {slide.title}
              </Typography>

              <Typography sx={{ mb: 3, color: "#737373" }}>
                {slide.description}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#23A6F0",
                  px: 5,
                  py: 1.5,
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#1d8ed1",
                  },
                }}
              >
                Shop Now
              </Button>
            </Box>

            {/* Image */}
            <Box
              component="img"
              src={slide.image}
              alt="promo"
              sx={{
                position: "absolute",
                right: { xs: "-30%", md: "5%" },
                bottom: 0,
                height: { xs: "65%", md: "95%" },
                objectFit: "contain",
                zIndex: 1,
              }}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}