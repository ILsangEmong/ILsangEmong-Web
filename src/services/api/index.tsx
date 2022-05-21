import { JuyeongService } from './juyeong';
import { songahMock } from '../mock/songah';
import { SeyoungService } from './seyoung';
import { SongahService } from './songah';
import { juyeongRemote } from '../remote/juyeong';
import { seyoungRemote } from '../remote/seyoung';
// import { seyoungMock } from '../mock/seyoung';

export const api: APIService = getAPIMethod();

function getAPIMethod(): APIService {
  return provideAPIService();
}

function provideAPIService(): APIService {
  const seyoungService = seyoungRemote();
  const songahService = songahMock();
  const juyeongService = juyeongRemote();

  return {
    seyoungService,
    songahService,
    juyeongService,
  };
}

export interface APIService {
  seyoungService: SeyoungService;
  songahService: SongahService;
  juyeongService: JuyeongService;
}
