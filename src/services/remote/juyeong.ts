import { GroupInfo } from '../api/types/juyeong';
import { API } from './base';

export function juyeongRemote(): any {
  const createGroup = async (groupInfo: GroupInfo) => {
    const code = await API.post({ url: '/team', data: groupInfo });
    // const code = await axios.post('/team', groupInfo);
    return code;
  };

  return {
    createGroup,
  };
}
