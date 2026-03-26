import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Loader from '../../ui/Loader/Loader';
import useCategories from '../../hooks/useCategories';
import Category from '../../ui/category/Category';

export default function CategoriesPage() {

      const { data, isLoading, isError, error } = useCategories(100);
    
      if (isLoading) return <Loader />;
      if (isError) return <Box color={"red"}>{error.message}</Box>;
      
 return (
  <>
    <Box className="categories" py={3}></Box>

 <Typography component={'h2'} variant="h4" display={'flex'} justifyContent={'center'}>Categories</Typography>
      <Grid container spacing={4} justifyContent="center">
  {data.response.data.map((category) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Category category={category} />
    </Grid>
  ))}
</Grid>
  </>
);
}