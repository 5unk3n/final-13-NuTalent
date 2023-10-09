import React from 'react';

import PostSkeleton from './PostSkeleton';

import * as S from './PostList.styled';

export default function PostListSkeleton() {
  return (
    <S.PostList>
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index}>
          <PostSkeleton />
        </li>
      ))}
    </S.PostList>
  );
}
