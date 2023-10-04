import instance from '@/libs/axios';
import userStorage from '@/util/userStorage';

export const getMyInfo = async () => {
  const { data } = await instance.get('/user/myinfo');

  // signin의 응답에는 token이 있지만, getMyInfo 응답에는 token이 없음.
  const { token } = userStorage.getUser();
  const dataWithToken = { ...data.user, token };

  return dataWithToken;
};
