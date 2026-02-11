 import * as yup from 'yup'

 
 export const loginSchema = yup.object({
        email:yup.string().email("email must be a valid email").required("email is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ,
        password:yup.string().required("password is required").min(6,"password must be at least 6 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/),
});

