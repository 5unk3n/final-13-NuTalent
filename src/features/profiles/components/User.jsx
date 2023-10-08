import React from 'react';
import { useNavigate } from 'react-router-dom';

import CircleImage from '@/components/CircleImage';
import FollowButton from '@/features/profiles/components/FollowButton';

import * as S from './User.styled';

export default function User({
  user,
  hasFollowButton = false,
  imageSize = '50',
}) {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/profile/${user.accountname}`);
  };

  return (
    <S.UserWrapper>
      <CircleImage src={user.image} size={imageSize} onClick={goToProfile} />
      <S.UserDetails>
        <S.Username onClick={goToProfile}>{user.username}</S.Username>
        <S.Accountname>@ {user.accountname}</S.Accountname>
      </S.UserDetails>
      {hasFollowButton && <FollowButton user={user} size="s" />}
    </S.UserWrapper>
  );
}
