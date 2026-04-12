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
import useThemeStore from "../../store/useThemeStore";
import { LightMode, DarkMode } from "@mui/icons-material";

export default function Navbar() {
  const { t } = useTranslation();
  const changeLanguage = () => {
    const newLng = i18next.language == "ar" ? "en" : "ar";
    i18next.changeLanguage(newLng);
  };
  const [openCart, setOpenCart] = useState(false);
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const { mutate: removeItem } = useRemoveFromCart();
  const { data } = useCart();
  const cartCount = data?.items?.length || 0;
  console.log(cartCount);
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
   <AppBar
  position="static"
  sx={{
    backgroundColor:"inherit",
    color: "black",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    borderBottom: "1px solid #eee",
  }}
>
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>

    {/* Logo */}
    <Link
      component={RouterLink}
      to={"/"}
      variant="h6"
      sx={{
        fontWeight: "bold",
        color: "#121524",
        letterSpacing: "1px",
        fontSize: "1.4rem",
        transition: "0.3s",
        "&:hover": {
          color: "#23A6F0",
        },
      }}
      underline="none"
    >
      {t("Kashop")}
    </Link>

    {/* Menu */}
    <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
      {[
        { label: "Home", path: "/" },
        { label: "Shop", path: "/shop" },
        { label: "About", path: "/about" },
        { label: "Blog", path: "/blog" },
        { label: "Contacts", path: "/contact" },
      ].map((item) => (
        <Link
          key={item.label}
          component={RouterLink}
          to={item.path}
          underline="none"
          sx={{
            color: "#737373",
            fontWeight: 500,
            position: "relative",
            transition: "0.3s",
            "&:hover": {
              color: "#23A6F0",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              width: "0%",
              height: "2px",
              bottom: -4,
              left: 0,
              backgroundColor: "#23A6F0",
              transition: "0.3s",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          {t(item.label)}
        </Link>
      ))}
    </Box>

    {/* Mobile Menu */}
    <IconButton
      sx={{
        display: { xs: "flex", sm: "none" },
        color: "#252B42",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        "&:hover": {
          backgroundColor: "#e0e0e0",
        },
      }}
    >
      <MenuRoundedIcon />
    </IconButton>

    {/* Icons */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      {token ? (
        <>
          <IconButton
            onClick={() => setOpenCart(true)}
          >
            <Badge
              badgeContent={cartCount}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "0.7rem",
                  height: "18px",
                  minWidth: "18px",
                },
              }}
            >
              <ShoppingCartOutlinedIcon sx={{ color: "#23A6F0" }} />
            </Badge>
          </IconButton>

          <IconButton
            sx={{
              color: "#23A6F0",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#e3f2fd",
                transform: "scale(1.1)",
              },
            }}
          >
            <SearchIcon />
          </IconButton>

          <IconButton
            sx={{
              color: "#23A6F0",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#e3f2fd",
                transform: "scale(1.1)",
              },
            }}
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>

          <Link
            component={RouterLink}
            to={"profile"}
            underline="none"
            sx={{
              color: "#23A6F0",
              fontWeight: 500,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {t("Profile")}
          </Link>

          <Button onClick={changeLanguage}>
            {i18next.language === "ar" ? "EN" : "AR"}
          </Button>

          <IconButton
            onClick={toggleTheme}
            sx={{
              color: mode === "light" ? "#181212" : "#e6ad12",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.05)",
                transform: "scale(1.1)",
              },
            }}
          >
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>

          <Link
            component={"button"}
            onClick={handleLogout}
            underline="none"
            sx={{
              color: "#23A6F0",
              fontWeight: 500,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {t("Logout")}
          </Link>
        </>
      ) : (
        <>
          <Button onClick={changeLanguage}>
            {i18next.language === "ar" ? "EN" : "AR"}
          </Button>

          <IconButton
            onClick={toggleTheme}
            sx={{
              color: mode === "light" ? "#181212" : "#e6ad12",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>

          <Link
            component={RouterLink}
            to={"/login"}
            underline="none"
            sx={{
              color: "#23A6F0",
              fontWeight: 500,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {t("Login")}
          </Link>

          <span>/</span>

          <Link
            component={RouterLink}
            to={"/register"}
            underline="none"
            sx={{
              color: "#23A6F0",
              fontWeight: 500,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {t("Register")}
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
