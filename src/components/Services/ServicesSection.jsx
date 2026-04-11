import { Box, Container, Typography } from "@mui/material";
import service1 from "../../assets/img/services/service1.webp";
import service2 from "../../assets/img/services/service2.webp";
import service3 from "../../assets/img/services/service3.webp";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
    const { t } = useTranslation();
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography fontSize={14} color="gray">
            {t("Featured Products")}
          </Typography>

          <Typography fontSize={28} fontWeight={700} color="#252B42" my={1}>
          {t("THE BEST SERVICES")}
          </Typography>

          <Typography color="gray">
            {t("Problems trying to resolve the conflict between")}
          </Typography>
        </Box>

        <Box
          className="Services_Cards"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: { xs: 4, md: 2 },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              flex: { xs: "0 0 100%", sm: "0 0 30%" },
            }}
          >
            <img
              src={service1}
              alt="service"
              style={{ height: 60, marginBottom: 16 }}
            />

            <Typography fontWeight={600} mb={1}>
              {t("Easy Wins")}
            </Typography>

            <Typography color="gray">
              {t("Get your best looking smile now!")}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: { xs: "0 0 100%", sm: "0 0 30%" },
            }}
          >
            <img
              src={service2}
              alt="service"
              style={{ height: 60, marginBottom: 16 }}
            />

            <Typography fontWeight={600} mb={1}>
              {t("Fast Delivery")}
            </Typography>

            <Typography color="gray">
              {t("Get your products delivered quickly!")}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: { xs: "0 0 100%", sm: "0 0 30%" },
            }}
          >
            <img
              src={service3}
              alt="service"
              style={{ height: 60, marginBottom: 16 }}
            />

            <Typography fontWeight={600} mb={1}>
              {t("Secure Payment")}
            </Typography>

            <Typography color="gray">{t("100% secure payment methods!")}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
