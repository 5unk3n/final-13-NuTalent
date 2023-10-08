import React from 'react';

import Skeleton from '@/components/Skeleton/Skeleton';

import * as S from './ProductList.styled';

export default function ProductListSkeleton() {
  return (
    <S.ProductListWrapper>
      <S.ProductList>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <Skeleton w="14rem" h="9rem" mb="1rem" />
            <Skeleton w="14rem" h="1.4rem" mb="1rem" />
            <Skeleton w="14rem" h="1.2rem" />
          </li>
        ))}
      </S.ProductList>
    </S.ProductListWrapper>
  );
}
