import { JuyeongService } from '../api/juyeong';

export function juyeongRemote(): JuyeongService {
  const createGroup = async () => {
    return '참여 코드';
  };

  return {
    createGroup,
  };
}
