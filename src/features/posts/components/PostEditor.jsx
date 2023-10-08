import React, { useState, useRef, useEffect, forwardRef } from 'react';

import TagBar from './TagBar';
import useTag from '../hooks/useTag';

import CircleImage from '@/components/CircleImage';
import { useUploadImage } from '@/features/images/api/uploadImage';
import ImageUploader from '@/features/images/components/ImageUploader';
import useAuth from '@/hooks/useAuth';
import { useToast } from '@/hooks/useModal';
import { adjustTextareaHeight } from '@/util/adjustTextareaHeight';

import * as S from './PostEditor.styled';

const PostEditor = forwardRef(function PostEditor(
  { onSubmit, initData = {} },
  submitRef,
) {
  const [content, setContent] = useState(initData.content || '');
  const [images, setImages] = useState(initData.image || []);
  const textareaRef = useRef(null);

  const { tagList, selectedTag, selectTag, addTagToContent } = useTag();
  const { handleImageChange, uploadedImage } = useUploadImage();
  const { user } = useAuth();
  const { openToast } = useToast();
  const userProfileImage = user.image;

  useEffect(() => {
    if (uploadedImage) {
      setImages((prev) => [...prev, uploadedImage]);
    }
  }, [uploadedImage]);

  useEffect(() => {
    adjustTextareaHeight(textareaRef);
  }, [content]);

  const deleteHandler = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e) => {
    if (images.length >= 3) {
      openToast({
        message: '이미지 업로드는 최대 3개까지 가능합니다',
        status: 'error',
      });
      return;
    }
    return handleImageChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      content: addTagToContent(content),
      image: images.join(','),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TagBar
        tagList={tagList}
        selectedTag={selectedTag}
        selectTag={selectTag}
      />
      <S.EditorWrapper>
        <S.ProfileImageWrapper>
          <CircleImage src={userProfileImage} alt="프로필 이미지" size={42} />
        </S.ProfileImageWrapper>
        <S.Textarea
          ref={textareaRef}
          placeholder="게시글 입력하기..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></S.Textarea>
        {images?.map((image, index) => (
          <S.imageWrapper key={`imgLayout-${index}`}>
            <S.PostImage key={index} src={image} alt={`게시글 이미지 `} />
            <S.DeleteButton
              type="button"
              key={`Deletebtn-${index}`}
              onClick={() => deleteHandler(index)}
            ></S.DeleteButton>
          </S.imageWrapper>
        ))}
        <S.ImageUploaderWrapper>
          <ImageUploader onImgaeChange={handleImageUpload} />
        </S.ImageUploaderWrapper>
      </S.EditorWrapper>
      <button ref={submitRef} />
    </form>
  );
});

export default PostEditor;
