import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetPost } from '../api/getPost';
import Post from '../components/Post';

import HeaderBar from '@/components/Elements/HeaderBar';
import CommentList from '@/features/comments/components/CommentList';

import * as S from './PostDetailPage.styled';

export default function PostDetailPage() {
  const { id: postId } = useParams();
  const { data: post, isLoading } = useGetPost(postId);

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
      <S.CommentSection>
        <CommentList />
      </S.CommentSection>
    </>
  );
}
