import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/hooks/useModal';
import instance from '@/libs/axios';

const reportPost = async (postId) => {
  const { data } = await instance.post(`/post/${postId}/report`);
  return data;
};

export const useReportPost = () => {
  const { openToast } = useToast();

  return useMutation({
    mutationFn: (postId) => reportPost(postId),
    onSuccess: () => {
      openToast({ message: `신고가 완료되었습니다.` });
    },
  });
};
