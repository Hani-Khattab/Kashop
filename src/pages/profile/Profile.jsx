import {
  Box,
  Typography,
  Divider,
  Button,
  Avatar
} from '@mui/material'

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Outlet, Link as RouterLink } from "react-router-dom";
import useProfile from '../../hooks/useProfile'
import Loader from '../../ui/Loader/Loader';

export default function Profile() {
  const { data, isLoading, isError, error } = useProfile();

  if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;
  console.log(data);
  

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <Box sx={{ width: 260, p: 2 }}>
        <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 3 }}>
          

          <Typography variant="subtitle2" color="text.secondary" marginBottom={5} textAlign={'center'}>
            DASHBOARD
          </Typography>

           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
  <Button
    component={RouterLink}
    to="orders"
    fullWidth
    variant="contained"
    startIcon={<ShoppingCartIcon />}
  >
    Orders
  </Button>

  <Button
    fullWidth
    variant="contained"
    startIcon={<SupportAgentIcon />}
  >
    Support Tickets
  </Button>

  <Button
    fullWidth
    variant="contained"
    startIcon={<FavoriteIcon />}
  >
    Wishlist
  </Button>
</Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" color="text.secondary" alignItems={'center'} marginBottom={3}>
            ACCOUNT SETTINGS
          </Typography>
          <Box display={'flex'} flexDirection={'column'} >
           <Button
                component={RouterLink}
                to={""}
                variant="contained"
                sx={{ fontWeight: "bold", color: "#fff" }}
                > Profile Info </Button>
                

          </Box>

          <Button sx={{marginTop:5}} to={"logout"} variant='contained'  fullWidth component={"button"} color="error" >
            Logout
          </Button>

        </Box>
      </Box>

            <Box >
          <Outlet />
        </Box>

    

    </Box>
  )
}