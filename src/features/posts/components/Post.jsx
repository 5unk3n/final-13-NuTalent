import React from 'react';

import User from './User';

import Carousel from '@/components/common/Carousel/Carousel';
import { useToggleHeart } from '@/features/hearts/api/toggleHeart';
import useTag from '@/hooks/useTag';
import { formatDate } from '@/util/formatDate';

import * as S from './Post.styled';

// TODO: 옵션(모달) 추가 및 삭제 기능 추가
export default function PostItem({ postData }) {
  const { mutate: toggleHeartMutate } = useToggleHeart();
  const { contentWithoutTag } = useTag();
  const formattedCreatedDate = formatDate(postData.createdAt);

  const toggleHeart = () => {
    toggleHeartMutate({
      postId: postData.id,
      isHearted: postData.hearted,
    });
  };

  return (
    <>
      <S.PostWrapper>
        <User user={postData.author} imageSize="42" />
        <S.ContentWrapper>
          <S.PostText>{contentWithoutTag(postData.content)}</S.PostText>
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
        <S.OptionButton />
      </S.PostWrapper>
    </>
  );
}
