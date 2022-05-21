import { SeyoungService } from '../api/seyoung';
import { API } from './base';

export function seyoungRemote(): SeyoungService {
  const getResult = async (issueID: string) => {
    const response = await API.get({ url: `/team/feedback/${issueID}/pin` });
    if (response.status === 200) return { isSuccess: true, isBookmarked: response.data?.isPinned };
  };

  return {
    getResult,
  };
}
