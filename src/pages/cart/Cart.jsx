import React from 'react'
import useCart from '../../hooks/useCart'
import { Box, Typography } from '@mui/material';
import Loader from '../../ui/Loader/Loader';

export default function Cart() {
  const {data,isError,isLoading,error} = useCart();
 console.log(data);

      if (isLoading) return <Loader />;
      if (isError) return <Box color={"red"}>{error.message}</Box>;
      

 
  return (
   <Box className="cart" sx={{py:5}}>
    <Typography component={'h1'}>My Cart</Typography>
   </Box>
  )
}
