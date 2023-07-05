import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/shared/infra/database/database.module';
import { AdaptersModule } from 'src/shared/adapters/adapters.module';
import { BcryptjsService } from 'src/shared/adapters/HashAdapter/implementations/bcryptjs.service';

@Module({
  imports: [DatabaseModule, AdaptersModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'IGeneratorHash',
      useClass: BcryptjsService,
    },
  ],
})
export class UsersModule {}
