import React from 'react';
import { createPortal } from 'react-dom';

import useCloseAfterTransition from '../../hooks/useCloseAfterTransition';
import Transition from '../common/Transition/Transition';

import * as S from './Toast.styled';

const Toast = ({ isOpen, status = 'success', message }) => {
  const { isTransitionComplete } = useCloseAfterTransition(isOpen);

  return (
    isTransitionComplete &&
    createPortal(
      <S.ToastRoot>
        <Transition isOpen={isOpen} transitionStyle="slide">
          <S.ToastWrapper $status={status} $isOpen={isOpen}>
            <span>{message}</span>
          </S.ToastWrapper>
        </Transition>
      </S.ToastRoot>,
      document.body,
    )
  );
};

export default Toast;
