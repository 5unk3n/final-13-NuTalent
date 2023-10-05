import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import {
  toastState,
  alertState,
  bottomSheetState,
} from '../recoil/atoms/modalState';

export const useToast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  const openToast = ({ message, status = 'success', duration = 2000 }) => {
    setToast({
      isOpen: true,
      message: message,
      status: status,
      duration: duration,
    });
  };

  useEffect(() => {
    if (toast.isOpen) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, isOpen: false }));
      }, toast.duration);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    return () => {
      setToast((prev) => ({ ...prev, isOpen: false }));
    };
  }, []);

  return { toast, openToast };
};

export const useAlert = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  /**
   * 경고창을 열고 지정된 제목, 액션 텍스트 및 액션 함수를 표시합니다.
   *
   * @param {Object} options - 경고창에 표시할 옵션 객체입니다.
   * @param {string} options.title - 경고창의 제목입니다.
   * @param {string} options.actionName - 액션 버튼에 표시할 텍스트입니다.
   * @param {function} options.actionFunction - 액션 버튼을 클릭했을 때 실행할 함수입니다.
   *
   * @returns {void}
   *
   * @example
   * // 경고창 열기
   * const { openAlert } = useAlert();
   * openAlert({
   *   title: '경고',
   *   actionName: '확인',
   *   actionFunction: () => {
   *     console.log('확인 버튼 클릭됨');
   *   }
   * });
   */
  const openAlert = ({ title, actionName, actionFunction }) => {
    setAlert({
      isOpen: true,
      title: title,
      actionName: actionName,
      actionFunction: actionFunction,
      onClose: closeAlert,
    });
  };

  const closeAlert = () => {
    setAlert((prev) => ({ ...prev, isOpen: false }));
  };

  return { alert, openAlert, closeAlert };
};

export const useBottomSheet = () => {
  const [bottomSheet, setBottomSheet] = useRecoilState(bottomSheetState);

  const closeBottomSheet = () => {
    setBottomSheet((prev) => ({ ...prev, isOpen: false }));
  };

  /**
   * Bottomsheet를 열고 지정된 요소 목록을 표시합니다.
   * @param {Object[]} elementList - Bottomsheet에 표시할 요소 목록입니다.
   * @param {string} elementList[].name - 요소의 이름 또는 레이블입니다.
   * @param {function} elementList[].action - 요소를 클릭했을 때 실행할 함수입니다.
   * @param {string} elementList[].to - 요소를 클릭했을 때 이동할 경로 또는 URL입니다.
   * @param {boolean} elementList[].closeAfterAction - 요소를 클릭한 후 Bottom sheet를 자동으로 닫을지 여부를 나타내는 불린 값입니다.
   * @returns {void}
   *
   * @example
   * // Bottom sheet에 표시할 요소 목록
   * const elements = [
   *   { name: '항목 1', action: () => console.log('항목 1 클릭됨') },
   *   { name: '항목 2', action: () => console.log('항목 2 클릭됨'), closeAfterAction: true },
   *   { name: '항목 3', to: '/path/to/page' }
   * ];
   *
   * // Bottom sheet 열기
   * const { openBottomSheet } = useBottomSheet();
   * openBottomSheet(elements);
   */
  const openBottomSheet = (elementList) => {
    setBottomSheet({
      isOpen: true,
      elementList: elementList,
      onClose: closeBottomSheet,
    });
  };

  return { bottomSheet, openBottomSheet, closeBottomSheet };
};
