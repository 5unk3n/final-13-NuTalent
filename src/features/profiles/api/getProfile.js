import { useQuery } from '@tanstack/react-query';

import instance from '@/libs/axios';

const getProfile = async (accountname) => {
  const { data } = await instance.get(`/profile/${accountname}`);
  return data.profile;
};

export const useGetProfile = (accountname) => {
  return useQuery({
    queryKey: ['profile', accountname],
    queryFn: () => getProfile(accountname),
  });
};
