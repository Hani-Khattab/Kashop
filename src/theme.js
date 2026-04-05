import { createTheme } from "@mui/material";


const getTheme = (mode)=>{
    return createTheme({
    palette:{
        mode:mode,
    }
});


}






export default getTheme;