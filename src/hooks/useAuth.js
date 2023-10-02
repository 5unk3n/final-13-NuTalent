import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { signinWithData, signupWithData } from '@/features/auth';
import { getMyInfo } from '@/features/auth/api/getMyInfo';
import userStorage from '@/util/userStorage';

const useAuth = () => {
  const queryClient = useQueryClient();
  const USER_KEY = 'user';
  const ONE_HOUR = 1000 * 60 * 60;

  const useSignin = () => {
    const setUserQueryData = (user) => {
      queryClient.setQueryData([USER_KEY], user);
    };

    return useMutation({
      mutationFn: (signinData) => signinWithData(signinData),
      onSuccess: (res) => {
        // 에러 시 http 상태코드는 200, 응답으로 status와 message 반환
        if (res.status === 422) {
          throw new Error(res.message);
        }
        userStorage.setToken(res.user.token);
        setUserQueryData(res.user);
      },
    });
  };

  const useSignup = () => {
    return useMutation({
      mutationFn: (signupData) => signupWithData(signupData),
      onSuccess: () => {
        alert('회원가입에 성공하였습니다!');
      },
    });
  };

  const signout = () => {
    userStorage.removeToken();
    queryClient.removeQueries([USER_KEY]);
  };

  const useUser = (options = {}) => {
    return useQuery({
      queryKey: [USER_KEY],
      queryFn: getMyInfo,
      staleTime: ONE_HOUR,
      initialData: userStorage.getUser(),
      ...options,
    });
  };

  return { useSignin, useSignup, signout, useUser };
};

export default useAuth;
