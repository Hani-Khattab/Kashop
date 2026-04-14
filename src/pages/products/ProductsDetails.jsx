import { useParams } from 'react-router-dom'
import useProductDetails from '../../hooks/useProductDetails';
import Loader from '../../ui/Loader/Loader';
import { Box, Button, Card, CardMedia, Container, Rating, Typography, Stack, Divider } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import Reviews from '../../components/Review/Review';
import { toast } from "react-toastify";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductsDetails() {
  const { id } = useParams();
  const { mutate, isPending } = useAddToCart();
  const { data, isError, isLoading, error } = useProductDetails(id);

  if (isLoading) return <Loader />
  if (isError) return <Box sx={{ p: 5, textAlign: 'center', color: 'red' }}>{error.message}</Box>;

  const product_details = data.response;
  console.log("DETAILS:", data);

  return (
    <Box component='div' className='product_details' sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Card 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            p: { xs: 2, md: 5 },
            borderRadius: '24px',
            border: '1px solid #ffffff45',
            alignItems: 'center'
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '450px' }, borderRadius: '16px', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              image={product_details.image}
              alt={product_details.name}
              sx={{ 
                width: '100%', 
                height: 'auto', 
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.05)' } 
              }}
            />
          </Box>

          <Box sx={{ flex: 1, width: '100%' }}>
            <Typography 
              component='h1' 
              sx={{ 
                fontSize: { xs: '1.8rem', md: '2.5rem' }, 
                fontWeight: 800, 
                color: '#fff',
                mb: 1 
              }}
            >
              {product_details.name}
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Rating readOnly value={product_details.rate} precision={0.5} size="small" />
            </Stack>

            <Typography 
              variant='h4' 
              sx={{ color: 'primary.main', fontWeight: 700, mb: 3 }}
            >
              ${product_details.price}
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Typography variant='body1' sx={{ color: '#737373', mb: 3, lineHeight: 1.7 }}>
              {product_details.description}
            </Typography>

            <Typography 
              sx={{ 
                color: product_details.quantity > 0 ? '#2DC071' : 'red', 
                fontWeight: 700,
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              • {product_details.quantity > 0 ? `In Stock (${product_details.quantity})` : 'Out of Stock'}
            </Typography>

            <Button
              disabled={isPending || product_details.quantity === 0}
              startIcon={<ShoppingCartIcon />}
              variant='contained'
              sx={{ 
                px: 6, 
                py: 1.5, 
                borderRadius: '8px',
                fontWeight: 'bold',
                width: { xs: '100%', sm: 'fit-content' },
                boxShadow: '0px 10px 20px rgba(35, 133, 243, 0.3)',
                textTransform: 'none',
                fontSize: '1rem'
              }}
              onClick={() =>
                mutate(
                  { ProductId: product_details.id, Count: 1 },
                  {
                    onSuccess: () => toast.success("Added to cart!"),
                    onError: () => toast.error("Failed to add.")
                  }
                )
              }
            >
              {isPending ? 'Adding...' : 'Add To Cart'}
            </Button>
          </Box>
        </Card>

        <Box sx={{ mt: 8 }}>
          <Reviews />
        </Box>
      </Container>
    </Box>
  )
}