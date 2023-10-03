import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

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

function OptionButton() {
  // TODO: 옵션 버튼 구현 (모달 오픈)
  return <S.OptionButton />;
}

function SearchButton() {
  return <S.SearchButton to="/search" />;
}

HeaderBar.Title = Title;
HeaderBar.SearchInput = SearchInput;
HeaderBar.BackButton = BackButton;
HeaderBar.OptionButton = OptionButton;
HeaderBar.SearchButton = SearchButton;
