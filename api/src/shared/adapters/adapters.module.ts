import { Module, Global } from '@nestjs/common';
import { BcryptjsService } from './HashAdapter/implementations/bcryptjs.service';

@Global()
@Module({
  providers: [BcryptjsService],
  exports: [BcryptjsService],
})
export class AdaptersModule {}
