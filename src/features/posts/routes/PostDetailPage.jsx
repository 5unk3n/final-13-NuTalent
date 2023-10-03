import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetPost } from '../api/getPost';
import Post from '../components/Post';

import HeaderBar from '@/components/Elements/HeaderBar';

import * as S from './PostDetailPage.styled';

export default function PostDetailPage() {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPost(id);

  if (isLoading) return;

  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <HeaderBar.OptionButton />
      </HeaderBar>
      <S.PostSection>
        <Post postData={post} />
      </S.PostSection>
      <section>{/* TODO: CommentList Section*/}</section>
    </>
  );
}
