export interface SeyoungService {
  getResult(code: string): Promise<string[]>;
}
