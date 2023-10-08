import React from 'react';

import FollowListSkeleton from './FollowListSkeleton';
import User from './User';
import { useGetFollowerList } from '../api/getFollowerList';
import { useGetFollowingList } from '../api/getFollowingList';

import useAuth from '@/hooks/useAuth';

import * as S from './FollowList.styled';

export default function FollowList({ accountname, mode = 'follower' }) {
  if (mode !== 'follower' && mode !== 'following') {
    throw new Error('mode는 "follower" 또는 "following"이어야 합니다.');
  }

  const { user: myInfo } = useAuth();
  const { data: userList, isLoading } =
    mode === 'follower'
      ? useGetFollowerList(accountname)
      : useGetFollowingList(accountname);

  if (isLoading) return <FollowListSkeleton />;

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
