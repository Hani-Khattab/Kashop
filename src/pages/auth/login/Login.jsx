import { Box, Button, Checkbox, FormControlLabel, TextField, Typography ,Link } from '@mui/material'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../validation/loginSchema';

export default function Login() {

const {register,handleSubmit,formState:{errors}} = useForm({
  resolver: yupResolver(loginSchema)
});
    

const loginForm = async(values)=>{
      try{ 
        const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`,values);
        console.log("response" , response);
      }catch(error){
        console.log("catch error",error);
      }
  }



  return (
<section  className='Login' >
    
  <Box component={"section"} display={"flex"} justifyContent={'center'} alignItems={'center'} minHeight={"80vh"}>

    <Box className="login-form" width={{ xs: "95%", md: "40%" }}
        sx={{ backgroundColor: "white",p: 4,borderRadius: 3,boxShadow: 5}}>

      
      <Typography component={"h1"} variant="h4" color="#252B42" fontWeight={700} textAlign={"center"}>Sign In</Typography>
      <Typography component={"h6"}variant="body2" textAlign={"center"} letterSpacing={2} color="gray" marginTop={2} marginBottom={4}>Please enter your details below to sign in.</Typography>

      <Box
        onSubmit={handleSubmit(loginForm)}
       component={'form'} display={'flex'} flexDirection={'column'}  gap={2}  mt={3} >
      <TextField {...register ('email')} fullWidth label="Email"variant="outlined"
        error={errors.email}
        helperText={errors.email?.message}/>

      <TextField {...register ('password')}  fullWidth  label="Password" type='password' variant="outlined" 
        error={errors.password}
        helperText={errors.password?.message}/>

      <Typography textAlign={"right"} fontSize={14} sx={{ cursor: "pointer", color: "#252B42" }}>Forgot Password?</Typography>
      <Button variant="contained"  type='submit'
          sx={{ backgroundColor: "#252B42", py: 1.5,  mt: 1, fontWeight: "bold", borderRadius: 2,"&:hover": { backgroundColor: "#1a1f33" }  }}>LOGIN
      </Button>
      <Typography display={'flex'}>
        <span>Don't have an account?</span>
      <Link component={RouterLink} to={'/register'} style={{ color: "#3e62f5", cursor: "pointer" }} >Create Account </Link>
      </Typography>
      <FormControlLabel  control={<Checkbox />} label="Remember me" />  
      </Box>
    </Box>
  </Box>
</section>

  )
}
