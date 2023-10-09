import { useQuery } from '@tanstack/react-query';

import instance from '@/libs/axios';

const searchUser = async (keyword) => {
  const { data } = await instance.get(`/user/searchuser/?keyword=${keyword}`);
  return data;
};

export const useSearchUser = (keyword) => {
  const ONE_MINUTE = 1000 * 60;

  return useQuery({
    queryKey: ['search', keyword],
    queryFn: () => searchUser(keyword),
    placeholderData: [],
    enabled: !!keyword,
    cacheTime: ONE_MINUTE,
  });
};
