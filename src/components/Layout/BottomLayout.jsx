import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import BottomInputForm from '../Elements/BottomInputForm';
import BottomNav from '../Elements/BottomNav';

import * as S from './BottomLayout.styled';

export default function BottomLayout() {
  const { pathname } = useLocation();

  const BottomComponent = () => {
    const chatRegex = /^\/chat\/(\w+)$/;
    const postRegex = /^\/post\/(\w+)$/;

    // TODO: BottomInputForm 재사용해서 각각 만들기
    if (chatRegex.test(pathname)) {
      return <BottomInputForm />;
    } else if (postRegex.test(pathname)) {
      return <BottomInputForm />;
    } else {
      return <BottomNav />;
    }
  };

  return (
    <>
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
      <S.BottomRoot>
        <BottomComponent />
      </S.BottomRoot>
    </>
  );
}
