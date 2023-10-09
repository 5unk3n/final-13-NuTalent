import { useMutation, useQueryClient } from '@tanstack/react-query';

import instance from '@/libs/axios';

const heart = async (postId) => {
  const { data } = await instance.post(`/post/${postId}/heart`);
  return data.post;
};

const unheart = async (postId) => {
  const { data } = await instance.delete(`/post/${postId}/unheart`);
  return data.post;
};

export const useToggleHeart = () => {
  const queryClient = useQueryClient();

  const toggleHeart = async ({ postId, isHearted }) => {
    if (isHearted) {
      await unheart(postId);
    } else {
      await heart(postId);
    }
  };

  return useMutation({
    mutationFn: toggleHeart,
    onSuccess: () => {
      queryClient.invalidateQueries(['post']);
    },
  });
};
