import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Loader from "../../ui/Loader/Loader";
import { Link } from "react-router-dom";
import Product from "../../ui/product/Product";
import useProductFilter from "../../hooks/useProductFilter";
import { useTranslation } from "react-i18next";

export default function Products() {
      const {t} = useTranslation();
  

  const [filters, setFilters] = useState({
    page: 1,
    limit: 3,
    sortBy: "price",
    ascending: false,
  });

  const { data, isLoading, isError, error } = useProductFilter(filters);

  if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;

  return (
    <Box className="Products" py={3}>
      <Container>

        <Typography
          component={'h2'}
          variant="h4"
          textAlign="center"
          mb={2}
        >
          {t("Feature Products")}
        </Typography>
    <Typography component={'p'} variant="body1" display={'flex'} justifyContent={'center'} color='grey' mb={2}>
      {t("Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.")}
       </Typography>

<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 2,
    mb: 6,
    p: { xs: 2, md: 2.5 },
    borderRadius: "16px", 
    boxShadow: "0 4px 20px rgba(0,0,0,0.03)", 
    border: "1px solid #444343",

  }}
>
  <Typography 
    sx={{ 
      fontWeight: 700, 
      fontSize: "0.95rem",
      px: 1,
      flexGrow: { xs: 1, sm: 0 }
    }}
  >
    {t("Showing")} {data?.response?.data?.length || 0} {t("Products")}
  </Typography>

  <Box sx={{ 
    display: "flex", 
    gap: 1.5, 
    flexGrow: { xs: 1, sm: 0 },
    width: { xs: "100%", sm: "auto" } 
  }}>
    <FormControl size="small" sx={{ flex: 1, minWidth: { xs: "0", sm: 160 } }}>
      <InputLabel sx={{ fontSize: "0.85rem" }}>{t("Sort By")}</InputLabel>
      <Select
        value={filters.sortBy}
        label="Sort By"
        sx={{ 
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#e0e0e0" },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" }
        }}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            sortBy: e.target.value,
            page: 1,
          }))
        }
      >
        <MenuItem value="price">{t("Price")}</MenuItem>
      </Select>
    </FormControl>

    <FormControl size="small" sx={{ flex: 1, minWidth: { xs: "0", sm: 160 } }}>
      <InputLabel sx={{ fontSize: "0.85rem" }}>{t("Order")}</InputLabel>
      <Select
        value={String(filters.ascending)}
        label="Order"
        sx={{ 
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#e0e0e0" },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" }
        }}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            ascending: e.target.value === "true",
            page: 1,
          }))
        }
      >
        <MenuItem value="true">{t("Low to High")}</MenuItem>
        <MenuItem value="false"> {t("High to Low")} </MenuItem>
      </Select>
    </FormControl>
  </Box>
</Box>

<Grid
  container
  wrap="nowrap"
  spacing={3}
  sx={{
    overflowX: "auto",
    flexWrap: "nowrap",
    py: 2,
  }}
>
  {data?.response?.data?.map((product) => (
    <Grid item key={product.id}>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none" }}
      >
        <Product product={product} />
      </Link>
    </Grid>
  ))}
</Grid>

      </Container>
    </Box>
  );
}
