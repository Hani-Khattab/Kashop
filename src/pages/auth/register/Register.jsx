import { Box, Typography,TextField, Button} from '@mui/material'
import RegisterImg from "../../../assets/img/RegisterImg.png";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../../validation/registerSchema';

export default function Register() {


  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(registerSchema)
  });
  const registerForm = async(values)=>{
      try{ 
        const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,values);
        console.log("response" , response);
      }catch(error){
        console.log("catch error",error);
      }
  }

  return ( 

<section className="Register">
    <Box component={"section"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} minHeight={"100vh"} px={8} >
    
      <Box className="register-image" width={"45%"} display={{ xs: "none", md: "block" }}>
        <img src={RegisterImg} /> 
      </Box>

    
      <Box className="register-form" width={{ xs:"100%",md:"40%"}}>
        <Typography component={"h1"} variant="h4" color="#252B42" fontWeight={700} textAlign={"center"}>Register</Typography>
        <Typography component={"h6"} variant="body2" textAlign={"center"} letterSpacing={2} color="gray" marginBottom={4}> JOIN TO US</Typography>

          <Box component={'form'}
          onSubmit={handleSubmit(registerForm)}
           display={'flex'} flexDirection={'column'} gap={2} mt={3}>

            <TextField {...register ('userName')} fullWidth label="User Name" variant="outlined"
              error={errors.userName}
              helperText={errors.userName?.message}
            />
            <TextField {...register ('fullName')} fullWidth label="Full Name" variant="outlined"
            error={errors.fullName}
              helperText={errors.fullName?.message}
            />
            <TextField {...register ('email')} fullWidth label="Email" variant="outlined"
            error={errors.email}
              helperText={errors.email?.message}
            />
            <TextField {...register ('password')} fullWidth label="Password" variant="outlined"
            error={errors.password}
              helperText={errors.password?.message}
            />
            <TextField {...register ('phoneNumber')} fullWidth label="Phone Number" variant="outlined"
            error={errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
            <Button variant="contained" type='submit' sx={{backgroundColor: "#252B42", py: 1.5,mt: 2,fontWeight: "bold",}}>REGISTER</Button>

          <Typography textAlign={"center"} fontSize={14}> Already User ? {""}
            <Link component={RouterLink} to={'/login'} style={{ color: "#5a76e4", cursor: "pointer" }}>LOGIN</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  </section>
  )
}
