import React from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './AuthHeader.styled';

export default function AuthHeader() {
  const { pathname } = useLocation();
  let title = '';
  let intro = '';

  if (pathname === '/signin') {
    title = '로그인';
  } else if (pathname === '/signup') {
    title = '이메일로 회원가입';
  } else if (pathname === '/signup/profile') {
    title = '프로필 설정';
    intro = '나중에 언제든지 변경할 수 있습니다.';
  }

  return (
    <S.Header>
      <S.H2>{title}</S.H2>
      {intro && <S.P>{intro}</S.P>}
    </S.Header>
  );
}
