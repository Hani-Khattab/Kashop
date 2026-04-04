
import i18next from 'i18next';
import axiosInstance from '../api/axiosInstance';
import { useQuery } from '@tanstack/react-query';

export default function useProductDetails(id) {
  const getProductDetails = async()=>{
        const response = await axiosInstance.get(`/Products/${id}`);
        return response.data;
    }
    const query =useQuery({
        queryKey:['ProductDetails',i18next.language,id],
        queryFn:getProductDetails,
        staleTime:1000*60*5
    });
  return query;
}
