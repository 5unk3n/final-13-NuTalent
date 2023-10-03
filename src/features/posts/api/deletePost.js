import { useMutation, useQueryClient } from '@tanstack/react-query';

import instance from '@/libs/axios';

const deletePost = async (postId) => {
  const { data } = await instance.delete(`/post/${postId}`);
  return data;
};

export const useDeletePost = (accountname) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: (_, postId) => {
      queryClient.setQueryData(['post', accountname, 'user'], (oldData) => {
        const oldPages = oldData.pages;
        const newPages = oldPages.map((page) =>
          page.filter((post) => post.id !== postId),
        );
        return { ...oldData, pages: newPages };
      });
    },
  });
};
