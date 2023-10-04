import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Product.styled';

// TODO: 모달 추가
export default function Product({ product }) {
  return (
    <S.Product>
      <S.Image src={product.itemImage} alt="상품 사진" />
      <S.Name>{product.itemName}</S.Name>
      <S.Price>{product.price.toLocaleString()}원</S.Price>
    </S.Product>
  );
}
