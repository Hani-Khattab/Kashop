import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../api/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const onSubmit = async (data) => {
    try {
      await axiosInstance.patch("auth/Account/ResetPassword", {
        code: data.code,
        newPassword: data.newPassword,
        email: email,
      });

      navigate("/Login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="80vh"

>
  <Box
    width={{ xs: "90%", sm: "400px" }}
    p={4}
  >
    <Typography variant="h5" fontWeight={700} mb={2}>
      Reset Password
    </Typography>

    <Typography fontSize={14} color="gray" mt={1}>
      Enter the code sent to your email 
    </Typography>

    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("code")}
        label="Verification Code"
        fullWidth
        margin="normal"
      />

      <Typography fontSize={14} color="gray" mt={2}>
      Enter the new password
    </Typography>

      <TextField
        {...register("newPassword")}
        label="New Password"
        type="password"
        fullWidth
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
            padding:2,
            marginTop:2
        }}
      >
        Reset Password
      </Button>
    </form>
  </Box>
</Box>
  );
}
