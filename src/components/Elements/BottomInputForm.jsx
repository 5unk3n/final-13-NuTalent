import React, { useState } from 'react';

import CircleImage from '../CircleImage';

import * as S from './BottomInputForm.styled';

export default function BottomInputForm({
  onSubmit,
  imageSrc,
  placeholder,
  buttonText,
}) {
  const [textInput, setTextInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(textInput);
    setTextInput('');
  };

  return (
    <S.BottomInputForm onSubmit={handleSubmit}>
      <CircleImage src={imageSrc} />
      <input
        type="text"
        placeholder={placeholder}
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
      <button type="submit" disabled={!textInput}>
        {buttonText}
      </button>
    </S.BottomInputForm>
  );
}
