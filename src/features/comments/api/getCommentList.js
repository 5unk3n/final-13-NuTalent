import { useInfiniteQuery } from '@tanstack/react-query';

import instance from '@/libs/axios';

const getCommentList = async (postId, limit, skip) => {
  const { data } = await instance.get(
    `/post/${postId}/comments/?limit=${limit}&skip=${skip}`,
  );
  return data.comments;
};

export const useGetCommentList = (postId, limit = 10) => {
  return useInfiniteQuery({
    queryKey: ['comment', postId],
    queryFn: ({ pageParam }) => getCommentList(postId, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = lastPage.length < limit;
      if (isLastPage) return;

      const nextSkip = allPages.length * limit;
      return nextSkip;
    },
  });
};
