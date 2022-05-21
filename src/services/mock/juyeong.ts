import { JuyeongService } from '../api/juyeong';

export function juyeongMock(): JuyeongService {
  const createGroup = async () => {
    await wait(2000);
    return '참여 코드';
  };

  return {
    createGroup,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
