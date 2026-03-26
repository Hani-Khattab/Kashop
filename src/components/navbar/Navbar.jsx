import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Button, Drawer, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const [openCart, setOpenCart] = useState(false);
  return (

    <AppBar position="static"
      sx={{backgroundColor: "#b7b5b5",
        color: "black",
        boxShadow: "none",
        borderBottom: "2px solid #252B42",
      }}>

      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* This Is Logo Section in Navbar */}
        <Link component={RouterLink} to={'/'} variant="h6" sx={{ fontWeight: "bold", color: "#252B42"}} underline="none"> Kashop </Link>

        {/* This Is Menue Section in Navbar */}
        <Box sx={{display:{xs:'none' ,sm:'flex'}, gap: 3 }}>
          <Link component={RouterLink} to={'/'} color="inherit" underline="none">Home</Link>
          <Link component={RouterLink} to={'/shop'} color="inherit" underline="none">Shop</Link>
          <Link component={RouterLink} to={'/about'} color="inherit" underline="none">About</Link>
          <Link component={RouterLink} to={'/blog'} color="inherit" underline="none">Blog</Link>
          <Link component={RouterLink} to={'/contact'} color="inherit" underline="none">Contacts</Link>
        </Box>

        <IconButton sx={{display:{xs:'flex' , sm:'none'} , color: "#252B42"  }}>
            <MenuRoundedIcon />
        </IconButton>

        {/* This Is Icons Section in Navbar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link component={RouterLink} to={'/login'} startIcon={<PersonOutlineIcon />}
            sx={{ color: "#252B42", textTransform: "none" }} underline="none">Login </Link>
              <span>/</span>
          <Link component={RouterLink} to={'/register'} startIcon={<PersonOutlineIcon />}
            sx={{ color: "#252B42", textTransform: "none" }} underline="none">Register </Link>

          <IconButton sx={{ color: "#252B42" }}>
            <SearchIcon />
          </IconButton>

          <IconButton
            onClick={() => setOpenCart(true)}
            sx={{ color: "#252B42" }}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>

          <IconButton sx={{ color: "#252B42" }}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer
        anchor="right"
        open={openCart}
        onClose={() => setOpenCart(false)}
      >
  <Box sx={{ width: 300, p: 2 }}>
    <h3>Shopping Cart</h3>
    <p>No items yet</p>

    <Button
      component={RouterLink}
      to="/cart"
      onClick={() => setOpenCart(false)}
      fullWidth
      variant="contained"
      sx={{ mt: 2 }}
    >
      View Cart
    </Button>
  </Box>
</Drawer>
    </AppBar>
  );
}
