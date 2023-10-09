import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import useAuth from '@/hooks/useAuth';
import { useAlert, useBottomSheet } from '@/hooks/useModal';

import * as S from './HeaderBar.styled';

export default function HeaderBar({ children }) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => setIsRendered(true), []);

  return (
    isRendered &&
    createPortal(
      <S.HeaderBar>{children}</S.HeaderBar>,
      document.getElementById('header-root'),
    )
  );
}

function Title({ size = 'lg', children }) {
  return <S.Title $size={size}>{children}</S.Title>;
}

function SearchInput({ placeholder = '계정 검색', ...props }) {
  return <S.SearchInput placeholder={placeholder} {...props} />;
}

function BackButton() {
  const navigate = useNavigate();

  return (
    <S.BackButton
      onClick={() => {
        navigate(-1);
      }}
    />
  );
}

function OptionButton({ type = 'basic' }) {
  const navigate = useNavigate();
  const { signout } = useAuth();
  const { openBottomSheet } = useBottomSheet();
  const { openAlert } = useAlert();

  const openSignoutBottomSheet = () => {
    const openSignoutAlert = () => {
      openAlert({
        title: '로그아웃 하시겠습니까?',
        actionName: '로그아웃',
        actionFunction: signout,
      });
    };

    openBottomSheet([
      {
        name: '로그아웃',
        action: openSignoutAlert,
        closeAfterAction: true,
      },
    ]);
  };

  const openExitChatroomBottomSheet = () => {
    const openExitChatroomAlert = () => {
      openAlert({
        title: '채팅방을 나가시겠습니까?',
        actionName: '채팅방 나가기',
        actionFunction: () => navigate('/chat'),
      });
    };

    openBottomSheet([
      {
        name: '채팅방 나가기',
        action: openExitChatroomAlert,
        closeAfterAction: true,
      },
    ]);
  };

  return (
    <S.OptionButton
      onClick={
        type === 'chatroom'
          ? openExitChatroomBottomSheet
          : openSignoutBottomSheet
      }
    />
  );
}

function SearchButton() {
  return <S.SearchButton to="/search" />;
}

HeaderBar.Title = Title;
HeaderBar.SearchInput = SearchInput;
HeaderBar.BackButton = BackButton;
HeaderBar.OptionButton = OptionButton;
HeaderBar.SearchButton = SearchButton;
