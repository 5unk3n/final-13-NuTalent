import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import instance from '@/libs/axios';

const unfollow = async (accountname) => {
  const { data } = await instance.delete(`/profile/${accountname}/unfollow`);
  return data;
};

const follow = async (accountname) => {
  const { data } = await instance.post(`/profile/${accountname}/follow`);
  return data;
};

export const useToggleFollow = () => {
  const queryClient = useQueryClient();
  const { accountname } = useParams();

  const toggleFollow = async ({ accountname, isFollowed }) => {
    if (isFollowed) {
      await unfollow(accountname);
    } else {
      await follow(accountname);
    }
  };

  return useMutation({
    mutationFn: toggleFollow,
    onSuccess: () => {
      queryClient.invalidateQueries(['follower', accountname]);
      queryClient.invalidateQueries(['following', accountname]);
      queryClient.invalidateQueries(['profile', accountname]);
    },
  });
};
