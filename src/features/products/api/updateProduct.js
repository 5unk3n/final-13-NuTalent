import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import instance from '@/libs/axios';

const updateProduct = async (productId, product) => {
  const { data } = await instance.put(`/product/${productId}`, { product });
  return data;
};

export const useUpdateProduct = (productId) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (product) => updateProduct(productId, product),
    onSuccess: () => navigate(-1),
  });
};
