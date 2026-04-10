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

export default function Products() {
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
        <Typography component={"h2"} variant="h4" textAlign="center" mb={2}>
          Feature Products
        </Typography>
        <Typography
          component={"p"}
          variant="body1"
          display={"flex"}
          justifyContent={"center"}
          color="grey"
          mb={2}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
            flexWrap: "wrap",
            p: 2,
            borderRadius: 3,
            alignItems: "center",
            boxShadow: 1,
          }}
        >
          <FormControl sx={{ flex: 1, minWidth: { xs: "100%", sm: 200 } }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={filters.sortBy}
              label="Sort By"
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value,
                  page: 1,
                }))
              }
            >
              <MenuItem value="price">Price</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ flex: 1, minWidth: { xs: "100%", sm: 200 } }}>
            <InputLabel>Order</InputLabel>
            <Select
              value={String(filters.ascending)}
              label="Order"
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  ascending: e.target.value === "true",
                  page: 1,
                }))
              }
            >
              <MenuItem value="true">Low to High</MenuItem>
              <MenuItem value="false">High to Low</MenuItem>
            </Select>
          </FormControl>
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
