import { useMutation } from '@tanstack/react-query';

import instance from '@/libs/axios';

const checkDuplicateAccountname = async (accountname) => {
  const stringifiedData = JSON.stringify({
    user: { accountname: accountname },
  });
  const { data } = await instance.post(
    `/user/accountnamevalid`,
    stringifiedData,
  );

  return data;
};

export const useCheckDuplicateAccountname = () => {
  return useMutation({
    mutationFn: (accountName) => checkDuplicateAccountname(accountName),
  });
};
