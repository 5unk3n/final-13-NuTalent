import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useToast } from './useModal';

import { getMyInfo } from '@/features/auth/api/getMyInfo';
import { signinWithData } from '@/features/auth/api/signin';
import { signupWithData } from '@/features/auth/api/signup';
import userStorage from '@/util/userStorage';

export const USER_KEY = 'user';

const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { openToast } = useToast();
  const ONE_HOUR = 1000 * 60 * 60;

  const setUserQueryData = (user) => {
    queryClient.setQueryData([USER_KEY], user);
  };

  const { mutate: signin } = useMutation({
    mutationFn: (signinData) => signinWithData(signinData),
    onSuccess: (res) => {
      // 에러 시 http 상태코드는 200, 응답으로 status와 message 반환
      if (res.status === 422) {
        throw new Error(res.message);
      }
      userStorage.setUser(res.user);
      setUserQueryData(res.user);
    },
    onError: (error) => openToast({ message: error.message, status: 'error' }),
  });

  const { mutate: signup } = useMutation({
    mutationFn: (signupData) => signupWithData(signupData),
    onSuccess: () => {
      navigate('/signin');
      openToast({ message: '회원가입에 성공하였습니다!' });
    },
    onError: (error) => {
      openToast({ message: error.response.data.message, status: 'error' });
    },
  });

  const signout = () => {
    userStorage.removeUser();
    queryClient.removeQueries([USER_KEY]);
  };

  const { data: user } = useQuery({
    queryKey: [USER_KEY],
    queryFn: getMyInfo,
    staleTime: ONE_HOUR,
    initialData: userStorage.getUser(),
  });

  return { signin, signup, signout, user };
};

export default useAuth;
