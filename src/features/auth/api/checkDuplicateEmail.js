import { useMutation } from '@tanstack/react-query';

import instance from '@/libs/axios';

const checkDuplicateEmail = async (email) => {
  const stringifiedData = JSON.stringify({
    user: { email: email },
  });
  const { data } = await instance.post(`/user/emailvalid`, stringifiedData);

  return data;
};

export const useCheckDuplicateEmail = () => {
  return useMutation({
    mutationFn: (email) => checkDuplicateEmail(email),
  });
};
