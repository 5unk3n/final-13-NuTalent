import React from 'react';

import handleImageError from '@/util/handleImageError';

import * as S from './CircleImage.styled';

/**
 * 이미지를 원형으로 보여주기 위한 재사용 가능한 컴포넌트입니다.
 * @example
 * // CircleImage 컴포넌트의 예제
 * <CircleImage src="/path/to/image.jpg" size="md" alt="이미지 설명" />
 *
 * @param {Object} props - `img` 엘리먼트로 전달될 추가 프로퍼티입니다.
 * @param {string} props.src - 표시할 이미지의 URL입니다.
 * @param {number} [props.size=36] - 이미지의 크기를 지정합니다. 기본값은 36(px)입니다.
 * @returns {JSX.Element} 지정된 소스와 크기를 갖는 원형 이미지 엘리먼트입니다.
 */
export default function CircleImage({ src, size = '36', ...props }) {
  return (
    <S.CircleImage
      src={src}
      $size={size}
      {...props}
      onError={handleImageError}
    />
  );
}
