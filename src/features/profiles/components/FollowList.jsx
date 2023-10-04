import React from 'react';

import User from '@/features/posts/components/User';
import useAuth from '@/hooks/useAuth';

import * as S from './FollowList.styled';

export default function FollowList({ userList }) {
  const { useUser } = useAuth();
  const { data: myInfo } = useUser();
  console.log(userList);

  return (
    <S.FollowList>
      {userList.map((user) => (
        <li key={user._id}>
          <User
            user={user}
            hasFollowButton={myInfo.accountname !== user.accountname}
          />
        </li>
      ))}
    </S.FollowList>
  );
}
