import { useMutation } from '@tanstack/react-query';

import instance from '@/libs/axios';

const reportComment = async (postId, commentId) => {
  const { data } = await instance.post(
    `/post/${postId}/comments/${commentId}/report`,
  );
  return data;
};

export const useReportComment = (postId) => {
  return useMutation({
    mutationFn: (commentId) => reportComment(postId, commentId),
    onSuccess: () => {
      alert(`신고가 완료되었습니다.`);
    },
  });
};
