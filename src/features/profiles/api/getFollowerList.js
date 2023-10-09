import { useQuery } from '@tanstack/react-query';

import instance from '@/libs/axios';

const getFollowerList = async (accountname) => {
  const res = await instance.get(
    `/profile/${accountname}/follower?limit=infinite&skip=0`,
  );

  return res.data;
};

export const useGetFollowerList = (accountname) => {
  return useQuery({
    queryKey: ['follower', accountname],
    queryFn: () => getFollowerList(accountname),
  });
};
