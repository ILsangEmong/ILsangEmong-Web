import { GroupInfo } from './types/juyeong';

export interface JuyeongService {
  createGroup(groupInfo: GroupInfo): Promise<string>;
}
