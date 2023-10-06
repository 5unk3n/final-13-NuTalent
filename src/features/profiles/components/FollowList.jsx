import React from 'react';

import User from '@/features/posts/components/User';
import useAuth from '@/hooks/useAuth';

import * as S from './FollowList.styled';

export default function FollowList({ userList }) {
  const { user: myInfo } = useAuth();

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
