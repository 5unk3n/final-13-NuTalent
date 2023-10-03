import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import instance from '@/libs/axios';

const updatePost = async (postId, post) => {
  const { data } = await instance.put(`/post/${postId}`, { post });
  return data;
};

export const useUpdatePost = (postId) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (post) => updatePost(postId, post),
    onSuccess: (res) => navigate(`/post/${res.post.id}`),
  });
};
