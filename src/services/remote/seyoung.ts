import { SeyoungService } from '../api/seyoung';
import { API } from './base';
import { SEYOUNG_DATA } from '../mock/seyoung.data';
export function seyoungRemote(): SeyoungService {
  const getResult = async () => {
    return SEYOUNG_DATA.RESULT_LIST;
  };

  return {
    getResult,
  };
}
