import React from 'react';

import handleImageError from '@/util/handleImageError';

import * as S from './CircleImage.styled';

export default function CircleImage({ src, size = 'sm', ...props }) {
  return (
    <S.CircleImage
      src={src}
      $size={size}
      {...props}
      onError={handleImageError}
    />
  );
}
