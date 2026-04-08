import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import useProductsByCategories from '../../hooks/useProductsByCategories';
import Loader from '../../ui/Loader/Loader';

export default function ProductsByCategories({ categoryId }) {
  const { data, isLoading, isError, error } = useProductsByCategories(categoryId);

  if (isLoading) return <Loader />;
  if (isError) return <Typography color="red">{error.message}</Typography>;

  const products = data.response?.data || [];

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={product.image || '/placeholder.png'}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="subtitle1">${product.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}