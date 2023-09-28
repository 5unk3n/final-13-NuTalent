import React, { useState, useEffect } from 'react';
import {
  ProfileEditWrap,
  ImageWrapper,
  DefaultProfileImg,
  ProfileUploadInput,
  ProfileUploadLabel,
  ProfileUploadDiv,
  TextInputBox,
  ErrorMessage,
} from './ProfileEdit.styled';
import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import TopNav from '../../../components/common/Top/TopNav';
import uploadImage from '../../../assets/img/upload-file.svg';

import { useRecoilValue } from 'recoil';
import { recoilData } from '../../../recoil/atoms/dataState';
import {
  useGetProfile,
  useUpdateProfile,
} from '../../../hooks/react-query/useProfile';
import StyledBtn from '../../../components/common/Button/Button';
import { useUploadImage } from '../../../hooks/react-query/useImage';

export default function ProfileEdit() {
  const [profileImage, setProfileImage] = useState('');
  const [userName, setUserName] = useState('');
  const [isUserNameInvalid, setIsUserNameInvalid] = useState(false);
  const [userIdErrorMessage, setUserIdErrorMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [isUserIdInvalid, setIsUserIdInvalid] = useState(false);
  const [description, setDescription] = useState('');
  const [isDescriptionInvalid, setIsDescriptionInvalid] = useState(false);
  const idRegExp = /^[a-zA-Z0-9_.]+$/;

  const currentUserData = useRecoilValue(recoilData);
  const myAccountName = currentUserData.accountname;

  const { profile } = useGetProfile(myAccountName);
  const { updateProfileMutate } = useUpdateProfile();
  const { uploadedImage, handleImageChange } = useUploadImage();

  useEffect(() => {
    setProfileImage(profile.image);
    setUserName(profile.username);
    setUserId(profile.accountname);
    setDescription(profile.intro);
  }, [profile]);

  useEffect(() => {
    if (uploadedImage) {
      console.log('uploadedimage', uploadedImage);
      setProfileImage(uploadedImage);
    }
  }, [uploadedImage]);

  const handleUserNameBlur = () => {
    if (userName.length < 2 || userName.length > 10) {
      setIsUserNameInvalid(true);
      console.log(isUserNameInvalid);
    } else {
      setIsUserNameInvalid(false);
      console.log(isUserNameInvalid);
    }
  };

  const handleUserIdBlur = () => {
    if (!idRegExp.test(userId)) {
      setIsUserIdInvalid(true);
      setUserIdErrorMessage(
        '*계정ID는 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.',
      );
      console.log(isUserIdInvalid);
    } else {
      setIsUserIdInvalid(false);
      console.log(isUserIdInvalid);
    }
  };

  const handleDescriptionBlur = () => {
    if (!description) {
      setIsDescriptionInvalid(true);
      console.log(isDescriptionInvalid);
    } else {
      setIsDescriptionInvalid(false);
      console.log(isDescriptionInvalid);
    }
  };

  async function handleClick() {
    try {
      const user = JSON.stringify({
        user: {
          username: userName,
          accountname: userId,
          intro: description,
          image: profileImage,
        },
      });

      console.log('user', user);

      updateProfileMutate(user);
    } catch (error) {
      console.error(error);

      setIsUserIdInvalid(true);
      setUserIdErrorMessage(`*${error.response.data.message}`);
    }
  }

  return (
    <>
      <TopNav>
        <TopNav.BackButton />
        <StyledBtn
          size="ms"
          onClick={handleClick}
          disabled={
            isUserIdInvalid || isUserNameInvalid || isDescriptionInvalid
          }
        >
          저장
        </StyledBtn>
      </TopNav>
      <ProfileEditWrap>
        <TextInputBox>
          <ImageWrapper>
            <DefaultProfileImg src={profileImage} />
            <ProfileUploadLabel htmlFor="upload-button">
              <ProfileUploadDiv>
                <img src={uploadImage} />
              </ProfileUploadDiv>
            </ProfileUploadLabel>
            {!!uploadImage && (
              <ProfileUploadInput
                type="file"
                className="user-profile"
                id="upload-button"
                onChange={handleImageChange}
              />
            )}
          </ImageWrapper>
          <TextActiveInput
            type="text"
            className="user-name"
            value={userName || ''}
            onChange={(e) => setUserName(e.target.value)}
            onBlur={handleUserNameBlur}
          >
            사용자 이름
          </TextActiveInput>
          <TextActiveInput
            type="text"
            className="user-id"
            value={userId || ''}
            onChange={(e) => setUserId(e.target.value)}
            onBlur={handleUserIdBlur}
          >
            계정ID
          </TextActiveInput>
          {isUserIdInvalid && <ErrorMessage>{userIdErrorMessage}</ErrorMessage>}
          <TextActiveInput
            type="text"
            className="user-description"
            value={description || ''}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleDescriptionBlur}
          >
            소개
          </TextActiveInput>
        </TextInputBox>
      </ProfileEditWrap>
    </>
  );
}
