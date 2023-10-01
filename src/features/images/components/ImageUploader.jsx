import React from 'react';

import uploadIcon from '@/assets/img/upload-file.svg';
import CircleImage from '@/components/CircleImage';

import * as S from './ImageUploader.styled';

export default function ImageUploader({ onImgaeChange, size = 'md' }) {
  return (
    <S.Label>
      <CircleImage src={uploadIcon} size={size} />
      <S.Input type="file" onChange={onImgaeChange} />
    </S.Label>
  );
}
