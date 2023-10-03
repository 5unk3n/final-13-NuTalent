import React from 'react';

import PostList from '../components/PostList';

import HeaderBar from '@/components/Elements/HeaderBar';
import { SearchButton } from '@/components/Elements/HeaderBar.styled';

export default function HomePage() {
  return (
    <>
      <HeaderBar>
        <HeaderBar.Title>Home</HeaderBar.Title>
        <SearchButton />
      </HeaderBar>
      <PostList />
    </>
  );
}
