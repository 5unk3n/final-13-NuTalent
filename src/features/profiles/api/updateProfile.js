import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { USER_KEY } from '@/hooks/useAuth';
import instance from '@/libs/axios';

const updateProfile = async (user) => {
  const { data } = await instance.put('/user', {
    user: {
      username: user.username,
      accountname: user.accountname,
      email: user.email,
      intro: user.intro,
    },
  });
  return data;
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (user) => updateProfile(user),
    onSuccess: (data) => {
      queryClient.invalidateQueries([USER_KEY]);
      navigate(`/profile/${data.user.accountname}`);
    },
  });
};
