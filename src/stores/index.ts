import { atom } from 'recoil';

const codeState = atom<string>({
  key: 'code',
  default: '',
});

export default codeState;
