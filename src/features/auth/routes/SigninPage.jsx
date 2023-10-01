import React from 'react';

import AuthForm from '../components/AuthForm';

import * as S from './SigninPage.styled';

export default function SigninPage() {
  return (
    <>
      <AuthForm formType="signin" />
      <S.StyledLink to="/signup">이메일로 회원가입</S.StyledLink>
    </>
  );
}
