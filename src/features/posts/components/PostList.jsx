import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Post from './Post';
import TagBar from './TagBar';
import { useGetPostList } from '../api/getPostList';
import useTag from '../hooks/useTag';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import * as S from './PostList.styled';

export default function PostList({
  postType = 'feed',
  hasViewController = false,
  hasTagBar = false,
}) {
  const [viewType, setViewType] = useState('list');
  const { accountname } = useParams();
  const {
    data: posts,
    isLoading,
    fetchNextPage,
  } = useGetPostList(accountname, postType);
  const ref = useIntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  });
  const { tagList, selectTag, selectedTag, filterPostPages } = useTag();
  const filteredPostPages = filterPostPages(posts?.pages);

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
      {hasTagBar && (
        <TagBar
          tagList={tagList}
          selectTag={selectTag}
          selectedTag={selectedTag}
        />
      )}
      <S.PostList $viewType={viewType}>
        {filteredPostPages.map((page) => {
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
