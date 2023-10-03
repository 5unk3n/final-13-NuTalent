import React from 'react';
import { useParams } from 'react-router-dom';

import { useCreateComment } from '../api/createComment';

import BottomInputForm from '@/components/Elements/BottomInputForm';
import useAuth from '@/hooks/useAuth';

export default function CommentUploader() {
  const { useUser } = useAuth();
  const { data: user } = useUser();
  const { id } = useParams();
  const { mutate: createComment } = useCreateComment(id);

  return (
    <BottomInputForm
      onSubmit={createComment}
      imageSrc={user.image}
      buttonText="게시"
      placeholder="댓글을 입력하세요."
    />
  );
}
