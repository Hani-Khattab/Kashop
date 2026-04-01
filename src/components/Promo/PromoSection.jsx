import { Box, Container, Typography, Button } from "@mui/material";
import home1 from "../../assets/img/home/home1.webp";
import home2 from "../../assets/img/home/home2.webp";
import home3 from "../../assets/img/home/home3.webp";

export default function PromoSection() {
  return (
    <Box className="promoSection" sx={{ py: { xs: 4, md: 6 } }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 48%" },
              height: { xs: 300, md: 450 },
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={home1}
              alt="promo"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                p: 3,
                background:
                  "linear-gradient(to top, rgba(35,166,240,0.8), transparent)",
                color: "#fff",
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                Top Product Of the Week
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: "#fff",
                  borderColor: "#fff",
                  textTransform: "none",
                }}
              >
                Start Shopping
              </Button>
            </Box>
          </Box>

          {/* Right */}
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 48%" },
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/*  Upper Card */}
            <Box
              sx={{
                height: { xs: 200, md: 210 },
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={home2}
                alt="promo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  p: 2,
                  background:
                    "linear-gradient(to top, rgba(35,166,240,0.8), transparent)",
                  color: "#fff",
                }}
              >
                <Typography fontWeight={600}>
                  Discover Your Next Favorite
                </Typography>

                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    mt: 1,
                    color: "#fff",
                    borderColor: "#fff",
                    textTransform: "none",
                  }}
                >
                  Explore Items
                </Button>
              </Box>
            </Box>

            {/* lower card */}
            <Box
              sx={{
                height: { xs: 200, md: 210 },
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={home3}
                alt="promo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  p: 2,
                  background:
                    "linear-gradient(to top, rgba(35,166,240,0.8), transparent)",
                  color: "#fff",
                }}
              >
                <Typography fontWeight={600}>
                  New Collection
                </Typography>

                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    mt: 1,
                    color: "#fff",
                    borderColor: "#fff",
                    textTransform: "none",
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}