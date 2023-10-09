import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import instance from '@/libs/axios';

const createPost = async (post) => {
  const { data } = await instance.post('/post', { post });
  return data;
};

export const useCreatePost = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (post) => createPost(post),
    onSuccess: (res) => navigate(`/post/${res.post.id}`),
  });
};
