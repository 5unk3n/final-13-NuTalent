import React from 'react';

import Profile from '../components/Profile';

import HeaderBar from '@/components/Layout/MainLayout/HeaderBar';
import PostList from '@/features/posts/components/PostList';
import ProductList from '@/features/products/components/ProductList';

import * as S from './ProfileDetailPage.styled';

export default function ProfileDetailPage() {
  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <HeaderBar.OptionButton />
      </HeaderBar>
      <S.PageWrapper>
        <S.Section>
          <Profile />
        </S.Section>
        <S.Section>
          <ProductList />
        </S.Section>
        <S.Section>
          <PostList postType="user" hasViewController />
        </S.Section>
      </S.PageWrapper>
    </>
  );
}
