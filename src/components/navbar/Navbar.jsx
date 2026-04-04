import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Badge, Button, Drawer, Link, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import useCart from "../../hooks/useCart";
import useRemoveFromCart from "../../hooks/useRemoveFromCart";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


export default function Navbar() {
  const {t} = useTranslation();
  const changeLanguage = () =>{
  const newLng = i18next.language == "ar"?"en":"ar"
  i18next.changeLanguage(newLng);
  
  }
  const [openCart, setOpenCart] = useState(false);
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const { mutate: removeItem } = useRemoveFromCart();
  const { data } = useCart();
  const cartCount = data?.items?.length || 0;
  console.log(cartCount);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "black",
        boxShadow: "none",
        borderBottom: "2px solid #252B42",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* This Is Logo Section in Navbar */}
        <Link
          component={RouterLink}
          to={"/"}
          variant="h6"
          sx={{ fontWeight: "bold", color: "#252B42" }}
          underline="none"
        >
          {" "}
          Kashop{" "}
        </Link>
        

        {/* This Is Menue Section in Navbar */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
          <Link
            component={RouterLink}
            to={"/"}
            color="#737373"
            underline="none"
          >
            {t('Home')}
          </Link>

          <Link
            component={RouterLink}
            to={"/shop"}
            color="#737373"
            underline="none"
          >
             {t('Shop')}
          </Link>
          <Link
            component={RouterLink}
            to={"/about"}
            color="#737373"
            underline="none"
          >
             {t('About')}
          </Link>
          <Link
            component={RouterLink}
            to={"/blog"}
            color="#737373"
            underline="none"
          >
             {t('Blog')}
          </Link>
          <Link
            component={RouterLink}
            to={"/contact"}
            color="#737373"
            underline="none"
          >
             {t('Contacts')}
          </Link>
        </Box>

        <IconButton
          sx={{ display: { xs: "flex", sm: "none" }, color: "#252B42" }}
        >
          <MenuRoundedIcon />
        </IconButton>

        {/* This Is Icons Section in Navbar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {token ? (
            <>
            
              <IconButton
                onClick={() => setOpenCart(true)}
                sx={{
                  position: "relative",
                  backgroundColor: "#f5f9ff",
                  borderRadius: "12px",
                  p: 1.2,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Badge
                  badgeContent={cartCount}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.7rem",
                      height: "18px",
                      minWidth: "18px",
                      borderRadius: "50%",
                    },
                  }}
                >
                  
                  <ShoppingCartOutlinedIcon sx={{ color: "#23A6F0" }} />
                </Badge>
              </IconButton>

              <IconButton sx={{ color: "#23A6F0" }}>
                <SearchIcon />
              </IconButton>

              <IconButton sx={{ color: "#23A6F0" }}>
                <FavoriteBorderOutlinedIcon />
              </IconButton>

              <Link
                component={RouterLink}
                to={"profile"}
                sx={{ color: "#23A6F0", textTransform: "none" }}
                underline="none"
              >
                 {t('Profile')}
              </Link>
              
       <Button onClick={changeLanguage}>
          {i18next.language === "ar"?"EN" :"AR"}
        </Button>
                
              <Link
                component={"button"}
                onClick={handleLogout}
                color="#23A6F0"
                underline="none"
              >
                  {t('Logout')}
              </Link>

            </>
          ) : (
            <>

        <Button onClick={changeLanguage}>
          {i18next.language === "ar"?"EN" :"AR"}
        </Button>
           
              <Link
                component={RouterLink}
                to={"/login"}
                startIcon={<PersonOutlineIcon />}
                sx={{ color: "#23A6F0", textTransform: "none" }}
                underline="none"
              >
                 {t('Login')}{" "}
              </Link>
              <span>/</span>
              <Link
                component={RouterLink}
                to={"/register"}
                startIcon={<PersonOutlineIcon />}
                sx={{ color: "#23A6F0", textTransform: "none" }}
                underline="none"
              >
                 {t('Register')}{" "}
              </Link>
 
    
            </>
            
          )}
        </Box>
      </Toolbar>

<Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
  <Box sx={{ width: 320, p: 2 }}>
    <Typography variant="h6" mb={2}>
      Shopping Cart
    </Typography>

    {!data ? (
      <Typography>Loading...</Typography>
    ) : data.items?.length === 0 ? (
      <Typography>No items yet</Typography>
    ) : (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        
        {data.items.map((item) => (
          <Box
            key={item.productId}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #eee",
              pb: 1,
            }}
          >
            <Box>
              <Typography fontSize={14} fontWeight={600}>
                {item.productName}
              </Typography>

              <Typography fontSize={13} color="gray">
                {item.count} x ${item.price}
              </Typography>
            </Box>

            <Button
              size="large"
              color="error"
              onClick={() => removeItem(item.productId)}
            >
              X
            </Button>
          </Box>
        ))}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            fontWeight: 600,
          }}
        >
          <Typography>Total:</Typography>
          <Typography>${data.cartTotal}</Typography>
        </Box>

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

        <Button
          component={RouterLink}
          to="/checkout"
          onClick={() => setOpenCart(false)}
          fullWidth
          color="success"
          variant="contained"
        >
          Checkout
        </Button>
      </Box>
    )}
  </Box>
</Drawer>
    </AppBar>
  );
}
