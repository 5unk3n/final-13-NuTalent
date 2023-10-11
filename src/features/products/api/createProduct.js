import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useToast } from '@/hooks/useModal';
import instance from '@/libs/axios';

const createProduct = async (product) => {
  const { data } = await instance.post('/product', { product });
  return data.product;
};

export const useCreateProduct = () => {
  const navigate = useNavigate();
  const { openToast } = useToast();

  return useMutation({
    mutationFn: (product) => createProduct(product),
    onSuccess: () => navigate(-1),
    onError: (error) =>
      openToast({ message: error.response.data.message, status: 'error' }),
  });
};
