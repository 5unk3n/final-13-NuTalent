import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import BottomNav from '../Elements/BottomNav';

import ChatUploader from '@/features/chats/components/ChatUploader';
import CommentUploader from '@/features/comments/components/CommentUploader';

import * as S from './BottomLayout.styled';

export default function BottomLayout() {
  const { pathname } = useLocation();

  const BottomComponent = () => {
    const chatRegex = /^\/chat\/(\w+)$/;
    const postRegex = /^\/post\/(\w+)$/;

    if (chatRegex.test(pathname)) {
      return <ChatUploader />;
    } else if (postRegex.test(pathname)) {
      return <CommentUploader />;
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
