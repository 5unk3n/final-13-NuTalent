import { useQuery } from '@tanstack/react-query';

import instance from '@/libs/axios';

const getFollowingList = async (accountname) => {
  const { data } = await instance.get(
    `/profile/${accountname}/following?limit=infinite&skip=0`,
  );
  return data;
};

export const useGetFollowingList = (accountname) => {
  return useQuery({
    queryKey: ['following', accountname],
    queryFn: () => getFollowingList(accountname),
  });
};
