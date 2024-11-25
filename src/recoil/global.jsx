import { atom } from 'recoil';

export const alertAtom = atom({
  key: 'alertAtom',
  default: {},
});

export const searchAtom = atom({
  key: 'searchAtom',
  default: false,
});
