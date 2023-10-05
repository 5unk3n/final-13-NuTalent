import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useGetPost } from '../api/getPost';
import { useUpdatePost } from '../api/updatePost';
import PostEditor from '../components/PostEditor';

import Button from '@/components/common/Button/Button';
import HeaderBar from '@/components/Elements/HeaderBar';
import useTag from '@/hooks/useTag';

// TODO: 입력 없이 제출할 때 피드백 추가하기
export default function PostUploadPage() {
  const { id } = useParams();
  const submitRef = useRef(null);
  const { data: post, isLoading } = useGetPost(id);
  const { mutate: updatePostMutate } = useUpdatePost(id);
  const { contentWithoutTag } = useTag();

  const handleSubmit = () => {
    submitRef.current?.click();
  };

  if (isLoading) return;

  const initData = {
    content: contentWithoutTag(post.content),
    image: post.image && post.image.split(','),
  };

  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <Button size="ms" onClick={handleSubmit}>
          업로드
        </Button>
      </HeaderBar>
      <PostEditor
        ref={submitRef}
        initData={initData}
        onSubmit={updatePostMutate}
      />
    </>
  );
}
