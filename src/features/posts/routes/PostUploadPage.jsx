import React, { useRef } from 'react';

import { useCreatePost } from '../api/createPost';
import PostEditor from '../components/PostEditor';

import Button from '@/components/Elements/Button/Button';
import HeaderBar from '@/components/Layout/MainLayout/HeaderBar';

// TODO: 입력 없이 제출할 때 피드백 추가하기
export default function PostUploadPage() {
  const submitRef = useRef(null);
  const { mutate: createPostMutate } = useCreatePost();

  const handleSubmit = () => {
    submitRef.current?.click();
  };

  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <Button size="ms" onClick={handleSubmit}>
          업로드
        </Button>
      </HeaderBar>
      <PostEditor ref={submitRef} onSubmit={createPostMutate} />
    </>
  );
}
