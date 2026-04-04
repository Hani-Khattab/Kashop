import React from 'react'
import useProfile from '../../hooks/useProfile';
import { Box, Card, CardContent, Grid, Typography, Chip } from '@mui/material';

export default function ProfileOrders() {
  const { data, isLoading, isError, error } = useProfile();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography color="error">{error.message}</Typography>;

  const orders = data.orders;

  return (
    <Box p={3} >
      <Typography variant="h5" mb={3}>
        My Orders
      </Typography>

      <Grid container spacing={3} >
        {orders.map(order => (
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="body1" fontWeight="bold">
                  Order #{order.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Amount: {order.amountPaid}$
                </Typography>
                <Typography variant="body2">
                  Status: {order.status}
                </Typography>
                <Typography variant="body2">
                  paymentStatus: {order.paymentStatus}
                </Typography>
                <Typography variant="body2">
                  orderDate: {order.orderDate}
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
