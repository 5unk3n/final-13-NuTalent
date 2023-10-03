import React from 'react';

import CircleImage from '@/components/CircleImage';
import Button from '@/components/common/Button/Button';

import * as S from './User.styled';

export default function User({
  user,
  hasFollowButton = false,
  imageSize = '50',
}) {
  return (
    <S.UserWrapper>
      <CircleImage src={user.image} size={imageSize} />
      <S.UserDetails>
        <S.Username>{user.username}</S.Username>
        <S.Accountname>@ {user.accountname}</S.Accountname>
      </S.UserDetails>
      {hasFollowButton && <Button size="s">팔로우</Button>}
    </S.UserWrapper>
  );
}
