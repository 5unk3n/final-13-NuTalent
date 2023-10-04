import { useQuery } from '@tanstack/react-query';

import instance from '@/libs/axios';

const getProduct = async (productId) => {
  const { data } = await instance.get(`/product/detail/${productId}`);
  return data.product;
};

export const useGetProduct = (productId) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
    cacheTime: 0,
  });
};
