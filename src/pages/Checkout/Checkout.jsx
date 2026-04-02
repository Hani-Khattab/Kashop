import useCart from "../../hooks/useCart";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Loader from "../../ui/Loader/Loader";
import useCheckouts from "../../hooks/useCheckouts";
import { useState } from "react";

export default function Cart() {
  const { data, isError, isLoading, error } = useCart();
  const {mutate:Checkout} = useCheckouts();
  const [paymentMethod,setPaymentMethod] = useState('cash');
  if (isLoading) return <Loader />;
  if (isError) return <Box color={"red"}>{error.message}</Box>;

  return (
   <Box className="cart" sx={{ py: 6, backgroundColor: "#f9fafb", minHeight: "100vh" }}>
  <Container maxWidth="md">
    
    <Typography
      component="h1"
      textAlign="center"
      mb={5}
      sx={{
        fontWeight: 700,
        fontSize: { xs: 24, md: 30 },
        letterSpacing: "0.5px",
      }}
    >
      Checkout
    </Typography>

    <TableContainer
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "#f1f5f9" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Product</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Price</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Qty</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Total</TableCell>
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
              <TableCell sx={{ fontWeight: 600 }}>
                {item.productName}
              </TableCell>

              <TableCell sx={{ color: "#555" }}>
                ${item.price}
              </TableCell>

              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    px: 2,
                    py: 0.5,
                    backgroundColor: "#f9fafb",
                    width: "fit-content",
                  }}
                >
                  <Typography fontWeight={600}>
                    {item.count}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell sx={{ fontWeight: 600 }}>
                ${item.count * item.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography fontWeight={700}>
                  Total
                </Typography>

                <Typography fontWeight={800} fontSize={18}>
                  {data.cartTotal}$
                </Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>

    <Box
      sx={{
        mt: 5,
        p: 3,
        borderRadius: 3,
        boxShadow: 2,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="paymentMethod">Payment Method</InputLabel>
        <Select
          labelId="paymentMethod"
          value={paymentMethod}
          label="Payment Method"
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <MenuItem value={"Cash"}>Cash</MenuItem>
          <MenuItem value={"Visa"}>Visa</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        onClick={() => Checkout(paymentMethod)}
        sx={{
          py: 1.5,
          fontWeight: 600,
          borderRadius: 2,
          textTransform: "none",
          background: "linear-gradient(45deg, #1976d2, #42a5f5)",
        }}
      >
        Pay Now
      </Button>
    </Box>

  </Container>
</Box>
  );
}
