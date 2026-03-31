import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import useCategories from "../../hooks/useCategories";
import Loader from "../../ui/Loader/Loader";
import { Link } from "react-router-dom";
import Category from "../../ui/category/Category";

export default function CategoriesSection() {
  const { data, isLoading, isError, error } = useCategories();

  if (isLoading) return <Loader />;
  if (isError) return <Box color={"red"}>{error.message}</Box>;

  return (
    <>
      <Box className="categories" py={3}></Box>
      <Typography
        component={"h2"}
        variant="h4"
        display={"flex"}
        justifyContent={"center"}
      >
        Categories
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {data.response.data.map((category) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={category._id || category.id}
          >
            <Category category={category} />
          </Grid>
        ))}
      </Grid>

      <Box display={"flex"} justifyContent={"center"} mt={2}>
        <Link to="/categories">Show More</Link>
      </Box>
    </>
  );
}
