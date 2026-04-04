import React from 'react'
import { Box, Typography, Grid, Avatar, Card } from '@mui/material'
import useProfile from '../../hooks/useProfile'

export default function ProfileInfo() {
  const { data, isLoading, isError, error } = useProfile();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography color="error">{error.message}</Typography>;

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        My Profile Info
      </Typography>

      <Box sx={{ bgcolor: "#fff", p: 3, borderRadius: 3, mb: 3 }}>
        <Grid container alignItems="center" spacing={2}>


          <Grid item xs>
            <Card sx={{width:'330px' , p:3 , }}>
            <Typography >
              Full Name: {data.fullName }
            </Typography>
            <Typography color="text.secondary">
              Email: {data.email }
            </Typography>
            <Typography color="text.secondary">
              Phone Number: {data.phoneNumber }
            </Typography>
            <Typography color="text.secondary">
              City: {data.city}
            </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}