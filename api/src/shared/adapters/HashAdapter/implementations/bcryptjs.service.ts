import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { IGeneratorHash } from '../generator-hash.interface';

@Injectable()
export class BcryptjsService implements IGeneratorHash {
  async createPasswordHash(password: string, salt: number): Promise<string> {
    return await hash(password, salt);
  }
}
