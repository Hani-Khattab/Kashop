import {useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import i18next from 'i18next';

export default function useCategories(limit=4) {
     const getCategories = async()=>{
     const response = await axiosInstance.get(`/Categories?limit=${limit}`);
     return response.data;
    }
    const query = useQuery({
       queryKey:['categories',i18next.language,limit], 
       queryFn:getCategories,
       staleTime:1000*60*5
    });
  return query;
    
  
}
