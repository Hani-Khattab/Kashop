import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // 

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post("auth/Account/SendCode", data);

      toast.success("Code sent successfully to your email");

      navigate("/ResetPassword", {
        state: { email: data.email },
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      
      <Box
        width={{ xs: "90%", md: "400px" }}
        p={4}
        borderRadius={3}
        boxShadow={4}
      >
        <Typography variant="h5" fontWeight={600} mb={2}>
          Forgot Password
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Enter your email and we will send you a verification code.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email")}
            label="Email"
            fullWidth
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Send Code
          </Button>
        </form>
      </Box>

    </Box>
  );
}