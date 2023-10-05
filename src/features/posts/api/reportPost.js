import { useMutation } from '@tanstack/react-query';

import instance from '@/libs/axios';

const reportPost = async (postId) => {
  const { data } = await instance.post(`/post/${postId}/report`);
  return data;
};

export const useReportPost = () => {
  return useMutation({
    mutationFn: (postId) => reportPost(postId),
    onSuccess: () => {
      alert(`신고가 완료되었습니다.`);
    },
  });
};
