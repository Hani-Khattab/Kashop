import { useQuery } from '@tanstack/react-query';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
import i18next from 'i18next';

export default function useProductsByCategories(categoryId) {


   const ProductsByCategories = async()=>{
        const response = await axiosInstance.get(`Products/category/${categoryId}`);
        return response.data;
    }
    const query =useQuery({
        queryKey:['Products',i18next.language , categoryId],
        queryFn:ProductsByCategories,
        staleTime:1000*60*5
    });
  return query;
    
  
}