import { Box, CircularProgress } from "@mui/material";
import useCategories from "../../hooks/useCategories";

export default function Categories() {
  const { data, isLoading, isError, error } = useCategories();

  if (isLoading) return <CircularProgress />;
  if (isError) return <Box color={"red"}>{error.message}</Box>;

  return (
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
  );
}
