import { SeyoungService } from '../api/seyoung';

export function seyoungMock(): SeyoungService {
  const getResult = async () => {
    await wait(2000);
    return [];
  };

  return {
    getResult,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
