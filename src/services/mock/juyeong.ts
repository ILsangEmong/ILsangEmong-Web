import { JuyeongService } from '../api/juyeong';

export function juyeongMock(): JuyeongService {
  const createGroup = async () => {
    await wait(2000);
    return '참여 코드';
  };

  const createComment = async () => {
    await wait(2000);
    return { isSuccess: true };
  };

  return {
    createGroup,
    createComment,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
