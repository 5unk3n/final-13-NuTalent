import React from 'react';
import { useParams } from 'react-router-dom';

import Product from './Product';
import ProductListSkeleton from './ProductListSkeleton';
import { useGetProductList } from '../api/getProductList';

import * as S from './ProductList.styled';

export default function ProductList() {
  const { accountname } = useParams();

  const { data: productList, isLoading } = useGetProductList(accountname);

  if (isLoading) return <ProductListSkeleton />;

  return (
    <S.ProductListWrapper>
      <S.ProductHeading>판매 중인 상품</S.ProductHeading>
      <S.ProductList>
        {productList.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </S.ProductList>
    </S.ProductListWrapper>
  );
}
