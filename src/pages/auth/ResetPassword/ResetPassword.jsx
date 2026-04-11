import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../api/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

export default function ResetPassword() {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await axiosInstance.patch("auth/Account/ResetPassword", {
        code: data.code,
        newPassword: data.newPassword,
        email: email,
      });

      toast.success("Password reset successfully");

      navigate("/Login");

    } catch (err) {
      toast.error("Failed to reset password");
      console.log(err);
    } finally {
      setLoading(false);
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
            disabled={loading}
            sx={{
              padding: 2,
              marginTop: 2
            }}
          >
            {loading ? "Processing..." : "Reset Password"}
          </Button>
        </form>
      </Box>
    </Box>
  );
}