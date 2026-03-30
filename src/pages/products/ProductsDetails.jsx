import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetails from '../../hooks/useProductDetails';
import Loader from '../../ui/Loader/Loader';
import { Box, Button, Card, CardMedia, Rating, Typography } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import useCartStore from '../../store/useCartStore';

export default function ProductsDetails() {
 

     const { id } = useParams();
  const { mutate, isPending } = useAddToCart();
  const { data, isError, isLoading, error } = useProductDetails(id);

  const openCartDrawer = useCartStore((state) => state.openCartDrawer);

  if (isLoading) return <Loader />;
  if (isError) return <Box color={"red"}>{error.message}</Box>;

  const product_details = data.response;

  return (
    <Box py={4}>
      <Card sx={{ display: 'flex', p: 3, flexWrap: "wrap", gap: 7 }}>
        <CardMedia
          component="img"
          image={product_details.image}
          sx={{ width: { xs: "100%", md: 300 } }}
        />

        <Box sx={{ flex: 1 }} display="flex" flexDirection="column">
          <Typography variant="h3">{product_details.name}</Typography>
          <Rating readOnly value={product_details.rate} />
          <Typography>{product_details.price}$</Typography>
          <Typography>{product_details.description}</Typography>
          <Typography sx={{ color: 'green' }}>
            Availability: {product_details.quantity}
          </Typography>

          <Button
            disabled={isPending}
            variant="contained"
            sx={{ width: { xs: '100%', md: '20%' } }}
            onClick={() =>
              mutate(
                {
                  ProductId: product_details.id,
                  Count: 1,
                },
                {
                  onSuccess: () => {
                    openCartDrawer(); // 🔥
                  },
                }
              )
            }
          >
            {isPending ? "Adding..." : "Add To Cart"}
          </Button>
        </Box>
      </Card>
    </Box>
  );
}