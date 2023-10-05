import React from 'react';

import { useDeleteProduct } from '../api/deleteProduct';

import useAuth from '@/hooks/useAuth';
import { useAlert, useBottomSheet } from '@/hooks/useModal';

import * as S from './Product.styled';

export default function Product({ product }) {
  const { useUser } = useAuth();
  const { data: user } = useUser();
  const { mutate: deleteProductMutate } = useDeleteProduct();
  const { openBottomSheet } = useBottomSheet();
  const { openAlert } = useAlert();
  const isMyProduct = user._id === product.author._id;

  const openMyProductBottomSheet = () => {
    const deleteProduct = () => {
      openAlert({
        title: '상품을 삭제할까요?',
        actionName: '삭제',
        actionFunction: () => deleteProductMutate(product.id),
      });
    };

    openBottomSheet([
      { name: '삭제', action: deleteProduct, closeAfterAction: true },
      {
        name: '수정',
        to: `/product/edit/${product.id}`,
        closeAfterAction: true,
      },
      {
        name: '웹사이트에서 상품 보기',
        to: product.link,
        closeAfterAction: true,
      },
    ]);
  };

  const openNotMyProductBottomSheet = () => {
    openBottomSheet([
      {
        name: '웹사이트에서 상품 보기',
        to: product.link,
        closeAfterAction: true,
      },
    ]);
  };

  return (
    <S.Product
      onClick={
        isMyProduct ? openMyProductBottomSheet : openNotMyProductBottomSheet
      }
    >
      <S.Image src={product.itemImage} alt="상품 사진" />
      <S.Name>{product.itemName}</S.Name>
      <S.Price>{product.price.toLocaleString()}원</S.Price>
    </S.Product>
  );
}
