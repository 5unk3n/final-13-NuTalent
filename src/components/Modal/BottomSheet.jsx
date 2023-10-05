import React from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from './Modal';

import { useBottomSheet } from '@/hooks/useModal';

import * as S from './BottomSheet.styled';

const BottomSheet = ({ isOpen, onClose, elementList }) => {
  const navigate = useNavigate();
  const { closeBottomSheet } = useBottomSheet();

  const handleClick = (element) => {
    if (element.action) element.action();
    if (element.to) {
      if (element.to.startsWith('/')) {
        navigate(element.to);
      } else {
        window.open(element.to, '_blank');
      }
    }
    if (element.closeAfterAction) closeBottomSheet();
  };

  return (
    <Modal
      isOpen={isOpen}
      hasBackdrop
      isBackdropClose={true}
      onClose={onClose}
      transitionStyle="slide"
      position="bottom"
    >
      <S.BottomSheetWrapper>
        {elementList.map((element, index) => {
          return (
            <S.Button key={index} onClick={() => handleClick(element)}>
              {element.name}
            </S.Button>
          );
        })}
      </S.BottomSheetWrapper>
    </Modal>
  );
};

export default BottomSheet;
