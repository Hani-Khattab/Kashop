import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Loader from '../../ui/Loader/Loader';
import { Link } from 'react-router-dom';

export default function Products() {

    const {data,isError,isLoading ,error} = useProducts();
    if (isLoading) return <Loader />
      if (isError) return <Box color={"red"}>{error.message}</Box>;


    console.log(data);
  return (
    <>
    <Box className= "Products" py={3}></Box>
    <Typography component={'h2'} variant="h4" display={'flex'} justifyContent={'center'} mb={2}>Feature Products</Typography>
    <Typography component={'p'} variant="body1" display={'flex'} justifyContent={'center'} color='grey' mb={2}>Problems trying to resolve the conflict between 
                the two major realms of Classical physics: 
                Newtonian mechanics </Typography>

    <Grid container spacing={5} display={'flex'} justifyContent={'center'}>
     {data.response.data.map( product=> 
        <Grid item size={{xs:12,sm:6,md:4,lg:3}}>
           <Link to={`/product/${product.id}`}>
            <Card sx={{py:3,textAlign:'center'}}>
                <CardMedia component={'img'} image={product.image}></CardMedia>
                <CardContent>
                  <Typography component={'h3'}>{product.name}</Typography>
                  <Typography component={'span'} variant='body1'>{product.price}$</Typography>
                </CardContent>

            </Card>
           </Link>
        </Grid>
      )}
    </Grid>

    </>
  )
}
