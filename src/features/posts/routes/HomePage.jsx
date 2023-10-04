import React from 'react';

import PostList from '../components/PostList';

import HeaderBar from '@/components/Elements/HeaderBar';

export default function HomePage() {
  return (
    <>
      <HeaderBar>
        <HeaderBar.Title>Home</HeaderBar.Title>
        <HeaderBar.SearchButton />
      </HeaderBar>
      <PostList />
    </>
  );
}
