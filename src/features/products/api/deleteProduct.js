import { useMutation, useQueryClient } from '@tanstack/react-query';

import instance from '@/libs/axios';

const deleteProduct = async (productId) => {
  const { data } = await instance.delete(`/product/${productId}`);
  return data;
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId) => deleteProduct(productId),
    onSuccess: () => queryClient.invalidateQueries(['product']),
  });
};
