import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useToast } from './useModal';

import { signinWithData, signupWithData } from '@/features/auth';
import { getMyInfo } from '@/features/auth/api/getMyInfo';
import userStorage from '@/util/userStorage';

export const USER_KEY = 'user';

const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { openToast } = useToast();
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
        const user = JSON.stringify(res.user);
        userStorage.setUser(user);
        setUserQueryData(res.user);
      },
      onError: (error) =>
        openToast({ message: error.message, status: 'error' }),
    });
  };

  const useSignup = () => {
    return useMutation({
      mutationFn: (signupData) => signupWithData(signupData),
      onSuccess: () => {
        navigate('/signin');
        openToast({ message: '회원가입에 성공하였습니다!' });
      },
      onError: (error) => {
        openToast({ message: error.response.data.message, status: 'error' });
      },
    });
  };

  const signout = () => {
    userStorage.removeUser();
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
