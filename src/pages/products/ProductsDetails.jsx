import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetails from '../../hooks/useProductDetails';
import Loader from '../../ui/Loader/Loader';
import { Box } from '@mui/material';

export default function ProductsDetails() {

    const {id} = useParams();
    const {data,isError,isLoading,error} = useProductDetails(id);
      if (isLoading) return <Loader />
      if (isError) return <Box color={"red"}>{error.message}</Box>;
      console.log(data);


  return (
    <div>ProductsDetails</div>
  )
}
