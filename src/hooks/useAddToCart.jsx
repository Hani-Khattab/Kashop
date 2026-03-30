import { useMutation } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance'
export default function useAddToCart() {

    const mutation = useMutation({
        mutationFn: async({ProductId ,Count })=>{
            return await authAxiosInstance.post ('/carts' , {
                ProductId:ProductId ,
                Count:Count
            })
        }
    })
   
    return mutation;
}
