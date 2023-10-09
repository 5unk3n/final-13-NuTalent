import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Post from './Post';
import SkeletonPostList from './PostListSkeleton';
import TagBar from './TagBar';
import { useGetPostList } from '../api/getPostList';
import useTag from '../hooks/useTag';

import Button from '@/components/Elements/Button/Button';
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
    data: postList,
    isLoading,
    fetchNextPage,
  } = useGetPostList(accountname, postType);
  const ref = useIntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  });
  const { tagList, selectTag, selectedTag, filterPostPages } = useTag();
  const filteredPostPages = filterPostPages(postList?.pages);

  if (isLoading) return <SkeletonPostList />;

  if (postList.pages[0].length === 0) {
    return (
      <S.NoPost>
        <p>게시물이 없습니다!</p>
        {postType === 'feed' && (
          <Button to="/search" size="l" width="20rem">
            팔로우 하러가기
          </Button>
        )}
      </S.NoPost>
    );
  }

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
                  <Link to={`/post/${post.id}`}>
                    <S.AlbumImg src={post.image} alt="" />
                  </Link>
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
