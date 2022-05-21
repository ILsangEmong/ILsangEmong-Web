import { atom } from 'recoil';

const codeState = atom({
  key: 'code',
  default: '',
});

export default codeState;
