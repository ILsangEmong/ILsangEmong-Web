import { JuyeongService } from './juyeong';
import { seyoungMock } from '../mock/seyoung';
import { songahMock } from '../mock/songah';
import { SeyoungService } from './seyoung';
import { SongahService } from './songah';
import { juyeongRemote } from '../remote/juyeong';

export const api: APIService = getAPIMethod();

function getAPIMethod(): APIService {
  return provideAPIService();
}

function provideAPIService(): APIService {
  const seyoungService = seyoungMock();
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
