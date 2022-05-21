import { JuyeongService } from '../api/juyeong';
import { JUYEONG_DATA } from './juyeong.data';

export function juyeongMock(): JuyeongService {
  const getResult = async () => {
    await wait(2000);
    return JUYEONG_DATA.ISSUE_INFO;
  };

  return {
    getResult,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
