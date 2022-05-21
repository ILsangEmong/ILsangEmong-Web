import { SongahService } from '../api/songah';

export function songahMock(): SongahService {
  const getResult = async () => {
    await wait(2000);
    return [];
  };

  return {
    getResult,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
