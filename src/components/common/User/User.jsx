import React from 'react';
import * as S from './User.styled';
import { Link } from 'react-router-dom';
import handleImageError from '../../../util/handleImageError';

export default function User({
  size,
  userName,
  userAccountname,
  userImg,
  type,
  to,
}) {
  return (
    <S.UserStyled>
      <Link style={{ gap: '1.2rem' }} to={to}>
        <S.UserImage
          size={size}
          src={userImg}
          onError={handleImageError}
          alt="사용자 이미지"
        />
        <S.UserDetails>
          <S.UserName>{userName}</S.UserName>
          <S.UserId>@ {userAccountname}</S.UserId>
        </S.UserDetails>
      </Link>
      {type === 'follow' && <button>팔로우</button>}
    </S.UserStyled>
  );
}
