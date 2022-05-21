import { JuyeongService } from './juyeong';
import { juyeongMock } from '../mock/juyeong';
import { seyoungMock } from '../mock/seyoung';
import { songahMock } from '../mock/songah';
import { SeyoungService } from './seyoung';
import { SongahService } from './songah';

export const api: APIService = getAPIMethod();

function getAPIMethod(): APIService {
  return provideAPIService();
}

function provideAPIService(): APIService {
  const seyoungService = seyoungMock();
  const songahService = songahMock();
  const juyeongService = juyeongMock();

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
