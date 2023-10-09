import React from 'react';

import AuthForm from '../components/AuthForm';

import useAuth from '@/hooks/useAuth';

import * as S from './SigninPage.styled';

export default function SigninPage() {
  const { signin } = useAuth();

  return (
    <>
      <AuthForm onSubmit={signin} buttonText="로그인" />
      <S.StyledLink to="/signup">이메일로 회원가입</S.StyledLink>
    </>
  );
}
