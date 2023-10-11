import React, { useState, forwardRef, useEffect } from 'react';

import TextInput from '@/components/Elements/TextInput/TextInput';
import { useUploadImage } from '@/features/images/api/uploadImage';
import ImageUploader from '@/features/images/components/ImageUploader';
import { formatPrice } from '@/util/format/formatPrice';

import * as S from './ProductEditor.styled';

const ProductEditor = forwardRef(function ProductEditor(
  { onSubmit, initData = {} },
  submitRef,
) {
  const [productName, setProductName] = useState(initData.itemName ?? '');
  const [price, setPrice] = useState(
    initData.price ? formatPrice(initData.price) : '',
  );
  const [link, setLink] = useState(initData.link ?? '');
  const [image, setImage] = useState(initData.itemImage ?? '');
  const { uploadedImage, handleImageChange } = useUploadImage();

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      itemName: productName,
      price: Number(price.replaceAll(',', '')),
      link: link,
      itemImage: image,
    };

    onSubmit(productData);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(formatPrice(newPrice));
  };

  useEffect(() => {
    if (uploadedImage) {
      setImage(uploadedImage);
    }
  }, [uploadedImage]);

  return (
    <form onSubmit={handleSubmit}>
      <S.EditorWrapper>
        <S.ImageWrapper>
          <span>이미지 등록</span>
          <S.PreviewImageWrapper>
            {image && <img src={image} alt="상품 이미지" />}
          </S.PreviewImageWrapper>
          <S.ImageUploaderWrapper>
            <ImageUploader onImgaeChange={handleImageChange} size="36" />
          </S.ImageUploaderWrapper>
        </S.ImageWrapper>
        <TextInput label="상품명">
          <TextInput.TextField
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="2~15자 이내여야 합니다."
            minLength={2}
            maxLength={15}
          />
        </TextInput>
        <TextInput label="가격">
          <TextInput.TextField
            value={price}
            onChange={handlePriceChange}
            placeholder="숫자만 입력 가능합니다."
          />
        </TextInput>
        <TextInput label="판매 링크">
          <TextInput.TextField
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="URL을 입력해 주세요."
          />
        </TextInput>
      </S.EditorWrapper>
      <button ref={submitRef} />
    </form>
  );
});

export default ProductEditor;
