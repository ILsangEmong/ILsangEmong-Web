import { JuyeongService } from '../api/juyeong';
import { GroupInfo } from '../api/types/juyeong';
import { API } from './base';

export function juyeongRemote(): JuyeongService {
  const createGroup = async (groupInfo: GroupInfo) => {
    const response = await API.post({ url: '/team', data: groupInfo });
    return response.data.inviteCode;
  };

  return {
    createGroup,
  };
}
