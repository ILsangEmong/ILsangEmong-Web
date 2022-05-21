import { JuyeongService } from '../api/juyeong';
import { CommentInfo, GroupInfo } from '../api/types/juyeong';
import { API } from './base';

export function juyeongRemote(): JuyeongService {
  const createGroup = async (groupInfo: GroupInfo) => {
    const response = await API.post({ url: '/team', data: groupInfo });
    return response.data.inviteCode;
  };

  const createComment = async (commentInfo: CommentInfo) => {
    const response = await API.put({ url: '/comment', data: commentInfo });
    console.log(response);
    return { isSuccess: response.success };
  };

  return {
    createGroup,
    createComment,
  };
}
