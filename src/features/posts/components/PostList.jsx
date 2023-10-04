import React, { useState } from 'react';

import Post from './Post';
import { useGetPostList } from '../api/getPostList';

import useAuth from '@/hooks/useAuth';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import * as S from './PostList.styled';

export default function PostList({
  postType = 'feed',
  hasViewController = false,
}) {
  const [viewType, setViewType] = useState('list');
  const { useUser } = useAuth();
  const { data: user } = useUser();
  const {
    data: posts,
    isLoading,
    fetchNextPage,
  } = useGetPostList(user.accountname, postType);
  const ref = useIntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  });

  if (isLoading) return;

  return (
    <>
      {hasViewController && (
        <S.ViewControllerWrapper>
          <S.viewButton
            $viewType={viewType}
            type="button"
            onClick={() => setViewType('list')}
          ></S.viewButton>
          <S.viewButton
            $viewType={viewType}
            type="button"
            onClick={() => setViewType('album')}
          ></S.viewButton>
        </S.ViewControllerWrapper>
      )}
      <S.PostList $viewType={viewType}>
        {posts.pages.map((page) => {
          return page.map((post) => {
            return viewType === 'list' ? (
              <li key={post.id}>
                <Post postData={post} />
              </li>
            ) : (
              post.image && (
                <li key={post.id}>
                  <S.AlbumImg src={post.image} alt="" />
                </li>
              )
            );
          });
        })}
      </S.PostList>
      <div ref={ref} />
    </>
  );
}
