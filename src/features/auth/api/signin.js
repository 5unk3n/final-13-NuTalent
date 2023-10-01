import instance from '@/libs/axios';

export const signinWithData = async (signinData) => {
  const stringifiedSigninData = JSON.stringify({
    user: {
      email: signinData.email,
      password: signinData.password,
    },
  });
  const { data } = await instance.post('/user/login', stringifiedSigninData);

  return data;
};
