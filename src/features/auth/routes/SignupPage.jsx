import React, { useState } from 'react';

import AuthForm from '../components/AuthForm';
import ProfileInfoForm from '../components/ProfileInfoForm';

import useAuth from '@/hooks/useAuth';

export default function SignupPage() {
  const [signupData, setSignupData] = useState();
  const [step, setStep] = useState('로그인정보');

  const { signup } = useAuth();

  const goToProfileInfo = (signinData) => {
    setSignupData(signinData);
    setStep('프로필정보');
  };

  const handleSignup = (profileData) => {
    signup({ ...signupData, ...profileData });
  };

  return (
    <>
      {step === '로그인정보' && (
        <AuthForm
          onSubmit={goToProfileInfo}
          buttonText="다음"
          isCheckValid="ture"
        />
      )}
      {step === '프로필정보' && (
        <ProfileInfoForm
          onSubmit={handleSignup}
          buttonText="내 작품을 세상에 소개하러 가기"
        />
      )}
    </>
  );
}
