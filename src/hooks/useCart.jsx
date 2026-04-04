   import { useQuery } from '@tanstack/react-query';
   import React from 'react'
   import authAxiosInstance from '../api/authAxiosInstance';
import i18next from 'i18next';

   export default function useCart() {
   const getItems = async()=>{
      const response = await authAxiosInstance.get(`/Carts`);
      return response.data;
      }
      const query = useQuery({
         queryKey:['carts',i18next.language], 
         queryFn: getItems ,
         staleTime:1000*60*5
      });


   return query;
   }
