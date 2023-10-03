import React, { useState } from 'react';

import { useCheckDuplicateAccountname } from '../api/checkDuplicateAccountname';

import CircleImage from '@/components/CircleImage';
import Button from '@/components/common/Button/Button';
import TextInput from '@/components/TextInput';
import { useUploadImage } from '@/features/images/api/uploadImage';
import ImageUploader from '@/features/images/components/ImageUploader';
import {
  validateAccountname,
  validateUsername,
} from '@/util/validation/validateForm';

import * as S from './ProfileInfoForm.styled';

const DEFAULT_PROFILE_IMG_URL =
  'https://api.mandarin.weniv.co.kr/1687295086842.png';

export default function ProfileInfoForm({ onSubmit, buttonText, initData }) {
  const { uploadedImage, handleImageChange } = useUploadImage();
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [accountnameError, setAccountnameError] = useState('');
  const { mutateAsync: checkAccountnameMutate } =
    useCheckDuplicateAccountname();
  const isButtonDisabled =
    !username || !accountname || !intro || usernameError || accountnameError;

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: initData?.email,
      password: initData?.password,
      image: uploadedImage || DEFAULT_PROFILE_IMG_URL,
      username,
      accountname,
      intro,
    };
    onSubmit(userData);
  };

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    if (validateUsername(newUsername)) {
      setUsernameError('');
    } else {
      setUsernameError('2~10자 이내여야 합니다.');
    }
  };

  const handleAccountnameBlur = async () => {
    const { message } = await checkAccountnameMutate(accountname);
    if (message === '사용 가능한 계정ID 입니다.') {
      setAccountnameError('');
    } else {
      setAccountnameError(message);
    }
  };

  const handleAccountnameChange = (e) => {
    const newAccountname = e.target.value;
    setAccountname(newAccountname);
    if (validateAccountname(newAccountname)) {
      setAccountnameError('');
    } else {
      setAccountnameError('영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
    }
  };

  const handleIntroChange = (e) => {
    const newIntro = e.target.value;
    setIntro(newIntro);
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.InputWrapper>
        <S.ProfileImageWrapper>
          <CircleImage
            src={uploadedImage || DEFAULT_PROFILE_IMG_URL}
            size="110"
          />
          <S.UploaderWrapper>
            <ImageUploader onImgaeChange={handleImageChange} size="36" />
          </S.UploaderWrapper>
        </S.ProfileImageWrapper>
        <TextInput label="사용자 이름">
          <TextInput.TextField
            placeholder="2~10자 이내여야 합니다."
            value={username}
            onChange={handleUsernameChange}
            error={usernameError}
          />
        </TextInput>
        <TextInput label="계정 ID">
          <TextInput.TextField
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            value={accountname}
            onChange={handleAccountnameChange}
            onBlur={handleAccountnameBlur}
            error={accountnameError}
          />
        </TextInput>
        <TextInput label="소개">
          <TextInput.TextField
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            value={intro}
            onChange={handleIntroChange}
          />
        </TextInput>
      </S.InputWrapper>
      <Button disabled={isButtonDisabled}>{buttonText}</Button>
    </form>
  );
}
