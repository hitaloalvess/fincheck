import { Module, Global } from '@nestjs/common';
import { BcryptjsService } from './HashAdapter/implementations/bcryptjs.service';

@Global()
@Module({
  providers: [
    {
      provide: 'IGeneratorHash',
      useClass: BcryptjsService,
    },
  ],
  exports: [
    {
      provide: 'IGeneratorHash',
      useClass: BcryptjsService,
    },
  ],
})
export class AdaptersModule {}
