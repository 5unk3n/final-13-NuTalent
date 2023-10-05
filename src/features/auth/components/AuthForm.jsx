import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCheckDuplicateEmail } from '../api/checkDuplicateEmail';

import Button from '@/components/common/Button/Button';
import TextInput from '@/components/TextInput';
import useAuth from '@/hooks/useAuth';
import {
  validateEmail,
  validatePassword,
} from '@/util/validation/validateForm';

import * as S from './AuthForm.styled';

export default function SignupForm({ formType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const submitButtonDisabled =
    formType === 'signin'
      ? !email || !password
      : emailError || passwordError || !email || !password;

  const navigate = useNavigate();
  const { mutateAsync: checkEmailMutate } = useCheckDuplicateEmail();
  const { useSignin } = useAuth();
  const { mutate: signinMutate, error: signinError } = useSignin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === 'signin') {
      signinMutate({ email, password });
    } else if (formType === 'signup') {
      navigate('/signup/profile', { state: { email, password } });
    }
  };

  const handleEmailBlur = async () => {
    if (formType === 'signin') return;

    if (validateEmail(email)) {
      const { message } = await checkEmailMutate(email);
      if (message === '사용 가능한 이메일 입니다.') {
        setEmailError('');
      } else {
        setEmailError(message);
      }
    } else {
      setEmailError('이메일 형식이 올바르지 않습니다.');
    }
  };

  const handlePasswordBlur = () => {
    if (formType === 'signin') return;

    if (validatePassword(password)) {
      setPasswordError('');
    } else {
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
    }
  };

  useEffect(() => {
    setPasswordError(signinError?.message);
  }, [signinError]);

  return (
    <form onSubmit={handleSubmit} noValidate>
      <S.InputWrapper>
        <TextInput label="이메일">
          <TextInput.TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            placeholder="이메일을 입력해주세요."
            error={emailError}
          />
        </TextInput>
        <TextInput label="비밀번호">
          <TextInput.TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
            placeholder="비밀번호를 입력해주세요."
            error={passwordError}
          />
        </TextInput>
      </S.InputWrapper>
      <Button disabled={submitButtonDisabled}>
        {formType === 'signin' ? '로그인' : '다음'}
      </Button>
    </form>
  );
}
