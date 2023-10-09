import React from 'react';
import { useNavigate } from 'react-router-dom';

import errorImg from '@/assets/img/404.svg';
import Button from '@/components/Elements/Button/Button';

import * as S from './NotFoundPage.styled';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <S.PageWrapper>
      <S.NotFoundBox>
        <img src={errorImg} alt="404이미지" />
        <p>페이지를 찾을 수 없습니다. &#58;&#40; </p>
        <Button
          size="m"
          onClick={() => {
            navigate(-1);
          }}
        >
          이전 페이지
        </Button>
      </S.NotFoundBox>
    </S.PageWrapper>
  );
}
