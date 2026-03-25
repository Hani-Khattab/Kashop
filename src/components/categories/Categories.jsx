import { Box, Typography } from "@mui/material";
import useCategories from "../../hooks/useCategories";
import Loader from "../../ui/Loader/Loader";

export default function Categories() {
  const { data, isLoading, isError, error } = useCategories();

  if (isLoading) return <Loader />;
  if (isError) return <Box color={"red"}>{error.message}</Box>;
  

  return (
    <>
    <Box className= "categories" py={3}></Box>
    <Typography component={'h2'} variant="h4" display={'flex'} justifyContent={'center'}>Categories</Typography>
   
    <Box
      component={"section"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={2}
      mt={5}
    >
       
      
      {data.response.data.map((Category) => (
        <Box
          sx={{
            padding: "10px 20px",
            border: "1px solid #dddada",
            borderRadius: "8px",
            minWidth: { xs: "100px", sm: "150px" },
            textAlign: "center",
          }}
        >
          {" "}
          {Category.name}{" "}
        </Box>
      ))}
    </Box>
    </>
  );
}
