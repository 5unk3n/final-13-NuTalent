import React from 'react';

import Button from '@/components/common/Button/Button';

import * as S from './introPage.styled';

export default function IntroPage() {
  return (
    <>
      <S.IntroWrapper>
        <S.IntroLogoBox></S.IntroLogoBox>
        <S.IntroBtnBox>
          <Button to="/signin" color="outline">
            로그인
          </Button>
          <Button to="/signUp" color="outline">
            회원가입
          </Button>
        </S.IntroBtnBox>
      </S.IntroWrapper>
    </>
  );
}
