import { useParams } from 'react-router-dom'
import useProductDetails from '../../hooks/useProductDetails';
import Loader from '../../ui/Loader/Loader';
import { Box, Button, Card, CardMedia, Container, Rating, Typography } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import Reviews from '../../components/Review/Review';
import { toast } from "react-toastify";

export default function ProductsDetails() {

  const { id } = useParams();
  const { mutate, isPending } = useAddToCart();
  const { data, isError, isLoading, error } = useProductDetails(id);

  if (isLoading) return <Loader />
  if (isError) return <Box color={"red"}>{error.message}</Box>;

  const product_details = data.response;

  return (
    <Box component={'div'} className='product_details' py={4}>
      <Container>
        <Card p={2} sx={{ display: 'flex', padding: "30px", flexWrap: "wrap", gap: 7 }}>
          <CardMedia
            component={"img"}
            image={product_details.image}
            sx={{ width: { xs: "100%", md: "300px" } }}
          />

          <Box sx={{ flex: 1 }} display={'flex'} flexDirection={'column'}>
            <Typography component={'h1'} variant='h3' gutterBottom>
              {product_details.name}
            </Typography>

            <Rating readOnly value={product_details.rate} />

            <Typography component={'span'} variant='body1' gutterBottom>
              {product_details.price}$
            </Typography>

            <Typography variant='body1' gutterBottom>
              {product_details.description}
            </Typography>

            <Typography sx={{ color: 'green' }} gutterBottom>
              Availability : {product_details.quantity}
            </Typography>

            <Button
              disabled={isPending}
              color='primary'
              variant='contained'
              sx={{ width: '20%' }}
              onClick={() =>
                mutate(
                  {
                    ProductId: product_details.id,
                    Count: 1
                  },
                  {
                    onSuccess: () => {
                      toast.success("Product added to cart successfully");
                    },
                    onError: () => {
                      toast.error("Failed to add product to cart");
                    }
                  }
                )
              }
            >
              Add To Cart
            </Button>

          </Box>
        </Card>

        <Reviews />
      </Container>
    </Box>
  )
}