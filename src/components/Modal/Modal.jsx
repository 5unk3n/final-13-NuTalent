import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import useCloseAfterTransition from '../../hooks/useCloseAfterTransition';
import Transition from '../Elements/Transition/Transition';

import * as S from './Modal.styled';

export default function Modal({
  isOpen,
  onClose = () => {},
  hasBackdrop = true,
  isBackdropClose = false,
  transitionStyle,
  position = 'center',
  children,
}) {
  const { isTransitionComplete } = useCloseAfterTransition(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleBackdropClose = isBackdropClose ? onClose : null;

  return (
    isTransitionComplete &&
    createPortal(
      <S.ModalRoot>
        <S.ModalBackdrop
          onClick={handleBackdropClose}
          $isOpen={isOpen}
          $hasBackdrop={hasBackdrop}
        />
        <S.ModalWrapper $position={position}>
          <Transition isOpen={isOpen} transitionStyle={transitionStyle}>
            {children}
          </Transition>
        </S.ModalWrapper>
      </S.ModalRoot>,
      document.body,
    )
  );
}
