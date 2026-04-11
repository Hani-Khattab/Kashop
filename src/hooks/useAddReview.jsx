// useAddReview.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import i18next from 'i18next';

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
      queryClient.invalidateQueries({ queryKey: ['ProductDetails',i18next.language, id] });
    }
  });

  return mutation;
}