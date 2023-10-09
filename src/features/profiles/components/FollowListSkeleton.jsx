import React from 'react';

import UserSkeleton from './UserSkeleton';

import * as S from './FollowList.styled';

export default function FollowListSkeleton() {
  return (
    <S.FollowList>
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index}>
          <UserSkeleton />
        </li>
      ))}
    </S.FollowList>
  );
}
