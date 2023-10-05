import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/hooks/useModal';
import instance from '@/libs/axios';

const reportComment = async (postId, commentId) => {
  const { data } = await instance.post(
    `/post/${postId}/comments/${commentId}/report`,
  );
  return data;
};

export const useReportComment = (postId) => {
  const { openToast } = useToast();

  return useMutation({
    mutationFn: (commentId) => reportComment(postId, commentId),
    onSuccess: () => {
      openToast({
        message: '신고가 완료되었습니다.',
      });
    },
  });
};
