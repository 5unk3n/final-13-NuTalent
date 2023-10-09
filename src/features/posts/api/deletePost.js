import { useMutation, useQueryClient } from '@tanstack/react-query';

import instance from '@/libs/axios';

const deletePost = async (postId) => {
  const { data } = await instance.delete(`/post/${postId}`);
  return data;
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(['post']);
    },
  });
};
