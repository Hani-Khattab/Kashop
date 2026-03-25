import { Category } from '@mui/icons-material';
import { Box, CircularProgress } from '@mui/material';
import axios from 'axios'
import  { useEffect, useState } from 'react'

export default function Categories() {

    const [categories,setCategories] = useState([]);
    const [isLoader ,setIsLoader] = useState(true);
    const [isError,setIsError] = useState('');

    const getCategories = async()=>{
        try{
            const response = await axios.get(`https://knowledgeshop.runasp.net/api/Categories`)
            console.log("categories",response);
            setCategories(response.data.response)
        }catch(error){
            setIsError('Something went wrong');
            console.log(error);
        }finally{
            setIsLoader(false);
        }
    }
    
    useEffect( ()=>{
            getCategories();
        },[])
        if(isLoader){
        return <CircularProgress />
    }
    if(isError){
        return <Box color={'red'}>{isError}</Box>
    }


  return (
    <Box>
       {categories.map(Category=><Box> {Category.name} </Box>)}
    </Box>
  )
}
