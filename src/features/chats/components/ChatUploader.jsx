import React from 'react';

import imgUploadIcon from '@/assets/img/img-button.svg';
import BottomInputForm from '@/components/Elements/BottomInputForm';

export default function ChatUploader() {
  const handleSubmit = (e) => {
    // 채팅 메시지 전송 로직
  };

  return (
    <BottomInputForm
      onSubmit={handleSubmit}
      imageSrc={imgUploadIcon}
      buttonText="전송"
      placeholder="메시지 입력하기..."
    />
  );
}
