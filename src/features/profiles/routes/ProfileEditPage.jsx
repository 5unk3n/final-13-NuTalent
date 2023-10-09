import React, { useRef } from 'react';

import { useUpdateProfile } from '../api/updateProfile';

import Button from '@/components/Elements/Button/Button';
import HeaderBar from '@/components/Layout/MainLayout/HeaderBar';
import ProfileInfoForm from '@/features/auth/components/ProfileInfoForm';
import useAuth from '@/hooks/useAuth';

import * as S from './ProfileEditPage.styled';

export default function ProfileEditPage() {
  const submitRef = useRef(null);
  const { user } = useAuth();
  const { mutate: updateProfile } = useUpdateProfile();

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
      <S.Section>
        <ProfileInfoForm
          onSubmit={updateProfile}
          initData={user}
          ref={submitRef}
        />
      </S.Section>
    </>
  );
}
