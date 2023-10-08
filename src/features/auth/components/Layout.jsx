import React from 'react';
import { Outlet } from 'react-router-dom';

import AuthHeader from './AuthHeader';

import * as S from './Layout.styled';

export default function Layout() {
  return (
    <S.Layout>
      <AuthHeader />
      <main>
        <Outlet />
      </main>
    </S.Layout>
  );
}
