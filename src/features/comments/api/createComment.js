import { useMutation, useQueryClient } from '@tanstack/react-query';

import instance from '@/libs/axios';

const createComment = async (postId, comment) => {
  const { data } = await instance.post(`/post/${postId}/comments`, {
    comment: { content: comment },
  });
  return data.comment;
};

export const useCreateComment = (postId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (comment) => createComment(postId, comment),
    onSuccess: (res) => {
      queryClient.setQueryData(['comment', postId], (oldData) => {
        const oldPages = oldData.pages;
        const newPages = oldPages.map((page, index) =>
          index === 0 ? [res, ...page] : page,
        );
        return { ...oldData, pages: newPages };
      });
    },
  });
};
