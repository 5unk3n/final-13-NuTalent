import React from 'react';

import Skeleton from '@/components/Skeleton/Skeleton';
import UserSkeleton from '@/features/profiles/components/UserSkeleton';

import * as S from './Post.styled';

export default function PostSkeleton() {
  return (
    <S.PostWrapper>
      <UserSkeleton />
      <S.ContentWrapper>
        <Skeleton h="1.4rem" mb="0.6rem" />
        <Skeleton h="1.4rem" mb="0.6rem" />
        <Skeleton w="30%" h="1.4rem" mb="1.6rem" />
        <Skeleton h="22rem" mb="1.2rem" />
      </S.ContentWrapper>
    </S.PostWrapper>
  );
}
