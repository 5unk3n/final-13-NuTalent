import React from 'react';

import Skeleton from '@/components/Elements/Skeleton/Skeleton';

import * as S from './User.styled';

export default function UserSkeleton() {
  return (
    <S.UserWrapper>
      <Skeleton type="circle" w="5rem" h="5rem" />
      <S.UserDetails>
        <Skeleton h="1.4rem" mb="0.6rem" />
        <Skeleton h="1.2rem" />
      </S.UserDetails>
    </S.UserWrapper>
  );
}
