import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import TopUploadNav from '../../../components/common/Top/TopUploadNav';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useUpdatePost, useGetPost } from '../../../hooks/react-query/usePost';
import { useUploadImage } from '../../../hooks/react-query/useImage';

import * as S from './PostEdit.styled';
import defaultProfileImg from '../../../assets/img/basic-profile-img-.svg';

export default function PostEdit() {
  const { id } = useParams();
  const textareaRef = useRef(null);
  const currentUserData = useRecoilValue(recoilData);

  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const { post } = useGetPost(id);
  const { updatePostMutate } = useUpdatePost(id);
  const { uploadedImage, handleImageChange } = useUploadImage();

  useEffect(() => {
    setContent(post?.content);
    setImages(post?.image);
  }, [post]);

  useEffect(() => {
    if (uploadedImage) {
      setImages((prev) => [...prev, uploadedImage]);
    }
  }, [uploadedImage]);

  useEffect(() => {
    textareaHeightControl();
  }, [content]);

  // 텍스트에 따라 textarea의 높이 동적으로 조절
  const textareaHeightControl = () => {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${
      textareaRef.current.scrollHeight / 10
    }rem`;
  };

  const deleteHandler = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
    textareaHeightControl();
  };

  const onImageUpload = (e) => {
    if (images.length >= 3) return;
    return handleImageChange(e);
  };

  return (
    <>
      <TopUploadNav
        size="ms"
        disabled={!(content || images)}
        onClick={() => {
          updatePostMutate({ content, image: images.join(',') });
        }}
      >
        업로드
      </TopUploadNav>
      <S.Section>
        <S.ProfileImg
          src={currentUserData.image || defaultProfileImg}
          alt="프로필 이미지"
        />
        <S.Textarea
          ref={textareaRef}
          placeholder="게시글 입력하기..."
          onChange={contentHandler}
          value={content}
        ></S.Textarea>
        {images?.length > 0 &&
          images.map((image, index) => (
            <S.imgLayout key={`imgLayout-${index}`}>
              <S.PostImage key={index} src={image} alt={`게시글 이미지 `} />
              <S.Deletebtn
                type="button"
                key={`Deletebtn-${index}`}
                onClick={() => deleteHandler(index)}
              ></S.Deletebtn>
            </S.imgLayout>
          ))}
        <div>
          <S.FileLabel htmlFor="uploadImg"></S.FileLabel>
          <S.FileInput
            type="file"
            id="uploadImg"
            onChange={onImageUpload}
            multiple
          />
        </div>
      </S.Section>
    </>
  );
}
