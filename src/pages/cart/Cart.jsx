import React from 'react'
import useCart from '../../hooks/useCart'
import { Box, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import Loader from '../../ui/Loader/Loader';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function Cart() {
  const {data,isError,isLoading,error} = useCart();
  const {mutate:removeItem,isPending} = useRemoveFromCart();
  const {mutate:updateItem,isPending:isPendingUpdate} = useUpdateCartItem();

  const handleUpdateQyt = (productId , action)=>{
    const item = data.items.find( (i)=>{
      return i.productId == productId;
    });

    if (action == '-'){
      updateItem({productId,count:item.count-1})
    }else{
      updateItem({productId,count:item.count+1})

    }
  }


      if (isLoading) return <Loader />;
      if (isError) return <Box color={"red"}>{error.message}</Box>;
      

 
  return (
   <Box className="cart" sx={{py:5}}>
    <Typography component={'h1'}>My Cart</Typography>

    <TableContainer>
     <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Product Name
          </TableCell>

          <TableCell>
            Price
          </TableCell>


          <TableCell>
             Quantity
          </TableCell>


          <TableCell>
             Total Price
          </TableCell>

          <TableCell>
             Action 
          </TableCell>

        </TableRow>
      </TableHead>

     <TableBody>
  {data.items.map((item) => (
    <TableRow
      key={item.productId}
      sx={{
        transition: "0.2s",
        "&:hover": {
          backgroundColor: "#f9fafb",
        },
      }}
    >
      {/* Product Name */}
      <TableCell sx={{ fontWeight: 600 }}>
        {item.productName}
      </TableCell>

      {/* Price */}
      <TableCell sx={{ color: "#555" }}>
        ${item.price}
      </TableCell>

      {/* Quantity */}
      <TableCell>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            width: "fit-content",
            px: 1,
            py: 0.5,
            backgroundColor: "#fafafa",
          }}
        >
          <IconButton
            size="small"
            disabled={isPendingUpdate}
            onClick={() => handleUpdateQyt(item.productId, "-")}
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #eee",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>

          <Typography
            sx={{
              minWidth: "24px",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            {item.count}
          </Typography>

          <IconButton
            size="small"
            disabled={isPendingUpdate}
            onClick={() => handleUpdateQyt(item.productId, "+")}
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #eee",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>
      </TableCell>

      {/* Total */}
      <TableCell sx={{ fontWeight: 600 }}>
        ${item.count * item.price}
      </TableCell>

      {/* Remove */}
      <TableCell>
        <Button
          disabled={isPending}
          variant="contained"
          color="error"
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            px: 2,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            },
          }}
          onClick={() => removeItem(item.productId)}
        >
          Remove
        </Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

        <TableFooter>
            <TableRow>
              <TableCell colSpan={5} sx={{ fontWeight: 800, fontSize: '1.1rem' }}>
                Total : {data.cartTotal}$
              </TableCell>
            </TableRow>
          </TableFooter>

     </Table>
    </TableContainer>
   </Box>
  )
}
