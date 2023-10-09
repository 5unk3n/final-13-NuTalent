import React from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './MainLayout.styled';

export default function MainLayout() {
  return (
    <S.MainLayout>
      <S.HeaderRoot id="header-root" />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.MainLayout>
  );
}
