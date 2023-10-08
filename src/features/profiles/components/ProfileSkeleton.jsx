import React from 'react';

import Skeleton from '@/components/Skeleton/Skeleton';

import * as S from './Profile.styled';

export default function ProfileSkeleton() {
  return (
    <S.ProfileWrapper>
      <S.BasicInfoWrapper>
        <Skeleton w="6rem" h="6rem" />
        <Skeleton type="circle" w="11rem" h="11rem" />
        <Skeleton w="6rem" h="6rem" />
      </S.BasicInfoWrapper>
      <S.DetailInfoWrapper>
        <Skeleton w="10rem" h="1.6rem" mb="0.6rem" />
        <Skeleton w="20rem" h="1rem" mb="1.6rem" />
        <Skeleton w="30rem" h="1.4rem" />
      </S.DetailInfoWrapper>
    </S.ProfileWrapper>
  );
}
