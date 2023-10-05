import React from 'react';

import Modal from './Modal';

import { useAlert } from '@/hooks/useModal';

import * as S from './Alert.styled';

export default function Alert({
  isOpen,
  title,
  actionName,
  actionFunction,
  onClose,
}) {
  const { closeAlert } = useAlert();

  const handleAction = () => {
    actionFunction();
    closeAlert();
  };

  return (
    <Modal isOpen={isOpen} hasBackdrop onClose={onClose}>
      <S.AlertWrapper>
        <S.Alert>
          <S.AlertTitle>{title}</S.AlertTitle>
          <S.AlertContent>
            <button type="button" onClick={onClose}>
              취소
            </button>
            <button type="button" onClick={handleAction}>
              {actionName}
            </button>
          </S.AlertContent>
        </S.Alert>
      </S.AlertWrapper>
    </Modal>
  );
}
