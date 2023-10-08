import React from 'react';

import { useDeletePost } from '../api/deletePost';
import { useReportPost } from '../api/reportPost';
import useTag from '../hooks/useTag';

import Carousel from '@/components/common/Carousel/Carousel';
import { useToggleHeart } from '@/features/hearts/api/toggleHeart';
import User from '@/features/profiles/components/User';
import useAuth from '@/hooks/useAuth';
import { useAlert, useBottomSheet } from '@/hooks/useModal';
import { formatDate } from '@/util/format/formatDate';

import * as S from './Post.styled';

export default function PostItem({ postData }) {
  const { user } = useAuth();
  const { mutate: deletePostMutate } = useDeletePost();
  const { mutate: reportPostMutate } = useReportPost();
  const { openBottomSheet } = useBottomSheet();
  const { openAlert } = useAlert();
  const { mutate: toggleHeartMutate } = useToggleHeart();
  const { getContentInText } = useTag();
  const formattedCreatedDate = formatDate(postData.createdAt);
  const isMyPost = user._id === postData.author._id;

  const toggleHeart = () => {
    toggleHeartMutate({
      postId: postData.id,
      isHearted: postData.hearted,
    });
  };

  const openMyPostBottomSheet = () => {
    const deletePost = () => {
      openAlert({
        title: '게시글을 삭제할까요?',
        actionName: '삭제',
        actionFunction: () => deletePostMutate(postData.id),
      });
    };

    openBottomSheet([
      { name: '삭제', action: deletePost, closeAfterAction: true },
      { name: '수정', to: `/post/edit/${postData.id}`, closeAfterAction: true },
    ]);
  };

  const openNotMyPostBottomSheet = () => {
    const reportPost = () => {
      openAlert({
        title: '게시글을 신고할까요?',
        actionName: '신고',
        actionFunction: () => reportPostMutate(postData.id),
      });
    };

    openBottomSheet([
      { name: '신고하기', action: reportPost, closeAfterAction: true },
    ]);
  };

  return (
    <>
      <S.PostWrapper>
        <User user={postData.author} imageSize="42" />
        <S.ContentWrapper>
          <S.PostText>{getContentInText(postData.content)}</S.PostText>
          {postData.image && <Carousel images={postData.image} />}
          <S.ButtonWrapper>
            <S.HeartButton
              onClick={toggleHeart}
              $isHearted={postData.hearted}
            />
            <S.PostSpan>{postData.heartCount}</S.PostSpan>
            <S.CommentButton to={`/post/${postData.id}`} />
            <S.PostSpan>{postData.commentCount}</S.PostSpan>
          </S.ButtonWrapper>
          <S.PostDate>{formattedCreatedDate}</S.PostDate>
        </S.ContentWrapper>
        <S.OptionButton
          onClick={isMyPost ? openMyPostBottomSheet : openNotMyPostBottomSheet}
        />
      </S.PostWrapper>
    </>
  );
}
