import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { signinWithData, signupWithData } from '@/features/auth';
import { getMyInfo } from '@/features/auth/api/getMyInfo';
import tokenStorage from '@/util/tokenStorage';

const useAuth = () => {
  const queryClient = useQueryClient();
  const USER_KEY = 'user';
  const ONE_HOUR = 1000 * 60 * 60;

  const useSignin = () => {
    const setUser = (user) => {
      queryClient.setQueryData([USER_KEY], user);
    };

    return useMutation({
      mutationFn: (signinData) => signinWithData(signinData),
      onSuccess: (res) => {
        // 에러 시 http 상태코드는 200, 응답으로 status와 message 반환
        if (res.status === 422) {
          throw new Error(res.message);
        }
        tokenStorage.setToken(res.user.token);
        setUser(res.user);
      },
    });
  };

  const useSignup = () => {
    const navigate = useNavigate();

    return useMutation({
      mutationFn: (signupData) => signupWithData(signupData),
      onSuccess: () => {
        navigate('/signup/profile');
        alert('회원가입에 성공하였습니다!');
      },
    });
  };

  const useSignout = () => {
    tokenStorage.removeToken();
    queryClient.removeQueries([USER_KEY]);
  };

  const useUser = (options = {}) => {
    return useQuery({
      queryKey: [USER_KEY],
      queryFn: getMyInfo,
      staleTime: ONE_HOUR,
      ...options,
    });
  };

  return { useSignin, useSignup, useSignout, useUser };
};

export default useAuth;
