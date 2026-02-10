 import * as yup from 'yup'

 
 export const registerSchema = yup.object({
        userName:yup.string().required("userName Is Required").min(3,"userName nust be at least 3 characters"),
        fullName:yup.string().required("fullname is Required"),
        email:yup.string().email("email must be a valid email").required("email is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ,
        password:yup.string().required("password is required").min(6,"password must be at least 6 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
        phoneNumber:yup.string().required("Phone Is Required")
});

