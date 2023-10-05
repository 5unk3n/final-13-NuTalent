import { atom } from 'recoil';

export const toastState = atom({
  key: 'toastState',
  default: {
    isOpen: false,
    status: null,
    message: null,
    duration: 3000,
  },
});

export const alertState = atom({
  key: 'alertState',
  default: {
    isOpen: false,
    title: null,
    actionName: null,
    actionFunction: null,
  },
});

export const bottomSheetState = atom({
  key: 'bottomSheetState',
  default: {
    isOpen: false,
    onClose: null,
    elementList: [
      {
        name: null,
        action: null,
        to: null,
        closeAfterAction: false,
      },
    ],
  },
});
