// useAddReview.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useAddReview(id) {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async (values) => {
      return await authAxiosInstance.post(`Products/${id}/reviews`, {
        Rating: values.Rating,
        Comment: values.Comment
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product', id] });
    }
  });

  return mutation;
}