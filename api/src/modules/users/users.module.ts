import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/shared/database/database.module';
import { AdaptersModule } from 'src/shared/adapters/adapters.module';

@Module({
  imports: [DatabaseModule, AdaptersModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
