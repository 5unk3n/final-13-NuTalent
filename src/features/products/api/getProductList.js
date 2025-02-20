import { useQuery } from '@tanstack/react-query';

import instance from '@/libs/axios';

const getProductList = async (accountname) => {
  const { data } = await instance.get(
    `/product/${accountname}/?limit=infinite&skip=0`,
  );
  return data.product;
};

export const useGetProductList = (accountname) => {
  return useQuery({
    queryKey: ['product', accountname],
    queryFn: () => getProductList(accountname),
  });
};
