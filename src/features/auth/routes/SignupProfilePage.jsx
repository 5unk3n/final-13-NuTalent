import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ProfileInfoForm from '../components/ProfileInfoForm';

import useAuth from '@/hooks/useAuth';

export default function SignupProfilePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { signup } = useAuth();
  const [emailAndPassword, setEmailAndPassword] = useState(null);

  useEffect(() => {
    if (state) {
      setEmailAndPassword(state);
    } else {
      navigate('/signup');
    }
  }, [state]);

  return (
    <ProfileInfoForm
      onSubmit={signup}
      buttonText="내 작품을 세상에 소개하러 가기"
      initData={emailAndPassword}
    />
  );
}
