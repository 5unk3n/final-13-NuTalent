import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProduct } from '../api/getProduct';
import { useUpdateProduct } from '../api/updateProduct';
import ProductEditor from '../components/ProductEditor';

import Button from '@/components/common/Button/Button';
import HeaderBar from '@/components/Elements/HeaderBar';

// TODO: 입력 없이 제출할 때 피드백 추가하기
export default function ProductUploadPage() {
  const submitRef = useRef(null);
  const { id } = useParams();
  const { data: product, isLoading } = useGetProduct(id);
  const { mutate: updateProductMutate } = useUpdateProduct();

  const handleSubmit = () => {
    submitRef.current?.click();
  };

  if (isLoading) return;

  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <Button size="ms" onClick={handleSubmit}>
          저장
        </Button>
      </HeaderBar>
      <ProductEditor
        ref={submitRef}
        onSubmit={updateProductMutate}
        initData={product}
      />
    </>
  );
}
