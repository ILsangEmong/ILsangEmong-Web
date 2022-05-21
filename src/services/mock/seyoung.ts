import { SeyoungService } from '../api/seyoung';
import { SEYOUNG_DATA } from './seyoung.data';

export function seyoungMock(): SeyoungService {
  const getResult = async () => {
    await wait(2000);
    return SEYOUNG_DATA.RESULT_LIST;
  };

  return {
    getResult,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
