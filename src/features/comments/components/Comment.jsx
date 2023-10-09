import React from 'react';
import { Link } from 'react-router-dom';

import { useDeleteComment } from '../api/deleteComment';
import { useReportComment } from '../api/reportComment';

import CircleImage from '@/components/Elements/CircleImage/CircleImage';
import useAuth from '@/hooks/useAuth';
import { useAlert, useBottomSheet } from '@/hooks/useModal';
import { getTimeAgoFromNow } from '@/util/format/formatDate';

import * as S from './Comment.styled';

export default function Comment({ comment, postId }) {
  const { user } = useAuth();
  const { mutate: reportCommentMutate } = useReportComment(postId);
  const { mutate: deleteCommentMutate } = useDeleteComment(postId);
  const { openBottomSheet } = useBottomSheet();
  const { openAlert } = useAlert();
  const linkPath = `/profile/${comment.author.accountname}`;
  const isMyComment = user._id === comment.author._id;

  const openMyCommentBottomSheet = () => {
    const deleteComment = () => {
      openAlert({
        title: '댓글을 삭제할까요?',
        actionName: '삭제',
        actionFunction: () => deleteCommentMutate(comment.id),
      });
    };

    openBottomSheet([
      { name: '삭제', action: deleteComment, closeAfterAction: true },
    ]);
  };

  const openNotMyCommentBottomSheet = () => {
    const reportComment = () => {
      openAlert({
        title: '댓글을 신고할까요?',
        actionName: '신고',
        actionFunction: () => reportCommentMutate(comment.id),
      });
    };

    openBottomSheet([
      { name: '신고하기', action: reportComment, closeAfterAction: true },
    ]);
  };

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
      <S.OptionButton
        onClick={
          isMyComment ? openMyCommentBottomSheet : openNotMyCommentBottomSheet
        }
      />
    </S.CommentWrapper>
  );
}
