import { CommentInfo, GroupInfo } from './types/juyeong';

export interface JuyeongService {
  createGroup(groupInfo: GroupInfo): Promise<string>;
  createComment(commentInfo: CommentInfo): Promise<{ isSuccess: boolean }>;
}
