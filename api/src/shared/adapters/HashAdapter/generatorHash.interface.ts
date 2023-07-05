export interface IGeneratorHash {
  createPasswordHash(password: string, salt: number): Promise<string>;
}
