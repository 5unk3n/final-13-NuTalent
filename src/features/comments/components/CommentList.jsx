import React from 'react';
import { useParams } from 'react-router-dom';

import Comment from './Comment';
import { useGetCommentList } from '../api/getCommentList';

export default function CommentList() {
  const { id: postId } = useParams();

  const { data: commentList, isLoading } = useGetCommentList(postId);
  console.log(commentList);

  if (isLoading) return;

  return (
    <ul>
      {commentList.map((comment) => {
        return (
          <li key={comment.id}>
            <Comment comment={comment} postId={postId} />
          </li>
        );
      })}
    </ul>
  );
}
