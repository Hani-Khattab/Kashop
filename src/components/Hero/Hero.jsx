import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";
import hero1 from "../../assets/img/hero1.jpg";
import hero2 from "../../assets/img/hero2.jpg";
import hero3 from "../../assets/img/hero3.jpg";
const slides = [
  {
    image: hero1,
    title: "NEW COLLECTION",
    subtitle: "Spring / Summer 2025",
  },
  {
    image: hero2,
    title: "SUMMER SALE",
    subtitle: "Up to 50% OFF",
  },
  {
    image: hero3,
    title: "TRENDING NOW",
    subtitle: "Discover your style",
  },
];

export default function Hero() {
  return (
    <Swiper
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              height: "90vh",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "white",
              position: "relative",
              px: { xs: 3, md: 10 },
            }}
          >
            {/* Overlay gradient */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
              }}
            />

            {/* Content */}
            <Box
              sx={{
                position: "relative",
                maxWidth: "500px",
                animation: "fadeUp 1s ease",
              }}
            >
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  letterSpacing: 2,
                  mb: 2,
                }}
              >
                {slide.title}
              </Typography>

              <Typography variant="h6" sx={{ mb: 3 }}>
                {slide.subtitle}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#ddd",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      ))}

      {/* Animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Swiper>
  );
}