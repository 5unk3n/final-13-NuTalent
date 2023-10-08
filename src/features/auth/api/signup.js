import instance from '@/libs/axios';

export const signupWithData = async (signupData) => {
  const stringifiedSignupData = JSON.stringify({
    user: {
      username: signupData.username,
      email: signupData.email,
      password: signupData.password,
      accountname: signupData.accountname,
      intro: signupData.intro,
      image: signupData.image,
    },
  });
  const { data } = await instance.post('/user', stringifiedSignupData);

  return data;
};
