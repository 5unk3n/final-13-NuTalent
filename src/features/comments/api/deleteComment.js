import { useMutation, useQueryClient } from '@tanstack/react-query';

import instance from '@/libs/axios';

const deleteComment = async (postId, commentId) => {
  const { data } = await instance.delete(
    `/post/${postId}/comments/${commentId}`,
  );
  return data;
};

export const useDeleteComment = (postId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId) => deleteComment(postId, commentId),
    onSuccess: (_, commentId) => {
      queryClient.setQueryData(['comment', postId], (oldData) => {
        const oldPages = oldData.pages;
        const newPages = oldPages.map((page) =>
          page.filter((comment) => comment.id !== commentId),
        );
        return { ...oldData, pages: newPages };
      });
    },
  });
};
