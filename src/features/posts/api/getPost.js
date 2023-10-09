import { useQuery } from '@tanstack/react-query';

import instance from '@/libs/axios';

const getPost = async (postId) => {
  const { data } = await instance.get(`/post/${postId}`);
  return data.post;
};

export const useGetPost = (postId) => {
  const ONE_MINUTE = 1000 * 60;

  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
    cacheTime: ONE_MINUTE,
  });
};
