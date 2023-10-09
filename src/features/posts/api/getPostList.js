import { useInfiniteQuery } from '@tanstack/react-query';

import instance from '@/libs/axios';

const getFeedPostList = async (limit, skip) => {
  const { data } = await instance.get(
    `/post/feed/?limit=${limit}&skip=${skip}`,
  );
  return data.posts;
};

const getUserPostList = async (accountname, limit, skip) => {
  const { data } = await instance.get(
    `/post/${accountname}/userpost/?limit=${limit}&skip=${skip}`,
  );
  return data.post;
};

export const useGetPostList = (accountname, postType, limit = 5) => {
  const queryFunction = (skip) => {
    if (postType === 'feed') {
      return getFeedPostList(limit, skip);
    } else if (postType === 'user') {
      return getUserPostList(accountname, limit, skip);
    } else {
      throw new Error('postType은 "user" 또는 "feed"여야 합니다.');
    }
  };

  return useInfiniteQuery({
    queryKey: ['post', accountname, postType],
    queryFn: ({ pageParam }) => queryFunction(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = lastPage.length < limit;
      if (isLastPage) return;

      const nextSkip = allPages.length * limit;
      return nextSkip;
    },
  });
};
