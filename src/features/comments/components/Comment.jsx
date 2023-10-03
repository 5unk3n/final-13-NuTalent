import React from 'react';
import { Link } from 'react-router-dom';

import { useDeleteComment } from '../api/deleteComment';
import { useReportComment } from '../api/reportComment';

import CircleImage from '@/components/CircleImage';
import { getTimeAgoFromNow } from '@/util/formatDate';

import * as S from './Comment.styled';

// TODO: 모달 구현
export default function Comment({ comment, postId }) {
  const linkPath = `/profile/${comment.author.accountname}`;
  // const { mutate } = useReportComment(postId);
  // const { mutate } = useDeleteComment(postId);

  return (
    <S.CommentWrapper>
      <S.UserWrapper>
        <Link to={linkPath}>
          <CircleImage src={comment.author.image} />
        </Link>
        <S.TextWrapper>
          <S.Username to={linkPath}>{comment.author.username}</S.Username>
          <S.TimeAgo>{getTimeAgoFromNow(comment.createdAt)}</S.TimeAgo>
        </S.TextWrapper>
      </S.UserWrapper>
      <S.Content>{comment.content}</S.Content>
      <S.OptionButton />
    </S.CommentWrapper>
  );
}
