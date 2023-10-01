import instance from '@/libs/axios';

export const getMyInfo = async () => {
  const { data } = await instance.get('/user/myinfo');

  return data;
};
