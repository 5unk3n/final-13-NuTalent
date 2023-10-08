import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import instance from '@/libs/axios';

const createProduct = async (product) => {
  const { data } = await instance.post('/product', { product });
  return data.product;
};

export const useCreateProduct = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (product) => createProduct(product),
    onSuccess: () => navigate(-1),
  });
};
