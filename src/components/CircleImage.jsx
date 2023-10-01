import React, { useState } from 'react';

import * as S from './CircleImage.styled';

export const DEFAULT_PROFILE_IMG_URL =
  'https://api.mandarin.weniv.co.kr/1687295086842.png';

export default function CircleImage({ src, size = 'sm', ...props }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <S.CircleImage
      src={imageError ? DEFAULT_PROFILE_IMG_URL : src}
      $size={size}
      {...props}
      onError={handleImageError}
    />
  );
}
