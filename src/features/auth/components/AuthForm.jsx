import React, { useState } from 'react';

import { useCheckDuplicateEmail } from '../api/checkDuplicateEmail';

import Button from '@/components/Elements/Button/Button';
import TextInput from '@/components/Elements/TextInput/TextInput';
import {
  validateEmail,
  validatePassword,
} from '@/util/validation/validateForm';

import * as S from './AuthForm.styled';

export default function AuthForm({
  onSubmit,
  buttonText,
  isCheckValid = false,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const submitButtonDisabled =
    emailError || passwordError || !email || !password;

  const { mutateAsync: checkEmailMutate } = useCheckDuplicateEmail();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  const handleEmailBlur = async () => {
    if (!isCheckValid) return;

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
    if (!isCheckValid) return;

    if (validatePassword(password)) {
      setPasswordError('');
    } else {
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
    }
  };

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
      <Button disabled={submitButtonDisabled}>{buttonText}</Button>
    </form>
  );
}
