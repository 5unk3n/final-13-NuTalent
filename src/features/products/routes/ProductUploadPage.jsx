import React, { useRef } from 'react';

import { useCreateProduct } from '../api/createProduct';
import ProductEditor from '../components/ProductEditor';

import Button from '@/components/common/Button/Button';
import HeaderBar from '@/components/Elements/HeaderBar';

// TODO: 입력 없이 제출할 때 피드백 추가하기
export default function ProductUploadPage() {
  const submitRef = useRef(null);
  const { mutate: createProductMutate } = useCreateProduct();

  const handleSubmit = () => {
    submitRef.current?.click();
  };

  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <Button size="ms" onClick={handleSubmit}>
          저장
        </Button>
      </HeaderBar>
      <ProductEditor ref={submitRef} onSubmit={createProductMutate} />
    </>
  );
}
