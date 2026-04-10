import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import i18next from "i18next";

export default function useProductFilter(filters) {

  const getProducts = async () => {
    const response = await axiosInstance.get("/Products", {
      params: {
        page: filters.page,
        limit: filters.limit,
        sortBy: filters.sortBy,
        ascending: filters.ascending,
      },
    });

    return response.data;
  };

  return useQuery({
    queryKey: [
      "products",
      i18next.language,
      filters.page,
      filters.limit,
      filters.sortBy,
      filters.ascending,
    ],
    queryFn: getProducts,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });
  
}