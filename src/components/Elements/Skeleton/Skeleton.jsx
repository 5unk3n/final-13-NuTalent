import React from 'react';

import * as S from './Skeleton.styled';

export default function Skeleton({
  type = 'rect',
  w = '100%',
  h = '2rem',
  mt = '0',
  mr = '0',
  mb = '0',
  ml = '0',
}) {
  return (
    <S.Skeleton
      $type={type}
      $w={w}
      $h={h}
      $mt={mt}
      $mr={mr}
      $mb={mb}
      $ml={ml}
    />
  );
}
